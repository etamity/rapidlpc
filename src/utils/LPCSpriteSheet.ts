import { Rect2 } from 'godot';

export enum SpriteTypeEnum {
  Normal,
  OversizeRod,
  OversizeThrust,
  OversizeSlash,
  OversizeSlashReverse,
  OversizeWhip,
}

enum SpritesheetType {
  SizeNormal,
  Size_6_6_8,
}

// You need to pass the spriteSheet object to this function
export function getSpritesheetType(spriteSheet: {
  get_height: () => number;
}): SpritesheetType {
  if (spriteSheet.get_height() === 3648) {
    return SpritesheetType.Size_6_6_8;
  }
  return SpritesheetType.SizeNormal;
}

// You need to pass the spriteSheet object to this function
export function getSpriteRect(
  frame: number,
  row: number,
  column: number,
  xOffset: number,
  yOffset: number,
  frameSize: number
): Rect2 {
  let rect = {
    x: frameSize * (frame + column),
    y: frameSize * row,
    width: frameSize,
    height: frameSize,
  };

  return new Rect2(rect.x + xOffset, rect.y + yOffset, rect.width, rect.height);
}
