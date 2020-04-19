import { ANIMATIONS, AnimationType } from '../animation/Animations';
import { SHAPES, ShapeType } from '../shape/Shapes';
import { AnimationDeclaration } from '../animation/AnimationDeclaration';
import { Animationable } from 'kittik-animation-basic';
import { Canvas } from 'terminal-canvas';
import { OrderDeclaration } from './OrderDeclaration';
import { ShapeDeclaration } from '../shape/ShapeDeclaration';
import { ShapeRenderable } from 'kittik-shape-basic';
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
  public canvas: Canvas = Canvas.create();
  public name = 'Untitled Slide';
  public readonly shapes: Map<string, ShapeRenderable> = new Map<string, ShapeRenderable>();
  public readonly animations: Map<string, Animationable> = new Map<string, Animationable>();
  public readonly order: OrderDeclaration[] = [];

  public constructor (canvas?: Canvas, declaration?: SlideDeclaration) {
    if (typeof canvas !== 'undefined') {
      this.canvas = canvas;
    }

    if (typeof declaration?.name !== 'undefined') {
      this.name = declaration.name;
    }

    if (typeof declaration?.shapes !== 'undefined') {
      this.initShapes(declaration.shapes);
    }

    if (typeof declaration?.animations !== 'undefined') {
      this.initAnimations(declaration.animations);
    }

    if (typeof declaration?.order !== 'undefined') {
      this.order = declaration.order;
    }
  }

  public static create (canvas?: Canvas, declaration?: SlideDeclaration): Slide {
    return new this(canvas, declaration);
  }

  public static fromObject (obj: SlideDeclaration, canvas?: Canvas): Slide {
    return this.create(canvas, obj);
  }

  public static fromJSON (json: string, canvas?: Canvas): Slide {
    return this.fromObject(JSON.parse(json), canvas);
  }

  public addShape (name: string, shape: ShapeRenderable, toOverride = false): void {
    if (this.shapes.has(name) && !toOverride) {
      throw new Error(
        `You are trying to add shape with the name "${name}" into the slide "${this.name}". ` +
        `But this shape already exists in slide "${this.name}".`
      );
    }

    this.shapes.set(name, shape);
  }

  public addAnimation (name: string, animation: Animationable, toOverride = false): void {
    if (this.animations.has(name) && !toOverride) {
      throw new Error(
        `You are trying to add animation with the name "${name}" into the slide "${this.name}". ` +
        `But this animation already exists in slide "${this.name}".`
      );
    }

    this.animations.set(name, animation);
  }

  public addOrder (shape: string, animations: string[] = []): void {
    if (this.order.some((order) => order.shape === shape)) {
      throw new Error(
        `You already have specified an ordering for shape "${shape}" in slide "${this.name}". ` +
        'Adding another one with the same name does not make any sense. ' +
        'Did you make a typo in shape name or forgot that you already added a shape to ordering?'
      );
    }

    const unknownAnimations = animations.filter((animation) => !this.animations.has(animation));
    if (unknownAnimations.length > 0) {
      throw new Error(
        `You have provided animations for the shape "${shape}" in slide "${this.name}". ` +
        `But, some of them could not be found in the slide "${this.name}". ` +
        `These animations are: [${unknownAnimations.join(', ')}]. ` +
        `Please, check if the animations from the list are declared in slide "${this.name}".`
      );
    }

    this.order.push({ animations, shape });
  }

  public async render (): Promise<void> {
    const { animations, shapes } = this;
    const shapesToRender: ShapeRenderable[] = [];
    const sequence: Array<() => void> = [];
    const onTick = (): void => this.renderShapes(shapesToRender);

    // We need to re-render shapes each time when some of the animations made a tick
    // Hence, made an update in shape properties that we need to reflect on canvas
    animations.forEach((animation) => animation.on('tick', onTick));

    for (const order of this.order) {
      const shapeToRender = shapes.get(order.shape);
      if (typeof shapeToRender === 'undefined') {
        throw new Error(
          `You specified shape "${order.shape}" in slide "${this.name}" ` +
          'as part of ordering, but it does not exist in shapes declaration for the slide. ' +
          'Maybe you forgot to create a shape you want to order or it is a typo in ordering itself.'
        );
      }

      // First of all, we need to mark our shape as shape that must be rendered in further sequences
      sequence.push(() => shapesToRender.push(shapeToRender));

      // But, if there are animations specified for the shape
      // We need to add their animations in the sequence as well
      (order.animations?.map((item) => animations.get(item)) ?? [])
        .forEach((animation) => sequence.push(() => animation?.animate(shapeToRender)));

      // Finally, we need to re-render all the shapes that were (possibly) affected by animation
      sequence.push(() => this.renderShapes(shapesToRender));
    }

    // When all of the rendering and animation is done - we can freely remove the listeners from animations
    sequence.push(() => animations.forEach((animation) => animation.removeListener('tick', onTick)));

    // We can't allow Promise.all() here or anything that could render the shapes concurrently
    // Hence, we need to reduce the sequence to the chain of promises, so we can get waterfall rendering
    return await sequence.reduce(async (promise, item) => await promise.then(item), Promise.resolve());
  }

  public toObject (): SlideDeclaration {
    const { name, order } = this;

    const shapes = [...this.shapes.entries()]
      .map(([shapeName, shape]) => ({ ...shape.toObject(), name: shapeName }));

    const animations = [...this.animations.entries()]
      .map(([animationName, animation]) => ({ ...animation.toObject(), name: animationName }));

    return { animations, name, order, shapes };
  }

  public toJSON (): string {
    return JSON.stringify(this.toObject());
  }

  private initShapes (declaration: ShapeDeclaration[]): void {
    declaration.forEach((shapeDeclaration) => {
      const ctor = SHAPES.get(shapeDeclaration.type as ShapeType);

      if (typeof ctor === 'undefined') {
        throw new Error(
          `You have specified a shape with the name "${shapeDeclaration.name}" in slide "${this.name}". ` +
          `This shape has an unknown type "${shapeDeclaration.type}". ` +
          'Maybe you made a typo in "type" or tried to use a shape we do not have implemented.'
        );
      }

      this.addShape(shapeDeclaration.name, ctor.fromObject(shapeDeclaration));
    });
  }

  private initAnimations (declaration: AnimationDeclaration[]): void {
    declaration.forEach((animationDeclaration) => {
      const ctor = ANIMATIONS.get(animationDeclaration.type as AnimationType);

      if (typeof ctor === 'undefined') {
        throw new Error(
          `You have specified an animation with the name "${animationDeclaration.name}" in slide "${this.name}". ` +
          `This animation has an unknown type "${animationDeclaration.type}". ` +
          'Maybe you made a typo in "type" or tried to use an animation we do not have implemented.'
        );
      }

      this.addAnimation(animationDeclaration.name, ctor.fromObject(animationDeclaration));
    });
  }

  private renderShapes (shapes: ShapeRenderable[]): void {
    this.canvas.eraseScreen();
    shapes.forEach((shape) => shape.render(this.canvas));
    this.canvas.flush();
  }
}
