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
  public canvas: Canvas = Canvas.create();
  private readonly slides: Slide[] = [];
  private isRendering = false;
  private currentSlideIndex = 0;

  public constructor (declaration?: DeckDeclaration) {
    if (typeof declaration?.canvas !== 'undefined') {
      this.canvas = declaration.canvas;
    }

    if (typeof declaration !== 'undefined') {
      this.initSlides(declaration);
    }

    this.initKeyboard();
  }

  public addShape (name: string, shape: ShapeRenderable): void {
    const slidesWithShape = this.slides.filter((slide) => slide.shapes.has(name)).map((slide) => slide.name);
    if (slidesWithShape.length > 0) {
      throw new Error(
        `You are trying to add a shape with the name "${name}" into the deck. ` +
        'When adding a shape into the deck, actually it adds the shape to all the slides in the deck. ' +
        `That is why we can not add the shape "${name}" to the deck, some of the slides already have it. ` +
        `Remove the shape from the slides [${slidesWithShape.join(', ')}] or rename the shape.`
      );
    }

    this.slides.forEach((slide) => slide.addShape(name, shape));
  }

  public addAnimation (name: string, animation: Animationable): void {
    const slidesWithAnimation = this.slides.filter((slide) => slide.animations.has(name)).map((slide) => slide.name);
    if (slidesWithAnimation.length > 0) {
      throw new Error(
        `You are trying to add an animation with the name "${name}" into the deck. ` +
        'When adding an animation into the deck, actually it adds the animation to all the slides in the deck. ' +
        `That is why we can not add the animation "${name}" to the deck, some of the slides already have it. ` +
        `Remove the animations from the slides [${slidesWithAnimation.join(', ')}] or rename the animation.`
      );
    }

    this.slides.forEach((slide) => slide.addAnimation(name, animation));
  }

  public addSlide (slide: Slide): void {
    if (this.slides.some((existingSlide) => existingSlide.name === slide.name)) {
      throw new Error(
        `You are trying to add a slide with the name "${slide.name}" into the deck. ` +
        'But the slide with the same name already exists there. ' +
        `Remove the slide "${slide.name}" from the deck or rename the slide you tried to add.`
      );
    }

    this.slides.push(slide);
  }

  public async renderSlide (index = this.currentSlideIndex): Promise<boolean> {
    if (!this.isRendering && typeof this.slides[index] !== 'undefined') {
      this.isRendering = true;
      await this.slides[index].render();
      this.isRendering = false;

      return true;
    }

    return false;
  }

  public async nextSlide (): Promise<boolean> {
    const isRendered = await this.renderSlide(this.currentSlideIndex + 1);

    if (isRendered) {
      this.currentSlideIndex += 1;
    }

    return isRendered;
  }

  public async previousSlide (): Promise<boolean> {
    const isRendered = await this.renderSlide(this.currentSlideIndex - 1);

    if (isRendered) {
      this.currentSlideIndex -= 1;
    }

    return isRendered;
  }

  // eslint-disable-next-line class-methods-use-this
  public exit (): void {
    process.stdin.pause();
    process.stdin.removeAllListeners();
  }

  private initSlides (declaration: DeckDeclaration): void {
    const globalShapes = declaration.shapes ?? [];
    const globalAnimations = declaration.animations ?? [];

    declaration.slides.forEach((slide) => this.addSlide(Slide.create(this.canvas, {
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
        this.previousSlide().catch((error) => console.error(error));
        break;
      case 'n':
        this.nextSlide().catch((error) => console.error(error));
        break;
      case 'q':
        this.exit();
        break;
      default:
        break;
    }
  }
}
