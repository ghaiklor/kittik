import { assert } from 'chai';
import { Cursor } from 'kittik-cursor';
import Text from 'kittik-shape-text';
import { Slide } from '../../src/Slide';

describe('kittik::Slide', () => {
  it('Should properly create shapes array in the slide', () => {
    const slide = Slide.create([{type: 'Text', options: {text: 'test'}}]);

    assert.ok(slide._shapes.every(shape => shape instanceof Text));
  });
});
