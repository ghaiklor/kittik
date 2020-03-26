import { Canvas } from 'terminal-canvas';
import { FigTextObject } from './FigTextObject';
import { FigTextOptions } from './FigTextOptions';
import { Shape, ShapeRenderable } from 'kittik-shape-basic';
import figlet, { KerningMethods, PrintDirection, Fonts } from 'figlet';

export { FigTextObject } from './FigTextObject';
export { FigTextOptions } from './FigTextOptions';

export class FigText extends Shape implements FigTextOptions, ShapeRenderable {
  font: Fonts = 'Standard';
  horizontalLayout: KerningMethods = 'default';
  verticalLayout: KerningMethods = 'default'
  printDirection: PrintDirection = 0;
  showHardBlanks = false;

  constructor (cursor: Canvas, options?: Partial<FigTextOptions>) {
    super(cursor, options);

    if (options?.font !== undefined) {
      this.font = options.font;
    }

    if (options?.horizontalLayout !== undefined) {
      this.horizontalLayout = options.horizontalLayout;
    }

    if (options?.verticalLayout !== undefined) {
      this.verticalLayout = options.verticalLayout;
    }

    if (options?.printDirection !== undefined) {
      this.printDirection = options.printDirection;
    }

    if (options?.showHardBlanks !== undefined) {
      this.showHardBlanks = options.showHardBlanks;
    }
  }

  get width (): string {
    const lengths = this.renderedText.split('\n').map(item => item.length);
    return Math.max(...lengths).toString();
  }

  get height (): string {
    return this.renderedText.split('\n').length.toString();
  }

  get renderedText (): string {
    return figlet.textSync(this.text, {
      font: this.font,
      horizontalLayout: this.horizontalLayout,
      verticalLayout: this.verticalLayout,
      printDirection: this.printDirection,
      showHardBlanks: this.showHardBlanks
    });
  }

  render (): void {
    const cursor = this.cursor;
    const text = this.renderedText.split('\n');
    const x = parseInt(this.x);
    const y = parseInt(this.y);
    const background = this.background;
    const foreground = this.foreground;

    cursor.background(background).foreground(foreground);
    text.forEach((line, index) => cursor.moveTo(x, y + index).write(line));
  }

  toObject<T extends FigTextObject>(): T {
    const obj: FigTextObject = super.toObject();
    obj.options = {
      ...obj.options,
      font: this.font,
      horizontalLayout: this.horizontalLayout,
      verticalLayout: this.verticalLayout,
      printDirection: this.printDirection,
      showHardBlanks: this.showHardBlanks
    };

    return obj as T;
  }
}
