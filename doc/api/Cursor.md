## Classes

<dl>
<dt><a href="#Cell">Cell</a></dt>
<dd><p>Cell responsible for mapping separate cells in the real terminal to the virtual one.</p>
</dd>
<dt><a href="#Cursor">Cursor</a></dt>
<dd><p>Cursor implements low-level API to terminal cursor.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#COLORS">COLORS</a> : <code>Object</code></dt>
<dd><p>Dictionary of colors which can be used in cursor.</p>
</dd>
<dt><a href="#DISPLAY_MODES">DISPLAY_MODES</a> : <code>Object</code></dt>
<dd><p>Dictionary of the display modes and VT100 control sequences.
There are the most commonly supported control sequences for formatting text and their resetting.</p>
</dd>
<dt><a href="#encodeToVT100">encodeToVT100</a> ⇒ <code>String</code></dt>
<dd><p>Encode control sequence to VT100 compatible control sequence.</p>
</dd>
</dl>

<a name="Cell"></a>

## Cell
Cell responsible for mapping separate cells in the real terminal to the virtual one.

**Kind**: global class  
**Since**: 3.1.0  

* [Cell](#Cell)
    * [new Cell([char], [options])](#new_Cell_new)
    * _instance_
        * [.getChar()](#Cell+getChar) ⇒ <code>String</code>
        * [.setChar([char])](#Cell+setChar) ⇒ <code>[Cell](#Cell)</code>
        * [.getX()](#Cell+getX) ⇒ <code>Number</code>
        * [.setX([x])](#Cell+setX) ⇒ <code>[Cell](#Cell)</code>
        * [.getY()](#Cell+getY) ⇒ <code>Number</code>
        * [.setY([y])](#Cell+setY) ⇒ <code>[Cell](#Cell)</code>
        * [.getBackground()](#Cell+getBackground) ⇒ <code>String</code>
        * [.setBackground([colorName])](#Cell+setBackground) ⇒ <code>[Cell](#Cell)</code>
        * [.getForeground()](#Cell+getForeground) ⇒ <code>String</code>
        * [.setForeground([colorName])](#Cell+setForeground) ⇒ <code>[Cell](#Cell)</code>
        * [.getDisplay()](#Cell+getDisplay) ⇒ <code>Object</code>
        * [.setDisplay([bold], [dim], [underlined], [blink], [reverse], [hidden])](#Cell+setDisplay) ⇒ <code>[Cell](#Cell)</code>
        * [.setModified([isModified])](#Cell+setModified) ⇒ <code>[Cell](#Cell)</code>
        * [.isModified()](#Cell+isModified) ⇒ <code>Boolean</code>
        * [.reset()](#Cell+reset) ⇒ <code>[Cell](#Cell)</code>
        * [.toString()](#Cell+toString) ⇒ <code>String</code>
    * _static_
        * [.create()](#Cell.create) ⇒ <code>[Cell](#Cell)</code>

<a name="new_Cell_new"></a>

### new Cell([char], [options])
Create Cell instance which are able to convert itself to ASCII control sequence.


| Param | Type | Description |
| --- | --- | --- |
| [char] | <code>String</code> | Char that you want to wrap with control sequences |
| [options] | <code>Object</code> | Options object where you can set additional style to char |
| [options.x] | <code>Number</code> | X coordinate |
| [options.y] | <code>Number</code> | Y coordinate |
| [options.background] | <code>String</code> | Background color name, `none` to disable color |
| [options.foreground] | <code>String</code> | Foreground color name, `none` to disable color |
| [options.display] | <code>Object</code> | Object with display modes |
| [options.display.bold] | <code>Boolean</code> | Bold style |
| [options.display.dim] | <code>Boolean</code> | Dim style |
| [options.display.underlined] | <code>Boolean</code> | Underlined style |
| [options.display.blink] | <code>Boolean</code> | Blink style |
| [options.display.reverse] | <code>Boolean</code> | Reverse style |
| [options.display.hidden] | <code>Boolean</code> | Hidden style |

<a name="Cell+getChar"></a>

### cell.getChar() ⇒ <code>String</code>
Get current char.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell+setChar"></a>

### cell.setChar([char]) ⇒ <code>[Cell](#Cell)</code>
Set new char to cell.
If char is longer than 1 char, it slices string to 1 char.

**Kind**: instance method of <code>[Cell](#Cell)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [char] | <code>String</code> | <code>&#x27; &#x27;</code> | 

<a name="Cell+getX"></a>

### cell.getX() ⇒ <code>Number</code>
Get X coordinate of this cell.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell+setX"></a>

### cell.setX([x]) ⇒ <code>[Cell](#Cell)</code>
Set new X coordinate for cell.

**Kind**: instance method of <code>[Cell](#Cell)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [x] | <code>Number</code> | <code>0</code> | 

<a name="Cell+getY"></a>

### cell.getY() ⇒ <code>Number</code>
Get Y coordinate.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell+setY"></a>

### cell.setY([y]) ⇒ <code>[Cell](#Cell)</code>
Set new Y coordinate for cell.

**Kind**: instance method of <code>[Cell](#Cell)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [y] | <code>Number</code> | <code>0</code> | 

<a name="Cell+getBackground"></a>

### cell.getBackground() ⇒ <code>String</code>
Get current background color.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell+setBackground"></a>

### cell.setBackground([colorName]) ⇒ <code>[Cell](#Cell)</code>
Set new background color.

**Kind**: instance method of <code>[Cell](#Cell)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [colorName] | <code>String</code> | <code>none</code> | Color name from [COLORS](#COLORS) dictionary. |

<a name="Cell+getForeground"></a>

### cell.getForeground() ⇒ <code>String</code>
Get current foreground color.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell+setForeground"></a>

### cell.setForeground([colorName]) ⇒ <code>[Cell](#Cell)</code>
Set new foreground color.

**Kind**: instance method of <code>[Cell](#Cell)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [colorName] | <code>String</code> | <code>none</code> | Color name from [COLORS](#COLORS) dictionary. |

<a name="Cell+getDisplay"></a>

### cell.getDisplay() ⇒ <code>Object</code>
Get current display modes.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell+setDisplay"></a>

### cell.setDisplay([bold], [dim], [underlined], [blink], [reverse], [hidden]) ⇒ <code>[Cell](#Cell)</code>
Set new display modes to cell.

**Kind**: instance method of <code>[Cell](#Cell)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [bold] | <code>Boolean</code> | <code>false</code> | Bold style |
| [dim] | <code>Boolean</code> | <code>false</code> | Dim style |
| [underlined] | <code>Boolean</code> | <code>false</code> | Underlined style |
| [blink] | <code>Boolean</code> | <code>false</code> | Blink style |
| [reverse] | <code>Boolean</code> | <code>false</code> | Reverse style |
| [hidden] | <code>Boolean</code> | <code>false</code> | Hidden style |

<a name="Cell+setModified"></a>

### cell.setModified([isModified]) ⇒ <code>[Cell](#Cell)</code>
Mark cell as modified or not.

**Kind**: instance method of <code>[Cell](#Cell)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isModified] | <code>Boolean</code> | <code>true</code> | Flag shows if cell is modified |

<a name="Cell+isModified"></a>

### cell.isModified() ⇒ <code>Boolean</code>
Check if cell has been modified.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell+reset"></a>

### cell.reset() ⇒ <code>[Cell](#Cell)</code>
Reset display settings.
It resets char, background, foreground and display mode.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell+toString"></a>

### cell.toString() ⇒ <code>String</code>
Convert cell to VT100 compatible control sequence.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell.create"></a>

### Cell.create() ⇒ <code>[Cell](#Cell)</code>
Wrapper around `new Cell()`.

**Kind**: static method of <code>[Cell](#Cell)</code>  
<a name="Cursor"></a>

## Cursor
Cursor implements low-level API to terminal cursor.

**Kind**: global class  
**See**

- http://www.termsys.demon.co.uk/vtansi.htm
- http://misc.flogisoft.com/bash/tip_colors_and_formatting
- http://man7.org/linux/man-pages/man4/console_codes.4.html
- http://www.x.org/docs/xterm/ctlseqs.pdf
- http://wiki.bash-hackers.org/scripting/terminalcodes

**Since**: 1.0.0  

* [Cursor](#Cursor)
    * [new Cursor([options])](#new_Cursor_new)
    * _instance_
        * [.write(data)](#Cursor+write) ⇒ <code>[Cursor](#Cursor)</code>
        * [.flush()](#Cursor+flush) ⇒ <code>[Cursor](#Cursor)</code>
        * [.getPointerFromXY([x], [y])](#Cursor+getPointerFromXY) ⇒ <code>Number</code>
        * [.getXYFromPointer(index)](#Cursor+getXYFromPointer) ⇒ <code>Array</code>
        * [.up([y])](#Cursor+up) ⇒ <code>[Cursor](#Cursor)</code>
        * [.down([y])](#Cursor+down) ⇒ <code>[Cursor](#Cursor)</code>
        * [.right([x])](#Cursor+right) ⇒ <code>[Cursor](#Cursor)</code>
        * [.left([x])](#Cursor+left) ⇒ <code>[Cursor](#Cursor)</code>
        * [.moveBy(x, y)](#Cursor+moveBy) ⇒ <code>[Cursor](#Cursor)</code>
        * [.moveTo(x, y)](#Cursor+moveTo) ⇒ <code>[Cursor](#Cursor)</code>
        * [.foreground(color)](#Cursor+foreground) ⇒ <code>[Cursor](#Cursor)</code>
        * [.background(color)](#Cursor+background) ⇒ <code>[Cursor](#Cursor)</code>
        * [.bold([isBold])](#Cursor+bold) ⇒ <code>[Cursor](#Cursor)</code>
        * [.dim([isDim])](#Cursor+dim) ⇒ <code>[Cursor](#Cursor)</code>
        * [.underlined([isUnderlined])](#Cursor+underlined) ⇒ <code>[Cursor](#Cursor)</code>
        * [.blink([isBlink])](#Cursor+blink) ⇒ <code>[Cursor](#Cursor)</code>
        * [.reverse([isReverse])](#Cursor+reverse) ⇒ <code>[Cursor](#Cursor)</code>
        * [.hidden([isHidden])](#Cursor+hidden) ⇒ <code>[Cursor](#Cursor)</code>
        * [.erase(x1, y1, x2, y2)](#Cursor+erase) ⇒ <code>[Cursor](#Cursor)</code>
        * [.eraseToEnd()](#Cursor+eraseToEnd) ⇒ <code>[Cursor](#Cursor)</code>
        * [.eraseToStart()](#Cursor+eraseToStart) ⇒ <code>[Cursor](#Cursor)</code>
        * [.eraseToDown()](#Cursor+eraseToDown) ⇒ <code>[Cursor](#Cursor)</code>
        * [.eraseToUp()](#Cursor+eraseToUp) ⇒ <code>[Cursor](#Cursor)</code>
        * [.eraseLine()](#Cursor+eraseLine) ⇒ <code>[Cursor](#Cursor)</code>
        * [.eraseScreen()](#Cursor+eraseScreen) ⇒ <code>[Cursor](#Cursor)</code>
        * [.saveScreen()](#Cursor+saveScreen) ⇒ <code>[Cursor](#Cursor)</code>
        * [.restoreScreen()](#Cursor+restoreScreen) ⇒ <code>[Cursor](#Cursor)</code>
        * [.hideCursor()](#Cursor+hideCursor) ⇒ <code>[Cursor](#Cursor)</code>
        * [.showCursor()](#Cursor+showCursor) ⇒ <code>[Cursor](#Cursor)</code>
        * [.reset()](#Cursor+reset) ⇒ <code>[Cursor](#Cursor)</code>
    * _static_
        * [.create()](#Cursor.create) ⇒ <code>[Cursor](#Cursor)</code>

<a name="new_Cursor_new"></a>

### new Cursor([options])
Creates cursor that writes direct to `stdout`.
You can override target stream with another one.
Also, you can specify custom width and height of viewport where cursor will render the frame.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Object with options |
| [options.stream] | <code>Stream</code> | <code>process.stdout</code> | Writable stream |
| [options.width] | <code>Number</code> | <code>stream.columns</code> | Number of columns (width) |
| [options.height] | <code>Number</code> | <code>stream.rows</code> | Number of rows (height) |

**Example**  
```js
new Cursor(); // creates cursor with viewport in process.stdout

// creates cursor with file as a target source and custom sizes of the viewport
new Cursor({
  stream: fs.createWriteStream('./test'),
  width: 60,
  height: 20
});
```
<a name="Cursor+write"></a>

### cursor.write(data) ⇒ <code>[Cursor](#Cursor)</code>
Write to the stream.
It doesn't applies immediately but stores in virtual terminal that represented as array of [Cell](#Cell) instances.
For applying changes you need to [flush](flush) changes.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | Data to write to the terminal |

**Example**  
```js
cursor.write('Hello, World'); // write Hello, World at current position of the cursor
cursor.flush(); // apply changes to the real terminal
```
<a name="Cursor+flush"></a>

### cursor.flush() ⇒ <code>[Cursor](#Cursor)</code>
Takes only modified cells from virtual terminal and flush changes to the real terminal.
Before flush the changes, it checks if this modified cell was actually changed.
If so, writes to the stream, otherwise ignore this cell.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
**Example**  
```js
cursor.moveTo(10, 10); // Make some changes
cursor.write('Hello'); // One more change
cursor.write('World'); // The last one
cursor.flush(); // When changes is ready, call flush()
```
<a name="Cursor+getPointerFromXY"></a>

### cursor.getPointerFromXY([x], [y]) ⇒ <code>Number</code>
Get index in the virtual terminal representation from (x, y) coordinates.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
**Returns**: <code>Number</code> - Returns index in the buffer array  

| Param | Type | Description |
| --- | --- | --- |
| [x] | <code>Number</code> | X coordinate on the terminal |
| [y] | <code>Number</code> | Y coordinate on the terminal |

**Example**  
```js
cursor.getPointerFromXY(0, 0); // returns 0
cursor.getPointerFromXY(10, 0); // returns 10
```
<a name="Cursor+getXYFromPointer"></a>

### cursor.getXYFromPointer(index) ⇒ <code>Array</code>
Get (x, y) coordinate from the index in the virtual terminal representation.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
**Returns**: <code>Array</code> - Returns an array [x, y]  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | Index in the buffer which represents terminal |

**Example**  
```js
const [x, y] = cursor.getXYFromPointer(0); // returns [0, 0]
const [x, y] = cursor.getXYFromPointer(10); // returns [10, 0]
```
<a name="Cursor+up"></a>

### cursor.up([y]) ⇒ <code>[Cursor](#Cursor)</code>
Move the cursor up.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [y] | <code>Number</code> | <code>1</code> | 

**Example**  
```js
cursor.up(); // move cursor up by 1 cell
cursor.up(5); // move cursor up by 5 cells
```
<a name="Cursor+down"></a>

### cursor.down([y]) ⇒ <code>[Cursor](#Cursor)</code>
Move the cursor down.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [y] | <code>Number</code> | <code>1</code> | 

**Example**  
```js
cursor.down(); // move cursor down by 1 cell
cursor.down(5); // move cursor down by 5 cells
```
<a name="Cursor+right"></a>

### cursor.right([x]) ⇒ <code>[Cursor](#Cursor)</code>
Move the cursor right.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [x] | <code>Number</code> | <code>1</code> | 

**Example**  
```js
cursor.right(); // move cursor right by 1 cell
cursor.right(5); // move cursor right by 5 cells
```
<a name="Cursor+left"></a>

### cursor.left([x]) ⇒ <code>[Cursor](#Cursor)</code>
Move the cursor left.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [x] | <code>Number</code> | <code>1</code> | 

**Example**  
```js
cursor.left(); // move cursor left by 1 cell
cursor.left(5); // move cursor left by 5 cells
```
<a name="Cursor+moveBy"></a>

### cursor.moveBy(x, y) ⇒ <code>[Cursor](#Cursor)</code>
Move the cursor position relative current coordinates.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | Offset by X coordinate |
| y | <code>Number</code> | Offset by Y coordinate |

**Example**  
```js
cursor.moveBy(10, 10); // moves cursor down and right by 10 cells
cursor.moveBy(-10, -10); // moves cursor up and left by 10 cells
```
<a name="Cursor+moveTo"></a>

### cursor.moveTo(x, y) ⇒ <code>[Cursor](#Cursor)</code>
Set the cursor position by absolute coordinates.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | X coordinate |
| y | <code>Number</code> | Y coordinate |

**Example**  
```js
cursor.moveTo(5, 10); // Move cursor to (5, 10) point in the terminal
```
<a name="Cursor+foreground"></a>

### cursor.foreground(color) ⇒ <code>[Cursor](#Cursor)</code>
Set the foreground color.
This color is used when text is rendering.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>String</code> | Color name or `none` if you want to disable foreground filling |

**Example**  
```js
cursor.foreground('black');
cursor.foreground('none');
```
<a name="Cursor+background"></a>

### cursor.background(color) ⇒ <code>[Cursor](#Cursor)</code>
Set the background color.
This color is used for filling the whole cell in the TTY.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>String</code> | Color name or `none` if you want to disable background filling |

**Example**  
```js
cursor.background('black');
cursor.background('none');
```
<a name="Cursor+bold"></a>

### cursor.bold([isBold]) ⇒ <code>[Cursor](#Cursor)</code>
Toggle bold display mode.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isBold] | <code>Boolean</code> | <code>true</code> | If false, disables bold mode |

**Example**  
```js
cursor.bold(); // enables bold mode
cursor.bold(false); // disables bold mode
```
<a name="Cursor+dim"></a>

### cursor.dim([isDim]) ⇒ <code>[Cursor](#Cursor)</code>
Toggle dim display mode.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isDim] | <code>Boolean</code> | <code>true</code> | If false, disables dim mode |

**Example**  
```js
cursor.dim(); // enables dim mode
cursor.dim(false); // disables dim mode
```
<a name="Cursor+underlined"></a>

### cursor.underlined([isUnderlined]) ⇒ <code>[Cursor](#Cursor)</code>
Toggle underlined display mode.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isUnderlined] | <code>Boolean</code> | <code>true</code> | If false, disables underlined mode |

**Example**  
```js
cursor.underlined(); // enables underlined mode
cursor.underlined(false); // disables underlined mode
```
<a name="Cursor+blink"></a>

### cursor.blink([isBlink]) ⇒ <code>[Cursor](#Cursor)</code>
Toggle blink display mode.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isBlink] | <code>Boolean</code> | <code>true</code> | If false, disables blink mode |

**Example**  
```js
cursor.blink(); // enables blink mode
cursor.blink(false); // disables blink mode
```
<a name="Cursor+reverse"></a>

### cursor.reverse([isReverse]) ⇒ <code>[Cursor](#Cursor)</code>
Toggle reverse display mode.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isReverse] | <code>Boolean</code> | <code>true</code> | If false, disables reverse display mode |

**Example**  
```js
cursor.reverse(); // enables reverse mode
cursor.reverse(false); // disables reverse mode
```
<a name="Cursor+hidden"></a>

### cursor.hidden([isHidden]) ⇒ <code>[Cursor](#Cursor)</code>
Toggle hidden display mode.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isHidden] | <code>Boolean</code> | <code>true</code> | If false, disables hidden display mode |

**Example**  
```js
cursor.hidden(); // enables hidden mode
cursor.hidden(false); // disables hidden mode
```
<a name="Cursor+erase"></a>

### cursor.erase(x1, y1, x2, y2) ⇒ <code>[Cursor](#Cursor)</code>
Erase the specified region.
The region describes the rectangle shape which need to erase.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type |
| --- | --- |
| x1 | <code>Number</code> | 
| y1 | <code>Number</code> | 
| x2 | <code>Number</code> | 
| y2 | <code>Number</code> | 

**Example**  
```js
cursor.erase(0, 0, 5, 5); // erase the specified rectangle (0, 0, 5, 5)
```
<a name="Cursor+eraseToEnd"></a>

### cursor.eraseToEnd() ⇒ <code>[Cursor](#Cursor)</code>
Erase from current position to end of the line.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
**Example**  
```js
cursor.eraseToEnd();
```
<a name="Cursor+eraseToStart"></a>

### cursor.eraseToStart() ⇒ <code>[Cursor](#Cursor)</code>
Erase from current position to start of the line.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
**Example**  
```js
cursor.eraseToStart();
```
<a name="Cursor+eraseToDown"></a>

### cursor.eraseToDown() ⇒ <code>[Cursor](#Cursor)</code>
Erase from current line to down.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
**Example**  
```js
cursor.eraseToDown();
```
<a name="Cursor+eraseToUp"></a>

### cursor.eraseToUp() ⇒ <code>[Cursor](#Cursor)</code>
Erase from current line to up.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
**Example**  
```js
cursor.eraseToUp();
```
<a name="Cursor+eraseLine"></a>

### cursor.eraseLine() ⇒ <code>[Cursor](#Cursor)</code>
Erase current line.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
**Example**  
```js
cursor.eraseLine();
```
<a name="Cursor+eraseScreen"></a>

### cursor.eraseScreen() ⇒ <code>[Cursor](#Cursor)</code>
Erase the entire screen.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
**Example**  
```js
cursor.eraseScreen();
```
<a name="Cursor+saveScreen"></a>

### cursor.saveScreen() ⇒ <code>[Cursor](#Cursor)</code>
Save current terminal contents into the buffer.
Applies immediately without calling [flush](flush).

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
**Example**  
```js
cursor.saveScreen();
```
<a name="Cursor+restoreScreen"></a>

### cursor.restoreScreen() ⇒ <code>[Cursor](#Cursor)</code>
Restore terminal contents to previously saved via [saveScreen](saveScreen).
Applies immediately without calling [flush](flush).

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
**Example**  
```js
cursor.restoreScreen();
```
<a name="Cursor+hideCursor"></a>

### cursor.hideCursor() ⇒ <code>[Cursor](#Cursor)</code>
Set the terminal cursor invisible.
Applies immediately without calling [flush](flush).

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
**Example**  
```js
cursor.hideCursor();
```
<a name="Cursor+showCursor"></a>

### cursor.showCursor() ⇒ <code>[Cursor](#Cursor)</code>
Set the terminal cursor visible.
Applies immediately without calling [flush](flush).

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
**Example**  
```js
cursor.showCursor();
```
<a name="Cursor+reset"></a>

### cursor.reset() ⇒ <code>[Cursor](#Cursor)</code>
Reset all terminal settings.
Applies immediately without calling [flush](flush).

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
**Example**  
```js
cursor.reset();
```
<a name="Cursor.create"></a>

### Cursor.create() ⇒ <code>[Cursor](#Cursor)</code>
Wrapper around `new Cursor()`.

**Kind**: static method of <code>[Cursor](#Cursor)</code>  
<a name="COLORS"></a>

## COLORS : <code>Object</code>
Dictionary of colors which can be used in cursor.

**Kind**: global constant  
<a name="DISPLAY_MODES"></a>

## DISPLAY_MODES : <code>Object</code>
Dictionary of the display modes and VT100 control sequences.
There are the most commonly supported control sequences for formatting text and their resetting.

**Kind**: global constant  
<a name="encodeToVT100"></a>

## encodeToVT100 ⇒ <code>String</code>
Encode control sequence to VT100 compatible control sequence.

**Kind**: global constant  
**Returns**: <code>String</code> - Returns encoded string  

| Param | Type | Description |
| --- | --- | --- |
| code | <code>String</code> | Control sequence that you want to encode |

