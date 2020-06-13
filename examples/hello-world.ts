import { DeckBuilder, ShapeBuilder } from "../src/main/kittik";

DeckBuilder.start()
  .withSlide((slide) =>
    slide
      .withShape(
        "Hello, World!",
        ShapeBuilder.start("Text").withText("Hello, World!").end()
      )
      .withOrder("Hello, World!")
      .end()
  )
  .end()
  .render();
