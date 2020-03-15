import { Animationable } from 'kittik-animation-basic';
import { AnimationDeclaration } from '../animation/AnimationDeclaration';
import { ANIMATIONS } from '../animation/Animations';
import { Canvas } from 'terminal-canvas';
import { OrderDeclaration } from './OrderDeclaration';
import { ShapeDeclaration } from '../shape/ShapeDeclaration';
import { ShapeRenderable } from 'kittik-shape-basic';
import { SHAPES } from '../shape/Shapes';
import { SlideDeclaration } from './SlideDeclaration';

export class Slide {
  private readonly cursor: Canvas;
  private readonly shapes: Map<string, ShapeRenderable>;
  private readonly animations: Map<string, Animationable>;
  private readonly order: OrderDeclaration[];

  constructor(cursor: Canvas, declaration: SlideDeclaration) {
    this.cursor = cursor;
    this.shapes = this.initShapes(declaration.shapes);
    this.animations = this.initAnimations(declaration.animations ?? []);
    this.order = declaration.order;
  }

  private initShapes(declaration: ShapeDeclaration[]): Map<string, ShapeRenderable> {
    const map = new Map<string, ShapeRenderable>();

    declaration.forEach(shapeDeclaration => {
      const ctor = SHAPES.get(shapeDeclaration.type);

      if (ctor === undefined) {
        throw new Error(`Shape "${shapeDeclaration.name}" (${shapeDeclaration.type}) is unknown for me, maybe you made a typo?`);
      }

      map.set(shapeDeclaration.name, ctor.fromObject(shapeDeclaration, this.cursor));
    });

    return map;
  }

  private initAnimations(declaration: AnimationDeclaration[]): Map<string, Animationable> {
    const map = new Map<string, Animationable>();

    declaration.forEach(animationDeclaration => {
      const ctor = ANIMATIONS.get(animationDeclaration.type);

      if (ctor === undefined) {
        throw new Error(`Animation "${animationDeclaration.name}" (${animationDeclaration.type}) is unknown for me, maybe you made a typo?`);
      }

      map.set(animationDeclaration.name, ctor.fromObject(animationDeclaration));
    });

    return map;
  }

  private renderShapes(shapes: ShapeRenderable[]): void {
    this.cursor.eraseScreen();
    shapes.forEach(shape => shape.render());
    this.cursor.flush();
  }

  async render(): Promise<void> {
    const shapes = this.shapes;
    const animations = this.animations;
    const order = this.order;
    const shapesToRender: ShapeRenderable[] = [];
    const sequence: Array<() => void> = [];

    // We need to re-render shapes each time when some of the animations made a tick
    // Hence, made an update in shape properties that we need to reflect on canvas
    animations.forEach(animation => animation.on('tick', () => this.renderShapes(shapesToRender)));

    for (let i = 0; i < order.length; i++) {
      const shapeToRender = shapes.get(order[i].shape);
      if (shapeToRender === undefined) {
        throw new Error(
          `You specified shape "${order[i].shape}" as part of ordering, but it does not exist in shapes declaration.` +
          'Maybe you forgot to create a shape you want to order or it is a typo in ordering itself.'
        );
      }

      // First of all, we need to mark our shape as shape that must be rendered in further sequences
      sequence.push(() => shapesToRender.push(shapeToRender));

      // But, if there are animations specified for the shape
      // We need to add their animations in the sequence as well
      (order[i].animations?.map(item => animations.get(item)) ?? [])
        .forEach(animation => sequence.push(() => animation?.animate(shapeToRender)));

      // Finally, we need to re-render all the shapes that were (possibly) affected by animation
      sequence.push(() => this.renderShapes(shapesToRender));
    }

    // When all of the rendering and animation is done - we can freely remove the listeners from animations
    sequence.push(() => animations.forEach(animation => animation.removeAllListeners()));

    // We can't allow Promise.all() here or anything that could render the shapes concurrently or parallel
    // Hence, we need to reduce the sequence to the chain of promises, so we can get waterfall rendering
    return sequence.reduce(async (promise, item) => promise.then(item), Promise.resolve());
  }

  toObject(): SlideDeclaration {
    const shapes = [...this.shapes.entries()].map(([name, shape]) => ({ ...shape.toObject(), name }));
    const animations = [...this.animations.entries()].map(([name, animation]) => ({ ...animation.toObject(), name }));
    const order = this.order;

    return { shapes, animations, order };
  }

  toJSON(): string {
    return JSON.stringify(this.toObject());
  }

  static create(cursor: Canvas, declaration: SlideDeclaration): Slide {
    return new this(cursor, declaration);
  }

  static fromObject(obj: SlideDeclaration, cursor: Canvas): Slide {
    return this.create(cursor, obj);
  }

  static fromJSON(json: string, cursor: Canvas): Slide {
    return this.fromObject(JSON.parse(json), cursor);
  }
}
