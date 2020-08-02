import { Shape, ShapeRenderable } from 'kittik-shape-basic';
import { Canvas } from 'terminal-canvas';
import { CodeObject } from './CodeObject';
import { CodeOptions } from './CodeOptions';
import { DEFAULT_THEME } from './themes/default';
import { js_beautify as beautify } from 'js-beautify';
import redeyed from 'redeyed';

export { CodeObject } from './CodeObject';
export { CodeOptions } from './CodeOptions';

export class Code extends Shape implements CodeOptions, ShapeRenderable {
  public get text (): string {
    return beautify(this.rawText, { indent_size: 2 });
  }

  public set text (code: string) {
    this.rawText = code;
  }

  public get width (): string {
    const lengths = this.text.split('\n').map((item) => item.length);
    return Math.max(...lengths).toString();
  }

  public get height (): string {
    return this.text.split('\n').length.toString();
  }

  public render <T extends Canvas> (canvas: T): void {
    super.render(canvas);

    let codeSplits: string[] = [];
    try {
      codeSplits = redeyed(this.text, DEFAULT_THEME).splits;
    } catch (error) {
      codeSplits = [this.text];
    }

    const x = parseInt(this.x, 10);
    const y = parseInt(this.y, 10);

    canvas.moveTo(x, y);

    codeSplits.forEach((split: string) => {
      const code = split.replace(/__.*__/u, '');
      const color = (/__(?<color>.*)__/u).exec(split);

      if ((/\n/u).exec(code) === null) {
        canvas.foreground(color === null ? 'none' : color[1]);
        canvas.write(code);
      } else {
        canvas.moveTo(x, canvas.cursorY + 1).write(code.replace('\n', ''));
      }
    });
  }

  public toObject (): CodeObject {
    const base = super.toObject();
    const type: CodeObject['type'] = 'Code';
    const options: CodeObject['options'] = {
      ...base.options
    };

    return { type, options };
  }
}
