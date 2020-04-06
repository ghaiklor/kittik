import { Animationable } from 'kittik-animation-basic';
import { Canvas } from 'terminal-canvas';
import { DeckDeclaration } from './DeckDeclaration';
import { ShapeRenderable } from 'kittik-shape-basic';
import { Slide } from 'kittik-slide';
import readline from 'readline';
import tty from 'tty';

export { AnimationBuilder } from 'kittik-slide';
export { DeckBuilder } from './DeckBuilder';
export { DeckDeclaration } from './DeckDeclaration';
export { ShapeBuilder } from 'kittik-slide';
export { SlideBuilder } from 'kittik-slide';

export class Deck {
  public cursor: Canvas = Canvas.create().saveScreen().reset().hideCursor();
  private readonly slides: Slide[] = [];
  private isRendering = false;
  private currentSlideIndex = 0;

  public constructor (declaration?: DeckDeclaration) {
    if (typeof declaration?.cursor !== 'undefined') {
      this.cursor = declaration.cursor;
    }

    if (typeof declaration !== 'undefined') {
      this.initSlides(declaration);
    }

    this.initKeyboard();
  }

  public addShape (name: string, shape: ShapeRenderable): void {
    const slidesWithShape = this.slides.filter((slide) => slide.shapes.has(name)).map((slide) => slide.name);
    if (slidesWithShape.length > 0) {
      throw new Error(`Slides [${slidesWithShape.join(', ')}] already have a shape with the name "${name}"`);
    }

    this.slides.forEach((slide) => slide.addShape(name, shape));
  }

  public addAnimation (name: string, animation: Animationable): void {
    const slidesWithAnimation = this.slides.filter((slide) => slide.animations.has(name)).map((slide) => slide.name);
    if (slidesWithAnimation.length > 0) {
      throw new Error(`Slides [${slidesWithAnimation.join(', ')}] already have an animation with the name "${name}"`);
    }

    this.slides.forEach((slide) => slide.addAnimation(name, animation));
  }

  public addSlide (slide: Slide): void {
    this.slides.push(slide);
  }

  public async renderSlide (index = this.currentSlideIndex): Promise<void> {
    if (!this.isRendering && typeof this.slides[index] !== 'undefined') {
      this.isRendering = true;
      await this.slides[index].render();
      this.isRendering = false;
    }
  }

  public async nextSlide (): Promise<boolean> {
    if (this.currentSlideIndex + 1 <= this.slides.length - 1) {
      await this.renderSlide(++this.currentSlideIndex);
      return true;
    }

    return false;
  }

  public async previousSlide (): Promise<boolean> {
    if (this.currentSlideIndex - 1 >= 0) {
      await this.renderSlide(--this.currentSlideIndex);
      return true;
    }

    return false;
  }

  public exit (): void {
    process.stdin.pause();
    this.cursor.showCursor().restoreScreen().reset();
  }

  private initSlides (declaration: DeckDeclaration): void {
    const globalShapes = declaration.shapes ?? [];
    const globalAnimations = declaration.animations ?? [];

    declaration.slides.forEach((slide) => this.addSlide(Slide.create(this.cursor, {
      ...slide,
      shapes: globalShapes.concat(slide.shapes),
      animations: globalAnimations.concat(slide.animations ?? [])
    })));
  }

  private initKeyboard (): void {
    if (process.stdin instanceof tty.ReadStream) {
      process.stdin.setRawMode(true);
      process.stdin.setEncoding('utf8');
    }

    readline.emitKeypressEvents(process.stdin);
    process.stdin.on('keypress', this.onKeyPress.bind(this));
  }

  private onKeyPress (chunk: string): void {
    switch (chunk) {
      case 'p':
        this.previousSlide().catch((e) => console.error(e));
        break;
      case 'n':
        this.nextSlide().catch((e) => console.error(e));
        break;
      case 'q':
        this.exit();
        break;
      default:
        break;
    }
  }
}
