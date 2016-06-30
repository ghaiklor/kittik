<a name="Focus"></a>

## Focus ⇐ <code>[Animation](#Animation)</code>
Focus animation is responsible for attention seekers for your shape.

**Kind**: global class  
**Extends:** <code>[Animation](#Animation)</code>  
**Since**: 1.0.0  

* [Focus](#Focus) ⇐ <code>[Animation](#Animation)</code>
    * [new Focus([options])](#new_Focus_new)
    * [.getDirection()](#Focus+getDirection) ⇒ <code>String</code>
    * [.setDirection([direction])](#Focus+setDirection) ⇒ <code>[Focus](#Focus)</code>
    * [.getOffset()](#Focus+getOffset) ⇒ <code>Number</code>
    * [.setOffset([offset])](#Focus+setOffset) ⇒ <code>[Focus](#Focus)</code>
    * [.getRepeat()](#Focus+getRepeat) ⇒ <code>Number</code>
    * [.setRepeat([repeat])](#Focus+setRepeat) ⇒ <code>[Focus](#Focus)</code>
    * [.get(path)](#Animation+get) ⇒ <code>\*</code>
    * [.set(path, value)](#Animation+set) ⇒ <code>[Animation](#Animation)</code>
    * [.getDuration()](#Animation+getDuration) ⇒ <code>Number</code>
    * [.setDuration([duration])](#Animation+setDuration) ⇒ <code>[Animation](#Animation)</code>
    * [.getEasing()](#Animation+getEasing) ⇒ <code>String</code>
    * [.setEasing([easing])](#Animation+setEasing) ⇒ <code>[Animation](#Animation)</code>
    * [.delay(ms)](#Animation+delay) ⇒ <code>Promise</code>
    * [.onTick(shape, property, value)](#Animation+onTick) ⇒ <code>[Animation](#Animation)</code>
    * [.onEasing(easing, time, startValue, byValue, duration)](#Animation+onEasing) ⇒ <code>Number</code>
    * [.animate(shape)](#Animation+animate) ⇒ <code>Promise</code>
    * [.animateProperty(options)](#Animation+animateProperty) ⇒ <code>Promise</code>
    * [.toObject()](#Animation+toObject) ⇒ <code>Object</code>
    * [.toJSON()](#Animation+toJSON) ⇒ <code>JSON</code>

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

<a name="Animation+get"></a>

### focus.get(path) ⇒ <code>\*</code>
Get option value.

**Kind**: instance method of <code>[Focus](#Focus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |

**Example**  
```js
animation.get('my.value.from.object');
```
<a name="Animation+set"></a>

### focus.set(path, value) ⇒ <code>[Animation](#Animation)</code>
Set new option value.

**Kind**: instance method of <code>[Focus](#Focus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |
| value | <code>\*</code> | Value that need to be written to the options object |

**Example**  
```js
animation.set('my.value.from.object', 'value');
```
<a name="Animation+getDuration"></a>

### focus.getDuration() ⇒ <code>Number</code>
Get animation duration in ms.

**Kind**: instance method of <code>[Focus](#Focus)</code>  
**Overrides:** <code>[getDuration](#Animation+getDuration)</code>  
<a name="Animation+setDuration"></a>

### focus.setDuration([duration]) ⇒ <code>[Animation](#Animation)</code>
Set new animation duration in ms.

**Kind**: instance method of <code>[Focus](#Focus)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [duration] | <code>Number</code> | <code>1000</code> | Duration of the animation in ms |

<a name="Animation+getEasing"></a>

### focus.getEasing() ⇒ <code>String</code>
Get easing name.

**Kind**: instance method of <code>[Focus](#Focus)</code>  
<a name="Animation+setEasing"></a>

### focus.setEasing([easing]) ⇒ <code>[Animation](#Animation)</code>
Set new easing for animation.

**Kind**: instance method of <code>[Focus](#Focus)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [easing] | <code>String</code> | <code>&#x27;outQuad&#x27;</code> | Easing name from [EASING](#EASING) dictionary |

<a name="Animation+delay"></a>

### focus.delay(ms) ⇒ <code>Promise</code>
Makes delay before executing function.

**Kind**: instance method of <code>[Focus](#Focus)</code>  
**Returns**: <code>Promise</code> - Returns Promise that fulfills when delay is over  

| Param | Type | Description |
| --- | --- | --- |
| ms | <code>Number</code> | Timeout in ms |

<a name="Animation+onTick"></a>

### focus.onTick(shape, property, value) ⇒ <code>[Animation](#Animation)</code>
Triggers each time when animation ticks.

**Kind**: instance method of <code>[Focus](#Focus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| shape | <code>Shape</code> | Shape instance |
| property | <code>String</code> | Property name of the shape |
| value | <code>Number</code> | New value of the specified property |

<a name="Animation+onEasing"></a>

### focus.onEasing(easing, time, startValue, byValue, duration) ⇒ <code>Number</code>
Triggers each time when easing calculates new value in time.

**Kind**: instance method of <code>[Focus](#Focus)</code>  

| Param | Type | Description |
| --- | --- | --- |
| easing | <code>String</code> | Easing name |
| time | <code>Number</code> | Current time |
| startValue | <code>Number</code> | Start value |
| byValue | <code>Number</code> | Change in value |
| duration | <code>Number</code> | Duration |

<a name="Animation+animate"></a>

### focus.animate(shape) ⇒ <code>Promise</code>
Main method that calls every time when shape needs to be animated.
This method must return Promise that fulfills with shape instance that has been animated.

**Kind**: instance method of <code>[Focus](#Focus)</code>  
**Overrides:** <code>[animate](#Animation+animate)</code>  
**Returns**: <code>Promise</code> - Returns Promise that fulfills with shape instance when animation is done  
**Fulfil**: <code>Shape</code> If method is implemented, it should fulfil the Promise with a Shape instance  
**Reject**: <code>Error</code> If method is not overridden rejects the Promise with an Error  

| Param | Type | Description |
| --- | --- | --- |
| shape | <code>Shape</code> | Shape instance that need to be animated |

<a name="Animation+animateProperty"></a>

### focus.animateProperty(options) ⇒ <code>Promise</code>
Helper method that animates property in object.
On each animation tick it calls [onTick](onTick) method with shape, property and newValue arguments.
Also, you can subscribe in your childes to `tick` event and do your own stuff.

**Kind**: instance method of <code>[Focus](#Focus)</code>  
**Returns**: <code>Promise</code> - Returns Promise, that fulfills with shape instance which has been animated  
**Fulfil**: <code>Shape</code> When animation is done, fulfils with Shape instance  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options object |
| options.shape | <code>Shape</code> | Shape where property is need to be animated |
| options.property | <code>String</code> | Property name that need to be animated |
| options.startValue | <code>Number</code> | Start value for animation |
| options.endValue | <code>Number</code> | End value for animation |
| [options.byValue] | <code>Number</code> | Step value for easing, by default it calculates automatically |
| [options.duration] | <code>Number</code> | Duration of the animation in ms, by default it takes from Animation options |
| [options.easing] | <code>String</code> | Easing that need to apply to animation, by default it takes from Animation options |

<a name="Animation+toObject"></a>

### focus.toObject() ⇒ <code>Object</code>
Serializes animation to the object representation.

**Kind**: instance method of <code>[Focus](#Focus)</code>  
**Overrides:** <code>[toObject](#Animation+toObject)</code>  
<a name="Animation+toJSON"></a>

### focus.toJSON() ⇒ <code>JSON</code>
Serializes animation to the JSON representation.

**Kind**: instance method of <code>[Focus](#Focus)</code>  
