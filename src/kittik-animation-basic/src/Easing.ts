export function inQuad(t: number, b: number, c: number, d: number): number {
  return c * (t /= d) * t + b;
}

export function outQuad(t: number, b: number, c: number, d: number): number {
  return -c * (t /= d) * (t - 2) + b;
}

export function inOutQuad(t: number, b: number, c: number, d: number): number {
  if ((t /= d / 2) < 1) return c / 2 * t * t + b;
  return -c / 2 * ((--t) * (t - 2) - 1) + b;
}

export function inCubic(t: number, b: number, c: number, d: number): number {
  return c * (t /= d) * t * t + b;
}

export function outCubic(t: number, b: number, c: number, d: number): number {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

export function inOutCubic(t: number, b: number, c: number, d: number): number {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t + 2) + b;
}

export function inQuart(t: number, b: number, c: number, d: number): number {
  return c * (t /= d) * t * t * t + b;
}

export function outQuart(t: number, b: number, c: number, d: number): number {
  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
}

export function inOutQuart(t: number, b: number, c: number, d: number): number {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
  return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
}

export function inQuint(t: number, b: number, c: number, d: number): number {
  return c * (t /= d) * t * t * t * t + b;
}

export function outQuint(t: number, b: number, c: number, d: number): number {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}

export function inOutQuint(t: number, b: number, c: number, d: number): number {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
}

export function inSine(t: number, b: number, c: number, d: number): number {
  return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
}

export function outSine(t: number, b: number, c: number, d: number): number {
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
}

export function inOutSine(t: number, b: number, c: number, d: number): number {
  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
}

export function inExpo(t: number, b: number, c: number, d: number): number {
  return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
}

export function outExpo(t: number, b: number, c: number, d: number): number {
  return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
}

export function inOutExpo(t: number, b: number, c: number, d: number): number {
  if (t === 0) return b;
  if (t === d) return b + c;
  if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
  return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
}

export function inCirc(t: number, b: number, c: number, d: number): number {
  return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
}

export function outCirc(t: number, b: number, c: number, d: number): number {
  return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
}

export function inOutCirc(t: number, b: number, c: number, d: number): number {
  if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
  return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
}

export function inElastic(t: number, b: number, c: number, d: number): number {
  let s = 1.70158;
  const p = d * 0.3;
  let a = c;

  if (t === 0) return b;
  if ((t /= d) === 1) return b + c;
  if (a < Math.abs(c)) {
    a = c;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(c / a);
  }

  return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
}

export function outElastic(t: number, b: number, c: number, d: number): number {
  let s = 1.70158;
  const p = d * 0.3;
  let a = c;

  if (t === 0) return b;
  if ((t /= d) === 1) return b + c;

  if (a < Math.abs(c)) {
    a = c;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(c / a);
  }

  return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
}

export function inOutElastic(t: number, b: number, c: number, d: number): number {
  let s = 1.70158;
  const p = d * (0.3 * 1.5);
  let a = c;

  if (t === 0) return b;
  if ((t /= d / 2) === 2) return b + c;
  if (a < Math.abs(c)) {
    a = c;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(c / a);
  }

  if (t < 1) return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
}

export function inBack(t: number, b: number, c: number, d: number): number {
  const s = 1.70158;
  return c * (t /= d) * t * ((s + 1) * t - s) + b;
}

export function outBack(t: number, b: number, c: number, d: number): number {
  const s = 1.70158;
  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
}

export function inOutBack(t: number, b: number, c: number, d: number): number {
  let s = 1.70158;

  if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
  return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
}

export function outBounce(t: number, b: number, c: number, d: number): number {
  if ((t /= d) < (1 / 2.75)) {
    return c * (7.5625 * t * t) + b;
  } else if (t < (2 / 2.75)) {
    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
  } else if (t < (2.5 / 2.75)) {
    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
  } else {
    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
  }
}

export function inBounce(t: number, b: number, c: number, d: number): number {
  return c - outBounce(d - t, 0, c, d) + b;
}

export function inOutBounce(t: number, b: number, c: number, d: number): number {
  if (t < d / 2) return inBounce(t * 2, 0, c, d) * 0.5 + b;
  return outBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
}

export type Easing =
  'inQuad' |
  'outQuad' |
  'inOutQuad' |
  'inCubic' |
  'outCubic' |
  'inOutCubic' |
  'inQuart' |
  'outQuart' |
  'inOutQuart' |
  'inQuint' |
  'outQuint' |
  'inOutQuint' |
  'inSine' |
  'outSine' |
  'inOutSine' |
  'inExpo' |
  'outExpo' |
  'inOutExpo' |
  'inCirc' |
  'outCirc' |
  'inOutCirc' |
  'inElastic' |
  'outElastic' |
  'inOutElastic' |
  'inBack' |
  'outBack' |
  'inOutBack' |
  'outBounce' |
  'inBounce' |
  'inOutBounce'
