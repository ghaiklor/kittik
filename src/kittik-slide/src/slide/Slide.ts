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
    this.animations = this.initAnimations(declaration.animations);
    this.order = declaration.order;
  }

  private initShapes(declaration: ShapeDeclaration[]): Map<string, ShapeRenderable> {
    const map = new Map<string, ShapeRenderable>();

    declaration.forEach(shape => {
      const Ctor = SHAPES.get(shape.type);

      if (Ctor === undefined) {
        throw new Error(`Shape ${shape.type} is unknown for me, maybe you made a typo?`);
      }

      map.set(shape.name, new Ctor(this.cursor, shape));
    });

    return map;
  }

  private initAnimations(declaration: AnimationDeclaration[]): Map<string, Animationable> {
    const map = new Map<string, Animationable>();

    declaration.forEach(animation => {
      const Ctor = ANIMATIONS.get(animation.type);

      if (Ctor === undefined) {
        throw new Error(`Animation ${animation.type} is unknown for me, maybe you made a typo?`);
      }

      map.set(animation.name, new Ctor(animation));
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
    const sequence = [];

    animations.forEach(animation => animation.on('tick', () => this.renderShapes(shapesToRender)));

    for (let i = 0; i < order.length; i++) {
      const shape = shapes.get(order[i].shape);
      if (shape === undefined) {
        throw new Error(
          `You specified ${order[i].shape} as part of ordering, but it does not exists.` +
          'Maybe you forgot to create a shape you want to order or it is a typo in ordering itself.'
        );
      }

      const shapeAnimations = order[i].animations?.map(item => animations.get(item)) ?? [];

      sequence.push(() => shapesToRender.push(shape));
      shapeAnimations.forEach(animation => sequence.push(() => animation?.animate(shape)));
      sequence.push(() => this.renderShapes(shapesToRender));
    }

    sequence.push(() => animations.forEach(animation => animation.removeAllListeners()));

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
