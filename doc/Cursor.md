# Cursor

Cursor is a low-lever wrapper around VT100 control sequences.

The main goal of this package is to provide API that you can use for rendering your shapes\animations\whatever.

It consists of all needed methods, allowing to positioning cursor, change its background\foreground or display settings, like bold, dim, underlined, etc...

## Getting Started

```shell
npm install kittik-cursor
```

Create instance of cursor:

```js
import Cursor from 'kittik-cursor';

const cursor = Cursor.create();

cursor.reset(); // Reset terminal state to default and clear it
cursor.moveTo(10, 10); // Move cursor to (10, 10) coordinate
cursor.write('Hello, World'); // Write Hello, World to current position
cursor.flush(); // Apply changes to read terminal
```

Surely, you can use chains to do the same:

```js
import Cursor from 'kittik-cursor';

const cursor = Cursor.create();

cursor.reset().moveTo(10, 10).write('Hello, World').flush();
```

## Additional parameters

You can pass additional parameters to the cursor: `stream`, `width` and `height`.

`stream` must be a writable stream that has `.write()` method.
For instance, you can pass to it some file:

```js
import Cursor from 'kittik-cursor';
import fs from 'fs';

const cursor = Cursor.create({stream: fs.createWriteStream('./test')});

cursor.reset().moveTo(10, 10).write('Hello, World').flush();
```

Also, you can pass custom size of the viewport:

```js
import Cursor from 'kittik-cursor';

const cursor = Cursor.create({stream: fs.createWriteStream('./test'), width: 20, height: 10});

cursor.reset().moveTo(10, 10).write('Hello, World').flush();
```

## How kittik-cursor works?

### Control Sequences

kittik-cursor uses VT100 compatible control sequences to manipulate the cursor in the terminal.

You can find a lot of useful information about that here:

- [Terminal codes (ANSI/VT100) introduction](http://wiki.bash-hackers.org/scripting/terminalcodes)
- [ANSI/VT100 Terminal Control Escape Sequences](http://www.termsys.demon.co.uk/vtansi.htm)
- [Colors and formatting (ANSI/VT100 Control sequences)](http://misc.flogisoft.com/bash/tip_colors_and_formatting)
- [Xterm Control Sequences](http://www.x.org/docs/xterm/ctlseqs.pdf)
- [CONSOLE_CODES (man page)](http://man7.org/linux/man-pages/man4/console_codes.4.html)

The next thing which kittik-cursor does is wrap those control codes, so you are able to call JavaScript methods.

### Virtual Terminal

The first releases of the kittik-cursor were based on real-time updating terminal cursor, when you are calling some method on the terminal.

This caused performance issues.
So I decided to create my own wrapper around terminal cells.

Each real cell in the terminal has a wrapper (class Cell in the src folder).
The main problem, which Cell resolves, is to render each cell independently from another cells.
So I can grab any cell at any coordinate and render it independently from others.

It works the following way.
Each Cell has style settings and position in the real terminal.
When you are converting Cell to the control sequences, it concatenates the following sequences:

- Convert cell position to control sequence
- Convert foreground and background color to control sequence
- Convert display settings to control sequences
- Prepend the cell char with sequences above
- Reset all display settings to default

That way, each cell wrapped in own control sequences that can be flushed at any moment.

### Difference between two frames

The last thing I did, was update only cells that really changed.

The algorithm is simple.

When you are writing to the terminal, all write operations mark virtual cells as modified cells.
After some time, you decide to flush changes. When flush() method is called it does 2 things:

- Iterate through all cells and find only cells with modified marker;
- Convert modified cell to control sequence and compare that sequence with the sequence that was used at the previous frame;
- If they are not equal, store new control sequence and write to stream, otherwise, ignore it

That's how I made it possible to render videos in the terminal at 30 FPS.

BTW, if I remove Throttle stream, I'm getting 120 FPS :smiley:

## API

API declaration you can find [here](./api/Cursor.md).
