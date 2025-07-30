import {
  AnimatedSprite2D,
  Color,
  Control,
  DirAccess,
  FileAccess,
  GArray,
  Image,
  Input,
  Key,
  Node,
  Node2D,
  Rect2i,
  Vector2,
  Vector2i,
} from 'godot';
import { Direction, PartProps } from '../types/types';
import {
  _createAnimatedSpritePartLayer,
  blendIntoSheet,
  buildCustomAnimationList,
} from '../utils/Utils';
import Store from '../utils/Store';
import DataLoader from '../utils/DataLoader';
import {
  customAnimations,
  getCachedAnimationName,
  universalFrameSize,
  universalSheetWidth,
  animationFrameCounts,
} from '../utils/Constants';
export default class Charactor extends Control {
  private parts: Record<string, Node2D> = {};
  private direction: string = 'down';
  private animation: string = 'walk';
  _clear(): void {
    // Clear the grid container
    while (this.get_child_count() > 0) {
      const child = this.get_child(0);
      this.remove_child(child!);
      child!.queue_free();
    }
    this.parts = {};
  }
  _clear_node(node: Node): void {
    // Clear the grid container
    while (node.get_child_count() > 0) {
      const child = node.get_child(0);
      node.remove_child(child!);
      child!.queue_free();
    }
  }
  _get_animatedLayers(): AnimatedSprite2D[] {
    return Object.values(this.parts)
      .map((part: Node2D) => {
        const arr: AnimatedSprite2D[] = [];
        const children: GArray<any> = (part as Node2D).get_children();
        for (const animatedSprite of children) {
          arr.push(animatedSprite);
        }
        return arr;
      })
      .flat()
      .sort((a: AnimatedSprite2D, b: AnimatedSprite2D) => {
        return a.z_index - b.z_index;
      });
  }
  _animatedLayers(callback: (sprite: AnimatedSprite2D) => void) {
    this._get_animatedLayers().forEach((animatedSprite: AnimatedSprite2D) => {
      callback(animatedSprite as AnimatedSprite2D);
    });
  }
  _playFrame(frame: number = 0) {
    this._animatedLayers((sprite) => {
      sprite.frame = frame;
      sprite.play();
    });
  }

  _play(animation: string) {
    this._animatedLayers((sprite) => {
      sprite.visible = false;
      const _animation = getCachedAnimationName(animation);
      if (sprite.sprite_frames?.has_animation(_animation)) {
        if (sprite.animation !== _animation) {
          sprite.play(_animation);
        }
        sprite.visible = true;
      }
    });
  }
  _drawPreview(partType: string, partProps: PartProps, selectedParts: any) {
    const { partData } = partProps;
    let part: Node2D = this.parts[partType];
    if (!part) {
      part = new Node2D();
      this.add_child(part);
      this.parts[partType] = part;
    }
    this._clear_node(part);

    Object.entries(partData)
      .filter(([key]) => key.includes('layer'))
      .forEach(([key, value]) => {
        const typedValue = value as Record<string, any>;
        const partLayer = _createAnimatedSpritePartLayer(
          typedValue,
          partProps,
          selectedParts,
          this._get_animatedLayers()
        );
        partLayer.set_name(partType + '_' + partProps.partName + '_' + key);
        partLayer.scale = new Vector2(2, 2); // Adjust scale as needed
        partLayer.visible = true;
        part.add_child(partLayer);
      });
  }
  _getRootState(): Store {
    const store = this.get_tree()?.root?.get_node('Main/Store') as Store;
    return store;
  }

  _getCustomeAnimationList(): string[] {
    const store = this._getRootState();
    const selectedParts = store.getState('selectedParts');
    const partsProps = (Object.values(selectedParts) as PartProps[]).filter(
      Boolean
    );
    const customAnimationList = buildCustomAnimationList(partsProps);

    return customAnimationList;
  }
  _ready(): void {
    const state = this._getRootState();
    const selectedParts = state.getState('selectedParts');
    Object.keys(DataLoader.instance.partsData).forEach((partType) => {
      state.on(`selectedParts.${partType}`, (partProps: PartProps) => {
        this._drawPreview(partType, partProps, selectedParts);
        this._playFrame();
      });
    });
  }

  _drawCharactor(selectedParts: any) {
    this._clear();
    Object.entries(selectedParts).forEach(
      ([partType, partProps]: [string, any]) => {
        partProps && this._drawPreview(partType, partProps, selectedParts);
      }
    );
    this._playFrame();
  }

  _export_credits() {
    const save_path = 'res://Exported_Spritesheets/';
    const state = this._getRootState();
    const selectedParts = state.getState('selectedParts');
    const creditsList: any[] = [];
    Object.entries(selectedParts).forEach(([_, partProps]: [string, any]) => {
      const { credits = [] } = (partProps as PartProps)?.partData || {};
      creditsList.push(credits);
    });

    const saveFile = FileAccess.open(
      save_path + 'credits.json',
      FileAccess.ModeFlags.WRITE
    );
    saveFile?.store_string(JSON.stringify(creditsList, null, 2));
  }
  _export_all(splitByAnimation: boolean) {
    this._export_credits();
    this._export_to('res://Exported_Spritesheets/', splitByAnimation);
  }

  _export_to(folder: string, splitByAnimation: boolean = false) {
    const save_path = folder;
    var dir = DirAccess.open('res://');
    if (splitByAnimation) {
      const customFolder = save_path + 'custom/';
      const standardFolder = save_path + 'standard/';
      if (dir?.make_dir_recursive(customFolder)) {
        console.log('Can not create folder: ' + customFolder);
        return;
      }
      if (dir?.make_dir_recursive(standardFolder)) {
        console.log('Can not create folder: ' + standardFolder);
        return;
      }
      this._exportByAnimation().forEach(([animationName, image]) => {
        image.save_png(standardFolder + animationName + '.png');
      });
      this._exportCustomeAnimations().forEach(([animationName, image]) => {
        image.save_png(customFolder + animationName + '.png');
      });
    } else {
      if (dir?.make_dir_recursive(save_path)) {
        console.log('Can not create folder: ' + save_path);
        return;
      }
      const standardAniamtionsList = this._exportByAnimation();
      const customAnimationsList = this._exportCustomeAnimations();
      const allAnimationsList = [
        ...standardAniamtionsList,
        ...customAnimationsList,
      ];
      const [sheetWidth, sheetHeight] = allAnimationsList.reduce(
        (root, [animationName, image]) => {
          const [x, y] = root;
          const width = image.get_width();
          const height = image.get_height();
          const sumX = Math.max(x, width);
          const sumY = y + height;
          return [sumX, sumY];
        },
        [0, 0]
      );
      const compactSpritesheets = Image.create(
        sheetWidth,
        sheetHeight,
        false,
        Image.Format.FORMAT_RGBA8
      );
      compactSpritesheets.fill(Color.TRANSPARENT);
      let currentHeight = 0;
      allAnimationsList.forEach(([animationName, image]) => {
        const position = new Vector2i(0, currentHeight);
        if (image?.get_format() != compactSpritesheets.get_format()) {
          image?.convert(compactSpritesheets.get_format());
        }
        compactSpritesheets.blend_rect(
          image!,
          new Rect2i(Vector2i.ZERO, image.get_size()),
          position
        );
        currentHeight = currentHeight + image.get_height();
      });

      compactSpritesheets.save_png(save_path + 'spritesheets.png');
    }
  }

  _exportCustomeAnimations(): [string, Image][] {
    const customAnimationsList = this._getCustomeAnimationList();

    return customAnimationsList.map((animation) => {
      const custAnim = customAnimations[animation];
      const rows = custAnim.frames.length;
      const frameSize = custAnim.frameSize;
      const frameRow = custAnim.frames[0];
      const spritesheetWidth = frameRow.length * frameSize;
      const compactSpritesheets = Image.create(
        spritesheetWidth,
        rows * frameSize,
        false,
        Image.Format.FORMAT_RGBA8
      );
      compactSpritesheets.fill(Color.TRANSPARENT);

      for (let row = 0; row < rows; ++row) {
        const customAnimateName =
          `${animation}_${Direction[row]}`.toLowerCase();
        this._animatedLayers((target_sprite) => {
          const sprite_frames = target_sprite.sprite_frames;
          const animation_name = customAnimateName;
          const frame_count = frameRow.length;

          if (frame_count > 0) {
            for (var frame_idx = 0; frame_idx < frame_count; frame_idx++) {
              const position = new Vector2i(
                frame_idx * frameSize,
                row * frameSize
              );
              const frame_sprite = blendIntoSheet(
                sprite_frames!,
                animation_name,
                frame_idx,
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
                  new Rect2i(
                    Vector2i.ZERO,
                    new Vector2i(spritesheetWidth, frameSize)
                  ),
                  position
                );
            }
          }
        });
      }
      return [animation, compactSpritesheets];
    });
  }

  _exportByAnimation(): [string, Image][] {
    const standardAnimation = Object.keys(animationFrameCounts);
    return standardAnimation.map((animation) => {
      const rows = ['hurt', 'climb'].includes(animation) ? 1 : 4;
      const compactSpritesheets = Image.create(
        animationFrameCounts[animation] * universalFrameSize,
        rows * universalFrameSize,
        false,
        Image.Format.FORMAT_RGBA8
      );
      compactSpritesheets.fill(Color.TRANSPARENT);

      for (let row = 0; row < rows; ++row) {
        const animation_name = getCachedAnimationName(
          (rows > 1
            ? `${animation}_${Direction[row]}`
            : `${animation}`
          ).toLowerCase()
        );

        this._animatedLayers((target_sprite) => {
          const sprite_frames = target_sprite.sprite_frames;
          if (sprite_frames?.has_animation(animation_name)) {
            !animation_name && console.log(animation_name);
            const frame_count = sprite_frames!.get_frame_count(animation_name);
            if (frame_count > 0) {
              var first_frame = sprite_frames!.get_frame_texture(
                animation_name,
                0
              );
              var frame_size = first_frame!.get_size();

              if (frame_size.x > 0 && frame_size.y > 0) {
                for (var frame_idx = 0; frame_idx < frame_count; frame_idx++) {
                  var frame_texture = sprite_frames!.get_frame_texture(
                    animation_name,
                    frame_idx
                  );
                  var frame_image = frame_texture!.get_image();
                  var position = new Vector2i(
                    frame_idx * frame_size.x,
                    row * universalFrameSize
                  );
                  if (
                    frame_image?.get_format() !=
                    compactSpritesheets.get_format()
                  ) {
                    frame_image?.convert(compactSpritesheets.get_format());
                  }
                  compactSpritesheets.blend_rect(
                    frame_image!,
                    new Rect2i(
                      Vector2i.ZERO,
                      new Vector2i(universalSheetWidth, universalFrameSize)
                    ),
                    position
                  );
                }
              }
            }
          }
        });
      }
      return [animation, compactSpritesheets];
    });
  }
  // Called every frame. 'delta' is the elapsed time since the previous frame.
  _process(delta: number): void {

    this.animation = 'walk';
    if (Input.is_key_pressed(Key.KEY_UP)) {
      this.direction = 'up';
      this.animation = 'walk';
    } else if (Input.is_key_pressed(Key.KEY_DOWN)) {
      this.direction = 'down';
      this.animation = 'walk';
    } else if (Input.is_key_pressed(Key.KEY_LEFT)){
      this.direction = 'left';
      this.animation = 'walk';
    } else if (Input.is_key_pressed(Key.KEY_RIGHT)) {
      this.direction = 'right';
      this.animation = 'walk';
    }

    if (Input.is_key_pressed(Key.KEY_SHIFT)) {
      this.animation = 'run';
    }    
    if (Input.is_key_pressed(Key.KEY_SPACE)) {
      this.animation = 'jump';
    }
    if (Input.is_key_pressed(Key.KEY_F)) {
      this.animation = 'slash';
    }
    if (Input.is_key_pressed(Key.KEY_Z)) {
      this.animation = 'shoot';
    }
    if (Input.is_key_pressed(Key.KEY_X)) {
      this.animation = 'thrust';
    }
    if (Input.is_key_pressed(Key.KEY_C)) {
      this.animation = 'hurt';
    }
    if (Input.is_key_pressed(Key.KEY_V)) {
      this.animation = 'wheelchair';
    }
    if (Input.is_key_pressed(Key.KEY_B)) {
      this.animation = this._getCustomeAnimationList()[0];
    }
    this._play(this.animation + '_' + this.direction);
  }
}
