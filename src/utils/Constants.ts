import { Direction } from '../types/types';

export const VERSION = '0.1.0';

export const universalFrameSize = 64;
export const universalSheetWidth = 832;
export const universalSheetHeight = 3456;

export const defaultAnimations = [
  'spellcast',
  'thrust',
  'walk',
  'slash',
  'shoot',
  'hurt',
  'watering',
];

export const PARTS_ORDER = [
  'head',
  'body',
  'legs',
  'hair',
  'eyes',
  'beard',
  'mustache',
  'expression',
  'ear',
  'tail',
  'weapon',
  'clothes',
  'jacket'
];

export const DEFAULT_REPLACE_PATH = {
  head: { partName: 'Human_male' },
  expression: { partName: 'none' },
};
/**
 * @typedef {{frameSize: number, frames: string[][]}} CustomAnimationDefinition
 * @type {Record<string, CustomAnimationDefinition>}
 */
export const customAnimations: any = {
  wheelchair: {
    frameSize: 64,
    frames: [
      ['sit_up,2', 'sit_up,2'],
      ['sit_left,2', 'sit_left,2'],
      ['sit_down,2', 'sit_down,2'],
      ['sit_right,2', 'sit_right,2'],
    ],
  },
  tool_rod: {
    frameSize: 128,
    frames: [
      [
        'thrust_up,0',
        'thrust_up,1',
        'thrust_up,2',
        'thrust_up,3',
        'thrust_up,4',
        'thrust_up,5',
        'thrust_up,4',
        'thrust_up,4',
        'thrust_up,4',
        'thrust_up,5',
        'thrust_up,4',
        'thrust_up,2',
        'thrust_up,3',
      ],
      [
        'thrust_left,0',
        'thrust_left,1',
        'thrust_left,2',
        'thrust_left,3',
        'thrust_left,4',
        'thrust_left,5',
        'thrust_left,4',
        'thrust_left,4',
        'thrust_left,4',
        'thrust_left,5',
        'thrust_left,4',
        'thrust_left,2',
        'thrust_left,3',
      ],
      [
        'thrust_down,0',
        'thrust_down,1',
        'thrust_down,2',
        'thrust_down,3',
        'thrust_down,4',
        'thrust_down,5',
        'thrust_down,4',
        'thrust_down,4',
        'thrust_down,4',
        'thrust_down,5',
        'thrust_down,4',
        'thrust_down,2',
        'thrust_down,3',
      ],
      [
        'thrust_right,0',
        'thrust_right,1',
        'thrust_right,2',
        'thrust_right,3',
        'thrust_right,4',
        'thrust_right,5',
        'thrust_right,4',
        'thrust_right,4',
        'thrust_right,4',
        'thrust_right,5',
        'thrust_right,4',
        'thrust_right,2',
        'thrust_right,3',
      ],
    ],
  },
  slash_128: {
    frameSize: 128,
    frames: [
      [
        'slash_up,0',
        'slash_up,1',
        'slash_up,2',
        'slash_up,3',
        'slash_up,4',
        'slash_up,5',
      ],
      [
        'slash_left,0',
        'slash_left,1',
        'slash_left,2',
        'slash_left,3',
        'slash_left,4',
        'slash_left,5',
      ],
      [
        'slash_down,0',
        'slash_down,1',
        'slash_down,2',
        'slash_down,3',
        'slash_down,4',
        'slash_down,5',
      ],
      [
        'slash_right,0',
        'slash_right,1',
        'slash_right,2',
        'slash_right,3',
        'slash_right,4',
        'slash_right,5',
      ],
    ],
  },
  backslash_128: {
    frameSize: 128,
    frames: [
      [
        'backslash_up,0',
        'backslash_up,1',
        'backslash_up,2',
        'backslash_up,3',
        'backslash_up,4',
        'backslash_up,5',
        'backslash_up,6',
        'backslash_up,7',
        'backslash_up,8',
        'backslash_up,9',
        'backslash_up,10',
        'backslash_up,11',
        'backslash_up,12',
      ],
      [
        'backslash_left,0',
        'backslash_left,1',
        'backslash_left,2',
        'backslash_left,3',
        'backslash_left,4',
        'backslash_left,5',
        'backslash_left,6',
        'backslash_left,7',
        'backslash_left,8',
        'backslash_left,9',
        'backslash_left,10',
        'backslash_left,11',
        'backslash_left,12',
      ],
      [
        'backslash_down,0',
        'backslash_down,1',
        'backslash_down,2',
        'backslash_down,3',
        'backslash_down,4',
        'backslash_down,5',
        'backslash_down,6',
        'backslash_down,7',
        'backslash_down,8',
        'backslash_down,9',
        'backslash_down,10',
        'backslash_down,11',
        'backslash_down,12',
      ],
      [
        'backslash_right,0',
        'backslash_right,1',
        'backslash_right,2',
        'backslash_right,3',
        'backslash_right,4',
        'backslash_right,5',
        'backslash_right,6',
        'backslash_right,7',
        'backslash_right,8',
        'backslash_right,9',
        'backslash_right,10',
        'backslash_right,11',
        'backslash_right,12',
      ],
    ],
  },
  halfslash_128: {
    frameSize: 128,
    frames: [
      [
        'halfslash_up,0',
        'halfslash_up,1',
        'halfslash_up,2',
        'halfslash_up,3',
        'halfslash_up,4',
        'halfslash_up,5',
      ],
      [
        'halfslash_left,0',
        'halfslash_left,1',
        'halfslash_left,2',
        'halfslash_left,3',
        'halfslash_left,4',
        'halfslash_left,5',
      ],
      [
        'halfslash_down,0',
        'halfslash_down,1',
        'halfslash_down,2',
        'halfslash_down,3',
        'halfslash_down,4',
        'halfslash_down,5',
      ],
      [
        'halfslash_right,0',
        'halfslash_right,1',
        'halfslash_right,2',
        'halfslash_right,3',
        'halfslash_right,4',
        'halfslash_right,5',
      ],
    ],
  },
  thrust_oversize: {
    frameSize: 192,
    frames: [
      [
        'thrust_up,0',
        'thrust_up,1',
        'thrust_up,2',
        'thrust_up,3',
        'thrust_up,4',
        'thrust_up,5',
        'thrust_up,6',
        'thrust_up,7',
      ],
      [
        'thrust_left,0',
        'thrust_left,1',
        'thrust_left,2',
        'thrust_left,3',
        'thrust_left,4',
        'thrust_left,5',
        'thrust_left,6',
        'thrust_left,7',
      ],
      [
        'thrust_down,0',
        'thrust_down,1',
        'thrust_down,2',
        'thrust_down,3',
        'thrust_down,4',
        'thrust_down,5',
        'thrust_down,6',
        'thrust_down,7',
      ],
      [
        'thrust_right,0',
        'thrust_right,1',
        'thrust_right,2',
        'thrust_right,3',
        'thrust_right,4',
        'thrust_right,5',
        'thrust_right,6',
        'thrust_right,7',
      ],
    ],
  },
  slash_oversize: {
    frameSize: 192,
    frames: [
      [
        'slash_up,0',
        'slash_up,1',
        'slash_up,2',
        'slash_up,3',
        'slash_up,4',
        'slash_up,5',
      ],
      [
        'slash_left,0',
        'slash_left,1',
        'slash_left,2',
        'slash_left,3',
        'slash_left,4',
        'slash_left,5',
      ],
      [
        'slash_down,0',
        'slash_down,1',
        'slash_down,2',
        'slash_down,3',
        'slash_down,4',
        'slash_down,5',
      ],
      [
        'slash_right,0',
        'slash_right,1',
        'slash_right,2',
        'slash_right,3',
        'slash_right,4',
        'slash_right,5',
      ],
    ],
  },
  walk_128: {
    skipFirstFrameInPreview: true,
    frameSize: 128,
    frames: [
      [
        'walk_up,0',
        'walk_up,1',
        'walk_up,2',
        'walk_up,3',
        'walk_up,4',
        'walk_up,5',
        'walk_up,6',
        'walk_up,7',
        'walk_up,8',
      ],
      [
        'walk_left,0',
        'walk_left,1',
        'walk_left,2',
        'walk_left,3',
        'walk_left,4',
        'walk_left,5',
        'walk_left,6',
        'walk_left,7',
        'walk_left,8',
      ],
      [
        'walk_down,0',
        'walk_down,1',
        'walk_down,2',
        'walk_down,3',
        'walk_down,4',
        'walk_down,5',
        'walk_down,6',
        'walk_down,7',
        'walk_down,8',
      ],
      [
        'walk_right,0',
        'walk_right,1',
        'walk_right,2',
        'walk_right,3',
        'walk_right,4',
        'walk_right,5',
        'walk_right,6',
        'walk_right,7',
        'walk_right,8',
      ],
    ],
  },
  thrust_128: {
    frameSize: 128,
    frames: [
      [
        'thrust_up,0',
        'thrust_up,1',
        'thrust_up,2',
        'thrust_up,3',
        'thrust_up,4',
        'thrust_up,5',
        'thrust_up,6',
        'thrust_up,7',
      ],
      [
        'thrust_left,0',
        'thrust_left,1',
        'thrust_left,2',
        'thrust_left,3',
        'thrust_left,4',
        'thrust_left,5',
        'thrust_left,6',
        'thrust_left,7',
      ],
      [
        'thrust_down,0',
        'thrust_down,1',
        'thrust_down,2',
        'thrust_down,3',
        'thrust_down,4',
        'thrust_down,5',
        'thrust_down,6',
        'thrust_down,7',
      ],
      [
        'thrust_right,0',
        'thrust_right,1',
        'thrust_right,2',
        'thrust_right,3',
        'thrust_right,4',
        'thrust_right,5',
        'thrust_right,6',
        'thrust_right,7',
      ],
    ],
  },
  slash_reverse_oversize: {
    frameSize: 192,
    frames: [
      [
        'slash_up,5',
        'slash_up,4',
        'slash_up,3',
        'slash_up,2',
        'slash_up,1',
        'slash_up,0',
      ],
      [
        'slash_left,5',
        'slash_left,4',
        'slash_left,3',
        'slash_left,2',
        'slash_left,1',
        'slash_left,0',
      ],
      [
        'slash_down,5',
        'slash_down,4',
        'slash_down,3',
        'slash_down,2',
        'slash_down,1',
        'slash_down,0',
      ],
      [
        'slash_right,5',
        'slash_right,4',
        'slash_right,3',
        'slash_right,2',
        'slash_right,1',
        'slash_right,0',
      ],
    ],
  },
  whip_oversize: {
    frameSize: 192,
    frames: [
      [
        'slash_up,0',
        'slash_up,1',
        'slash_up,4',
        'slash_up,5',
        'slash_up,3',
        'slash_up,2',
        'slash_up,2',
        'slash_up,1',
      ],
      [
        'slash_left,0',
        'slash_left,1',
        'slash_left,5',
        'slash_left,4',
        'slash_left,3',
        'slash_left,3',
        'slash_left,3',
        'slash_left,2',
      ],
      [
        'slash_down,0',
        'slash_down,1',
        'slash_down,5',
        'slash_down,4',
        'slash_down,3',
        'slash_down,3',
        'slash_down,2',
        'slash_left,1',
      ],
      [
        'slash_right,0',
        'slash_right,1',
        'slash_right,5',
        'slash_right,4',
        'slash_right,3',
        'slash_right,3',
        'slash_right,3',
        'slash_right,2',
      ],
    ],
  },
  tool_whip: {
    frameSize: 192,
    frames: [
      [
        'slash_up,0',
        'slash_up,1',
        'slash_up,4',
        'slash_up,5',
        'slash_up,3',
        'slash_up,2',
        'slash_up,2',
        'slash_up,1',
      ],
      [
        'slash_left,0',
        'slash_left,1',
        'slash_left,5',
        'slash_left,4',
        'slash_left,3',
        'slash_left,3',
        'slash_left,3',
        'slash_left,2',
      ],
      [
        'slash_down,0',
        'slash_down,1',
        'slash_down,5',
        'slash_down,4',
        'slash_down,3',
        'slash_down,3',
        'slash_down,2',
        'slash_down,1',
      ],
      [
        'slash_right,0',
        'slash_right,1',
        'slash_right,5',
        'slash_right,4',
        'slash_right,3',
        'slash_right,3',
        'slash_right,3',
        'slash_right,2',
      ],
    ],
  },
};

/**
 *
 * @param {CustomAnimationDefinition} customAnimation
 * @returns {{width:number, height:number}}
 */
export const customAnimationSize = (customAnimation: any) => ({
  width: customAnimation.frameSize * customAnimation.frames[0].length,
  height: customAnimation.frameSize * customAnimation.frames.length,
});

export const customAnimationBase = (custAnim: any) =>
  custAnim.frames[0][0].split(',')[0].split('-')[0];

export const isCustomAnimationBasedOnStandardAnimation = (
  custAnim: any,
  stdAnimName: string
) => customAnimationBase(custAnim) === stdAnimName;

export const base_animations: Record<string, number> = {
  spellcast: 0,
  thrust: 4 * universalFrameSize,
  walk: 8 * universalFrameSize,
  slash: 12 * universalFrameSize,
  shoot: 16 * universalFrameSize,
  hurt: 20 * universalFrameSize,
  climb: 21 * universalFrameSize,
  idle: 22 * universalFrameSize,
  jump: 26 * universalFrameSize,
  sit: 30 * universalFrameSize,
  emote: 34 * universalFrameSize,
  run: 38 * universalFrameSize,
  combat_idle: 42 * universalFrameSize,
  backslash: 46 * universalFrameSize,
  halfslash: 50 * universalFrameSize,
};

export const animationFrameCounts: Record<string, number> = {
  spellcast: 7,
  thrust: 8,
  walk: 9,
  slash: 6,
  shoot: 13,
  hurt: 6,
  climb: 6,
  idle: 2,
  jump: 5,
  sit: 3,
  emote: 3,
  run: 8,
  combat_idle: 2,
  backslash: 13,
  halfslash: 7,
};

const animationNameCache = new Map<string, string>();

// Helper function to get cached animation names
export const getCachedAnimationName = (key: string) => {
  if (!animationNameCache.has(key)) {
    animationNameCache.set(key, key.toLowerCase());
  }
  return animationNameCache.get(key)!;
};

const buildAnimationNames = () => {
  const animationNames = [
    ...Object.keys(animationFrameCounts),
    ...Object.keys(customAnimations),
  ].map((name) => {
    const fourDirectionAnimations = [];
    const rows = ['hurt', 'climb'].includes(name) ? 1 : 4;
    for (let row = 0; row < rows; ++row) {
      const animationName = (
        rows > 1 ? `${name}_${Direction[row]}` : `${name}`
      ).toLowerCase();
      fourDirectionAnimations.push(getCachedAnimationName(animationName));
    }

    return fourDirectionAnimations;
  });
  return animationNames.flat();
};

buildAnimationNames();
