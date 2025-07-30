import {
  Image,
  SpriteFrames,
  ImageTexture,
  AtlasTexture,
  AnimatedSprite2D,
  Sprite2D,
  Vector2,
  PackedScene,
  ResourceLoader,
  Node,
  DirAccess,
  PackedStringArray,
  FileAccess,
  Rect2i,
  Vector2i,
  Node2D,
  Color,
} from 'godot';

import {
  customAnimations,
  customAnimationSize,
  DEFAULT_REPLACE_PATH,
  getCachedAnimationName,
  animationFrameCounts,
  universalFrameSize,
  universalSheetHeight,
  universalSheetWidth,
} from './Constants';
import { BODY_TYPE, Direction, PartProps } from '../types/types';
import { getSpriteRect } from './LPCSpriteSheet';
import GlobalSettings from './GlobalSettings';

export function covertToJSArray(arr: PackedStringArray): any[] {
  const jsArray: any[] = [];
  for (let i = 0; i < arr.size(); ++i) {
    jsArray.push(arr.get(i));
  }
  return jsArray;
}
export const es6DynamicTemplate = (
  templateString: string,
  templateVariables: any
) => templateString.replace(/\${(.*?)}/g, (_, g) => templateVariables[g]);

export function makeDynamicSubstitutions(
  fileName: string,
  parsedReplacements: any,
  selectedParts: any = DEFAULT_REPLACE_PATH
) {
  if (fileName?.includes('${')) {
    if (parsedReplacements) {
      const keys = Object.keys(parsedReplacements);
      const entries = keys.map((key) => {
        const { partName } = selectedParts[key] || {};
        return [key, parsedReplacements?.[key]?.[partName]];
      });
      const replObj = Object.fromEntries(entries);
      fileName = es6DynamicTemplate(fileName, replObj);
    }
  }
  return fileName;
}

export function _loadScene(path: string): Node {
  const scene = <PackedScene>(
    ResourceLoader.load(path, '', ResourceLoader.CacheMode.CACHE_MODE_REUSE)
  );
  if (scene) {
    const node = <Node>(
      scene.instantiate(PackedScene.GenEditState.GEN_EDIT_STATE_DISABLED)
    );
    return node;
  }
  throw new Error(`Failed to load scene at path: ${path}`);
}

const priorityOrder = [
  'idle',
  'walk',
  'run',
  'slash',
  'shoot',
  'spellcast',
  'thrust',
  'hurt',
  'watering',
  'jump',
  'sit',
  'emote',
  'climb',
  'combat',
  '1h_slash',
  '1h_backslash',
  '1h_halfslash',
];

export const sortByOrder =
  (order: string[]) =>
  (a: string, b: string): number => {
    const aPriority = order.indexOf(a);
    const bPriority = order.indexOf(b);
    // If not found in order, put at the end
    return (
      (aPriority === -1 ? Number.MAX_VALUE : aPriority) -
      (bPriority === -1 ? Number.MAX_VALUE : bPriority)
    );
  };

export function _getAnimationsFromDir(dir: string): any[] {
  const animations = DirAccess.dir_exists_absolute(dir)
    ? covertToJSArray(DirAccess.get_directories_at(dir))
    : [];
  return animations;
}

export function _getVariantsFromDir(dir: string): any[] {
  const variants = DirAccess.dir_exists_absolute(dir)
    ? covertToJSArray(DirAccess.get_files_at(dir)).map(
        (file: string) => file.split('.')[0]
      )
    : [];
  return variants;
}

export function _animations_variants_list(
  bodyType: BODY_TYPE,
  partData: any
): [] {
  const animations = Array.from(
    new Set(
      Object.entries(partData)
        .filter(([key]) => key.includes('layer'))
        .map(([key, value]) => {
          const typedValue = value as Record<string, any>;
          const basePath = typedValue[bodyType];
          const pathWithBase = `${GlobalSettings.spritesheetsPath}/${basePath}`;
          return _getAnimationsFromDir(pathWithBase);
        })
        .flat()
    )
  );
  return [];
}

export function _getVariantsPath(
  pathWithBase: string,
  animation: string,
  variant: string,
  isCustomAnimation: boolean
): string {
  const animations = !isCustomAnimation
    ? _getAnimationsFromDir(pathWithBase).sort(sortByOrder(priorityOrder))
    : [];
  const _animation = animation || animations[0] || '';
  const pathWithAnimation = `${pathWithBase}${_animation}`;
  const variants = _getVariantsFromDir(pathWithAnimation);
  const _variant = variant || variants[0];

  const variantPath =
    _variant && _animation
      ? `${_animation}/${_variant}.png`
      : _animation
      ? `${_animation}.png`
      : `${_variant}.png`;

  return variantPath;
}

export function _getAssetPath(
  basePath: string,
  animation: string,
  variant: string,
  partData: any,
  selectedParts: any,
  isCustomAnimation: boolean = false
): string {
  const { replace_in_path, animations } = partData;
  const { spritesheetsPath } = GlobalSettings;
  let assetPath = `${spritesheetsPath}/${basePath}${variant}.png`;

  if (basePath && !basePath.includes('${')) {
    const pathWithBase = `${spritesheetsPath}/${basePath}`;
    const variantPath = _getVariantsPath(
      pathWithBase,
      animation,
      variant,
      isCustomAnimation
    );

    assetPath = `${spritesheetsPath}/${basePath}${variantPath}`;
  } else if (basePath?.includes('${') && replace_in_path) {
    const replacedPathWithBase = makeDynamicSubstitutions(
      basePath,
      replace_in_path,
      selectedParts
    );
    const pathWithBase = `${spritesheetsPath}/${replacedPathWithBase}`;
    const variantPath = _getVariantsPath(
      pathWithBase,
      animation,
      variant,
      isCustomAnimation
    );
    assetPath = `${spritesheetsPath}/${replacedPathWithBase}${variantPath}`;
  }
  return assetPath.replace(/\s+/g, '_');
}

export function _creatSpritePartPreviewLayer(
  assetPath: string,
  zPos = 0,
  partData: any
): Sprite2D | null {
  // Logic to load and display the sprite based on the selected variant and layers
  const image = Image.load_from_file(assetPath);
  if (!image) {
    return null;
  }
  const sprite2d = new Sprite2D();
  if (image) {
    sprite2d.z_index = zPos; // Ensure the sprite is rendered above other UI elements
    const spritesheet = ImageTexture.create_from_image(image);
    sprite2d.scale = new Vector2(0.5, 0.5);
    sprite2d.centered = false; // Center the sprite
    const {
      preview_row = 2,
      preview_column = 0,
      preview_x_offset = 0,
      preview_y_offset = 0,
    } = partData;
    const atlas = new AtlasTexture();
    atlas.atlas = spritesheet;
    atlas.region = getSpriteRect(
      0,
      preview_row,
      preview_column,
      preview_x_offset,
      preview_y_offset,
      universalFrameSize
    );

    sprite2d.texture = atlas; // Set the texture to the sprite
  }
  return sprite2d; // Return the created sprite for further manipulation if needed
}

export function _creatSpritePartLayer(
  assetPath: string,
  zPos = 0,
  partData: any
): Sprite2D {
  // Logic to load and display the sprite based on the selected variant and layers
  const image = Image.load_from_file(assetPath);

  const sprite2d = new Sprite2D();
  if (image) {
    sprite2d.z_index = zPos; // Ensure the sprite is rendered above other UI elements
    const spritesheet = ImageTexture.create_from_image(image);
    sprite2d.scale = new Vector2(0.5, 0.5);
    sprite2d.centered = false; // Center the sprite
    const {
      preview_row = 2,
      preview_column = 0,
      preview_x_offset = 0,
      preview_y_offset = 0,
    } = partData;
    const atlas = new AtlasTexture();
    atlas.atlas = spritesheet;
    atlas.region = getSpriteRect(
      0,
      preview_row,
      preview_column,
      preview_x_offset,
      preview_y_offset,
      universalFrameSize
    );

    sprite2d.texture = atlas; // Set the texture to the sprite
  }
  return sprite2d; // Return the created sprite for further manipulation if needed
}

/**
 *
 * @param {ItemToDraw[]} items
 * @returns {string[]}
 */
export function buildCustomAnimationList(partsProps: PartProps[]) {
  const list: string[] = [];
  partsProps.forEach((partProps) => {
    const { partData, partType } = partProps;
    Object.entries(partData)
      .filter(([key]) => key.includes('layer'))
      .forEach(([_, value]) => {
        const { custom_animation } = value;

        if (custom_animation !== undefined) {
          if (!list.includes(custom_animation)) {
            list.push(custom_animation);
          }
        }
      });
  });

  return list;
}

export function _createAnimatedSpritePartLayer(
  typedValue: Record<string, any>,
  partProps: PartProps,
  selectedParts: Record<string, PartProps>,
  animatedSprites: AnimatedSprite2D[]
): AnimatedSprite2D {
  const zPos = typedValue['zPos'] || 0;
  const { partData, bodyType, variant } = partProps;
  const { custom_animation } = typedValue;

  const animatedsprite2d = new AnimatedSprite2D();
  const spriteFrames = new SpriteFrames();
  // spriteFrames.remove_animation('default');
  animatedsprite2d.sprite_frames = spriteFrames;
  const basePath = typedValue[bodyType.toLowerCase()];
  if (custom_animation) {
    const custAnim = customAnimations[custom_animation];

    const assetPath = _getAssetPath(
      basePath,
      '',
      variant,
      partData,
      selectedParts,
      true
    );

    if (FileAccess.file_exists(assetPath)) {
      const image = Image.load_from_file(assetPath);
      const imageSize = image!.get_size();
      const compactSpritesheets = Image.create(
        imageSize.x,
        imageSize.y,
        false,
        Image.Format.FORMAT_RGBA8
      );
      compactSpritesheets.fill(Color.TRANSPARENT);
      const rows = custAnim.frames.length;
      for (let row = 0; row < rows; ++row) {
        const animation_name = getCachedAnimationName(
          `${custom_animation}_${Direction[row]}`.toLowerCase()
        );
        const frameRow = custAnim.frames[row];

        if (!spriteFrames.has_animation(animation_name)) {
          spriteFrames.add_animation(animation_name);
          spriteFrames.set_animation_speed(animation_name, frameRow.length);
          spriteFrames.set_animation_loop(animation_name, true);
        }
        const frameStart = 0;

        const frameEnd = frameRow.length;

        for (let frame_idx = frameStart; frame_idx < frameEnd; ++frame_idx) {
          const [baseAnimName, baseAnimFrame] = frameRow[frame_idx].split(',');
          const frameSize = custAnim.frameSize;

          animatedSprites.forEach((animatedSprite: AnimatedSprite2D) => {
            const sprite_frames = animatedSprite.sprite_frames;
            const position = new Vector2i(
              frame_idx * frameSize,
              row * frameSize
            );
            const frame_sprite = blendIntoSheet(
              sprite_frames!,
              baseAnimName,
              Number(baseAnimFrame),
              frameSize
            );
            if (
              frame_sprite?.get_format() != compactSpritesheets.get_format()
            ) {
              frame_sprite?.convert(compactSpritesheets.get_format());
            }
            frame_sprite &&
              compactSpritesheets.blend_rect(
                frame_sprite!,
                new Rect2i(Vector2i.ZERO, new Vector2i(frameSize, frameSize)),
                position
              );
          });
          if (image?.get_format() != compactSpritesheets.get_format()) {
            image?.convert(compactSpritesheets.get_format());
          }
          compactSpritesheets.blend_rect(
            image!,
            new Rect2i(Vector2i.ZERO, imageSize),
            Vector2i.ZERO
          );
          const spritesheet = ImageTexture.create_from_image(
            compactSpritesheets!
          );
          var atlasTexture = new AtlasTexture();
          atlasTexture.atlas = spritesheet;
          atlasTexture.region = getSpriteRect(
            frame_idx,
            row,
            0,
            0,
            0,
            frameSize
          );
          spriteFrames.add_frame(animation_name, atlasTexture, 1);
        }
      }
    }
  } else {
    Object.keys(animationFrameCounts).forEach((animation: string) => {
      const assetPath = _getAssetPath(
        basePath,
        animation,
        variant,
        partData,
        selectedParts
      );
      const animationCounts = animationFrameCounts[animation];
      if (FileAccess.file_exists(assetPath)) {
        const image = Image.load_from_file(assetPath);

        const spritesheet = ImageTexture.create_from_image(image!);

        const frameStart = 0;

        const frameEnd = animationCounts;

        const {
          preview_column = 0,
          preview_x_offset = 0,
          preview_y_offset = 1,
        } = partData;
        const rows = ['hurt', 'climb'].includes(animation) ? 1 : 4;
        for (let row = 0; row < rows; ++row) {
          const animation_name = getCachedAnimationName(
            (rows > 1
              ? `${animation}_${Direction[row]}`
              : `${animation}`
            ).toLowerCase()
          );

          if (!spriteFrames.has_animation(animation_name)) {
            spriteFrames.add_animation(animation_name);
            spriteFrames.set_animation_speed(animation_name, animationCounts);
            spriteFrames.set_animation_loop(animation_name, true);
          }

          for (let frame = frameStart; frame < frameEnd; ++frame) {
            var atlasTexture = new AtlasTexture();
            atlasTexture.atlas = spritesheet;
            atlasTexture.region = getSpriteRect(
              frame,
              row,
              preview_column,
              preview_x_offset,
              preview_y_offset,
              universalFrameSize
            );
            spriteFrames.add_frame(animation_name, atlasTexture, 1);
          }
        }
      }
    });
  }
  animatedsprite2d.scale = new Vector2(4, 4);
  animatedsprite2d.centered = true; // Center the sprite
  animatedsprite2d.z_index = zPos; // Ensure the sprite is rendered above other UI elements
  const initAnimation = getCachedAnimationName('walk_down');
  if (spriteFrames.has_animation(initAnimation)) {
    animatedsprite2d.animation = initAnimation;
  }
  return animatedsprite2d; // Return the created sprite for further manipulation if needed
}

export const sample = (arr: string[], count: number = 1) =>
  arr[Math.floor(Math.random() * arr.length)];

export const _convertToPartProps = (
  bodyType: BODY_TYPE,
  partType: string,
  partName: string,
  variant: string,
  partData: any
): PartProps => ({
  bodyType,
  partType,
  partName,
  variant,
  partData,
});

export function blendIntoSheet(
  sprite_frames: SpriteFrames,
  animation_name: string,
  frame_idx: number,
  sheet_size: number
): Image | null {
  const _animation = getCachedAnimationName(animation_name);
  if (sprite_frames.has_animation(_animation)) {
    var first_frame = sprite_frames!.get_frame_texture(_animation, 0);
    var frame_size = first_frame!.get_size();
    if (frame_size.x > 0 && frame_size.y > 0) {
      const frame_texture = sprite_frames!.get_frame_texture(
        _animation,
        frame_idx
      );
      const frame_image = frame_texture!.get_image();
      const frame_sprite = Image.create(
        sheet_size,
        sheet_size,
        false,
        Image.Format.FORMAT_RGBA8
      );
      if (frame_image?.get_format() != frame_sprite.get_format()) {
        frame_image?.convert(frame_sprite.get_format());
      }
      const x = (sheet_size - frame_size.x) / 2;
      const y = (sheet_size - frame_size.y) / 2;
      frame_sprite.blend_rect(
        frame_image!,
        new Rect2i(Vector2i.ZERO, new Vector2i(frame_size.x, frame_size.y)),
        new Vector2i(x, y)
      );

      return frame_sprite;
    }
  }
  return null;
}
