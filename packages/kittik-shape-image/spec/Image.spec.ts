import { Canvas } from 'terminal-canvas';
import { Image } from '../src/Image';
import { ImageObject } from '../src/ImageObject';
import path from 'path';

describe('image shape', () => {
  it('should properly get/set image', () => {
    expect.hasAssertions();

    const shape = new Image();
    expect(shape.image).toStrictEqual('R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=');

    shape.image = 'dGVzdA==';
    expect(shape.image).toStrictEqual('dGVzdA==');

    shape.image = path.resolve(__dirname, '../examples/panda.jpg');
    expect(shape.image).toHaveLength(24180);

    shape.image = 'non-existing-file.png';
    expect(() => shape.image).toThrow('Image is not in base64 or does not exists on file system');
  });

  it('should properly render the shape', () => {
    expect.hasAssertions();

    const cursor = new Canvas();
    const shape = new Image({ image: 'dGVzdA==', width: '15', height: '5', x: '10', y: '10' });
    const writeSpy = jest.spyOn(cursor.stream, 'write').mockImplementation(() => true);

    shape.render(cursor);

    expect(writeSpy).toHaveBeenCalledTimes(1);
    expect(writeSpy).toHaveBeenCalledWith('\u001b[11;11H\u001b]1337;File=size=6;width=15;height=5;preserveAspectRatio=1;inline=1:dGVzdA==^G');
  });

  it('should properly render the shape with disabled preserveAspectRatio', () => {
    expect.hasAssertions();

    const cursor = new Canvas();
    const shape = new Image({ image: 'dGVzdA==', preserveAspectRatio: false, width: '15', height: '5', x: '10', y: '10' });
    const writeSpy = jest.spyOn(cursor.stream, 'write').mockImplementation(() => true);

    shape.render(cursor);

    expect(writeSpy).toHaveBeenCalledTimes(1);
    expect(writeSpy).toHaveBeenCalledWith('\u001b[11;11H\u001b]1337;File=size=6;width=15;height=5;preserveAspectRatio=0;inline=1:dGVzdA==^G');
  });

  it('should properly serialize shape to object', () => {
    expect.hasAssertions();

    const shape = new Image({ image: 'dGVzdA==' });
    const obj = shape.toObject();

    expect(obj).toStrictEqual({
      type: 'Image',
      options: {
        text: '',
        width: '50%',
        height: '25%',
        x: 'left',
        y: 'top',
        background: 'none',
        foreground: 'none',
        image: 'dGVzdA==',
        preserveAspectRatio: true
      }
    });
  });

  it('should properly create Image from object', () => {
    expect.hasAssertions();

    const obj: ImageObject = {
      type: 'Image',
      options: {
        x: '20',
        y: '20',
        image: 'dGVzdA==',
        width: '10',
        height: '20'
      }
    };

    const image = Image.fromObject<Image>(obj);

    expect(image).toBeInstanceOf(Image);
    expect(image.text).toStrictEqual('');
    expect(image.width).toStrictEqual('10');
    expect(image.height).toStrictEqual('20');
    expect(image.x).toStrictEqual('20');
    expect(image.y).toStrictEqual('20');
    expect(image.background).toStrictEqual('none');
    expect(image.foreground).toStrictEqual('none');
    expect(image.image).toStrictEqual('dGVzdA==');
    expect(image.preserveAspectRatio).toBe(true);
  });

  it('should properly check if string isBase64', () => {
    expect.hasAssertions();
    expect(Image.isBase64('dGVzdA==')).toBe(true);
    expect(Image.isBase64('not base64')).toBe(false);
  });
});
