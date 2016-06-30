<a name="Code"></a>

## Code ⇐ <code>[Shape](#Shape)</code>
Implements Code shape which renders the highlighted code at specified point.

**Kind**: global class  
**Extends:** <code>[Shape](#Shape)</code>  
**Since**: 1.0.0  

* [Code](#Code) ⇐ <code>[Shape](#Shape)</code>
    * [new Code(cursor, [options])](#new_Code_new)
    * [.getCode()](#Code+getCode) ⇒ <code>String</code>
    * [.setCode([code])](#Code+setCode) ⇒ <code>[Shape](#Shape)</code>
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

<a name="new_Code_new"></a>

### new Code(cursor, [options])
Create Code shape.


| Param | Type | Description |
| --- | --- | --- |
| cursor | <code>Cursor</code> | Cursor instance |
| [options] | <code>Object</code> | Options object |
| [options.code] | <code>String</code> | Code fragment that you want to show |

**Example**  
```js
Code.create(cursor, {
  code: 'console.log('Your code here');'
});
```
<a name="Code+getCode"></a>

### code.getCode() ⇒ <code>String</code>
Get current code from shape.

**Kind**: instance method of <code>[Code](#Code)</code>  
<a name="Code+setCode"></a>

### code.setCode([code]) ⇒ <code>[Shape](#Shape)</code>
Set new code to this shape.

**Kind**: instance method of <code>[Code](#Code)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [code] | <code>String</code> | <code>&#x27;&#x27;</code> | 

<a name="Shape+get"></a>

### code.get(path) ⇒ <code>\*</code>
Get option value.

**Kind**: instance method of <code>[Code](#Code)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |

**Example**  
```js
shape.get('my.options.object.value');
```
<a name="Shape+set"></a>

### code.set(path, value) ⇒ <code>[Shape](#Shape)</code>
Set new option value.

**Kind**: instance method of <code>[Code](#Code)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |
| value | <code>\*</code> | Value that need to be written to the options object |

**Example**  
```js
shape.set('my.options.object.value', 'value');
```
<a name="Shape+getCursor"></a>

### code.getCursor() ⇒ <code>Cursor</code>
Get cursor that used for render this shape.

**Kind**: instance method of <code>[Code](#Code)</code>  
<a name="Shape+setCursor"></a>

### code.setCursor(cursor) ⇒ <code>[Shape](#Shape)</code>
Assign cursor to the shape which will be used for render this shape.

**Kind**: instance method of <code>[Code](#Code)</code>  

| Param | Type |
| --- | --- |
| cursor | <code>Cursor</code> | 

<a name="Shape+getText"></a>

### code.getText() ⇒ <code>String</code>
Get text content from this shape.

**Kind**: instance method of <code>[Code](#Code)</code>  
<a name="Shape+setText"></a>

### code.setText([text]) ⇒ <code>[Shape](#Shape)</code>
Set new text content to this shape.

**Kind**: instance method of <code>[Code](#Code)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [text] | <code>String</code> | <code>&#x27;&#x27;</code> | New text |

<a name="Shape+getWidth"></a>

### code.getWidth() ⇒ <code>Number</code>
Get shape width.

**Kind**: instance method of <code>[Code](#Code)</code>  
**Overrides:** <code>[getWidth](#Shape+getWidth)</code>  
<a name="Shape+setWidth"></a>

### code.setWidth([width]) ⇒ <code>[Shape](#Shape)</code>
Set new shape width.

**Kind**: instance method of <code>[Code](#Code)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [width] | <code>Number</code> &#124; <code>String</code> | <code>15</code> | Shape width |

**Example**  
```js
shape.setWidth(15); // shape width is equal to 15 cells in the terminal
shape.setWidth('20%'); // shape width is equal to 20% of total viewport width
```
<a name="Shape+getHeight"></a>

### code.getHeight() ⇒ <code>Number</code>
Get shape height.

**Kind**: instance method of <code>[Code](#Code)</code>  
**Overrides:** <code>[getHeight](#Shape+getHeight)</code>  
<a name="Shape+setHeight"></a>

### code.setHeight([height]) ⇒ <code>[Shape](#Shape)</code>
Set new shape height.

**Kind**: instance method of <code>[Code](#Code)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [height] | <code>Number</code> &#124; <code>String</code> | <code>5</code> | Shape height |

**Example**  
```js
shape.setHeight(15); // shape height is equal to 15 cells in the terminal
shape.setHeight('20%'); // shape height is equal to 20% of total viewport height
```
<a name="Shape+getX"></a>

### code.getX() ⇒ <code>Number</code>
Get X coordinate.

**Kind**: instance method of <code>[Code](#Code)</code>  
<a name="Shape+setX"></a>

### code.setX([x]) ⇒ <code>[Shape](#Shape)</code>
Set X coordinate.

**Kind**: instance method of <code>[Code](#Code)</code>  

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

### code.getY() ⇒ <code>Number</code>
Get Y coordinate.

**Kind**: instance method of <code>[Code](#Code)</code>  
<a name="Shape+setY"></a>

### code.setY([y]) ⇒ <code>[Shape](#Shape)</code>
Set Y coordinate.

**Kind**: instance method of <code>[Code](#Code)</code>  

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

### code.getBackground() ⇒ <code>String</code>
Get background color.

**Kind**: instance method of <code>[Code](#Code)</code>  
<a name="Shape+setBackground"></a>

### code.setBackground([background]) ⇒ <code>[Shape](#Shape)</code>
Set new background color.

**Kind**: instance method of <code>[Code](#Code)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [background] | <code>String</code> | <code>none</code> | Color name or `none` if you want to disable background |

**Example**  
```js
shape.setBackground('black');
shape.setBackground('none');
```
<a name="Shape+getForeground"></a>

### code.getForeground() ⇒ <code>String</code>
Get foreground color.

**Kind**: instance method of <code>[Code](#Code)</code>  
<a name="Shape+setForeground"></a>

### code.setForeground([foreground]) ⇒ <code>[Shape](#Shape)</code>
Set new foreground color.

**Kind**: instance method of <code>[Code](#Code)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [foreground] | <code>String</code> | <code>none</code> | Color name or `none` if you want to disable foreground |

**Example**  
```js
shape.setForeground('black');
shape.setForeground('none');
```
<a name="Shape+render"></a>

### code.render()
Base render method that must be implemented in childes.

**Kind**: instance method of <code>[Code](#Code)</code>  
**Overrides:** <code>[render](#Shape+render)</code>  
**Throws**:

- <code>Error</code> Throws error if method is not overridden

<a name="Shape+toObject"></a>

### code.toObject() ⇒ <code>Object</code>
Returns Object representation of the shape.
This representation consists of all options fields that you can pass in the constructor.

**Kind**: instance method of <code>[Code](#Code)</code>  
**Overrides:** <code>[toObject](#Shape+toObject)</code>  
<a name="Shape+toJSON"></a>

### code.toJSON() ⇒ <code>JSON</code>
Returns JSON representation of the shape.

**Kind**: instance method of <code>[Code](#Code)</code>  
