import { Canvas } from 'terminal-canvas';
import { Code } from 'kittik-shape-code';
import { FigText } from 'kittik-shape-fig-text';
import { Image } from 'kittik-shape-image';
import { Rectangle } from 'kittik-shape-rectangle';
import { ShapeRenderable, ShapeObject } from 'kittik-shape-basic';
import { Text } from 'kittik-shape-text';

export type ShapeType = 'Code' | 'FigText' | 'Image' | 'Rectangle' | 'Text';

export const SHAPES = new Map<ShapeType, { fromObject<T extends ShapeObject>(obj: T, cursor: Canvas): ShapeRenderable }>([
  ['Code', Code],
  ['FigText', FigText],
  ['Image', Image],
  ['Rectangle', Rectangle],
  ['Text', Text]
]);
