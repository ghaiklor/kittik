## Classes

<dl>
<dt><a href="#Shape">Shape</a></dt>
<dd><p>Base class for creating other shapes.
Each custom shape must extends from this class.</p>
</dd>
<dt><a href="#FigText">FigText</a></dt>
<dd></dd>
<dt><a href="#Image">Image</a></dt>
<dd><p>Implements support for Image drawing in terminal.</p>
</dd>
<dt><a href="#Rectangle">Rectangle</a></dt>
<dd><p>Implements rectangle shape with text support.</p>
</dd>
<dt><a href="#Text">Text</a></dt>
<dd><p>Implements Text shape which is rendering the text at specified point.
Supports different styles kinda bold, dim, underlined, etc...</p>
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
        * [.getBackground()](#Shape+getBackground) ⇒ <code>String</code> &#124; <code>Boolean</code>
        * [.setBackground([background])](#Shape+setBackground) ⇒ <code>[Shape](#Shape)</code>
        * [.getForeground()](#Shape+getForeground) ⇒ <code>String</code> &#124; <code>Boolean</code>
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

| Param | Type | Description |
| --- | --- | --- |
| cursor | <code>Cursor</code> | Cursor instance used for render the shape |
| [options] | <code>Object</code> |  |
| [options.text] | <code>String</code> | Text that will be rendered in the shape |
| [options.width] | <code>Number</code> &#124; <code>String</code> | Shape width can be 100 (cells) or 100% |
| [options.height] | <code>Number</code> &#124; <code>String</code> | Shape height can be 100 (cells) or 100% |
| [options.x] | <code>Number</code> &#124; <code>String</code> | Absolute coordinate X can be 100 (cells), left, center, right or percents |
| [options.y] | <code>Number</code> &#124; <code>String</code> | Absolute coordinate Y can be 100 (cells), top, middle, bottom or percents |
| [options.background] | <code>String</code> | Background color can be color name, rgb or hex |
| [options.foreground] | <code>String</code> | Foreground color can be color name, rgb or hex |

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

<a name="Shape+set"></a>

### shape.set(path, value) ⇒ <code>[Shape](#Shape)</code>
Set new option value.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |
| value | <code>\*</code> | Value that need to be written to the options object |

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

<a name="Shape+getBackground"></a>

### shape.getBackground() ⇒ <code>String</code> &#124; <code>Boolean</code>
Get background color.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+setBackground"></a>

### shape.setBackground([background]) ⇒ <code>[Shape](#Shape)</code>
Set new background color.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [background] | <code>String</code> &#124; <code>Boolean</code> | <code>false</code> | Color name, rgb, hex or false if you want to disable background |

<a name="Shape+getForeground"></a>

### shape.getForeground() ⇒ <code>String</code> &#124; <code>Boolean</code>
Get foreground color.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+setForeground"></a>

### shape.setForeground([foreground]) ⇒ <code>[Shape](#Shape)</code>
Set new foreground color.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [foreground] | <code>String</code> &#124; <code>Boolean</code> | <code>false</code> | Color name, rgb, hex or false if you want to disable foreground |

<a name="Shape+render"></a>

### *shape.render()*
Base render method that must be implemented in childes.

**Kind**: instance abstract method of <code>[Shape](#Shape)</code>  
**Throws**:

- <code>Error</code> Throws error if method will not be overridden

<a name="Shape+toObject"></a>

### shape.toObject() ⇒ <code>Object</code>
Returns Object representation of the shape.
This representation consists of all options fields.

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

<a name="FigText"></a>

## FigText
**Kind**: global class  

* [FigText](#FigText)
    * [new FigText(cursor, [options])](#new_FigText_new)
    * [.getWidth()](#FigText+getWidth) ⇒ <code>Number</code>
    * [.getHeight()](#FigText+getHeight) ⇒ <code>Number</code>
    * [.getFont()](#FigText+getFont) ⇒ <code>String</code>
    * [.setFont([font])](#FigText+setFont) ⇒ <code>[FigText](#FigText)</code>
    * [.getHorizontalLayout()](#FigText+getHorizontalLayout) ⇒ <code>String</code>
    * [.setHorizontalLayout([layout])](#FigText+setHorizontalLayout) ⇒ <code>[FigText](#FigText)</code>
    * [.getVerticalLayout()](#FigText+getVerticalLayout) ⇒ <code>String</code>
    * [.setVerticalLayout([layout])](#FigText+setVerticalLayout) ⇒ <code>[FigText](#FigText)</code>
    * [.render()](#FigText+render) ⇒ <code>[FigText](#FigText)</code>
    * [.toObject()](#FigText+toObject) ⇒ <code>Object</code> &#124; <code>\*</code>

<a name="new_FigText_new"></a>

### new FigText(cursor, [options])
Create ASCII-art shape.


| Param | Type | Description |
| --- | --- | --- |
| cursor | <code>Cursor</code> | Cursor instance |
| [options] | <code>Object</code> |  |
| [options.font] | <code>String</code> |  |
| [options.horizontalLayout] | <code>String</code> |  |
| [options.verticalLayout] | <code>String</code> |  |

<a name="FigText+getWidth"></a>

### figText.getWidth() ⇒ <code>Number</code>
Get actual width of the shape.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="FigText+getHeight"></a>

### figText.getHeight() ⇒ <code>Number</code>
Get actual height of the shape.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
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
| [font] | <code>String</code> | <code>Standard</code> | 

<a name="FigText+getHorizontalLayout"></a>

### figText.getHorizontalLayout() ⇒ <code>String</code>
Get horizontal layout.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="FigText+setHorizontalLayout"></a>

### figText.setHorizontalLayout([layout]) ⇒ <code>[FigText](#FigText)</code>
Set horizontal layout.

**Kind**: instance method of <code>[FigText](#FigText)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [layout] | <code>String</code> | <code>default</code> | 

<a name="FigText+getVerticalLayout"></a>

### figText.getVerticalLayout() ⇒ <code>String</code>
Get vertical layout.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="FigText+setVerticalLayout"></a>

### figText.setVerticalLayout([layout]) ⇒ <code>[FigText](#FigText)</code>
Set vertical layout.

**Kind**: instance method of <code>[FigText](#FigText)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [layout] | <code>String</code> | <code>default</code> | 

<a name="FigText+render"></a>

### figText.render() ⇒ <code>[FigText](#FigText)</code>
Render the shape.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="FigText+toObject"></a>

### figText.toObject() ⇒ <code>Object</code> &#124; <code>\*</code>
Serialize shape to object representation.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="Image"></a>

## Image
Implements support for Image drawing in terminal.

**Kind**: global class  
**Since**: 1.0.0  

* [Image](#Image)
    * [new Image(cursor, [options])](#new_Image_new)
    * _instance_
        * [.getImage()](#Image+getImage) ⇒ <code>String</code>
        * [.setImage(image)](#Image+setImage) ⇒ <code>[Shape](#Shape)</code>
        * [.isPreserveAspectRatio()](#Image+isPreserveAspectRatio) ⇒ <code>Boolean</code>
        * [.setPreserveAspectRatio([isPreserveAspectRatio])](#Image+setPreserveAspectRatio) ⇒ <code>[Shape](#Shape)</code>
        * [.render()](#Image+render) ⇒ <code>[Image](#Image)</code>
        * [.toObject()](#Image+toObject) ⇒ <code>Object</code> &#124; <code>\*</code>
    * _static_
        * [.isBase64(string)](#Image.isBase64) ⇒ <code>Boolean</code>

<a name="new_Image_new"></a>

### new Image(cursor, [options])
Creates new Image instance.


| Param | Type | Description |
| --- | --- | --- |
| cursor | <code>Cursor</code> | Cursor instance |
| [options] | <code>Object</code> |  |
| [options.image] | <code>String</code> | Base64 encoded file or path to image |
| [options.preserveAspectRatio] | <code>Boolean</code> | If true, preserve aspect ratio |

<a name="Image+getImage"></a>

### image.getImage() ⇒ <code>String</code>
Get base64 encoded image.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Image+setImage"></a>

### image.setImage(image) ⇒ <code>[Shape](#Shape)</code>
Set image to the shape.

**Kind**: instance method of <code>[Image](#Image)</code>  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>String</code> | Can be path to the image or base64 encoded image |

<a name="Image+isPreserveAspectRatio"></a>

### image.isPreserveAspectRatio() ⇒ <code>Boolean</code>
Check if image is preserve aspect ratio.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Image+setPreserveAspectRatio"></a>

### image.setPreserveAspectRatio([isPreserveAspectRatio]) ⇒ <code>[Shape](#Shape)</code>
Set preserve aspect ratio.

**Kind**: instance method of <code>[Image](#Image)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isPreserveAspectRatio] | <code>Boolean</code> | <code>true</code> | If false, not preserves aspect ratio in the image |

<a name="Image+render"></a>

### image.render() ⇒ <code>[Image](#Image)</code>
Renders the shape.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Image+toObject"></a>

### image.toObject() ⇒ <code>Object</code> &#124; <code>\*</code>
Serializes shape to the object representation.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Image.isBase64"></a>

### Image.isBase64(string) ⇒ <code>Boolean</code>
Check if string is base64 encoded string.

**Kind**: static method of <code>[Image](#Image)</code>  

| Param | Type |
| --- | --- |
| string | <code>String</code> | 

<a name="Rectangle"></a>

## Rectangle
Implements rectangle shape with text support.

**Kind**: global class  
**Since**: 1.0.0  
<a name="Text"></a>

## Text
Implements Text shape which is rendering the text at specified point.
Supports different styles kinda bold, dim, underlined, etc...

**Kind**: global class  
**Since**: 1.0.0  

* [Text](#Text)
    * [new Text(cursor, [options])](#new_Text_new)
    * [.getWidth()](#Text+getWidth) ⇒ <code>Number</code>
    * [.getHeight()](#Text+getHeight) ⇒ <code>Number</code>
    * [.isBold()](#Text+isBold) ⇒ <code>Boolean</code>
    * [.setBold([bold])](#Text+setBold) ⇒ <code>[Shape](#Shape)</code>
    * [.isDim()](#Text+isDim) ⇒ <code>Boolean</code>
    * [.setDim([dim])](#Text+setDim) ⇒ <code>[Shape](#Shape)</code>
    * [.isUnderlined()](#Text+isUnderlined) ⇒ <code>Boolean</code>
    * [.setUnderlined([underlined])](#Text+setUnderlined) ⇒ <code>[Shape](#Shape)</code>
    * [.isBlink()](#Text+isBlink) ⇒ <code>Boolean</code>
    * [.setBlink([blink])](#Text+setBlink) ⇒ <code>[Shape](#Shape)</code>
    * [.isReverse()](#Text+isReverse) ⇒ <code>Boolean</code>
    * [.setReverse([reverse])](#Text+setReverse) ⇒ <code>[Shape](#Shape)</code>
    * [.isHidden()](#Text+isHidden) ⇒ <code>Boolean</code>
    * [.setHidden([hidden])](#Text+setHidden) ⇒ <code>[Shape](#Shape)</code>
    * [.getAlign()](#Text+getAlign) ⇒ <code>String</code>
    * [.setAlign(align)](#Text+setAlign) ⇒ <code>[Shape](#Shape)</code>
    * [.render()](#Text+render) ⇒ <code>[Text](#Text)</code>
    * [.toObject()](#Text+toObject) ⇒ <code>Object</code>

<a name="new_Text_new"></a>

### new Text(cursor, [options])
Create Text shape.


| Param | Type | Description |
| --- | --- | --- |
| cursor | <code>Cursor</code> | Cursor instance |
| [options] | <code>Object</code> |  |
| [options.bold] | <code>Boolean</code> |  |
| [options.dim] | <code>Boolean</code> |  |
| [options.underlined] | <code>Boolean</code> |  |
| [options.blink] | <code>Boolean</code> |  |
| [options.reverse] | <code>Boolean</code> |  |
| [options.hidden] | <code>Boolean</code> |  |
| [options.align] | <code>String</code> |  |

<a name="Text+getWidth"></a>

### text.getWidth() ⇒ <code>Number</code>
Returns actual width of the shape.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Text+getHeight"></a>

### text.getHeight() ⇒ <code>Number</code>
Returns actual height of the shape.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Text+isBold"></a>

### text.isBold() ⇒ <code>Boolean</code>
Check if text should be rendered as bold.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Text+setBold"></a>

### text.setBold([bold]) ⇒ <code>[Shape](#Shape)</code>
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

### text.setDim([dim]) ⇒ <code>[Shape](#Shape)</code>
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

### text.setUnderlined([underlined]) ⇒ <code>[Shape](#Shape)</code>
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

### text.setBlink([blink]) ⇒ <code>[Shape](#Shape)</code>
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

### text.setReverse([reverse]) ⇒ <code>[Shape](#Shape)</code>
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

### text.setHidden([hidden]) ⇒ <code>[Shape](#Shape)</code>
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

### text.setAlign(align) ⇒ <code>[Shape](#Shape)</code>
Set text align.

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type |
| --- | --- |
| align | <code>String</code> | 

<a name="Text+render"></a>

### text.render() ⇒ <code>[Text](#Text)</code>
Render the shape based on options.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Text+toObject"></a>

### text.toObject() ⇒ <code>Object</code>
Overrides default toObject() method because we have new fields here.

**Kind**: instance method of <code>[Text](#Text)</code>  
