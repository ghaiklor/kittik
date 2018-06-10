<a name="Code"></a>

## Code ⇐ <code>Shape</code>
Implements Code shape which renders the highlighted code at specified point.

**Kind**: global class  
**Extends:** <code>Shape</code>  
**Since**: 1.0.0  

* [Code](#Code) ⇐ <code>Shape</code>
    * [new Code(cursor, [options])](#new_Code_new)
    * [.getCode()](#Code+getCode) ⇒ <code>String</code>
    * [.setCode([code])](#Code+setCode) ⇒ <code>Shape</code>
    * [.getWidth()](#Code+getWidth) ⇒ <code>Number</code>
    * [.getHeight()](#Code+getHeight) ⇒ <code>Number</code>
    * [.render()](#Code+render) ⇒ <code>Text</code>
    * [.toObject()](#Code+toObject) ⇒ <code>Object</code>

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

### code.setCode([code]) ⇒ <code>Shape</code>
Set new code to this shape.

**Kind**: instance method of <code>[Code](#Code)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [code] | <code>String</code> | <code>&#x27;&#x27;</code> | 

<a name="Code+getWidth"></a>

### code.getWidth() ⇒ <code>Number</code>
Returns actual width of the shape.
Since code shape hasn't specified width, we need to override default.
It looks for the longest line in your shape and returns its length.

**Kind**: instance method of <code>[Code](#Code)</code>  
<a name="Code+getHeight"></a>

### code.getHeight() ⇒ <code>Number</code>
Returns actual height of the shape.
Since code shape hasn't specified height, we need to override default.
It returns count of lines in our shape.

**Kind**: instance method of <code>[Code](#Code)</code>  
<a name="Code+render"></a>

### code.render() ⇒ <code>Text</code>
Render the shape based on options.

**Kind**: instance method of <code>[Code](#Code)</code>  
<a name="Code+toObject"></a>

### code.toObject() ⇒ <code>Object</code>
Overrides default toObject() method because we have new fields here.

**Kind**: instance method of <code>[Code](#Code)</code>  
