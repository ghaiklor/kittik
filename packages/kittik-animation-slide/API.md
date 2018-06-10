<a name="Slide"></a>

## Slide ⇐ <code>Animation</code>
Animation that animates sliding of the shapes.

**Kind**: global class  
**Extends:** <code>Animation</code>  
**Since**: 1.0.0  

* [Slide](#Slide) ⇐ <code>Animation</code>
    * [new Slide([options])](#new_Slide_new)
    * [.getDirection()](#Slide+getDirection) ⇒ <code>String</code>
    * [.setDirection(direction)](#Slide+setDirection) ⇒ <code>[Slide](#Slide)</code>
    * [.animate(shape)](#Slide+animate) ⇒ <code>Promise</code>
    * [.toObject()](#Slide+toObject) ⇒ <code>Object</code>

<a name="new_Slide_new"></a>

### new Slide([options])
Create Slide animation instance.


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Options object |
| [options.direction] | <code>String</code> | Direction of the animation |

**Example**  
```js
Slide.create({
  direction: 'inLeft'
}).animate(someShapeInstance);
```
<a name="Slide+getDirection"></a>

### slide.getDirection() ⇒ <code>String</code>
Get direction of the animation.

**Kind**: instance method of <code>[Slide](#Slide)</code>  
<a name="Slide+setDirection"></a>

### slide.setDirection(direction) ⇒ <code>[Slide](#Slide)</code>
Set new direction of the animation.

**Kind**: instance method of <code>[Slide](#Slide)</code>  

| Param | Type |
| --- | --- |
| direction | <code>String</code> | 

<a name="Slide+animate"></a>

### slide.animate(shape) ⇒ <code>Promise</code>
Main method that calls when shape need to be animated.

**Kind**: instance method of <code>[Slide](#Slide)</code>  
**Fulfil**: <code>Shape</code> When animation is done, fulfils with the Shape instance  

| Param | Type |
| --- | --- |
| shape | <code>Shape</code> | 

<a name="Slide+toObject"></a>

### slide.toObject() ⇒ <code>Object</code>
Serializes animation to Object representation.

**Kind**: instance method of <code>[Slide](#Slide)</code>  
