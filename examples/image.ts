import { DeckBuilder, ShapeBuilder } from "../src/main/kittik";

DeckBuilder.start()
  .withSlide((slide) =>
    slide
      .withShape(
        "Panda Image!",
        ShapeBuilder.start("Image")
          .withOptions({
            image: "../src/shapes/kittik-shape-image/examples/panda.jpg",
          })
          .end()
      )
      .withOrder("Panda Image!")
      .end()
  )
  .end()
  .render();
