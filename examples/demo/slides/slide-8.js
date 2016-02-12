module.exports = {
  shapes: [{
    name: 'Print Effect',
    type: 'Text',
    options: {
      text: 'I can simulate typing!!!',
      x: 'center',
      y: 'middle'
    }
  }, {
    name: 'Print Effect 2',
    type: 'Text',
    options: {
      text: 'I can do it sequentially!',
      x: 'center',
      y: 'bottom'
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
    'Print Effect::Print',
    'Print Effect 2::Print'
  ]
};
