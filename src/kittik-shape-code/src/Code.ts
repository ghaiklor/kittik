import { Canvas } from "terminal-canvas";
import { CodeObject } from "./CodeObject";
import { CodeOptions } from "./CodeOptions";
import { DEFAULT_THEME } from './themes/default';
import { Shape } from "kittik-shape-basic";
import beautify from "js-beautify";

// @ts-ignore
import redeyed from "redeyed";

export class Code extends Shape implements CodeOptions {
  private _code: string = '';

  constructor(cursor: Canvas, options?: Partial<CodeOptions>) {
    super(cursor, options);

    if (options?.code !== undefined) {
      this.code = options.code;
    }
  }

  get code() {
    return this._code;
  }

  set code(code: string) {
    this._code = beautify(code, { indent_size: 2 });
  }

  get width() {
    const code = this.code.split('\n').map(item => item.length);
    return Math.max(...code).toString();
  }

  get height() {
    return this.code.split('\n').length.toString();
  }

  render() {
    const cursor = this.cursor;
    const codeSplits = redeyed(this.code, DEFAULT_THEME).splits;
    const x = parseInt(this.x)
    const y = parseInt(this.y)

    cursor.moveTo(x, y);

    codeSplits.forEach((split: string) => {
      const code = split.replace(/__.*__/, '');
      const color = split.match(/__(.*)__/);

      if (code.match(/\n/)) {
        cursor.moveTo(x, cursor.cursorY + 1).write(code.replace('\n', ''))
      } else {
        cursor.foreground(color ? color[1] : 'none');
        cursor.write(code);
      }
    });

    return this;
  }

  toObject(): CodeObject {
    const obj: CodeObject = super.toObject();
    obj.options = { ...obj.options, code: this._code };

    return obj;
  }
}
