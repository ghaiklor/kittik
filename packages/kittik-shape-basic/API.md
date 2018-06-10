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

