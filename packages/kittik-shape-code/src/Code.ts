import { Canvas } from 'terminal-canvas';
import { DEFAULT_THEME } from './themes/default';
import { Shape, ShapeRenderable } from 'kittik-shape-basic';
import beautify from 'js-beautify';
import redeyed from 'redeyed';

export class Code extends Shape implements ShapeRenderable {
  get text (): string {
    return beautify(this._text, { indent_size: 2 });
  }

  set text (code: string) {
    this._text = code;
  }

  get width (): string {
    const lengths = this.text.split('\n').map(item => item.length);
    return Math.max(...lengths).toString();
  }

  get height (): string {
    return this.text.split('\n').length.toString();
  }

  render <T extends Canvas>(cursor: T): void {
    super.render(cursor);

    const codeSplits = redeyed(this.text, DEFAULT_THEME).splits;
    const x = parseInt(this.x);
    const y = parseInt(this.y);

    cursor.moveTo(x, y);

    codeSplits.forEach((split: string) => {
      const code = split.replace(/__.*__/, '');
      const color = /__(.*)__/.exec(split);

      if (/\n/.exec(code) !== null) {
        cursor.moveTo(x, cursor.cursorY + 1).write(code.replace('\n', ''));
      } else {
        cursor.foreground(color !== null ? color[1] : 'none');
        cursor.write(code);
      }
    });
  }
}
