module.exports = {
  shapes: [{
    name: 'Shape 1',
    type: 'Rectangle',
    options: {
      text: 'I can take your attention',
      x: 'center',
      y: 'middle'
    }
  }],
  animations: [{
    name: 'Shake',
    type: 'Focus',
    options: {
      direction: 'shakeX',
      offset: 10,
      repeat: 5,
      duration: 3000
    }
  }],
  order: [
    'Shape 1::Shake->Shake'
  ]
};
