# kittik-animation-focus

![Build Status](https://img.shields.io/travis/kittikjs/animation-focus.svg)
![Coverage](https://img.shields.io/coveralls/kittikjs/animation-focus.svg)

![Downloads](https://img.shields.io/npm/dm/kittik-animation-focus.svg)
![Downloads](https://img.shields.io/npm/dt/kittik-animation-focus.svg)
![npm version](https://img.shields.io/npm/v/kittik-animation-focus.svg)
![License](https://img.shields.io/npm/l/kittik-animation-focus.svg)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![dependencies](https://img.shields.io/david/kittikjs/animation-focus.svg)
![dev dependencies](https://img.shields.io/david/dev/kittikjs/animation-focus.svg)

Focus animation that takes attention to a shape (Bounce or Shake).

| Examples |
| -------- |
| ![kittik](https://cloud.githubusercontent.com/assets/3625244/16448517/92f4cd08-3dfa-11e6-9983-5664187bd487.gif) |

## Getting Started

Install it via npm:

```shell
npm install kittik-animation-focus
```

Include in your project:

```javascript
import Focus from 'kittik-animation-focus';
import Rectangle from 'kittik-shape-rectangle';
import Cursor from 'kittik-cursor';

const cursor = Cursor.create();
const shape = Rectangle.create(cursor);

Focus.create().animate(shape).then(shape => doSmthElseWithShape(shape));
```

## API

API declaration is [here](./API.md).

## License

The MIT License (MIT)

Copyright (c) 2015-2016 Eugene Obrezkov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
