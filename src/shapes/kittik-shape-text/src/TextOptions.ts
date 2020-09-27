import type { ShapeOptions } from 'kittik-shape-basic';

export interface TextOptions extends ShapeOptions {
  align: 'left' | 'center' | 'right'
  blink: boolean
  bold: boolean
  dim: boolean
  hidden: boolean
  reverse: boolean
  underlined: boolean
}
