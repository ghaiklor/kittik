<a name="FigText"></a>

## FigText ⇐ <code>Shape</code>
Implements ASCII art text via Figlet fonts.

**Kind**: global class  
**Extends:** <code>Shape</code>  
**Since**: 1.0.0  

* [FigText](#FigText) ⇐ <code>Shape</code>
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
    * [.toObject()](#FigText+toObject) ⇒ <code>Object</code>

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
<a name="FigText+getWidth"></a>

### figText.getWidth() ⇒ <code>Number</code>
Get actual width of the shape.
Since we don't specify width of the shape, we need to calculate its sizes on our own.
The longest line in our shape will be our shape width.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="FigText+getHeight"></a>

### figText.getHeight() ⇒ <code>Number</code>
Get actual height of the shape.
Since we don't specify height of the shape, we need to calculate its sizes on our own.
Count of total lines in our shape will be our height.

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
<a name="FigText+toObject"></a>

### figText.toObject() ⇒ <code>Object</code>
Serialize shape to object representation.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
