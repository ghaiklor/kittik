<a name="Text"></a>

## Text ⇐ <code>[Shape](#Shape)</code>
Implements Text shape which renders the text at specified point.

**Kind**: global class  
**Extends:** <code>[Shape](#Shape)</code>  
**Since**: 1.0.0  

* [Text](#Text) ⇐ <code>[Shape](#Shape)</code>
    * [new Text(cursor, [options])](#new_Text_new)
    * [.isBold()](#Text+isBold) ⇒ <code>Boolean</code>
    * [.setBold([bold])](#Text+setBold) ⇒ <code>[Text](#Text)</code>
    * [.isDim()](#Text+isDim) ⇒ <code>Boolean</code>
    * [.setDim([dim])](#Text+setDim) ⇒ <code>[Text](#Text)</code>
    * [.isUnderlined()](#Text+isUnderlined) ⇒ <code>Boolean</code>
    * [.setUnderlined([underlined])](#Text+setUnderlined) ⇒ <code>[Text](#Text)</code>
    * [.isBlink()](#Text+isBlink) ⇒ <code>Boolean</code>
    * [.setBlink([blink])](#Text+setBlink) ⇒ <code>[Text](#Text)</code>
    * [.isReverse()](#Text+isReverse) ⇒ <code>Boolean</code>
    * [.setReverse([reverse])](#Text+setReverse) ⇒ <code>[Text](#Text)</code>
    * [.isHidden()](#Text+isHidden) ⇒ <code>Boolean</code>
    * [.setHidden([hidden])](#Text+setHidden) ⇒ <code>[Text](#Text)</code>
    * [.getAlign()](#Text+getAlign) ⇒ <code>String</code>
    * [.setAlign([align])](#Text+setAlign) ⇒ <code>[Text](#Text)</code>
    * [.get(path)](#Shape+get) ⇒ <code>\*</code>
    * [.set(path, value)](#Shape+set) ⇒ <code>[Shape](#Shape)</code>
    * [.getCursor()](#Shape+getCursor) ⇒ <code>Cursor</code>
    * [.setCursor(cursor)](#Shape+setCursor) ⇒ <code>[Shape](#Shape)</code>
    * [.getText()](#Shape+getText) ⇒ <code>String</code>
    * [.setText([text])](#Shape+setText) ⇒ <code>[Shape](#Shape)</code>
    * [.getWidth()](#Shape+getWidth) ⇒ <code>Number</code>
    * [.setWidth([width])](#Shape+setWidth) ⇒ <code>[Shape](#Shape)</code>
    * [.getHeight()](#Shape+getHeight) ⇒ <code>Number</code>
    * [.setHeight([height])](#Shape+setHeight) ⇒ <code>[Shape](#Shape)</code>
    * [.getX()](#Shape+getX) ⇒ <code>Number</code>
    * [.setX([x])](#Shape+setX) ⇒ <code>[Shape](#Shape)</code>
    * [.getY()](#Shape+getY) ⇒ <code>Number</code>
    * [.setY([y])](#Shape+setY) ⇒ <code>[Shape](#Shape)</code>
    * [.getBackground()](#Shape+getBackground) ⇒ <code>String</code>
    * [.setBackground([background])](#Shape+setBackground) ⇒ <code>[Shape](#Shape)</code>
    * [.getForeground()](#Shape+getForeground) ⇒ <code>String</code>
    * [.setForeground([foreground])](#Shape+setForeground) ⇒ <code>[Shape](#Shape)</code>
    * [.render()](#Shape+render)
    * [.toObject()](#Shape+toObject) ⇒ <code>Object</code>
    * [.toJSON()](#Shape+toJSON) ⇒ <code>JSON</code>

<a name="new_Text_new"></a>

### new Text(cursor, [options])
Create Text shape.


| Param | Type | Description |
| --- | --- | --- |
| cursor | <code>Cursor</code> | Cursor instance |
| [options] | <code>Object</code> | Options object |
| [options.bold] | <code>Boolean</code> | Bold styling |
| [options.dim] | <code>Boolean</code> | Dim styling |
| [options.underlined] | <code>Boolean</code> | Underlined styling |
| [options.blink] | <code>Boolean</code> | Blink styling |
| [options.reverse] | <code>Boolean</code> | Reverse styling |
| [options.hidden] | <code>Boolean</code> | Hidden styling |
| [options.align] | <code>String</code> | Align text in the shape (left, center, right) |

**Example**  
```js
Text.create(cursor, {
  bold: true,
  dim: false,
  underlined: true,
  blink: false,
  reverse: false,
  hidden: false,
  align: 'center'
});
```
<a name="Text+isBold"></a>

### text.isBold() ⇒ <code>Boolean</code>
Check if text should be rendered as bold.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Text+setBold"></a>

### text.setBold([bold]) ⇒ <code>[Text](#Text)</code>
Toggle bold mode.

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [bold] | <code>Boolean</code> | <code>false</code> | If true, print bold text |

<a name="Text+isDim"></a>

### text.isDim() ⇒ <code>Boolean</code>
Check if text should be rendered as dim.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Text+setDim"></a>

### text.setDim([dim]) ⇒ <code>[Text](#Text)</code>
Toggle dim mode.

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [dim] | <code>Boolean</code> | <code>false</code> | If true, print dim text |

<a name="Text+isUnderlined"></a>

### text.isUnderlined() ⇒ <code>Boolean</code>
Check if text should be rendered as underlined.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Text+setUnderlined"></a>

### text.setUnderlined([underlined]) ⇒ <code>[Text](#Text)</code>
Toggle underlined mode.

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [underlined] | <code>Boolean</code> | <code>false</code> | If true, print underlined text |

<a name="Text+isBlink"></a>

### text.isBlink() ⇒ <code>Boolean</code>
Check if text should be rendered as blink.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Text+setBlink"></a>

### text.setBlink([blink]) ⇒ <code>[Text](#Text)</code>
Toggle blink mode.

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [blink] | <code>Boolean</code> | <code>false</code> | If true, print blink text |

<a name="Text+isReverse"></a>

### text.isReverse() ⇒ <code>Boolean</code>
Check if text should be rendered with reversed colors.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Text+setReverse"></a>

### text.setReverse([reverse]) ⇒ <code>[Text](#Text)</code>
Toggle reverse mode.

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [reverse] | <code>Boolean</code> | <code>false</code> | If true, print text with reversed colors |

<a name="Text+isHidden"></a>

### text.isHidden() ⇒ <code>Boolean</code>
Check if text should be rendered as hidden text.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Text+setHidden"></a>

### text.setHidden([hidden]) ⇒ <code>[Text](#Text)</code>
Toggle hidden mode.

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [hidden] | <code>Boolean</code> | <code>false</code> | If true, print hidden text |

<a name="Text+getAlign"></a>

### text.getAlign() ⇒ <code>String</code>
Get text align.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Text+setAlign"></a>

### text.setAlign([align]) ⇒ <code>[Text](#Text)</code>
Set text align.
Aligns text in the shape by anchors to the left, center or to the right.

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [align] | <code>String</code> | <code>&#x27;center&#x27;</code> | Align value can be left, center or right |

<a name="Shape+get"></a>

### text.get(path) ⇒ <code>\*</code>
Get option value.

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |

**Example**  
```js
shape.get('my.options.object.value');
```
<a name="Shape+set"></a>

### text.set(path, value) ⇒ <code>[Shape](#Shape)</code>
Set new option value.

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |
| value | <code>\*</code> | Value that need to be written to the options object |

**Example**  
```js
shape.set('my.options.object.value', 'value');
```
<a name="Shape+getCursor"></a>

### text.getCursor() ⇒ <code>Cursor</code>
Get cursor that used for render this shape.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Shape+setCursor"></a>

### text.setCursor(cursor) ⇒ <code>[Shape](#Shape)</code>
Assign cursor to the shape which will be used for render this shape.

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type |
| --- | --- |
| cursor | <code>Cursor</code> | 

<a name="Shape+getText"></a>

### text.getText() ⇒ <code>String</code>
Get text content from this shape.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Shape+setText"></a>

### text.setText([text]) ⇒ <code>[Shape](#Shape)</code>
Set new text content to this shape.

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [text] | <code>String</code> | <code>&#x27;&#x27;</code> | New text |

<a name="Shape+getWidth"></a>

### text.getWidth() ⇒ <code>Number</code>
Get shape width.

**Kind**: instance method of <code>[Text](#Text)</code>  
**Overrides:** <code>[getWidth](#Shape+getWidth)</code>  
<a name="Shape+setWidth"></a>

### text.setWidth([width]) ⇒ <code>[Shape](#Shape)</code>
Set new shape width.

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [width] | <code>Number</code> &#124; <code>String</code> | <code>15</code> | Shape width |

**Example**  
```js
shape.setWidth(15); // shape width is equal to 15 cells in the terminal
shape.setWidth('20%'); // shape width is equal to 20% of total viewport width
```
<a name="Shape+getHeight"></a>

### text.getHeight() ⇒ <code>Number</code>
Get shape height.

**Kind**: instance method of <code>[Text](#Text)</code>  
**Overrides:** <code>[getHeight](#Shape+getHeight)</code>  
<a name="Shape+setHeight"></a>

### text.setHeight([height]) ⇒ <code>[Shape](#Shape)</code>
Set new shape height.

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [height] | <code>Number</code> &#124; <code>String</code> | <code>5</code> | Shape height |

**Example**  
```js
shape.setHeight(15); // shape height is equal to 15 cells in the terminal
shape.setHeight('20%'); // shape height is equal to 20% of total viewport height
```
<a name="Shape+getX"></a>

### text.getX() ⇒ <code>Number</code>
Get X coordinate.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Shape+setX"></a>

### text.setX([x]) ⇒ <code>[Shape](#Shape)</code>
Set X coordinate.

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [x] | <code>Number</code> &#124; <code>String</code> | <code>10</code> | 

**Example**  
```js
shape.setX(2); // move shape to third cell by X axis
shape.setX('left'); // align shape to the left
shape.setX('center'); // align shape in the center
shape.setX('right'); // align shape to the right
shape.setX('50%'); // move shape to 50% by X axis
```
<a name="Shape+getY"></a>

### text.getY() ⇒ <code>Number</code>
Get Y coordinate.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Shape+setY"></a>

### text.setY([y]) ⇒ <code>[Shape](#Shape)</code>
Set Y coordinate.

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [y] | <code>Number</code> &#124; <code>String</code> | <code>10</code> | 

**Example**  
```js
shape.setY(2); // move shape to third cell by Y axis
shape.setY('top'); // align shape to the top
shape.setY('middle'); // align shape in the middle
shape.setY('bottom'); // align shape to the bottom
shape.setY('50%'); // move shape to 50% by Y axis
```
<a name="Shape+getBackground"></a>

### text.getBackground() ⇒ <code>String</code>
Get background color.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Shape+setBackground"></a>

### text.setBackground([background]) ⇒ <code>[Shape](#Shape)</code>
Set new background color.

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [background] | <code>String</code> | <code>none</code> | Color name or `none` if you want to disable background |

**Example**  
```js
shape.setBackground('black');
shape.setBackground('none');
```
<a name="Shape+getForeground"></a>

### text.getForeground() ⇒ <code>String</code>
Get foreground color.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Shape+setForeground"></a>

### text.setForeground([foreground]) ⇒ <code>[Shape](#Shape)</code>
Set new foreground color.

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [foreground] | <code>String</code> | <code>none</code> | Color name or `none` if you want to disable foreground |

**Example**  
```js
shape.setForeground('black');
shape.setForeground('none');
```
<a name="Shape+render"></a>

### text.render()
Base render method that must be implemented in childes.

**Kind**: instance method of <code>[Text](#Text)</code>  
**Overrides:** <code>[render](#Shape+render)</code>  
**Throws**:

- <code>Error</code> Throws error if method is not overridden

<a name="Shape+toObject"></a>

### text.toObject() ⇒ <code>Object</code>
Returns Object representation of the shape.
This representation consists of all options fields that you can pass in the constructor.

**Kind**: instance method of <code>[Text](#Text)</code>  
**Overrides:** <code>[toObject](#Shape+toObject)</code>  
<a name="Shape+toJSON"></a>

### text.toJSON() ⇒ <code>JSON</code>
Returns JSON representation of the shape.

**Kind**: instance method of <code>[Text](#Text)</code>  
