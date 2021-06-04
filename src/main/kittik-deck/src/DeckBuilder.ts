import type { Slide } from "kittik-slide";
import { SlideBuilder } from "kittik-slide";
import type { Animationable } from "kittik-animation-basic";
import type { Canvas } from "terminal-canvas";
import { Deck } from "./Deck";
import type { ShapeRenderable } from "kittik-shape-basic";

export class DeckBuilder<TShape extends string, TAnimation extends string> {
  private readonly deck: Deck = new Deck();
  private readonly shapes: Record<TShape, ShapeRenderable>;
  private readonly animations: Record<TAnimation, Animationable>;

  public constructor(
    shapes: Record<string, ShapeRenderable> = {},
    animations: Record<string, Animationable> = {}
  ) {
    this.shapes = shapes;
    this.animations = animations;
  }

  public static start<
    TShape extends string = never,
    TAnimation extends string = never
  >(
    shapes?: Record<TShape, ShapeRenderable>,
    animations?: Record<TAnimation, Animationable>
  ): DeckBuilder<TShape, TAnimation> {
    return new this(shapes, animations);
  }

  public withCanvas(canvas: Canvas): this {
    this.deck.canvas = canvas;

    return this;
  }

  public withSlide(
    fn: (builder: SlideBuilder<TShape, TAnimation>) => Slide
  ): this {
    const builder = SlideBuilder.start(this.shapes, this.animations).withCanvas(
      this.deck.canvas
    );
    const slide = fn(builder);

    this.deck.addSlide(slide);

    return this;
  }

  public end(): Deck {
    return this.deck;
  }
}
