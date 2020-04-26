import { Code, CodeObject, CodeOptions } from 'kittik-shape-code';
import { FigText, FigTextObject, FigTextOptions } from 'kittik-shape-fig-text';
import { Image, ImageObject, ImageOptions } from 'kittik-shape-image';
import { Rectangle, RectangleObject, RectangleOptions } from 'kittik-shape-rectangle';
import { Text, TextObject, TextOptions } from 'kittik-shape-text';
import { Shape } from 'kittik-shape-basic';

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
