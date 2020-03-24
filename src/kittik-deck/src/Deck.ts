import { Canvas } from 'terminal-canvas';
import { DeckDeclaration } from './DeckDeclaration';
import { Slide } from 'kittik-slide';
import readline from 'readline';

export { DeckDeclaration } from './DeckDeclaration';

export class Deck {
  private readonly cursor: Canvas = Canvas.create().saveScreen().reset().hideCursor()
  private readonly slides: Slide[]
  private isRendering = false;
  private currentSlideIndex = 0;

  constructor (declaration: DeckDeclaration) {
    if (declaration.cursor !== undefined) {
      this.cursor = declaration.cursor;
    }

    this.slides = this.initSlides(declaration);
    this.initKeyboard();
  }

  private initSlides (declaration: DeckDeclaration): Slide[] {
    const globalShapes = declaration.shapes ?? [];
    const globalAnimations = declaration.animations ?? [];

    return declaration.slides.map(slide => Slide.create(this.cursor, {
      ...slide,
      shapes: globalShapes.concat(slide.shapes),
      animations: globalAnimations.concat(slide.animations ?? [])
    }));
  }

  private initKeyboard (): void {
    if (this.cursor.stream.isTTY) {
      readline.emitKeypressEvents(process.stdin);

      process.stdin.setRawMode(true);
      process.stdin.setEncoding('utf8');
      process.stdin.on('keypress', this.onKeyPress.bind(this));
    }
  }

  private onKeyPress (chunk: string): void {
    if (this.isRendering) return;

    switch (chunk) {
      case 'p':
        this.previousSlide().catch(e => console.error(e));
        break;
      case 'n':
        this.nextSlide().catch(e => console.error(e));
        break;
      case 'q':
        this.exit();
        break;
    }
  }

  async renderSlide (index = this.currentSlideIndex): Promise<void> {
    if (this.isRendering) return;

    this.isRendering = true;
    await this.slides[index].render();
    this.isRendering = false;
  }

  async nextSlide (): Promise<void> {
    if (this.currentSlideIndex + 1 <= this.slides.length - 1) {
      return await this.renderSlide(++this.currentSlideIndex);
    }
  }

  async previousSlide (): Promise<void> {
    if (this.currentSlideIndex - 1 >= 0) {
      return await this.renderSlide(--this.currentSlideIndex);
    }
  }

  exit (): void {
    process.stdin.pause();

    this.cursor.showCursor().restoreScreen().reset();
  }
}
