import type { AnimationDeclaration } from "../animation/AnimationDeclaration";
import type { OrderDeclaration } from "./OrderDeclaration";
import type { ShapeDeclaration } from "../shape/ShapeDeclaration";

export interface SlideDeclaration {
  name: string;
  shapes: ShapeDeclaration[];
  animations?: AnimationDeclaration[];
  order: OrderDeclaration[];
}
