import { ShapeBuilder } from '../src/shape/ShapeBuilder';

describe('shape builder', () => {
  it('should properly build the shape via builder', () => {
    expect.hasAssertions();

    const shape = ShapeBuilder
      .start('Rectangle')
      .withType('Rectangle')
      .withText('Hello, World')
      .withX('10%')
      .withY('10%')
      .withWidth('60%')
      .withHeight('40%')
      .withBackground('white')
      .withForeground('black')
      .end();

    expect(shape.toObject()).toStrictEqual({
      type: 'Rectangle',
      options: {
        background: 'white',
        foreground: 'black',
        height: '40%',
        text: 'Hello, World',
        width: '60%',
        x: '10%',
        y: '10%'
      }
    });
  });

  it('should properly build the shape via withOptions()', () => {
    expect.hasAssertions();

    const shape = ShapeBuilder
      .start('Rectangle')
      .withOptions({ text: 'Hello, World' })
      .end();

    expect(shape.toObject()).toStrictEqual({
      type: 'Rectangle',
      options: {
        background: 'none',
        foreground: 'none',
        height: '25%',
        text: 'Hello, World',
        width: '50%',
        x: 'left',
        y: 'top'
      }
    });
  });

  it('should properly throw an error if shape is absent', () => {
    expect.hasAssertions();

    expect(() => {
      // This is a corner case where I check if builder throws an error when providing wrong type
      // Since this case has been covered by type system of TypeScript, I need to disable it
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ShapeBuilder.start('Nonsense').end();
    }).toThrow(
      'You tried to build a shape with the type "Nonsense". ' +
      'But the shape of this type is not implemented or you made a typo.'
    );
  });
});
