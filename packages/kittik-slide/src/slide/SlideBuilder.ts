import { Animationable } from 'kittik-animation-basic';
import { Canvas } from 'terminal-canvas';
import { ShapeRenderable } from 'kittik-shape-basic';
import { Slide } from './Slide';

export class SlideBuilder {
  private readonly slide: Slide = new Slide();

  public static start (): SlideBuilder {
    return new this();
  }

  public withName (name: string): this {
    this.slide.name = name;

    return this;
  }

  public withCanvas (canvas: Readonly<Canvas>): this {
    this.slide.canvas = canvas;

    return this;
  }

  public withShape (name: string, shape: ShapeRenderable): this {
    this.slide.addShape(name, shape);

    return this;
  }

  public withAnimation (name: string, animation: Animationable): this {
    this.slide.addAnimation(name, animation);

    return this;
  }

  public withOrder (shape: string, animations?: string[]): this {
    this.slide.addOrder(shape, animations);

    return this;
  }

  public end (): Slide {
    return this.slide;
  }
}
