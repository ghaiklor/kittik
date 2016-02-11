module.exports = {
  shapes: [{
    name: 'Text Shape',
    type: 'Text',
    options: {
      text: 'You can render simple text',
      x: 'center',
      y: 2
    }
  }, {
    name: 'Rectangle Shape',
    type: 'Rectangle',
    options: {
      text: 'You can render rectangle',
      x: 'center',
      y: 4,
      width: '90%',
      height: 5,
      background: 'black',
      foreground: 'white'
    }
  }, {
    name: 'Fig Text',
    type: 'FigText',
    options: {
      text: 'ASCII ART',
      x: 'center',
      y: 10
    }
  }, {
    name: 'Image Shape',
    type: 'Image',
    options: {
      image: './examples/demo/images/kittik.png',
      x: 'center',
      y: 20
    }
  }],
  order: [
    'Text Shape',
    'Rectangle Shape',
    'Fig Text',
    'Image Shape'
  ]
};
