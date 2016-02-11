module.exports = {
  shapes: [{
    name: 'Shape 1',
    type: 'Rectangle',
    options: {
      text: 'I can slide in...',
      x: 'center',
      y: 'middle'
    }
  }],
  animations: [{
    name: 'Slide In',
    type: 'Slide',
    options: {
      direction: 'inLeft'
    }
  }],
  order: [
    'Shape 1'
  ]
};
