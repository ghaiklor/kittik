import { ShapeObject, ShapeRenderable } from 'kittik-shape-basic';
import { Code } from 'kittik-shape-code';
import { FigText } from 'kittik-shape-fig-text';
import { Image } from 'kittik-shape-image';
import { Rectangle } from 'kittik-shape-rectangle';
import { Text } from 'kittik-shape-text';

export type ShapeType = 'Code' | 'FigText' | 'Image' | 'Rectangle' | 'Text';

// eslint-disable-next-line @typescript-eslint/no-extra-parens
export const SHAPES = new Map<ShapeType, { fromObject: <T extends ShapeObject>(obj: T) => ShapeRenderable }>([
  ['Code', Code],
  ['FigText', FigText],
  ['Image', Image],
  ['Rectangle', Rectangle],
  ['Text', Text]
]);
