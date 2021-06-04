import type { TextObject } from "kittik-shape-text";
import { Text } from "kittik-shape-text";
import type { AnimationDeclaration } from "../src/animation/AnimationDeclaration";
import { Canvas } from "terminal-canvas";
import type { OrderDeclaration } from "../src/slide/OrderDeclaration";
import { Print } from "kittik-animation-print";
import type { ShapeDeclaration } from "../src/shape/ShapeDeclaration";
import { Slide } from "../src/slide/Slide";
import type { SlideDeclaration } from "../src/slide/SlideDeclaration";

const SLIDE_DECLARATION: SlideDeclaration = {
  name: "Testing Slide",
  shapes: [
    {
      name: "Hello",
      type: "Text",
      options: {
        text: "Hello, World!",
      },
    },
  ],
  animations: [
    {
      name: "Print",
      type: "Print",
      options: {
        duration: 1,
      },
    },
  ],
  order: [
    {
      shape: "Hello",
      animations: ["Print", "Print"],
    },
  ],
};

const SERIALIZED_TEXT_DECLARATION: ShapeDeclaration & TextObject = {
  name: "Hello",
  type: "Text",
  options: {
    align: "center",
    background: "none",
    blink: false,
    bold: false,
    dim: false,
    foreground: "none",
    height: "25%",
    hidden: false,
    reverse: false,
    text: "Hello, World!",
    underlined: false,
    width: "50%",
    x: "left",
    y: "top",
  },
};

const SERIALIZED_ANIMATION_DECLARATION: AnimationDeclaration = {
  name: "Print",
  type: "Print",
  options: {
    duration: 1,
    easing: "outQuad",
  },
};

const SERIALIZED_ORDER_DECLARATION: OrderDeclaration = {
  shape: "Hello",
  animations: ["Print", "Print"],
};

const SERIALIZED_SLIDE_DECLARATION: SlideDeclaration = {
  name: "Testing Slide",
  shapes: [SERIALIZED_TEXT_DECLARATION],
  animations: [SERIALIZED_ANIMATION_DECLARATION],
  order: [SERIALIZED_ORDER_DECLARATION],
};

describe("slide", () => {
  it("should properly generate a unique name by default", () => {
    expect.hasAssertions();

    const slide = new Slide();
    expect(/Untitled Slide #.{7}/u.test(slide.name)).toBe(true);
  });

  it("should properly throw an error if shape type is unknown", () => {
    expect.hasAssertions();

    const canvas = new Canvas();

    expect(
      () =>
        new Slide(
          {
            name: "Test",

            /*
             * I'm doing this to test if runtime semantics will be still valid
             * You must not be able to provide shape type any other then allowed
             */
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            shapes: [{ name: "Test", type: "unknown" as const }],
            order: [{ shape: "Test" }],
          },
          canvas
        )
    ).toThrow(
      'You have specified a shape with the name "Test" in slide "Test". ' +
        'This shape has an unknown type "unknown". ' +
        'Maybe you made a typo in "type" or tried to use a shape we do not have implemented.'
    );
  });

  it("should properly throw an error if animation type is unknown", () => {
    expect.hasAssertions();

    const canvas = new Canvas();

    expect(
      () =>
        new Slide(
          {
            name: "Test",
            shapes: [{ name: "Test", type: "Text" as const, options: {} }],

            /*
             * I'm doing this to test if runtime semantics will be still valid
             * You must not be able to provide animation type any other then allowed
             */
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            animations: [{ name: "Test", type: "unknown" as const }],
            order: [{ shape: "Test" }],
          },
          canvas
        )
    ).toThrow(
      'You have specified an animation with the name "Test" in slide "Test". ' +
        'This animation has an unknown type "unknown". ' +
        'Maybe you made a typo in "type" or tried to use an animation we do not have implemented.'
    );
  });

  it("should properly throw an error if trying to use shape name in ordering that does not exist", async () => {
    expect.hasAssertions();

    const canvas = new Canvas();
    const slide = new Slide(
      {
        name: "Test",
        shapes: [],
        order: [{ shape: "Not Exists" }],
      },
      canvas
    );

    await expect(slide.render()).rejects.toThrow(
      'You specified shape "Not Exists" in slide "Test" as part of ordering, ' +
        "but it does not exist in shapes declaration for the slide. " +
        "Maybe you forgot to create a shape you want to order or it is a typo in ordering itself."
    );
  });

  it("should properly render the whole slide", async () => {
    expect.hasAssertions();

    const canvas = new Canvas();
    const slide = Slide.create(SLIDE_DECLARATION, canvas);
    const writeSpy = jest.spyOn(canvas, "write").mockReturnThis();
    const eraseScreenSpy = jest.spyOn(canvas, "eraseScreen").mockReturnThis();
    const flushSpy = jest.spyOn(canvas, "flush").mockReturnThis();

    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    expect(await slide.render()).toBeUndefined();

    expect(writeSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
    expect(eraseScreenSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
    expect(flushSpy.mock.calls.length).toBeGreaterThanOrEqual(3);
  });

  it("should render the slide without animations", async () => {
    expect.hasAssertions();

    const canvas = new Canvas();
    const slide = Slide.create(
      {
        name: "Test",
        shapes: [{ name: "Test", type: "Text" as const, options: {} }],
        order: [{ shape: "Test" }],
      },
      canvas
    );

    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    expect(await slide.render()).toBeUndefined();
  });

  it("should render the slide with unknown animation in ordering", async () => {
    expect.hasAssertions();

    const canvas = new Canvas();
    const slide = Slide.create(
      {
        name: "Test",
        shapes: [{ name: "Test", type: "Text" as const, options: {} }],
        order: [{ shape: "Test", animations: ["Not Exists"] }],
      },
      canvas
    );

    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    expect(await slide.render()).toBeUndefined();
  });

  it("should properly serialize slide to the object representation", () => {
    expect.hasAssertions();

    const canvas = new Canvas();
    const slide = Slide.create(SLIDE_DECLARATION, canvas);

    expect(slide.toObject()).toStrictEqual(SERIALIZED_SLIDE_DECLARATION);
  });

  it("should properly serialize slide to JSON representation", () => {
    expect.hasAssertions();

    const canvas = new Canvas();
    const slide = Slide.create(SLIDE_DECLARATION, canvas);

    expect(JSON.parse(slide.toJSON())).toStrictEqual(
      SERIALIZED_SLIDE_DECLARATION
    );
  });

  it("should properly create slide from object representation", async () => {
    expect.hasAssertions();

    const canvas = new Canvas();
    const slide = Slide.fromObject(SLIDE_DECLARATION, canvas);

    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    expect(await slide.render()).toBeUndefined();
  });

  it("should properly create slide from json representation", async () => {
    expect.hasAssertions();

    const canvas = new Canvas();
    const slide = Slide.fromJSON(JSON.stringify(SLIDE_DECLARATION), canvas);

    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    expect(await slide.render()).toBeUndefined();
  });

  it("should properly instantiate an empty slide instance when no declaration nor canvas is passed", () => {
    expect.hasAssertions();

    const slide = new Slide();
    expect(slide.canvas).toBeInstanceOf(Canvas);
    expect(slide.shapes.size).toBe(0);
    expect(slide.animations.size).toBe(0);
    expect(slide.order).toHaveLength(0);
  });

  it("should properly instantiate an empty slide instance when nothing is passed but an empty arrays", () => {
    expect.hasAssertions();

    const canvas = new Canvas();
    const slide = new Slide({ name: "Test", order: [], shapes: [] }, canvas);
    expect(slide.canvas).toBeInstanceOf(Canvas);
    expect(slide.shapes.size).toBe(0);
    expect(slide.animations.size).toBe(0);
    expect(slide.order).toHaveLength(0);
  });

  it("should properly throw an error when trying to add shape that is already added", () => {
    expect.hasAssertions();

    const canvas = new Canvas();
    const slide = new Slide(
      {
        name: "Test",
        shapes: [{ name: "Test", type: "Text" as const, options: {} }],
        order: [],
      },
      canvas
    );

    expect(() => {
      slide.addShape("Test", Text.create());
    }).toThrow(
      'You are trying to add shape with the name "Test" into the slide "Test". ' +
        'But this shape already exists in slide "Test".'
    );
  });

  it("should properly throw an error when trying to add animation that is already added", () => {
    expect.hasAssertions();

    const canvas = new Canvas();
    const slide = new Slide(
      {
        name: "Test",
        shapes: [],
        order: [],
        animations: [{ name: "Test", type: "Print" as const, options: {} }],
      },
      canvas
    );

    expect(() => {
      slide.addAnimation("Test", Print.create({}));
    }).toThrow(
      'You are trying to add animation with the name "Test" into the slide "Test". ' +
        'But this animation already exists in slide "Test".'
    );
  });

  it("should properly throw an error when trying to add ordering for the shape that is already added", () => {
    expect.hasAssertions();

    const canvas = new Canvas();
    const slide = new Slide(
      { name: "Test", shapes: [], order: [{ shape: "Test" }] },
      canvas
    );

    expect(() => {
      slide.addOrder("Test");
    }).toThrow(
      'You already have specified an ordering for shape "Test" in slide "Test". ' +
        "Adding another one with the same name does not make any sense. " +
        "Did you make a typo in shape name or forgot that you already added a shape to ordering?"
    );
  });

  it("should properly throw an error when trying to add ordering for the animation that is not exists", () => {
    expect.hasAssertions();

    const canvas = new Canvas();
    const slide = new Slide(
      { name: "Test", shapes: [], order: [{ shape: "Test" }] },
      canvas
    );

    expect(() => {
      slide.addOrder("Test #2", ["Not Existing"]);
    }).toThrow(
      'You have provided animations for the shape "Test #2" in slide "Test". ' +
        'But, some of them could not be found in the slide "Test". ' +
        "These animations are: [Not Existing]. " +
        'Please, check if the animations from the list are declared in slide "Test".'
    );
  });

  it("should properly add order to the slide", () => {
    expect.hasAssertions();

    const slide = new Slide();
    slide.addOrder("Test");

    expect(slide.order).toHaveLength(1);
    expect(slide.order[0]).toStrictEqual({ animations: [], shape: "Test" });
  });
});
