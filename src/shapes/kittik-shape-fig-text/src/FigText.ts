import type { ShapeRenderable } from 'kittik-shape-basic';
import { Shape } from 'kittik-shape-basic';
import type { Fonts, KerningMethods, PrintDirection } from 'figlet';
import figlet from 'figlet';
import type { Canvas } from 'terminal-canvas';
import type { FigTextObject } from './FigTextObject';
import type { FigTextOptions } from './FigTextOptions';

export { FigTextObject } from './FigTextObject';
export { FigTextOptions } from './FigTextOptions';

export class FigText extends Shape implements FigTextOptions, ShapeRenderable {
  public font: Fonts = 'Standard';
  public horizontalLayout: KerningMethods = 'default';
  public verticalLayout: KerningMethods = 'default';
  public printDirection: PrintDirection = 0;
  public showHardBlanks = false;

  public constructor (options?: Partial<FigTextOptions>) {
    super(options);

    if (typeof options?.font !== 'undefined') {
      this.font = options.font;
    }

    if (typeof options?.horizontalLayout !== 'undefined') {
      this.horizontalLayout = options.horizontalLayout;
    }

    if (typeof options?.verticalLayout !== 'undefined') {
      this.verticalLayout = options.verticalLayout;
    }

    if (typeof options?.printDirection !== 'undefined') {
      this.printDirection = options.printDirection;
    }

    if (typeof options?.showHardBlanks !== 'undefined') {
      this.showHardBlanks = options.showHardBlanks;
    }
  }

  public get width (): string {
    const lengths = this.renderedText.split('\n').map((item) => item.length);
    return Math.max(...lengths).toString();
  }

  public get height (): string {
    return this.renderedText.split('\n').length.toString();
  }

  public get renderedText (): string {
    return figlet.textSync(this.text, {
      font: this.font,
      horizontalLayout: this.horizontalLayout,
      printDirection: this.printDirection,
      showHardBlanks: this.showHardBlanks,
      verticalLayout: this.verticalLayout
    });
  }

  public render <T extends Canvas> (canvas: T): void {
    super.render(canvas);

    const text = this.renderedText.split('\n');
    const x = parseInt(this.x, 10);
    const y = parseInt(this.y, 10);
    const { background, foreground } = this;

    canvas.background(background).foreground(foreground);
    text.forEach((line, index) => canvas.moveTo(x, y + index).write(line));
  }

  public toObject (): FigTextObject {
    const base = super.toObject();
    const type: FigTextObject['type'] = 'FigText';
    const options: FigTextObject['options'] = {
      ...base.options,
      font: this.font,
      horizontalLayout: this.horizontalLayout,
      printDirection: this.printDirection,
      showHardBlanks: this.showHardBlanks,
      verticalLayout: this.verticalLayout
    };

    return { type, options };
  }
}
