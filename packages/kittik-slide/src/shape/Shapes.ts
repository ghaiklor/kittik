import { ShapeObject as BasicShapeObject, ShapeOptions as BasicShapeOptions, Shape } from 'kittik-shape-basic';
import { Code, CodeObject, CodeOptions } from 'kittik-shape-code';
import { FigText, FigTextObject, FigTextOptions } from 'kittik-shape-fig-text';
import { Image, ImageObject, ImageOptions } from 'kittik-shape-image';
import { Rectangle, RectangleObject, RectangleOptions } from 'kittik-shape-rectangle';
import { Text, TextObject, TextOptions } from 'kittik-shape-text';

export type ShapeType = 'Code' | 'FigText' | 'Image' | 'Rectangle' | 'Text';

// eslint-disable-next-line no-warning-comments
// TODO: refactor this
export type ShapeOptions<T extends ShapeType> = T extends 'Code'
  ? CodeOptions
  : T extends 'FigText'
    ? FigTextOptions
    : T extends 'Image'
      ? ImageOptions
      : T extends 'Rectangle'
        ? RectangleOptions
        : T extends 'Text'
          ? TextOptions
          : BasicShapeOptions;

// eslint-disable-next-line no-warning-comments
// TODO: refactor this
export type ShapeObject<T extends ShapeType> = T extends 'Code'
  ? CodeObject
  : T extends 'FigText'
    ? FigTextObject
    : T extends 'Image'
      ? ImageObject
      : T extends 'Rectangle'
        ? RectangleObject
        : T extends 'Text'
          ? TextObject
          : BasicShapeObject<T, BasicShapeOptions>;

export const SHAPES = new Map<ShapeType, typeof Shape>([
  ['Code', Code],
  ['FigText', FigText],
  ['Image', Image],
  ['Rectangle', Rectangle],
  ['Text', Text]
]);
