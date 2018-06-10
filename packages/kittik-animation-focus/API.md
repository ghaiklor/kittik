<a name="Focus"></a>

## Focus ⇐ <code>Animation</code>
Focus animation is responsible for attention seekers for your shape.

**Kind**: global class  
**Extends:** <code>Animation</code>  
**Since**: 1.0.0  

* [Focus](#Focus) ⇐ <code>Animation</code>
    * [new Focus([options])](#new_Focus_new)
    * [.getDuration()](#Focus+getDuration) ⇒ <code>Number</code>
    * [.getDirection()](#Focus+getDirection) ⇒ <code>String</code>
    * [.setDirection([direction])](#Focus+setDirection) ⇒ <code>[Focus](#Focus)</code>
    * [.getOffset()](#Focus+getOffset) ⇒ <code>Number</code>
    * [.setOffset([offset])](#Focus+setOffset) ⇒ <code>[Focus](#Focus)</code>
    * [.getRepeat()](#Focus+getRepeat) ⇒ <code>Number</code>
    * [.setRepeat([repeat])](#Focus+setRepeat) ⇒ <code>[Focus](#Focus)</code>
    * [.animate(shape)](#Focus+animate) ⇒ <code>Promise</code>
    * [.toObject()](#Focus+toObject) ⇒ <code>Object</code>

<a name="new_Focus_new"></a>

### new Focus([options])
Create Focus animation instance.


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options object |
| [options.direction] | <code>String</code> | Direction of the animation |
| [options.offset] | <code>Number</code> | Offset in cells, by how many cells you need to shift the shape |
| [options.repeat] | <code>Number</code> | How many times you need to repeat this animation |

**Example**  
```js
Focus.create({
  direction: 'shakeX',
  offset: 10,
  repeat: 2
}).animate(someShapeInstance);
```
<a name="Focus+getDuration"></a>

### focus.getDuration() ⇒ <code>Number</code>
Get total duration of the animation taking to attention repeat count.

**Kind**: instance method of <code>[Focus](#Focus)</code>  
<a name="Focus+getDirection"></a>

### focus.getDirection() ⇒ <code>String</code>
Get direction of the animation.

**Kind**: instance method of <code>[Focus](#Focus)</code>  
<a name="Focus+setDirection"></a>

### focus.setDirection([direction]) ⇒ <code>[Focus](#Focus)</code>
Set new direction of the animation.

**Kind**: instance method of <code>[Focus](#Focus)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [direction] | <code>String</code> | <code>&#x27;shakeX&#x27;</code> | Direction of the animation seeker |

<a name="Focus+getOffset"></a>

### focus.getOffset() ⇒ <code>Number</code>
Get interval value used for moving shape.

**Kind**: instance method of <code>[Focus](#Focus)</code>  
<a name="Focus+setOffset"></a>

### focus.setOffset([offset]) ⇒ <code>[Focus](#Focus)</code>
Set interval value used for moving shape.

**Kind**: instance method of <code>[Focus](#Focus)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [offset] | <code>Number</code> | <code>5</code> | By how many cell you want to shift the shape when animate |

<a name="Focus+getRepeat"></a>

### focus.getRepeat() ⇒ <code>Number</code>
Get repeat count of the attractor.

**Kind**: instance method of <code>[Focus](#Focus)</code>  
<a name="Focus+setRepeat"></a>

### focus.setRepeat([repeat]) ⇒ <code>[Focus](#Focus)</code>
Set repeat count of the attractor.

**Kind**: instance method of <code>[Focus](#Focus)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [repeat] | <code>Number</code> | <code>1</code> | How many times you want to repeat this attractor |

<a name="Focus+animate"></a>

### focus.animate(shape) ⇒ <code>Promise</code>
Main method that calls when shape need to be animated.

**Kind**: instance method of <code>[Focus](#Focus)</code>  
**Fulfil**: <code>Shape</code> When animation is done, fulfils with Shape instance  
**Reject**: <code>String</code> If direction is unknown, rejects the promise  

| Param | Type |
| --- | --- |
| shape | <code>Shape</code> | 

<a name="Focus+toObject"></a>

### focus.toObject() ⇒ <code>Object</code>
Serializes animation to Object representation.

**Kind**: instance method of <code>[Focus](#Focus)</code>  
