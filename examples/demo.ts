import {
  DeckBuilder,
  ShapeBuilder,
  AnimationBuilder,
} from "../src/main/kittik";

const SHAPES = {
  "Code Snippet": ShapeBuilder.start("Code")
    .withOptions({
      text: `
      /**
       * Code to convert RGB color to HEX code
       */

       const RGBtoHEX = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
       RGBtoHEX(255, 165, 1);

       // output -> 'ffa501'
    `,
      x: "center",
      y: "middle",
    })
    .end(),

  "Presentation Title": ShapeBuilder.start("FigText")
    .withOptions({
      text: "How to convert RGB to HEX?",
      x: "center",
      y: "middle",
    })
    .end(),

  "Lorem Ipsum": ShapeBuilder.start("Text")
    .withOptions({
      align: "left",
      text: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `,
      x: "center",
      y: "middle",
    })
    .end(),
};

const ANIMATIONS = {
  Print: AnimationBuilder.start("Print")
    .withOptions({
      duration: 5000,
    })
    .end(),
  "Slide In": AnimationBuilder.start("Slide")
    .withOptions({
      direction: "inLeft",
      duration: 2500,
    })
    .end(),
};

DeckBuilder.start(SHAPES, ANIMATIONS)
  .withSlide((slide) => slide.withOrder("Presentation Title", ["Print"]).end())
  .withSlide((slide) => slide.withOrder("Lorem Ipsum", ["Slide In"]).end())
  .withSlide((slide) => slide.withOrder("Code Snippet", ["Slide In"]).end())
  .end()
  .render();
