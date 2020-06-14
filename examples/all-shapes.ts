import { DeckBuilder, ShapeBuilder } from "../src/main/kittik";

const SHAPES = {
  Code: ShapeBuilder.start("Code")
    .withOptions({
      text: 'console.log("Hello, World!")',
      x: "center",
      y: "middle",
    })
    .end(),
  FigText: ShapeBuilder.start("FigText")
    .withOptions({
      font: "Three Point",
      text: "Hello, World!",
      x: "center",
      y: "middle",
    })
    .end(),
  Rectangle: ShapeBuilder.start("Rectangle")
    .withOptions({
      background: "aqua",
      foreground: "black",
      height: "25%",
      text: "Hello, World!",
      width: "50%",
      x: "center",
      y: "middle",
    })
    .end(),
  Text: ShapeBuilder.start("Text")
    .withOptions({
      align: "center",
      text: "Hello, World!",
      x: "center",
      y: "middle",
    })
    .end(),
};

DeckBuilder.start(SHAPES)
  .withSlide((slide) => slide.withOrder("Text").end())
  .withSlide((slide) => slide.withOrder("Rectangle").end())
  .withSlide((slide) => slide.withOrder("FigText").end())
  .withSlide((slide) => slide.withOrder("Code").end())
  .end()
  .render();
