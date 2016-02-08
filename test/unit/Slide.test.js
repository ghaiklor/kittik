import { assert } from 'chai';
import Cursor from 'kittik-cursor';
import Text from 'kittik-shape-text';
import Slide from '../../src/Slide';

describe('kittik::Slide', () => {
  it('Should properly create shapes array in the slide', () => {
    const slide = Slide.create({
      shapes: [{
        name: 'Hello',
        type: 'Text',
        options: {
          text: 'Hello, World!'
        }
      }],
      animations: [{
        name: 'SlideIn',
        type: 'Slide',
        options: {
          direction: 'inRight'
        }
      }],
      flow: [
        'Hello(SlideIn)'
      ]
    });
  });
});
