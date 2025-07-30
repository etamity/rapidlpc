export interface LPCAnimationData {
  framecount: number;
  name: string;
  row: number;
  col: number;
  loop: boolean;
  size: number;
  reverse: boolean;
}

export interface AnimationData {
  framecount: number;
  name: string;
  row: number;
  size: number;
}

export interface PartProps {
  bodyType: BODY_TYPE;
  partType: string;
  partName: string;
  variant: string;
  partData: Record<string, any>
}

export interface ViewingProps {
    partType?: string;
    partName?: string;
}

export enum Direction {
  UP = 0,
  LEFT = 1,
  DOWN = 2,
  RIGHT = 3,
}

export enum BODY_TYPE {
  MALE = 'MALE',
  FEAMLE = 'FEMALE',
  TEEN = 'TEEN',
  CHILD = 'CHILD',
  PREGNANT = 'PREGNANT',
  MUSCULAR = 'MUSCULAR',
}

export interface CharactorProps {
  bodyType: BODY_TYPE;
  direction: Direction;
  animation: string;
}

export interface SelectedPart {
  variant: string;
  partType: string;
  basePath: string;
  zPos: number;
}
