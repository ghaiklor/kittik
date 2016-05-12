## Classes

<dl>
<dt><a href="#Shape">Shape</a></dt>
<dd><p>Base class for creating other shapes.
Each custom shape must extends from this class.</p>
</dd>
<dt><a href="#Code">Code</a> ⇐ <code><a href="#Shape">Shape</a></code></dt>
<dd><p>Implements Code shape which renders the highlighted code at specified point.</p>
</dd>
<dt><a href="#FigText">FigText</a> ⇐ <code><a href="#Shape">Shape</a></code></dt>
<dd><p>Implements ASCII art text via Figlet fonts.</p>
</dd>
<dt><a href="#Image">Image</a> ⇐ <code><a href="#Shape">Shape</a></code></dt>
<dd><p>Implements support for Image drawing in terminal.</p>
</dd>
<dt><a href="#Rectangle">Rectangle</a> ⇐ <code><a href="#Shape">Shape</a></code></dt>
<dd><p>Implements rectangle shape with text support.</p>
</dd>
<dt><a href="#Text">Text</a> ⇐ <code><a href="#Shape">Shape</a></code></dt>
<dd><p>Implements Text shape which renders the text at specified point.</p>
</dd>
</dl>

<a name="Shape"></a>

## Shape
Base class for creating other shapes.
Each custom shape must extends from this class.

**Kind**: global class  
**Since**: 1.0.0  

* [Shape](#Shape)
    * [new Shape(cursor, [options])](#new_Shape_new)
    * _instance_
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
        * *[.render()](#Shape+render)*
        * [.toObject()](#Shape+toObject) ⇒ <code>Object</code>
        * [.toJSON()](#Shape+toJSON) ⇒ <code>JSON</code>
    * _static_
        * [.create(args)](#Shape.create) ⇒ <code>[Shape](#Shape)</code>
        * [.fromObject(obj, [cursor])](#Shape.fromObject) ⇒ <code>[Shape](#Shape)</code>
        * [.fromJSON(json, [cursor])](#Shape.fromJSON) ⇒ <code>[Shape](#Shape)</code>

<a name="new_Shape_new"></a>

### new Shape(cursor, [options])
Create basic Shape instance.
This shape renders nothing, but throws an exception that you need to implement this shape in childes.


| Param | Type | Description |
| --- | --- | --- |
| cursor | <code>Cursor</code> | Cursor instance used for render the shape |
| [options] | <code>Object</code> | Options object |
| [options.text] | <code>String</code> | Text that will be rendered in the shape |
| [options.width] | <code>Number</code> &#124; <code>String</code> | Shape width can be 100 (cells) or 100% |
| [options.height] | <code>Number</code> &#124; <code>String</code> | Shape height can be 100 (cells) or 100% |
| [options.x] | <code>Number</code> &#124; <code>String</code> | Absolute coordinate X can be 100 (cells), left, center, right or percents |
| [options.y] | <code>Number</code> &#124; <code>String</code> | Absolute coordinate Y can be 100 (cells), top, middle, bottom or percents |
| [options.background] | <code>String</code> | Background color can be only color name or `none` if you want to disable |
| [options.foreground] | <code>String</code> | Foreground color can be only color name or `none` if you want to disable |

**Example**  
```js
import Shape from 'kittik-shape-basic';

export default class Rectangle extends Shape {
  render() {
    const cursor = this.getCursor();
    // Implement your logic here for rendering the shape
  }
}
```
<a name="Shape+get"></a>

### shape.get(path) ⇒ <code>\*</code>
Get option value.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |

**Example**  
```js
shape.get('my.options.object.value');
```
<a name="Shape+set"></a>

### shape.set(path, value) ⇒ <code>[Shape](#Shape)</code>
Set new option value.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |
| value | <code>\*</code> | Value that need to be written to the options object |

**Example**  
```js
shape.set('my.options.object.value', 'value');
```
<a name="Shape+getCursor"></a>

### shape.getCursor() ⇒ <code>Cursor</code>
Get cursor that used for render this shape.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+setCursor"></a>

### shape.setCursor(cursor) ⇒ <code>[Shape](#Shape)</code>
Assign cursor to the shape which will be used for render this shape.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type |
| --- | --- |
| cursor | <code>Cursor</code> | 

<a name="Shape+getText"></a>

### shape.getText() ⇒ <code>String</code>
Get text content from this shape.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+setText"></a>

### shape.setText([text]) ⇒ <code>[Shape](#Shape)</code>
Set new text content to this shape.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [text] | <code>String</code> | <code>&#x27;&#x27;</code> | New text |

<a name="Shape+getWidth"></a>

### shape.getWidth() ⇒ <code>Number</code>
Get shape width.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+setWidth"></a>

### shape.setWidth([width]) ⇒ <code>[Shape](#Shape)</code>
Set new shape width.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [width] | <code>Number</code> &#124; <code>String</code> | <code>15</code> | Shape width |

**Example**  
```js
shape.setWidth(15); // shape width is equal to 15 cells in the terminal
shape.setWidth('20%'); // shape width is equal to 20% of total viewport width
```
<a name="Shape+getHeight"></a>

### shape.getHeight() ⇒ <code>Number</code>
Get shape height.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+setHeight"></a>

### shape.setHeight([height]) ⇒ <code>[Shape](#Shape)</code>
Set new shape height.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [height] | <code>Number</code> &#124; <code>String</code> | <code>5</code> | Shape height |

**Example**  
```js
shape.setHeight(15); // shape height is equal to 15 cells in the terminal
shape.setHeight('20%'); // shape height is equal to 20% of total viewport height
```
<a name="Shape+getX"></a>

### shape.getX() ⇒ <code>Number</code>
Get X coordinate.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+setX"></a>

### shape.setX([x]) ⇒ <code>[Shape](#Shape)</code>
Set X coordinate.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

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

### shape.getY() ⇒ <code>Number</code>
Get Y coordinate.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+setY"></a>

### shape.setY([y]) ⇒ <code>[Shape](#Shape)</code>
Set Y coordinate.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

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

### shape.getBackground() ⇒ <code>String</code>
Get background color.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+setBackground"></a>

### shape.setBackground([background]) ⇒ <code>[Shape](#Shape)</code>
Set new background color.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [background] | <code>String</code> | <code>none</code> | Color name or `none` if you want to disable background |

**Example**  
```js
shape.setBackground('black');
shape.setBackground('none');
```
<a name="Shape+getForeground"></a>

### shape.getForeground() ⇒ <code>String</code>
Get foreground color.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+setForeground"></a>

### shape.setForeground([foreground]) ⇒ <code>[Shape](#Shape)</code>
Set new foreground color.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [foreground] | <code>String</code> | <code>none</code> | Color name or `none` if you want to disable foreground |

**Example**  
```js
shape.setForeground('black');
shape.setForeground('none');
```
<a name="Shape+render"></a>

### *shape.render()*
Base render method that must be implemented in childes.

**Kind**: instance abstract method of <code>[Shape](#Shape)</code>  
**Throws**:

- <code>Error</code> Throws error if method is not overridden

<a name="Shape+toObject"></a>

### shape.toObject() ⇒ <code>Object</code>
Returns Object representation of the shape.
This representation consists of all options fields that you can pass in the constructor.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+toJSON"></a>

### shape.toJSON() ⇒ <code>JSON</code>
Returns JSON representation of the shape.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape.create"></a>

### Shape.create(args) ⇒ <code>[Shape](#Shape)</code>
Wrapper around `new Shape()`.

**Kind**: static method of <code>[Shape](#Shape)</code>  

| Param | Type |
| --- | --- |
| args | <code>\*</code> | 

<a name="Shape.fromObject"></a>

### Shape.fromObject(obj, [cursor]) ⇒ <code>[Shape](#Shape)</code>
Creates new Shape instance from Object representation.
You can ignore cursor param and create only Shape representation.
Though, you can add cursor in the runtime via [setCursor](setCursor) method.

**Kind**: static method of <code>[Shape](#Shape)</code>  
**Throws**:

- <code>Error</code> Throws an error if object is not a representation of the shape


| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Object that you got from [toObject](toObject) method |
| [cursor] | <code>Cursor</code> | Cursor instance |

<a name="Shape.fromJSON"></a>

### Shape.fromJSON(json, [cursor]) ⇒ <code>[Shape](#Shape)</code>
Creates new Shape instance from JSON representation.
You can ignore cursor param and create only Shape representation.
Though, you can add cursor in the runtime via [setCursor](setCursor) method.

**Kind**: static method of <code>[Shape](#Shape)</code>  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>String</code> | JSON string that you got from [Shape.toJSON](Shape.toJSON) |
| [cursor] | <code>Cursor</code> | Cursor instance |

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
<a name="Image"></a>

## Image ⇐ <code>[Shape](#Shape)</code>
Implements support for Image drawing in terminal.

**Kind**: global class  
**Extends:** <code>[Shape](#Shape)</code>  
**Since**: 1.0.0  

* [Image](#Image) ⇐ <code>[Shape](#Shape)</code>
    * [new Image(cursor, [options])](#new_Image_new)
    * _instance_
        * [.getImage()](#Image+getImage) ⇒ <code>String</code>
        * [.setImage(image)](#Image+setImage) ⇒ <code>[Image](#Image)</code>
        * [.isPreserveAspectRatio()](#Image+isPreserveAspectRatio) ⇒ <code>Boolean</code>
        * [.setPreserveAspectRatio([isPreserveAspectRatio])](#Image+setPreserveAspectRatio) ⇒ <code>[Image](#Image)</code>
        * [.toObject()](#Image+toObject) ⇒ <code>Object</code>
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
        * [.toJSON()](#Shape+toJSON) ⇒ <code>JSON</code>
    * _static_
        * [.isBase64(string)](#Image.isBase64) ⇒ <code>Boolean</code>

<a name="new_Image_new"></a>

### new Image(cursor, [options])
Creates new Image instance.
Worth noting, that Image can be rendered only in iTerm 3.
Applies immediately, without caching in virtual terminal in [Cursor](Cursor).


| Param | Type | Description |
| --- | --- | --- |
| cursor | <code>Cursor</code> | Cursor instance |
| [options] | <code>Object</code> | Options object |
| [options.image] | <code>String</code> | Base64 encoded file or path to image |
| [options.preserveAspectRatio] | <code>Boolean</code> | If true, preserve aspect ratio |

**Example**  
```js
Image.create(cursor, {
  x: 'center',
  y: 'middle',
  image: 'my-image.png',
  preserveAspectRatio: true
});
```
<a name="Image+getImage"></a>

### image.getImage() ⇒ <code>String</code>
Get base64 encoded image.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Image+setImage"></a>

### image.setImage(image) ⇒ <code>[Image](#Image)</code>
Set image to the shape.

**Kind**: instance method of <code>[Image](#Image)</code>  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>String</code> | Can be path to the image or base64 encoded image |

**Example**  
```js
image.setShape('base64');
image.setShape('./my-image.png');
```
<a name="Image+isPreserveAspectRatio"></a>

### image.isPreserveAspectRatio() ⇒ <code>Boolean</code>
Check if image is preserve aspect ratio.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Image+setPreserveAspectRatio"></a>

### image.setPreserveAspectRatio([isPreserveAspectRatio]) ⇒ <code>[Image](#Image)</code>
Set preserve aspect ratio.

**Kind**: instance method of <code>[Image](#Image)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isPreserveAspectRatio] | <code>Boolean</code> | <code>true</code> | If false, not preserves aspect ratio in the image |

<a name="Image+toObject"></a>

### image.toObject() ⇒ <code>Object</code>
Serializes shape to the object representation.

**Kind**: instance method of <code>[Image](#Image)</code>  
**Overrides:** <code>[toObject](#Shape+toObject)</code>  
<a name="Shape+get"></a>

### image.get(path) ⇒ <code>\*</code>
Get option value.

**Kind**: instance method of <code>[Image](#Image)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |

**Example**  
```js
shape.get('my.options.object.value');
```
<a name="Shape+set"></a>

### image.set(path, value) ⇒ <code>[Shape](#Shape)</code>
Set new option value.

**Kind**: instance method of <code>[Image](#Image)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |
| value | <code>\*</code> | Value that need to be written to the options object |

**Example**  
```js
shape.set('my.options.object.value', 'value');
```
<a name="Shape+getCursor"></a>

### image.getCursor() ⇒ <code>Cursor</code>
Get cursor that used for render this shape.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Shape+setCursor"></a>

### image.setCursor(cursor) ⇒ <code>[Shape](#Shape)</code>
Assign cursor to the shape which will be used for render this shape.

**Kind**: instance method of <code>[Image](#Image)</code>  

| Param | Type |
| --- | --- |
| cursor | <code>Cursor</code> | 

<a name="Shape+getText"></a>

### image.getText() ⇒ <code>String</code>
Get text content from this shape.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Shape+setText"></a>

### image.setText([text]) ⇒ <code>[Shape](#Shape)</code>
Set new text content to this shape.

**Kind**: instance method of <code>[Image](#Image)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [text] | <code>String</code> | <code>&#x27;&#x27;</code> | New text |

<a name="Shape+getWidth"></a>

### image.getWidth() ⇒ <code>Number</code>
Get shape width.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Shape+setWidth"></a>

### image.setWidth([width]) ⇒ <code>[Shape](#Shape)</code>
Set new shape width.

**Kind**: instance method of <code>[Image](#Image)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [width] | <code>Number</code> &#124; <code>String</code> | <code>15</code> | Shape width |

**Example**  
```js
shape.setWidth(15); // shape width is equal to 15 cells in the terminal
shape.setWidth('20%'); // shape width is equal to 20% of total viewport width
```
<a name="Shape+getHeight"></a>

### image.getHeight() ⇒ <code>Number</code>
Get shape height.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Shape+setHeight"></a>

### image.setHeight([height]) ⇒ <code>[Shape](#Shape)</code>
Set new shape height.

**Kind**: instance method of <code>[Image](#Image)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [height] | <code>Number</code> &#124; <code>String</code> | <code>5</code> | Shape height |

**Example**  
```js
shape.setHeight(15); // shape height is equal to 15 cells in the terminal
shape.setHeight('20%'); // shape height is equal to 20% of total viewport height
```
<a name="Shape+getX"></a>

### image.getX() ⇒ <code>Number</code>
Get X coordinate.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Shape+setX"></a>

### image.setX([x]) ⇒ <code>[Shape](#Shape)</code>
Set X coordinate.

**Kind**: instance method of <code>[Image](#Image)</code>  

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

### image.getY() ⇒ <code>Number</code>
Get Y coordinate.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Shape+setY"></a>

### image.setY([y]) ⇒ <code>[Shape](#Shape)</code>
Set Y coordinate.

**Kind**: instance method of <code>[Image](#Image)</code>  

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

### image.getBackground() ⇒ <code>String</code>
Get background color.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Shape+setBackground"></a>

### image.setBackground([background]) ⇒ <code>[Shape](#Shape)</code>
Set new background color.

**Kind**: instance method of <code>[Image](#Image)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [background] | <code>String</code> | <code>none</code> | Color name or `none` if you want to disable background |

**Example**  
```js
shape.setBackground('black');
shape.setBackground('none');
```
<a name="Shape+getForeground"></a>

### image.getForeground() ⇒ <code>String</code>
Get foreground color.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Shape+setForeground"></a>

### image.setForeground([foreground]) ⇒ <code>[Shape](#Shape)</code>
Set new foreground color.

**Kind**: instance method of <code>[Image](#Image)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [foreground] | <code>String</code> | <code>none</code> | Color name or `none` if you want to disable foreground |

**Example**  
```js
shape.setForeground('black');
shape.setForeground('none');
```
<a name="Shape+render"></a>

### image.render()
Base render method that must be implemented in childes.

**Kind**: instance method of <code>[Image](#Image)</code>  
**Overrides:** <code>[render](#Shape+render)</code>  
**Throws**:

- <code>Error</code> Throws error if method is not overridden

<a name="Shape+toJSON"></a>

### image.toJSON() ⇒ <code>JSON</code>
Returns JSON representation of the shape.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Image.isBase64"></a>

### Image.isBase64(string) ⇒ <code>Boolean</code>
Check if string is base64 encoded string.

**Kind**: static method of <code>[Image](#Image)</code>  

| Param | Type |
| --- | --- |
| string | <code>String</code> | 

<a name="Rectangle"></a>

## Rectangle ⇐ <code>[Shape](#Shape)</code>
Implements rectangle shape with text support.

**Kind**: global class  
**Extends:** <code>[Shape](#Shape)</code>  
**Since**: 1.0.0  

* [Rectangle](#Rectangle) ⇐ <code>[Shape](#Shape)</code>
    * [new Rectangle(cursor, [options])](#new_Rectangle_new)
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

<a name="new_Rectangle_new"></a>

### new Rectangle(cursor, [options])
Create Rectangle shape instance.


| Param | Type | Description |
| --- | --- | --- |
| cursor | <code>Cursor</code> | Cursor instance |
| [options] | <code>Object</code> | Options object |

**Example**  
```js
Rectangle.create(cursor, {
  text: 'Hello, World',
  width: 20,
  height: '50%',
  x: 'center',
  y: 'middle',
  background: 'black',
  foreground: 'white'
});
```
<a name="Shape+get"></a>

### rectangle.get(path) ⇒ <code>\*</code>
Get option value.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |

**Example**  
```js
shape.get('my.options.object.value');
```
<a name="Shape+set"></a>

### rectangle.set(path, value) ⇒ <code>[Shape](#Shape)</code>
Set new option value.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |
| value | <code>\*</code> | Value that need to be written to the options object |

**Example**  
```js
shape.set('my.options.object.value', 'value');
```
<a name="Shape+getCursor"></a>

### rectangle.getCursor() ⇒ <code>Cursor</code>
Get cursor that used for render this shape.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
<a name="Shape+setCursor"></a>

### rectangle.setCursor(cursor) ⇒ <code>[Shape](#Shape)</code>
Assign cursor to the shape which will be used for render this shape.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  

| Param | Type |
| --- | --- |
| cursor | <code>Cursor</code> | 

<a name="Shape+getText"></a>

### rectangle.getText() ⇒ <code>String</code>
Get text content from this shape.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
<a name="Shape+setText"></a>

### rectangle.setText([text]) ⇒ <code>[Shape](#Shape)</code>
Set new text content to this shape.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [text] | <code>String</code> | <code>&#x27;&#x27;</code> | New text |

<a name="Shape+getWidth"></a>

### rectangle.getWidth() ⇒ <code>Number</code>
Get shape width.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
<a name="Shape+setWidth"></a>

### rectangle.setWidth([width]) ⇒ <code>[Shape](#Shape)</code>
Set new shape width.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [width] | <code>Number</code> &#124; <code>String</code> | <code>15</code> | Shape width |

**Example**  
```js
shape.setWidth(15); // shape width is equal to 15 cells in the terminal
shape.setWidth('20%'); // shape width is equal to 20% of total viewport width
```
<a name="Shape+getHeight"></a>

### rectangle.getHeight() ⇒ <code>Number</code>
Get shape height.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
<a name="Shape+setHeight"></a>

### rectangle.setHeight([height]) ⇒ <code>[Shape](#Shape)</code>
Set new shape height.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [height] | <code>Number</code> &#124; <code>String</code> | <code>5</code> | Shape height |

**Example**  
```js
shape.setHeight(15); // shape height is equal to 15 cells in the terminal
shape.setHeight('20%'); // shape height is equal to 20% of total viewport height
```
<a name="Shape+getX"></a>

### rectangle.getX() ⇒ <code>Number</code>
Get X coordinate.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
<a name="Shape+setX"></a>

### rectangle.setX([x]) ⇒ <code>[Shape](#Shape)</code>
Set X coordinate.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  

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

### rectangle.getY() ⇒ <code>Number</code>
Get Y coordinate.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
<a name="Shape+setY"></a>

### rectangle.setY([y]) ⇒ <code>[Shape](#Shape)</code>
Set Y coordinate.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  

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

### rectangle.getBackground() ⇒ <code>String</code>
Get background color.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
<a name="Shape+setBackground"></a>

### rectangle.setBackground([background]) ⇒ <code>[Shape](#Shape)</code>
Set new background color.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [background] | <code>String</code> | <code>none</code> | Color name or `none` if you want to disable background |

**Example**  
```js
shape.setBackground('black');
shape.setBackground('none');
```
<a name="Shape+getForeground"></a>

### rectangle.getForeground() ⇒ <code>String</code>
Get foreground color.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
<a name="Shape+setForeground"></a>

### rectangle.setForeground([foreground]) ⇒ <code>[Shape](#Shape)</code>
Set new foreground color.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [foreground] | <code>String</code> | <code>none</code> | Color name or `none` if you want to disable foreground |

**Example**  
```js
shape.setForeground('black');
shape.setForeground('none');
```
<a name="Shape+render"></a>

### rectangle.render()
Base render method that must be implemented in childes.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Overrides:** <code>[render](#Shape+render)</code>  
**Throws**:

- <code>Error</code> Throws error if method is not overridden

<a name="Shape+toObject"></a>

### rectangle.toObject() ⇒ <code>Object</code>
Returns Object representation of the shape.
This representation consists of all options fields that you can pass in the constructor.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
<a name="Shape+toJSON"></a>

### rectangle.toJSON() ⇒ <code>JSON</code>
Returns JSON representation of the shape.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
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
