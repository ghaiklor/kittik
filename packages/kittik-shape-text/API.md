<a name="Text"></a>

## Text ⇐ <code>Shape</code>
Implements Text shape which renders the text at specified point.

**Kind**: global class  
**Extends:** <code>Shape</code>  
**Since**: 1.0.0  

* [Text](#Text) ⇐ <code>Shape</code>
    * [new Text(cursor, [options])](#new_Text_new)
    * [.getWidth()](#Text+getWidth) ⇒ <code>Number</code>
    * [.getHeight()](#Text+getHeight) ⇒ <code>Number</code>
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
    * [.render()](#Text+render) ⇒ <code>[Text](#Text)</code>
    * [.toObject()](#Text+toObject) ⇒ <code>Object</code>

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
<a name="Text+getWidth"></a>

### text.getWidth() ⇒ <code>Number</code>
Returns actual width of the shape.
Since text hasn't specified width, we need to override default.
It looks for the longest line in your shape and returns its length.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Text+getHeight"></a>

### text.getHeight() ⇒ <code>Number</code>
Returns actual height of the shape.
Since text hasn't specified height, we need to override default.
It returns count of lines in our shape.

**Kind**: instance method of <code>[Text](#Text)</code>  
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

<a name="Text+render"></a>

### text.render() ⇒ <code>[Text](#Text)</code>
Render the shape based on options.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Text+toObject"></a>

### text.toObject() ⇒ <code>Object</code>
Overrides default toObject() method because we have new fields here.

**Kind**: instance method of <code>[Text](#Text)</code>  
