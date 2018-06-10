import {assert} from 'chai';
import sinon from 'sinon';
import Text from 'kittik-shape-text';
import Print from 'kittik-animation-print';
import Cursor from 'kittik-cursor';
import Deck from '../../src/Deck';

const DECK_DECLARATION = {
  cursor: Cursor.create({stream: {write: () => true}}),
  shapes: [{
    name: 'Global Shape',
    type: 'Text',
    options: {
      text: 'Hello, World!'
    }
  }],
  animations: [{
    name: 'Global Animation',
    type: 'Print',
    options: {
      duration: 1
    }
  }],
  slides: [{
    order: [
      'Global Shape::Global Animation'
    ]
  }]
};

describe('kittik::Deck', () => {
  it('Should properly create deck with default arguments', () => {
    const deck = new Deck({cursor: DECK_DECLARATION.cursor});

    assert.equal(deck._currentSlideIndex, 0);
    assert.instanceOf(deck._cursor, Cursor);
    assert.equal(deck._slides.length, 0);
  });

  it('Should properly create deck with custom arguments', () => {
    const deck = new Deck(DECK_DECLARATION);

    assert.equal(deck._currentSlideIndex, 0);
    assert.instanceOf(deck._cursor, Cursor);
    assert.equal(deck._slides.length, 1);
    assert.instanceOf(deck._slides[0]._shapes['Global Shape'], Text);
    assert.instanceOf(deck._slides[0]._animations['Global Animation'], Print);
  });

  it('Should properly handle _onKeyPress', () => {
    const deck = new Deck(DECK_DECLARATION);
    const mock = sinon.mock(deck);

    mock.expects('prevSlide').once();
    mock.expects('nextSlide').once();
    mock.expects('exit').once();

    deck._onKeyPress('', {name: 'left'});
    deck._onKeyPress('', {name: 'right'});
    deck._onKeyPress('', {ctrl: true, name: 'c'});

    mock.verify();
  });

  it('Should properly run the presentation', () => {
    const deck = new Deck(DECK_DECLARATION);
    const mock = sinon.mock(deck);

    mock.expects('renderSlide').once();

    deck.run();

    mock.verify();
  });

  it('Should properly render slide', () => {
    const deck = new Deck(DECK_DECLARATION);

    assert.instanceOf(deck.renderSlide(), Deck);
    assert.instanceOf(deck.renderSlide(1), Deck);
  });

  it('Should properly render next slide', () => {
    const deck = new Deck(DECK_DECLARATION);
    const mock = sinon.mock(deck);

    deck._currentSlideIndex = -1;

    mock.expects('renderSlide').once().withExactArgs(0);

    assert.instanceOf(deck.nextSlide(), Deck);
    assert.instanceOf(deck.nextSlide(), Deck);

    mock.verify();
  });

  it('Should properly render previous slide', () => {
    const deck = new Deck(DECK_DECLARATION);
    const mock = sinon.mock(deck);

    deck._currentSlideIndex = 1;

    mock.expects('renderSlide').once().withExactArgs(0);

    assert.instanceOf(deck.prevSlide(), Deck);
    assert.instanceOf(deck.prevSlide(), Deck);

    mock.verify();
  });

  it('Should properly exit from presentation', () => {
    const deck = new Deck(DECK_DECLARATION);
    const mock = sinon.mock(process);

    mock.expects('exit').once().withExactArgs(0);

    deck.exit();

    mock.verify();
  });

  it('Should properly create deck from static create()', () => {
    const deck = Deck.create(DECK_DECLARATION);

    assert.equal(deck._currentSlideIndex, 0);
    assert.instanceOf(deck._cursor, Cursor);
    assert.equal(deck._slides.length, 1);
    assert.instanceOf(deck._slides[0]._shapes['Global Shape'], Text);
    assert.instanceOf(deck._slides[0]._animations['Global Animation'], Print);
  });
});
