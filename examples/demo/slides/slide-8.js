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
    name: 'Attention',
    type: 'Focus',
    options: {
      direction: 'shakeX',
      duration: 1000
    }
  }],
  order: [
    'Print Effect::Print->Attention',
    'Print Effect 2::Print'
  ]
};
