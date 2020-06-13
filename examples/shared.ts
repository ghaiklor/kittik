import {
  DeckBuilder,
  ShapeBuilder,
  AnimationBuilder,
} from "../src/main/kittik";

const SHAPES = {
  Footer: ShapeBuilder.start("Text")
    .withX("right")
    .withY("bottom")
    .withText("(c) Eugene Obrezkov aka ghaiklor")
    .end(),
};

const ANIMATIONS = {
  "Footer Slide In": AnimationBuilder.start("Slide")
    .withOptions({
      direction: "inRight",
    })
    .end(),
  "Slide In": AnimationBuilder.start("Slide")
    .withOptions({
      direction: "inLeft",
    })
    .end(),
};

DeckBuilder.start(SHAPES, ANIMATIONS)
  .withSlide((slide) =>
    slide
      .withShape(
        "Local Shape, accessible here only",
        ShapeBuilder.start("Rectangle")
          .withBackground("green")
          .withForeground('black')
          .withX("center")
          .withY("middle")
          .withText("This shape is accessible in this slide only")
          .end()
      )
      .withOrder("Local Shape, accessible here only", ["Slide In"])
      .withOrder("Footer", ["Footer Slide In"])
      .end()
  )
  .withSlide((slide) =>
    slide
      .withShape(
        "Local Shape again",
        ShapeBuilder.start("Rectangle")
          .withBackground("green")
          .withForeground('black')
          .withX("center")
          .withY("middle")
          .withText(
            "Though, you can see that footer is accessible for all Deck"
          )
          .end()
      )
      .withOrder("Local Shape again", ["Slide In"])
      .withOrder("Footer", ["Footer Slide In"])
      .end()
  )
  .end()
  .render();
