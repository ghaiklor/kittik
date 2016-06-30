<a name="FigText"></a>

## FigText ⇐ <code>[Shape](#Shape)</code>
Implements ASCII art text via Figlet fonts.

**Kind**: global class  
**Extends:** <code>[Shape](#Shape)</code>  
**Since**: 1.0.0  

* [FigText](#FigText) ⇐ <code>[Shape](#Shape)</code>
    * [new FigText(cursor, [options])](#new_FigText_new)
    * [.getFont()](#FigText+getFont) ⇒ <code>String</code>
    * [.setFont([font])](#FigText+setFont) ⇒ <code>[FigText](#FigText)</code>
    * [.getHorizontalLayout()](#FigText+getHorizontalLayout) ⇒ <code>String</code>
    * [.setHorizontalLayout([layout])](#FigText+setHorizontalLayout) ⇒ <code>[FigText](#FigText)</code>
    * [.getVerticalLayout()](#FigText+getVerticalLayout) ⇒ <code>String</code>
    * [.setVerticalLayout([layout])](#FigText+setVerticalLayout) ⇒ <code>[FigText](#FigText)</code>
    * [.render()](#FigText+render) ⇒ <code>[FigText](#FigText)</code>
    * [.toObject()](#FigText+toObject) ⇒ <code>Object</code>
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
    * [.toJSON()](#Shape+toJSON) ⇒ <code>JSON</code>

<a name="new_FigText_new"></a>

### new FigText(cursor, [options])
Create ASCII-art shape.


| Param | Type | Description |
| --- | --- | --- |
| cursor | <code>Cursor</code> | Cursor instance |
| [options] | <code>Object</code> | Options object |
| [options.font] | <code>String</code> | Figlet font that you want to use |
| [options.horizontalLayout] | <code>String</code> | A string value that indicates the horizontal layout to use |
| [options.verticalLayout] | <code>String</code> | A string value that indicates the vertical layout to use |

**Example**  
```js
FigText.create(cursor, {
  text: 'Hello, World',
  x: 'center',
  y: 'middle',
  font: 'Ghost',
  horizontalLayout: 'full',
  verticalLayout: 'full'
});
```
<a name="FigText+getFont"></a>

### figText.getFont() ⇒ <code>String</code>
Get font that uses for rendering text.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="FigText+setFont"></a>

### figText.setFont([font]) ⇒ <code>[FigText](#FigText)</code>
Set font that will be used for rendering the text.

**Kind**: instance method of <code>[FigText](#FigText)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [font] | <code>String</code> | <code>&#x27;Standard&#x27;</code> | 

<a name="FigText+getHorizontalLayout"></a>

### figText.getHorizontalLayout() ⇒ <code>String</code>
Get horizontal layout.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="FigText+setHorizontalLayout"></a>

### figText.setHorizontalLayout([layout]) ⇒ <code>[FigText](#FigText)</code>
Set horizontal layout.

**Kind**: instance method of <code>[FigText](#FigText)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [layout] | <code>String</code> | <code>&#x27;default&#x27;</code> | Can be default, full or fitted |

<a name="FigText+getVerticalLayout"></a>

### figText.getVerticalLayout() ⇒ <code>String</code>
Get vertical layout.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="FigText+setVerticalLayout"></a>

### figText.setVerticalLayout([layout]) ⇒ <code>[FigText](#FigText)</code>
Set vertical layout.

**Kind**: instance method of <code>[FigText](#FigText)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [layout] | <code>String</code> | <code>&#x27;default&#x27;</code> | Can be default, full or fitted |

<a name="FigText+render"></a>

### figText.render() ⇒ <code>[FigText](#FigText)</code>
Renders the shape.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
**Overrides:** <code>[render](#Shape+render)</code>  
<a name="FigText+toObject"></a>

### figText.toObject() ⇒ <code>Object</code>
Serialize shape to object representation.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
**Overrides:** <code>[toObject](#Shape+toObject)</code>  
<a name="Shape+get"></a>

### figText.get(path) ⇒ <code>\*</code>
Get option value.

**Kind**: instance method of <code>[FigText](#FigText)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |

**Example**  
```js
shape.get('my.options.object.value');
```
<a name="Shape+set"></a>

### figText.set(path, value) ⇒ <code>[Shape](#Shape)</code>
Set new option value.

**Kind**: instance method of <code>[FigText](#FigText)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |
| value | <code>\*</code> | Value that need to be written to the options object |

**Example**  
```js
shape.set('my.options.object.value', 'value');
```
<a name="Shape+getCursor"></a>

### figText.getCursor() ⇒ <code>Cursor</code>
Get cursor that used for render this shape.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="Shape+setCursor"></a>

### figText.setCursor(cursor) ⇒ <code>[Shape](#Shape)</code>
Assign cursor to the shape which will be used for render this shape.

**Kind**: instance method of <code>[FigText](#FigText)</code>  

| Param | Type |
| --- | --- |
| cursor | <code>Cursor</code> | 

<a name="Shape+getText"></a>

### figText.getText() ⇒ <code>String</code>
Get text content from this shape.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="Shape+setText"></a>

### figText.setText([text]) ⇒ <code>[Shape](#Shape)</code>
Set new text content to this shape.

**Kind**: instance method of <code>[FigText](#FigText)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [text] | <code>String</code> | <code>&#x27;&#x27;</code> | New text |

<a name="Shape+getWidth"></a>

### figText.getWidth() ⇒ <code>Number</code>
Get shape width.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
**Overrides:** <code>[getWidth](#Shape+getWidth)</code>  
<a name="Shape+setWidth"></a>

### figText.setWidth([width]) ⇒ <code>[Shape](#Shape)</code>
Set new shape width.

**Kind**: instance method of <code>[FigText](#FigText)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [width] | <code>Number</code> &#124; <code>String</code> | <code>15</code> | Shape width |

**Example**  
```js
shape.setWidth(15); // shape width is equal to 15 cells in the terminal
shape.setWidth('20%'); // shape width is equal to 20% of total viewport width
```
<a name="Shape+getHeight"></a>

### figText.getHeight() ⇒ <code>Number</code>
Get shape height.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
**Overrides:** <code>[getHeight](#Shape+getHeight)</code>  
<a name="Shape+setHeight"></a>

### figText.setHeight([height]) ⇒ <code>[Shape](#Shape)</code>
Set new shape height.

**Kind**: instance method of <code>[FigText](#FigText)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [height] | <code>Number</code> &#124; <code>String</code> | <code>5</code> | Shape height |

**Example**  
```js
shape.setHeight(15); // shape height is equal to 15 cells in the terminal
shape.setHeight('20%'); // shape height is equal to 20% of total viewport height
```
<a name="Shape+getX"></a>

### figText.getX() ⇒ <code>Number</code>
Get X coordinate.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="Shape+setX"></a>

### figText.setX([x]) ⇒ <code>[Shape](#Shape)</code>
Set X coordinate.

**Kind**: instance method of <code>[FigText](#FigText)</code>  

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

### figText.getY() ⇒ <code>Number</code>
Get Y coordinate.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="Shape+setY"></a>

### figText.setY([y]) ⇒ <code>[Shape](#Shape)</code>
Set Y coordinate.

**Kind**: instance method of <code>[FigText](#FigText)</code>  

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

### figText.getBackground() ⇒ <code>String</code>
Get background color.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="Shape+setBackground"></a>

### figText.setBackground([background]) ⇒ <code>[Shape](#Shape)</code>
Set new background color.

**Kind**: instance method of <code>[FigText](#FigText)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [background] | <code>String</code> | <code>none</code> | Color name or `none` if you want to disable background |

**Example**  
```js
shape.setBackground('black');
shape.setBackground('none');
```
<a name="Shape+getForeground"></a>

### figText.getForeground() ⇒ <code>String</code>
Get foreground color.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="Shape+setForeground"></a>

### figText.setForeground([foreground]) ⇒ <code>[Shape](#Shape)</code>
Set new foreground color.

**Kind**: instance method of <code>[FigText](#FigText)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [foreground] | <code>String</code> | <code>none</code> | Color name or `none` if you want to disable foreground |

**Example**  
```js
shape.setForeground('black');
shape.setForeground('none');
```
<a name="Shape+toJSON"></a>

### figText.toJSON() ⇒ <code>JSON</code>
Returns JSON representation of the shape.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
