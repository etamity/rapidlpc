import { BODY_TYPE, PartProps } from '../types/types';
import { _convertToPartProps, sample } from './Utils';

export const MandatoryBodyParts = [
  'body',
  'head',
  'expression',
  'expression_crying',
  'eye_color',
];

export const DecorativeElements = [
  'arms',
  'hair',
  'ears',
  'ears_inner',
  'eyes',
  'eyebrows',
  'legs',
  'neck',
  'nose',
  'shoulders',
  'wrists',
  'wrinkes',
  'wound_arm',
  'wound_brain',
  'wound_eye_left',
  'wound_eye_right',
  'wound_mouth',
  'wound_ribs',
  'beard',
  'mustache',
  'facial_eyes',
  'facial_mask',
  'facial_left',
  'facial_left_trim',
  'facial_right',
  'facial_right_trim',
  'hairextl',
  'hairextr',
  'updo',
  'ponytail',
  'ring',
  'earring_left',
  'earring_right',
  'earrings',
  'necklace',
  'charm',
  'bandana',
  'bandana_overlay',
  'hat',
  'hat_accessory',
  'hat_trim',
  'hat_overlay',
  'hairtie',
  'hairtie_rune',
  'headcover',
  'headcover_rune',
  'hat_buckle',
  'visor',
  'fins',
  'horns',
  'furry_ears',
  'furry_ears_skin',
  'tail',
  'wings',
  'wings_dots',
  'wings_edge',
  'cape_trim',
  'dress_trim',
  'dress_sleeves_trim',
  'shield_paint',
  'shield_pattern',
  'shield_trim',
  'jacket_trim',
  'accessory',
  'shadow',
];

export const FunctionalGear = [
  'armour',
  'bracers',
  'gloves',
  'shield',
  'chainmail',
  'bandages',
  'prosthesis_hand',
  'prosthesis_leg',
  'vest',
  'dress',
  'dress_sleeves',
  'clothes',
  'sleeves',
  'jacket',
  'jacket_collar',
  'jacket_pockets',
  'overalls',
  'apron',
  'sash',
  'sash_tie',
  'sash_obi',
  'cape',
  'shoes',
  'shoes_toe',
  'socks',
  'belt',
  'buckles',
  'backpack_straps',
  'weapon',
  'quiver',
  'backpack',
  'cargo',
  'ammo',
  'weapon_magic_crystal',
  'bauldron',
  'wheelchair',
];

export function _getValidPartNamed(
  bodyType: BODY_TYPE,
  partNamedData: Record<string, any>
): string[] {
  const lowerBodyType = bodyType.toLowerCase();
  const result: string[] = [];

  for (const [partName, partData] of Object.entries(partNamedData)) {
    for (const [key, value] of Object.entries(partData)) {
      if (key.includes('layer') && typeof value === 'object') {
        if (Object.keys(value as any).some(k => k.toLowerCase() === lowerBodyType)) {
          result.push(partName);
          break; // No need to check other layers once found
        }
      }
    }
  }

  return result;
}

export function _randomPart(
  bodyType: BODY_TYPE,
  partType: string,
  partNamedData: Record<string, any>
): PartProps | undefined {
  const validPartNames = _getValidPartNamed(bodyType, partNamedData);
  
  if (validPartNames.length === 0) {
    return undefined;
  }

  const partName = sample(validPartNames);
  const partData = partNamedData[partName];
  const variant = sample(partData.variants) || 'none';

  return _convertToPartProps(
    bodyType,
    partType,
    partName,
    variant,
    partData
  );
}