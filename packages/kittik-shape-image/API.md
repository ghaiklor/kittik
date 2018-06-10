<a name="Image"></a>

## Image ⇐ <code>Shape</code>
Implements support for Image drawing in terminal.

**Kind**: global class  
**Extends:** <code>Shape</code>  
**Since**: 1.0.0  

* [Image](#Image) ⇐ <code>Shape</code>
    * [new Image(cursor, [options])](#new_Image_new)
    * _instance_
        * [.getImage()](#Image+getImage) ⇒ <code>String</code>
        * [.setImage(image)](#Image+setImage) ⇒ <code>[Image](#Image)</code>
        * [.isPreserveAspectRatio()](#Image+isPreserveAspectRatio) ⇒ <code>Boolean</code>
        * [.setPreserveAspectRatio([isPreserveAspectRatio])](#Image+setPreserveAspectRatio) ⇒ <code>[Image](#Image)</code>
        * [.render()](#Image+render) ⇒ <code>[Image](#Image)</code>
        * [.toObject()](#Image+toObject) ⇒ <code>Object</code>
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

<a name="Image+render"></a>

### image.render() ⇒ <code>[Image](#Image)</code>
Renders the shape.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Image+toObject"></a>

### image.toObject() ⇒ <code>Object</code>
Serializes shape to the object representation.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Image.isBase64"></a>

### Image.isBase64(string) ⇒ <code>Boolean</code>
Check if string is base64 encoded string.

**Kind**: static method of <code>[Image](#Image)</code>  

| Param | Type |
| --- | --- |
| string | <code>String</code> | 

