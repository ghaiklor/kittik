module.exports = {
  shapes: [{
    name: 'Text Shape',
    type: 'Text',
    options: {
      text: 'Simple text',
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
      height: 1,
      background: 'black',
      foreground: 'white'
    }
  }, {
    name: 'Fig Text',
    type: 'FigText',
    options: {
      text: 'ASCII ART',
      x: 'center',
      y: 6
    }
  }],
  order: [
    'Text Shape',
    'Rectangle Shape',
    'Fig Text'
  ]
};
