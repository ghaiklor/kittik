## Classes

<dl>
<dt><a href="#Animation">Animation</a></dt>
<dd><p>Base class for creating other animations.
Each custom animation must extends from this class.</p>
</dd>
<dt><a href="#Focus">Focus</a></dt>
<dd><p>Focus animation is responsible for attention seekers for your shape.</p>
</dd>
<dt><a href="#Print">Print</a></dt>
<dd><p>Print animation that simulates text typing.</p>
</dd>
<dt><a href="#Slide">Slide</a></dt>
<dd><p>Slide animation that animates sliding of the shapes.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#EASING">EASING</a></dt>
<dd><p>Dictionary of all available easing.</p>
</dd>
</dl>

<a name="Animation"></a>

## Animation
Base class for creating other animations.
Each custom animation must extends from this class.

**Kind**: global class  
**Since**: 1.0.0  

* [Animation](#Animation)
    * [new Animation([options])](#new_Animation_new)
    * _instance_
        * [.get(path)](#Animation+get) ⇒ <code>\*</code>
        * [.set(path, value)](#Animation+set) ⇒ <code>[Animation](#Animation)</code>
        * [.getDuration()](#Animation+getDuration) ⇒ <code>Number</code>
        * [.setDuration([duration])](#Animation+setDuration) ⇒ <code>[Animation](#Animation)</code>
        * [.getEasing()](#Animation+getEasing) ⇒ <code>String</code>
        * [.setEasing([easing])](#Animation+setEasing) ⇒ <code>[Animation](#Animation)</code>
        * [.delay(ms)](#Animation+delay) ⇒ <code>Promise</code>
        * [.onTick(shape, property, value)](#Animation+onTick) ⇒ <code>[Animation](#Animation)</code>
        * [.onEasing(easing, time, startValue, byValue, duration)](#Animation+onEasing) ⇒ <code>Number</code>
        * *[.animate(shape)](#Animation+animate) ⇒ <code>Promise</code>*
        * [.animateProperty(options)](#Animation+animateProperty) ⇒ <code>Promise</code>
        * [.toObject()](#Animation+toObject) ⇒ <code>Object</code>
        * [.toJSON()](#Animation+toJSON) ⇒ <code>JSON</code>
    * _static_
        * [.create(args)](#Animation.create) ⇒ <code>[Animation](#Animation)</code>
        * [.fromObject(obj)](#Animation.fromObject) ⇒ <code>[Animation](#Animation)</code>
        * [.fromJSON(json)](#Animation.fromJSON) ⇒ <code>[Animation](#Animation)</code>

<a name="new_Animation_new"></a>

### new Animation([options])
Creates animation class that has [animate](animate) method for animating properties in the shape.


| Param | Type | Default |
| --- | --- | --- |
| [options] | <code>Object</code> |  | 
| [options.duration] | <code>Number</code> | <code>1000</code> | 
| [options.easing] | <code>String</code> | <code>&#x27;outQuad&#x27;</code> | 

<a name="Animation+get"></a>

### animation.get(path) ⇒ <code>\*</code>
Get option value.

**Kind**: instance method of <code>[Animation](#Animation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |

<a name="Animation+set"></a>

### animation.set(path, value) ⇒ <code>[Animation](#Animation)</code>
Set new option value.

**Kind**: instance method of <code>[Animation](#Animation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |
| value | <code>\*</code> | Value that need to be written to the options object |

<a name="Animation+getDuration"></a>

### animation.getDuration() ⇒ <code>Number</code>
Get animation duration in ms.

**Kind**: instance method of <code>[Animation](#Animation)</code>  
<a name="Animation+setDuration"></a>

### animation.setDuration([duration]) ⇒ <code>[Animation](#Animation)</code>
Set new animation duration in ms.

**Kind**: instance method of <code>[Animation](#Animation)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [duration] | <code>Number</code> | <code>1000</code> | 

<a name="Animation+getEasing"></a>

### animation.getEasing() ⇒ <code>String</code>
Get easing name.

**Kind**: instance method of <code>[Animation](#Animation)</code>  
<a name="Animation+setEasing"></a>

### animation.setEasing([easing]) ⇒ <code>[Animation](#Animation)</code>
Set new easing for animation.

**Kind**: instance method of <code>[Animation](#Animation)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [easing] | <code>String</code> | <code>&#x27;outQuad&#x27;</code> | 

<a name="Animation+delay"></a>

### animation.delay(ms) ⇒ <code>Promise</code>
Makes delay before executing function.

**Kind**: instance method of <code>[Animation](#Animation)</code>  
**Returns**: <code>Promise</code> - Returns Promise that fulfills when delay is over  

| Param | Type | Description |
| --- | --- | --- |
| ms | <code>Number</code> | Timeout in ms |

<a name="Animation+onTick"></a>

### animation.onTick(shape, property, value) ⇒ <code>[Animation](#Animation)</code>
Calls each time when animation ticks.

**Kind**: instance method of <code>[Animation](#Animation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| shape | <code>Shape</code> | Shape instance |
| property | <code>String</code> | Property name of the shape |
| value | <code>Number</code> | New value of the specified property |

<a name="Animation+onEasing"></a>

### animation.onEasing(easing, time, startValue, byValue, duration) ⇒ <code>Number</code>
Triggers each time when easing calculates new value in time.

**Kind**: instance method of <code>[Animation](#Animation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| easing | <code>String</code> | Easing name |
| time | <code>Number</code> | Current time |
| startValue | <code>Number</code> | Start value |
| byValue | <code>Number</code> | Change in value |
| duration | <code>Number</code> | Duration |

<a name="Animation+animate"></a>

### *animation.animate(shape) ⇒ <code>Promise</code>*
Main method that calls every time when shape needs to be animated.
This method must return Promise that fulfills with shape instance that has been animated.

**Kind**: instance abstract method of <code>[Animation](#Animation)</code>  
**Returns**: <code>Promise</code> - Returns Promise that fulfills with shape instance when animation is done  

| Param | Type | Description |
| --- | --- | --- |
| shape | <code>Shape</code> | Shape instance that need to be animated |

<a name="Animation+animateProperty"></a>

### animation.animateProperty(options) ⇒ <code>Promise</code>
Helper method that animates property in object.
On each animation tick it calls [onTick](onTick) method with shape, property and newValue arguments.

**Kind**: instance method of <code>[Animation](#Animation)</code>  
**Returns**: <code>Promise</code> - Returns Promise, that fulfills with shape instance which has been animated  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.shape | <code>Object</code> | Shape where property is need to be animated |
| options.property | <code>String</code> | Property name that need to be animated |
| options.startValue | <code>Number</code> | Start value for animation, by default it takes from shape[property] |
| options.endValue | <code>Number</code> | End value for animation, by default it takes from shape[property] |
| [options.byValue] | <code>Number</code> | Step value for easing, by default it calculates automatically |
| [options.duration] | <code>Number</code> | Duration of the animation in ms, by default it takes from Animation options |
| [options.easing] | <code>String</code> | Easing that need to apply to animation, by default it takes from Animation options |

<a name="Animation+toObject"></a>

### animation.toObject() ⇒ <code>Object</code>
Serializes animation to the object representation.

**Kind**: instance method of <code>[Animation](#Animation)</code>  
<a name="Animation+toJSON"></a>

### animation.toJSON() ⇒ <code>JSON</code>
Serializes animation to the JSON representation.

**Kind**: instance method of <code>[Animation](#Animation)</code>  
<a name="Animation.create"></a>

### Animation.create(args) ⇒ <code>[Animation](#Animation)</code>
Static wrapper around new Animation().

**Kind**: static method of <code>[Animation](#Animation)</code>  

| Param |
| --- |
| args | 

<a name="Animation.fromObject"></a>

### Animation.fromObject(obj) ⇒ <code>[Animation](#Animation)</code>
Creates animation instance from the Object representation.

**Kind**: static method of <code>[Animation](#Animation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Object from [toObject](toObject) method |

<a name="Animation.fromJSON"></a>

### Animation.fromJSON(json) ⇒ <code>[Animation](#Animation)</code>
Creates animation instance from the JSON representation.

**Kind**: static method of <code>[Animation](#Animation)</code>  

| Param | Type |
| --- | --- |
| json | <code>JSON</code> | 

<a name="Focus"></a>

## Focus
Focus animation is responsible for attention seekers for your shape.

**Kind**: global class  
**Since**: 1.0.0  

* [Focus](#Focus)
    * [new Focus([options])](#new_Focus_new)
    * [.getDuration()](#Focus+getDuration) ⇒ <code>Number</code>
    * [.getDirection()](#Focus+getDirection) ⇒ <code>String</code>
    * [.setDirection(direction)](#Focus+setDirection) ⇒ <code>[Animation](#Animation)</code>
    * [.getOffset()](#Focus+getOffset) ⇒ <code>Number</code>
    * [.setOffset([offset])](#Focus+setOffset) ⇒ <code>[Animation](#Animation)</code>
    * [.getRepeat()](#Focus+getRepeat) ⇒ <code>Number</code>
    * [.setRepeat([repeat])](#Focus+setRepeat) ⇒ <code>[Animation](#Animation)</code>
    * [.animate(shape)](#Focus+animate)
    * [.toObject()](#Focus+toObject) ⇒ <code>Object</code>

<a name="new_Focus_new"></a>

### new Focus([options])
Create Focus animation instance.


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> |  |
| [options.direction] | <code>String</code> | Direction of the animation |
| [options.offset] | <code>Number</code> | Offset in cells, by how many cells you need to shift the shape |
| [options.repeat] | <code>Number</code> | How many times you need to repeat this animation |

<a name="Focus+getDuration"></a>

### focus.getDuration() ⇒ <code>Number</code>
Get total duration of the animation taking to attention repeat count.

**Kind**: instance method of <code>[Focus](#Focus)</code>  
<a name="Focus+getDirection"></a>

### focus.getDirection() ⇒ <code>String</code>
Get direction of the animation.

**Kind**: instance method of <code>[Focus](#Focus)</code>  
<a name="Focus+setDirection"></a>

### focus.setDirection(direction) ⇒ <code>[Animation](#Animation)</code>
Set new direction of the animation.

**Kind**: instance method of <code>[Focus](#Focus)</code>  

| Param | Type |
| --- | --- |
| direction | <code>String</code> | 

<a name="Focus+getOffset"></a>

### focus.getOffset() ⇒ <code>Number</code>
Get interval value used for moving shape.

**Kind**: instance method of <code>[Focus](#Focus)</code>  
<a name="Focus+setOffset"></a>

### focus.setOffset([offset]) ⇒ <code>[Animation](#Animation)</code>
Set interval value used for moving shape.

**Kind**: instance method of <code>[Focus](#Focus)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [offset] | <code>Number</code> | <code>5</code> | 

<a name="Focus+getRepeat"></a>

### focus.getRepeat() ⇒ <code>Number</code>
Get repeat count of the attractor.

**Kind**: instance method of <code>[Focus](#Focus)</code>  
<a name="Focus+setRepeat"></a>

### focus.setRepeat([repeat]) ⇒ <code>[Animation](#Animation)</code>
Set repeat count of the attractor.

**Kind**: instance method of <code>[Focus](#Focus)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [repeat] | <code>Number</code> | <code>1</code> | 

<a name="Focus+animate"></a>

### focus.animate(shape)
Main method that calls when shape need to be animated.

**Kind**: instance method of <code>[Focus](#Focus)</code>  

| Param | Type |
| --- | --- |
| shape | <code>Shape</code> | 

<a name="Focus+toObject"></a>

### focus.toObject() ⇒ <code>Object</code>
Serializes animation to Object representation.

**Kind**: instance method of <code>[Focus](#Focus)</code>  
<a name="Print"></a>

## Print
Print animation that simulates text typing.

**Kind**: global class  
**Since**: 1.0.0  

* [Print](#Print)
    * [.animate(shape)](#Print+animate)
    * [.animateProperty(options)](#Print+animateProperty) ⇒ <code>Promise</code>

<a name="Print+animate"></a>

### print.animate(shape)
Main method that calls when shape need to be animated.

**Kind**: instance method of <code>[Print](#Print)</code>  

| Param | Type |
| --- | --- |
| shape | <code>Shape</code> | 

<a name="Print+animateProperty"></a>

### print.animateProperty(options) ⇒ <code>Promise</code>
Helper method that animates property in object.
On each animation tick it calls [onTick](onTick) method with shape, property and newValue arguments.

**Kind**: instance method of <code>[Print](#Print)</code>  
**Returns**: <code>Promise</code> - Returns Promise, that fulfills with shape instance which has been animated  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.shape | <code>Object</code> | Shape where property is need to be animated |
| options.property | <code>String</code> | Property name that need to be animated |
| options.startValue | <code>Number</code> | Start value for animation, by default it takes from shape[property] |
| options.endValue | <code>Number</code> | End value for animation, by default it takes from shape[property] |
| [options.byValue] | <code>Number</code> | Step value for easing, by default it calculates automatically |
| [options.duration] | <code>Number</code> | Duration of the animation in ms, by default it takes from Animation options |
| [options.easing] | <code>String</code> | Easing that need to apply to animation, by default it takes from Animation options |

<a name="Slide"></a>

## Slide
Slide animation that animates sliding of the shapes.

**Kind**: global class  
**Since**: 1.0.0  

* [Slide](#Slide)
    * [new Slide([options])](#new_Slide_new)
    * [.getDirection()](#Slide+getDirection) ⇒ <code>String</code>
    * [.setDirection(direction)](#Slide+setDirection) ⇒ <code>[Animation](#Animation)</code>
    * [.animate(shape)](#Slide+animate)
    * [.toObject()](#Slide+toObject) ⇒ <code>Object</code>

<a name="new_Slide_new"></a>

### new Slide([options])

| Param | Type |
| --- | --- |
| [options] | <code>Object</code> | 
| [options.direction] | <code>String</code> | 

<a name="Slide+getDirection"></a>

### slide.getDirection() ⇒ <code>String</code>
Get direction of the animation.

**Kind**: instance method of <code>[Slide](#Slide)</code>  
<a name="Slide+setDirection"></a>

### slide.setDirection(direction) ⇒ <code>[Animation](#Animation)</code>
Set new direction of the animation.

**Kind**: instance method of <code>[Slide](#Slide)</code>  

| Param | Type |
| --- | --- |
| direction | <code>String</code> | 

<a name="Slide+animate"></a>

### slide.animate(shape)
Main method that calls when shape need to be animated.

**Kind**: instance method of <code>[Slide](#Slide)</code>  

| Param | Type |
| --- | --- |
| shape | <code>Shape</code> | 

<a name="Slide+toObject"></a>

### slide.toObject() ⇒ <code>Object</code>
Serializes animation to Object representation.

**Kind**: instance method of <code>[Slide](#Slide)</code>  
<a name="EASING"></a>

## EASING
Dictionary of all available easing.

**Kind**: global constant  
