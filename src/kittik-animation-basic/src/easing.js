module.exports.inQuad = (t, b, c, d) => c * (t /= d) * t + b;
module.exports.outQuad = (t, b, c, d) => -c * (t /= d) * (t - 2) + b;
module.exports.inOutQuad = (t, b, c, d) => {
  if ((t /= d / 2) < 1) return c / 2 * t * t + b;
  return -c / 2 * ((--t) * (t - 2) - 1) + b;
};

module.exports.inCubic = (t, b, c, d) => c * (t /= d) * t * t + b;
module.exports.outCubic = (t, b, c, d) => c * ((t = t / d - 1) * t * t + 1) + b;
module.exports.inOutCubic = (t, b, c, d) => {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t + 2) + b;
};

module.exports.inQuart = (t, b, c, d) => c * (t /= d) * t * t * t + b;
module.exports.outQuart = (t, b, c, d) => -c * ((t = t / d - 1) * t * t * t - 1) + b;
module.exports.inOutQuart = (t, b, c, d) => {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
  return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
};

module.exports.inQuint = (t, b, c, d) => c * (t /= d) * t * t * t * t + b;
module.exports.outQuint = (t, b, c, d) => c * ((t = t / d - 1) * t * t * t * t + 1) + b;
module.exports.inOutQuint = (t, b, c, d) => {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
};

module.exports.inSine = (t, b, c, d) => -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
module.exports.outSine = (t, b, c, d) => c * Math.sin(t / d * (Math.PI / 2)) + b;
module.exports.inOutSine = (t, b, c, d) => -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
module.exports.inExpo = (t, b, c, d) => (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
module.exports.outExpo = (t, b, c, d) => (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
module.exports.inOutExpo = (t, b, c, d) => {
  if (t === 0) return b;
  if (t === d) return b + c;
  if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
  return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
};

module.exports.inCirc = (t, b, c, d) => -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
module.exports.outCirc = (t, b, c, d) => c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
module.exports.inOutCirc = (t, b, c, d) => {
  if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
  return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
};

module.exports.inElastic = (t, b, c, d) => {
  let s = 1.70158;
  let p = d * .3;
  let a = c;

  if (t === 0) return b;
  if ((t /= d) === 1) return b + c;
  if (a < Math.abs(c)) {
    a = c;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(c / a)
  }

  return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
};

module.exports.outElastic = (t, b, c, d) => {
  let s = 1.70158;
  let p = d * .3;
  let a = c;

  if (t === 0) return b;
  if ((t /= d) === 1) return b + c;

  if (a < Math.abs(c)) {
    a = c;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(c / a)
  }

  return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
};

module.exports.inOutElastic = (t, b, c, d) => {
  let s = 1.70158;
  let p = d * (.3 * 1.5);
  let a = c;

  if (t === 0) return b;
  if ((t /= d / 2) === 2) return b + c;
  if (a < Math.abs(c)) {
    a = c;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(c / a)
  }

  if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
};

module.exports.inBack = (t, b, c, d) => {
  let s = 1.70158;
  return c * (t /= d) * t * ((s + 1) * t - s) + b;
};

module.exports.outBack = (t, b, c, d) => {
  let s = 1.70158;
  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
};

module.exports.inOutBack = (t, b, c, d) => {
  let s = 1.70158;

  if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
  return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
};

module.exports.outBounce = (t, b, c, d) => {
  if ((t /= d) < (1 / 2.75)) {
    return c * (7.5625 * t * t) + b;
  } else if (t < (2 / 2.75)) {
    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
  } else if (t < (2.5 / 2.75)) {
    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
  } else {
    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
  }
};

module.exports.inBounce = (t, b, c, d) => c - module.exports.outBounce(d - t, 0, c, d) + b;
module.exports.inOutBounce = (t, b, c, d) => {
  if (t < d / 2) return module.exports.inBounce(t * 2, 0, c, d) * .5 + b;
  return module.exports.outBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
};
