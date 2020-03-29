import { Animationable } from 'kittik-animation-basic';
import { Canvas } from 'terminal-canvas';
import { ShapeRenderable } from 'kittik-shape-basic';
import { Slide } from './Slide';

export class SlideBuilder {
  private readonly slide: Slide = new Slide();

  withCursor (cursor: Canvas): this {
    this.slide.cursor = cursor;

    return this;
  }

  withShape (name: string, shape: ShapeRenderable): this {
    this.slide.addShape(name, shape);

    return this;
  }

  withAnimation (name: string, animation: Animationable): this {
    this.slide.addAnimation(name, animation);

    return this;
  }

  withOrder (shape: string, animations?: string[]): this {
    this.slide.addOrder(shape, animations);

    return this;
  }

  end (): Slide {
    return this.slide;
  }

  static start (): SlideBuilder {
    return new this();
  }
}
