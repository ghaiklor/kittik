/**
 * Dictionary of all available easings for {@link Animation}.
 * You can use it as `easing` option in all of the animations.
 *
 * @type {Object}
 */
module.exports = {
  inQuad: (t, b, c, d) => c * (t /= d) * t + b,

  outQuad: (t, b, c, d) => -c * (t /= d) * (t - 2) + b,

  inOutQuad: (t, b, c, d) => {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
  },

  inCubic: (t, b, c, d) => c * (t /= d) * t * t + b,

  outCubic: (t, b, c, d) => c * ((t = t / d - 1) * t * t + 1) + b,

  inOutCubic: (t, b, c, d) => {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  },

  inQuart: (t, b, c, d) => c * (t /= d) * t * t * t + b,

  outQuart: (t, b, c, d) => -c * ((t = t / d - 1) * t * t * t - 1) + b,

  inOutQuart: (t, b, c, d) => {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  },

  inQuint: (t, b, c, d) => c * (t /= d) * t * t * t * t + b,

  outQuint: (t, b, c, d) => c * ((t = t / d - 1) * t * t * t * t + 1) + b,

  inOutQuint: (t, b, c, d) => {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  },

  inSine: (t, b, c, d) => -c * Math.cos(t / d * (Math.PI / 2)) + c + b,

  outSine: (t, b, c, d) => c * Math.sin(t / d * (Math.PI / 2)) + b,

  inOutSine: (t, b, c, d) => -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b,

  inExpo: (t, b, c, d) => (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b,

  outExpo: (t, b, c, d) => (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b,

  inOutExpo: (t, b, c, d) => {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },

  inCirc: (t, b, c, d) => -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b,

  outCirc: (t, b, c, d) => c * Math.sqrt(1 - (t = t / d - 1) * t) + b,

  inOutCirc: (t, b, c, d) => {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  },

  inElastic: (t, b, c, d) => {
    let s = 1.70158;
    let p = d * .3;
    let a = c;

    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a)
    }

    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },

  outElastic: (t, b, c, d) => {
    let s = 1.70158;
    let p = d * .3;
    let a = c;

    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;

    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a)
    }

    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },

  inOutElastic: (t, b, c, d) => {
    let s = 1.70158;
    let p = d * (.3 * 1.5);
    let a = c;

    if (t == 0) return b;
    if ((t /= d / 2) == 2) return b + c;
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a)
    }

    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
  },

  inBack: (t, b, c, d) => {
    let s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },

  outBack: (t, b, c, d) => {
    let s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },

  inOutBack: (t, b, c, d) => {
    let s = 1.70158;

    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
  },

  inBounce: (t, b, c, d) => c - EASING.outBounce(d - t, 0, c, d) + b,

  outBounce: (t, b, c, d) => {
    if ((t /= d) < (1 / 2.75)) {
      return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
      return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    } else if (t < (2.5 / 2.75)) {
      return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    } else {
      return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
    }
  },

  inOutBounce: (t, b, c, d) => {
    if (t < d / 2) return EASING.inBounce(t * 2, 0, c, d) * .5 + b;
    return EASING.outBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
  }
};
