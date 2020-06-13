import { DeckBuilder, ShapeBuilder } from "../src/main/kittik";

DeckBuilder.start()
  .withSlide((slide) =>
    slide
      .withShape(
        "Rectangle in the Middle",
        ShapeBuilder.start("Rectangle")
          .withBackground("white")
          .withForeground("green")
          .withHeight("50%")
          .withWidth("50%")
          .withX("center")
          .withY("middle")
          .withText("Customized Hello, World!")
          .end()
      )
      .withOrder("Rectangle in the Middle")
      .end()
  )
  .end()
  .render();
