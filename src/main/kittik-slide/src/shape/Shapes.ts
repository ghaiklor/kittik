import { Code } from 'kittik-shape-code';
import { FigText } from 'kittik-shape-fig-text';
import { Image } from 'kittik-shape-image';
import { Rectangle } from 'kittik-shape-rectangle';
import { Text } from 'kittik-shape-text';
import type { CodeObject, CodeOptions } from 'kittik-shape-code';
import type { FigTextObject, FigTextOptions } from 'kittik-shape-fig-text';
import type { ImageObject, ImageOptions } from 'kittik-shape-image';
import type { RectangleObject, RectangleOptions } from 'kittik-shape-rectangle';
import type { Shape } from 'kittik-shape-basic';
import type { TextObject, TextOptions } from 'kittik-shape-text';

export type ShapeType = 'Code' | 'FigText' | 'Image' | 'Rectangle' | 'Text';
export type ShapeOptions<T extends ShapeType> = TypesMap[T]['options'];
export type ShapeObject<T extends ShapeType> = TypesMap[T]['object'];

export const SHAPES = new Map<ShapeType, typeof Shape>([
  ['Code', Code],
  ['FigText', FigText],
  ['Image', Image],
  ['Rectangle', Rectangle],
  ['Text', Text]
]);

interface TypesMap {
  Code: { options: CodeOptions, object: CodeObject }
  FigText: { options: FigTextOptions, object: FigTextObject }
  Image: { options: ImageOptions, object: ImageObject }
  Rectangle: { options: RectangleOptions, object: RectangleObject }
  Text: { options: TextOptions, object: TextObject }
}
