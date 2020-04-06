import { Animationable } from 'kittik-animation-basic';
import { AnimationDeclaration } from '../animation/AnimationDeclaration';
import { ANIMATIONS, AnimationType } from '../animation/Animations';
import { Canvas } from 'terminal-canvas';
import { OrderDeclaration } from './OrderDeclaration';
import { ShapeDeclaration } from '../shape/ShapeDeclaration';
import { ShapeRenderable } from 'kittik-shape-basic';
import { SHAPES, ShapeType } from '../shape/Shapes';
import { SlideDeclaration } from './SlideDeclaration';

export { AnimationBuilder } from '../animation/AnimationBuilder';
export { AnimationDeclaration } from '../animation/AnimationDeclaration';
export { AnimationType } from '../animation/Animations';
export { OrderDeclaration } from './OrderDeclaration';
export { ShapeBuilder } from '../shape/ShapeBuilder';
export { ShapeDeclaration } from '../shape/ShapeDeclaration';
export { ShapeType } from '../shape/Shapes';
export { SlideBuilder } from './SlideBuilder';
export { SlideDeclaration } from './SlideDeclaration';

export class Slide {
  public cursor: Canvas = Canvas.create();
  public name = 'Untitled Slide';
  public readonly shapes: Map<string, ShapeRenderable> = new Map();
  public readonly animations: Map<string, Animationable> = new Map();
  public readonly order: OrderDeclaration[] = [];

  public constructor (cursor?: Canvas, declaration?: SlideDeclaration) {
    if (cursor !== undefined) {
      this.cursor = cursor;
    }

    if (declaration?.name !== undefined) {
      this.name = declaration.name;
    }

    if (declaration?.shapes !== undefined) {
      this.initShapes(declaration.shapes);
    }

    if (declaration?.animations !== undefined) {
      this.initAnimations(declaration.animations);
    }

    if (declaration?.order !== undefined) {
      this.order = declaration.order;
    }
  }

  public static create (cursor: Canvas, declaration: SlideDeclaration): Slide {
    return new this(cursor, declaration);
  }

  public static fromObject (obj: SlideDeclaration, cursor: Canvas): Slide {
    return this.create(cursor, obj);
  }

  public static fromJSON (json: string, cursor: Canvas): Slide {
    return this.fromObject(JSON.parse(json), cursor);
  }

  public addShape (name: string, shape: ShapeRenderable, toOverride = false): void {
    if (this.shapes.has(name) && !toOverride) {
      throw new Error(`Shape "${name}" already exists in slide "${this.name}"`);
    }

    this.shapes.set(name, shape);
  }

  public addAnimation (name: string, animation: Animationable, toOverride = false): void {
    if (this.animations.has(name) && !toOverride) {
      throw new Error(`Animation "${name}" already exists in slide "${this.name}"`);
    }

    this.animations.set(name, animation);
  }

  public addOrder (shape: string, animations: string[] = []): void {
    if (this.order.some((order: OrderDeclaration) => order.shape === shape)) {
      throw new Error(`You already have an ordering for shape "${shape}" in slide "${this.name}"`);
    }

    this.order.push({ shape, animations });
  }

  public async render (): Promise<void> {
    const shapes = this.shapes;
    const animations = this.animations;
    const shapesToRender: ShapeRenderable[] = [];
    const sequence: Array<() => void> = [];

    // We need to re-render shapes each time when some of the animations made a tick
    // Hence, made an update in shape properties that we need to reflect on canvas
    animations.forEach((animation: Animationable) => animation.on('tick', () => this.renderShapes(shapesToRender)));

    for (const order of this.order) {
      const shapeToRender = shapes.get(order.shape);
      if (shapeToRender === undefined) {
        throw new Error(
          `You specified shape "${order.shape}" in slide "${this.name}" as part of ordering, but it does not exist in shapes declaration.\n` +
          'Maybe you forgot to create a shape you want to order or it is a typo in ordering itself.'
        );
      }

      // First of all, we need to mark our shape as shape that must be rendered in further sequences
      sequence.push(() => shapesToRender.push(shapeToRender));

      // But, if there are animations specified for the shape
      // We need to add their animations in the sequence as well
      (order.animations?.map(item => animations.get(item)) ?? [])
        .forEach(animation => sequence.push(() => animation?.animate(shapeToRender)));

      // Finally, we need to re-render all the shapes that were (possibly) affected by animation
      sequence.push(() => this.renderShapes(shapesToRender));
    }

    // When all of the rendering and animation is done - we can freely remove the listeners from animations
    sequence.push(() => animations.forEach((animation: Animationable) => animation.removeAllListeners()));

    // We can't allow Promise.all() here or anything that could render the shapes concurrently or parallel
    // Hence, we need to reduce the sequence to the chain of promises, so we can get waterfall rendering
    return await sequence.reduce(async (promise, item) => await promise.then(item), Promise.resolve());
  }

  public toObject (): SlideDeclaration {
    const name = this.name;
    const shapes = [...this.shapes.entries()].map(([name, shape]) => ({ ...shape.toObject(), name }));
    const animations = [...this.animations.entries()].map(([name, animation]) => ({ ...animation.toObject(), name }));
    const order = this.order;

    return { name, shapes, animations, order };
  }

  public toJSON (): string {
    return JSON.stringify(this.toObject());
  }

  private initShapes (declaration: ShapeDeclaration[]): void {
    declaration.forEach((shapeDeclaration: ShapeDeclaration) => {
      const ctor = SHAPES.get(shapeDeclaration.type as ShapeType);

      if (ctor === undefined) {
        throw new Error(`Shape "${shapeDeclaration.name}" (${shapeDeclaration.type}) is unknown for me, maybe you made a typo?`);
      }

      this.addShape(shapeDeclaration.name, ctor.fromObject(shapeDeclaration));
    });
  }

  private initAnimations (declaration: AnimationDeclaration[]): void {
    declaration.forEach((animationDeclaration: AnimationDeclaration) => {
      const ctor = ANIMATIONS.get(animationDeclaration.type as AnimationType);

      if (ctor === undefined) {
        throw new Error(`Animation "${animationDeclaration.name}" (${animationDeclaration.type}) is unknown for me, maybe you made a typo?`);
      }

      this.addAnimation(animationDeclaration.name, ctor.fromObject(animationDeclaration));
    });
  }

  private renderShapes (shapes: ShapeRenderable[]): void {
    this.cursor.eraseScreen();
    shapes.forEach((shape: ShapeRenderable) => shape.render(this.cursor));
    this.cursor.flush();
  }
}
