import {
  DeckBuilder,
  ShapeBuilder,
  AnimationBuilder,
} from "../src/main/kittik";

DeckBuilder.start()
  .withSlide((slide) =>
    slide
      .withShape(
        "Animated JavaScript",
        ShapeBuilder.start("Code")
          .withText("if (number % 3 === 0 && number % 5 === 0) { console.log('Fizz Buzz'); }")
          .withX("center")
          .withY("middle")
          .end()
      )
      .withAnimation(
        "Print Animation",
        AnimationBuilder.start("Print").withDuration(10000).end()
      )
      .withOrder("Animated JavaScript", ["Print Animation"])
      .end()
  )
  .end()
  .render();
