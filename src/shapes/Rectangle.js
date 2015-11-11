import Shape from './Shape';
import { COLORS } from '../Cursor';

export default class Rectangle extends Shape {
  constructor() {
    super();
  }

  render(cursor) {
    let text = '      ';

    cursor
      .reset()
      .background(COLORS.YELLOW)
      .setPosition(this.getPosition().x, this.getPosition().y)
      .write(text)
      .move(-text.length, 1)
      .write(text)
      .move(-text.length, 1)
      .write(text);
  }
}
