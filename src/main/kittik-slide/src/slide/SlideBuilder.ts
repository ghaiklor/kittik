import type { Animationable } from 'kittik-animation-basic';
import type { Canvas } from 'terminal-canvas';
import type { ShapeRenderable } from 'kittik-shape-basic';
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

  public constructor (shapes: Record<string, ShapeRenderable> = {}, animations: Record<string, Animationable> = {}) {
    Object.keys(shapes).forEach((name) => this.slide.addShape(name, shapes[name]));
    Object.keys(animations).forEach((name) => this.slide.addAnimation(name, animations[name]));
  }

  public static start <TShape extends string = never, TAnimation extends string = never> (
    shapes?: Record<TShape, ShapeRenderable>,
    animations?: Record<TAnimation, Animationable>
  ): SlideBuilder<TShape, TAnimation> {
    return new this(shapes, animations);
  }

  public withName (name: string): this {
    this.slide.name = name;
    return this;
  }

  public withCanvas (canvas: Readonly<Canvas>): this {
    this.slide.canvas = canvas;
    return this;
  }

  public withShape <T extends string> (name: T, shape: ShapeRenderable): TShapeAccumulator<this, T> {
    this.slide.addShape(name, shape);

    // eslint-disable-next-line no-warning-comments
    // TODO: we can use unknown here to cast `this` to our abstract type
    // But better to find a way to explain TypeScript that `this` is valid here
    return this as unknown as TShapeAccumulator<this, T>;
  }

  public withAnimation <T extends string> (name: T, animation: Animationable): TAnimationAccumulator<this, T> {
    this.slide.addAnimation(name, animation);

    // eslint-disable-next-line no-warning-comments
    // TODO: we can use unknown here to cast `this` to our abstract type
    // But better to find a way to explain TypeScript that `this` is valid here
    return this as unknown as TAnimationAccumulator<this, T>;
  }

  public withOrder (shape: TShape, animations?: TAnimation[]): this {
    this.slide.addOrder(String(shape), animations?.map(String));
    return this;
  }

  public end (): Slide {
    return this.slide;
  }
}
