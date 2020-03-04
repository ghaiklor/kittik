import { Canvas } from 'terminal-canvas';
import { CodeObject } from './CodeObject';
import { CodeOptions } from './CodeOptions';
import { DEFAULT_THEME } from './themes/default';
import { Shape } from 'kittik-shape-basic';
import beautify from 'js-beautify';

// TODO: think about typings for redeyed @ghaiklor
// eslint-disable-next-line
// @ts-ignore
import redeyed from 'redeyed';

export class Code extends Shape implements CodeOptions {
  private _code = '';

  constructor(cursor: Canvas, options?: Partial<CodeOptions>) {
    super(cursor, options);

    if (options?.code !== undefined) {
      this.code = options.code;
    }
  }

  get code(): string {
    return this._code;
  }

  set code(code: string) {
    this._code = beautify(code, { indent_size: 2 });
  }

  get width(): string {
    const code = this.code.split('\n').map(item => item.length);
    return Math.max(...code).toString();
  }

  get height(): string {
    return this.code.split('\n').length.toString();
  }

  render(): this {
    const cursor = this.cursor;
    const codeSplits = redeyed(this.code, DEFAULT_THEME).splits;
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

  toObject<T extends CodeObject>(): T {
    const obj: CodeObject = super.toObject();
    obj.options = { ...obj.options, code: this._code };

    return obj as T;
  }
}
