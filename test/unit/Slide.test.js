import { assert } from 'chai';
import Cursor from 'kittik-cursor';
import Text from 'kittik-shape-text';
import Print from 'kittik-animation-print';
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

  it('Should properly parse order', () => {
    assert.deepEqual(Slide.parseOrder(['Shape 1::Anim 1']), [{shape: 'Shape 1', animations: ['Anim 1']}]);
  });

  it('Should properly create Slide instance from static create() method', () => {
    const slide = Slide.create();
    assert.instanceOf(slide, Slide);
  });

  it('Should properly create Slide instance from Object representation', () => {
    const obj = {
      shapes: [{
        name: 'Shape 1',
        type: 'Text',
        options: {
          text: 'Test'
        }
      }],
      animations: [{
        name: 'Print',
        type: 'Print',
        options: {
          duration: 2000
        }
      }],
      order: [
        'Shape 1::Print'
      ]
    };

    const slide = Slide.fromObject(obj);
    assert.instanceOf(slide._shapes['Shape 1'], Text);
    assert.instanceOf(slide._animations['Print'], Print);
    assert.deepEqual(slide._order[0], {shape: 'Shape 1', animations: ['Print']});
  });

  it('Should properly create Slide instance from JSON representation', () => {
    const json = JSON.stringify({
      shapes: [{
        name: 'Shape 1',
        type: 'Text',
        options: {
          text: 'Test'
        }
      }],
      animations: [{
        name: 'Print',
        type: 'Print',
        options: {
          duration: 2000
        }
      }],
      order: [
        'Shape 1::Print'
      ]
    });

    const slide = Slide.fromJSON(json);
    assert.instanceOf(slide._shapes['Shape 1'], Text);
    assert.instanceOf(slide._animations['Print'], Print);
    assert.deepEqual(slide._order[0], {shape: 'Shape 1', animations: ['Print']});
  });
});
