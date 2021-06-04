import { Focus } from "../src/Focus";
import type { FocusObject } from "../src/FocusObject";
import { Shape } from "kittik-shape-basic";

describe("focus animation", () => {
  it("should properly get duration with different repeat count", () => {
    expect.hasAssertions();

    const animation = new Focus({ duration: 5000, repeat: 5 });
    expect(animation.duration).toBe(1000);
  });

  it("should properly call animateBounce() with bounceUp direction", async () => {
    expect.hasAssertions();

    const shape = new Shape();
    const animation = new Focus({ direction: "bounceUp" });
    const spy = jest
      .spyOn(animation, "animateProperty")
      .mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: "y", startValue: 0, endValue: -5 })
    );
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: "y", startValue: -5, endValue: 0 })
    );
  });

  it("should properly call animateBounce() with bounceRight direction", async () => {
    expect.hasAssertions();

    const shape = new Shape();
    const animation = new Focus({ direction: "bounceRight" });
    const spy = jest
      .spyOn(animation, "animateProperty")
      .mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: "x", startValue: 0, endValue: 5 })
    );
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: "x", startValue: 5, endValue: 0 })
    );
  });

  it("should properly call animateBounce() with bounceDown direction", async () => {
    expect.hasAssertions();

    const shape = new Shape();
    const animation = new Focus({ direction: "bounceDown" });
    const spy = jest
      .spyOn(animation, "animateProperty")
      .mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: "y", startValue: 0, endValue: 5 })
    );
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: "y", startValue: 5, endValue: 0 })
    );
  });

  it("should properly call animateBounce() with bounceLeft direction", async () => {
    expect.hasAssertions();

    const shape = new Shape();
    const animation = new Focus({ direction: "bounceLeft" });
    const spy = jest
      .spyOn(animation, "animateProperty")
      .mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: "x", startValue: 0, endValue: -5 })
    );
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: "x", startValue: -5, endValue: 0 })
    );
  });

  it("should properly call animateShake() with shakeX direction", async () => {
    expect.hasAssertions();

    const shape = new Shape();
    const animation = new Focus({ direction: "shakeX" });
    const spy = jest
      .spyOn(animation, "animateProperty")
      .mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: "x", startValue: 0, endValue: -5 })
    );
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: "x", startValue: -5, endValue: 5 })
    );
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: "x", startValue: 5, endValue: 0 })
    );
  });

  it("should properly call animateShake() with shakeY direction", async () => {
    expect.hasAssertions();

    const shape = new Shape();
    const animation = new Focus({ direction: "shakeY" });
    const spy = jest
      .spyOn(animation, "animateProperty")
      .mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: "y", startValue: 0, endValue: -5 })
    );
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: "y", startValue: -5, endValue: 5 })
    );
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: "y", startValue: 5, endValue: 0 })
    );
  });

  it("should properly call the animate() method with default type", async () => {
    expect.hasAssertions();

    const shape = new Shape();
    const animation = new Focus();
    const spy = jest
      .spyOn(animation, "animateProperty")
      .mockResolvedValue(shape);

    await animation.animate(shape);

    expect(spy).toHaveBeenCalledTimes(3);
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: "x", startValue: 0, endValue: -5 })
    );
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: "x", startValue: -5, endValue: 5 })
    );
    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({ property: "x", startValue: 5, endValue: 0 })
    );
  });

  it("should properly throw an error if trying to animate with the wrong direction", async () => {
    expect.hasAssertions();

    /*
     * Since direction for the animation can be specified at runtime
     * I'm not sure that it will be exactly what we want by the contract
     * So here it a test with disabled check from TypeScript that checks this case
     */
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const animation = new Focus({ direction: "wrong" });
    const shape = new Shape();

    await expect(animation.animate(shape)).rejects.toThrow(
      'Focus animation does not support any other directions, except "bounce" or "shake". ' +
        'But, you specified as a direction for the animation "wrong". ' +
        "Maybe you made a typo?"
    );
  });

  it("should properly throw an error if trying to animate with the wrong bounce direction", async () => {
    expect.hasAssertions();

    const animation = new Focus();
    const shape = new Shape();

    // Another case if something comes from runtime and it is not correct
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    await expect(animation.animateBounce(shape, "wrong")).rejects.toThrow(
      "Unexpected direction for bounce animation: wrong"
    );
  });

  it("should properly throw an error if trying to animate with the wrong shake direction", async () => {
    expect.hasAssertions();

    const animation = new Focus();
    const shape = new Shape();

    // Another case if something comes from runtime and it is not correct
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    await expect(animation.animateShake(shape, "wrong")).rejects.toThrow(
      "Unexpected direction for shake animation: wrong"
    );
  });

  it("should properly serialize animation to Object", () => {
    expect.hasAssertions();

    const animation = new Focus();
    const obj = animation.toObject();

    expect(obj).toStrictEqual({
      type: "Focus",
      options: {
        direction: "shakeX",
        duration: 1000,
        easing: "outQuad",
        offset: 5,
        repeat: 1,
      },
    });
  });

  it("should properly create Animation instance from object", () => {
    expect.hasAssertions();

    const obj: FocusObject = {
      type: "Focus",
      options: {
        direction: "bounceDown",
        duration: 4000,
        easing: "inOutExpo",
        offset: 20,
        repeat: 5,
      },
    };

    const animation: Focus = Focus.fromObject(obj);

    expect(animation).toBeInstanceOf(Focus);
    expect(animation.duration).toBe(800);
    expect(animation.easing).toBe("inOutExpo");
    expect(animation.direction).toBe("bounceDown");
    expect(animation.offset).toBe(20);
    expect(animation.repeat).toBe(5);
  });
});
