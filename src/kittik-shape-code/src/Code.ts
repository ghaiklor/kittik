// TODO: think about typings for redeyed @ghaiklor
// eslint-disable-next-line
// @ts-ignore
import redeyed from 'redeyed';
import { DEFAULT_THEME } from './themes/default';
import { Shape } from 'kittik-shape-basic';
import beautify from 'js-beautify';

export class Code extends Shape {
  get text(): string {
    return this._text;
  }

  set text(code: string) {
    this._text = beautify(code, { indent_size: 2 });
  }

  get width(): string {
    const code = this.text.split('\n').map(item => item.length);
    return Math.max(...code).toString();
  }

  get height(): string {
    return this.text.split('\n').length.toString();
  }

  render(): this {
    const cursor = this.cursor;
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

    return this;
  }
}
