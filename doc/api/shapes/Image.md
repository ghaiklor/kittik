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

