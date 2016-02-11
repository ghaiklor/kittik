module.exports = {
  shapes: [{
    name: 'Shape 1',
    type: 'Rectangle',
    options: {
      text: 'And... slide out',
      x: 'center',
      y: 'middle'
    }
  }],
  animations: [{
    name: 'Slide Out',
    type: 'Slide',
    options: {
      direction: 'outRight'
    }
  }],
  order: [
    'Shape 1::Slide Out'
  ]
};
