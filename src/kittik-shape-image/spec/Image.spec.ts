import { Canvas } from 'terminal-canvas';
import { Image } from '../src/Image';
import { ImageObject } from '../src/ImageObject';
import path from 'path';

describe('Shape::Image', () => {
  it('Should properly get/set image', () => {
    const cursor = new Canvas();
    const shape = new Image(cursor);

    expect(shape.image).toEqual('R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=');

    shape.image = 'dGVzdA==';
    expect(shape.image).toEqual('dGVzdA==');

    shape.image = path.resolve(__dirname, '../examples/panda.jpg');
    expect(shape.image.length).toEqual(24180);

    shape.image = 'non-existing-file.png';
    expect(() => shape.image).toThrowError('Image is not in base64 or does not exists on file system');
  });

  it('Should properly render the shape', () => {
    const cursor = new Canvas();
    const shape = new Image(cursor, { image: 'dGVzdA==', width: '15', height: '5', x: '10', y: '10' });
    const writeSpy = jest.spyOn(cursor.stream, 'write').mockImplementation(() => true);

    shape.render();

    expect(writeSpy).toBeCalledTimes(1);
    expect(writeSpy).toBeCalledWith('\u001b[11;11H\u001b]1337;File=size=6;width=15;height=5;preserveAspectRatio=1;inline=1:dGVzdA==^G');
  });

  it('Should properly render the shape with disabled preserveAspectRatio', () => {
    const cursor = new Canvas();
    const shape = new Image(cursor, { image: 'dGVzdA==', preserveAspectRatio: false, width: '15', height: '5', x: '10', y: '10' });
    const writeSpy = jest.spyOn(cursor.stream, 'write').mockImplementation(() => true);

    shape.render();

    expect(writeSpy).toBeCalledTimes(1);
    expect(writeSpy).toBeCalledWith('\u001b[11;11H\u001b]1337;File=size=6;width=15;height=5;preserveAspectRatio=0;inline=1:dGVzdA==^G');
  });

  it('Should properly serialize shape to object', () => {
    const cursor = new Canvas();
    const shape = new Image(cursor, { image: 'dGVzdA==' });
    const obj = shape.toObject();

    expect(obj).toEqual({
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

  it('Should properly create Image from object', () => {
    const cursor = new Canvas();
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

    const image = Image.fromObject<Image>(obj, cursor);

    expect(image).toBeInstanceOf(Image);
    expect(image.cursor).toBeInstanceOf(Canvas);
    expect(image.text).toEqual('');
    expect(image.width).toEqual('10');
    expect(image.height).toEqual('20');
    expect(image.x).toEqual('20');
    expect(image.y).toEqual('20');
    expect(image.background).toEqual('none');
    expect(image.foreground).toEqual('none');
    expect(image.image).toEqual('dGVzdA==');
    expect(image.preserveAspectRatio).toBeTruthy();
  });

  it('Should properly check if string isBase64', () => {
    expect(Image.isBase64('dGVzdA==')).toBeTruthy();
    expect(Image.isBase64('not base64')).toBeFalsy();
  });
});
