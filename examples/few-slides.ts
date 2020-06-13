import { DeckBuilder, ShapeBuilder } from "../src/main/kittik";

DeckBuilder.start()
  .withSlide((slide) =>
    slide
      .withShape(
        "Press N",
        ShapeBuilder.start("FigText")
          .withOptions({
            font: "Dancing Font",
            text: "Next Slide -> N",
            x: "center",
            y: "middle",
          })
          .end()
      )
      .withOrder("Press N")
      .end()
  )
  .withSlide((slide) =>
    slide
      .withShape(
        "Press P",
        ShapeBuilder.start("FigText")
          .withOptions({
            font: "Dancing Font",
            text: "Previous Slide -> P",
            x: "center",
            y: "middle",
          })
          .end()
      )
      .withOrder("Press P")
      .end()
  )
  .withSlide((slide) =>
    slide
      .withShape(
        "Press Q",
        ShapeBuilder.start("FigText")
          .withOptions({
            font: "Dancing Font",
            text: "Quit -> Q",
            x: "center",
            y: "middle",
          })
          .end()
      )
      .withOrder("Press Q")
      .end()
  )
  .end()
  .render();
