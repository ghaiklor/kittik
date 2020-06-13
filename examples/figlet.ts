import { DeckBuilder, ShapeBuilder } from "../src/main/kittik";

DeckBuilder.start()
  .withSlide((slide) =>
    slide
      .withShape(
        "Figlet Art",
        ShapeBuilder.start("FigText")
          .withOptions({
            font: "Wet Letter",
            text: "Real ASCII Art!",
            x: "center",
            y: "middle",
          })
          .end()
      )
      .withOrder("Figlet Art")
      .end()
  )
  .end()
  .render();
