import { ShapeBuilder } from '../src/shape/ShapeBuilder';
import { Canvas } from 'terminal-canvas';

describe('ShapeBuilder', () => {
  it('Should properly build the shape via builder', () => {
    const shape = ShapeBuilder
      .start('Rectangle')
      .withCursor(Canvas.create())
      .withType('Rectangle')
      .withText('Hello, World')
      .withX('10%')
      .withY('10%')
      .withWidth('60%')
      .withHeight('40%')
      .withBackground('white')
      .withForeground('black')
      .end();

    expect(shape.toObject()).toEqual({
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

  it('Should properly build the shape via withOptions()', () => {
    const shape = ShapeBuilder
      .start('Rectangle')
      .withOptions({ text: 'Hello, World' })
      .end();

    expect(shape.toObject()).toEqual({
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

  it('Should properly throw an error if shape is absent', () => {
    expect(() => {
      // This is a corner case where I check if builder throws an error when providing wrong type
      // Since this case has been covered by type system of TypeScript, I need to disable it
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      ShapeBuilder.start('Nonsense').end();
    }).toThrowError('Shape "Nonsense" you tried to build does not exist');
  });
});
