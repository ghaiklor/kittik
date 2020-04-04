import { Animationable } from 'kittik-animation-basic';
import { Canvas } from 'terminal-canvas';
import { Deck } from './Deck';
import { ShapeRenderable } from 'kittik-shape-basic';
import { Slide } from 'kittik-slide';

export class DeckBuilder {
  private readonly deck: Deck = new Deck()

  withCursor (cursor: Canvas): this {
    this.deck.cursor = cursor;

    return this;
  }

  withShape (name: string, shape: ShapeRenderable): this {
    this.deck.addShape(name, shape);

    return this;
  }

  withAnimation (name: string, animation: Animationable): this {
    this.deck.addAnimation(name, animation);

    return this;
  }

  withSlide (slide: Slide): this {
    this.deck.addSlide(slide);

    return this;
  }

  end (): Deck {
    return this.deck;
  }

  static start (): DeckBuilder {
    return new this();
  }
}
