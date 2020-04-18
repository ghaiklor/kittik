import { AnimationBuilder } from '../src/animation/AnimationBuilder';

describe('animation builder', () => {
  it('should properly create animation from the builder', () => {
    expect.hasAssertions();

    const animation = AnimationBuilder
      .start('Focus')
      .withType('Focus')
      .withDuration(2000)
      .withEasing('inBack')
      .end();

    expect(animation.toObject()).toStrictEqual({
      type: 'Focus',
      options: {
        direction: 'shakeX',
        duration: 2000,
        easing: 'inBack',
        offset: 5,
        repeat: 1
      }
    });
  });

  it('should properly build animation using withOptions()', () => {
    expect.hasAssertions();

    const animation = AnimationBuilder
      .start('Print')
      .withOptions({ duration: 5000 })
      .end();

    expect(animation.toObject()).toStrictEqual({
      type: 'Print',
      options: {
        duration: 5000,
        easing: 'outQuad'
      }
    });
  });

  it('should properly throw an error if animation is absent', () => {
    expect.hasAssertions();

    expect(() => {
      // This is a specific case where I check if someone tries to build not existing animation
      // Though, this case was covered by types, so I need to disable it to write the test
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      AnimationBuilder.start('Nonsense').end();
    }).toThrow(
      'You tried to build an animation with the type "Nonsense". ' +
      'But the animation of this type is not implemented or you made a typo.'
    );
  });
});
