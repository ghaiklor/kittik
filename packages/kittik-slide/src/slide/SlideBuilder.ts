import { Animationable } from 'kittik-animation-basic';
import { Canvas } from 'terminal-canvas';
import { ShapeRenderable } from 'kittik-shape-basic';
import { Slide } from './Slide';

type TShapeAccumulator<TSlideBuilder, TNextShape> =
  TSlideBuilder extends SlideBuilder<infer TShapes, infer TAnimations>
    ? SlideBuilder<TShapes | TNextShape, TAnimations>
    : never;

type TAnimationAccumulator<TSlideBuilder, TNextAnimation> =
  TSlideBuilder extends SlideBuilder<infer TShapes, infer TAnimations>
    ? SlideBuilder<TShapes, TAnimations | TNextAnimation>
    : never;

export class SlideBuilder<TShape, TAnimation> {
  private readonly slide: Slide = new Slide();

  public static start (): SlideBuilder<never, never> {
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

  public withShape <T extends string>(name: T, shape: ShapeRenderable): TShapeAccumulator<this, T> {
    this.slide.addShape(name, shape);

    // eslint-disable-next-line no-warning-comments
    // TODO: think about returning this and accumulator type here
    // Accumulator type in result returns SlideBuilder anyway, so seems like a bug in TypeScript?
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return this;
  }

  public withAnimation <T extends string>(name: T, animation: Animationable): TAnimationAccumulator<this, T> {
    this.slide.addAnimation(name, animation);

    // eslint-disable-next-line no-warning-comments
    // TODO: think about returning this and accumulator type here
    // Accumulator type in result returns SlideBuilder anyway, so seems like a bug in TypeScript?
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return this;
  }

  public withOrder (shape: TShape, animations?: TAnimation[]): this {
    this.slide.addOrder(String(shape), animations?.map(String));
    return this;
  }

  public end (): Slide {
    return this.slide;
  }
}
