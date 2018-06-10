## Classes

<dl>
<dt><a href="#Animation">Animation</a> ⇐ <code>EventEmitter</code></dt>
<dd><p>Base class for creating other animations.
Each custom animation must extends from this class.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#EASING">EASING</a> : <code>Object</code></dt>
<dd><p>Dictionary of all available easings for <a href="#Animation">Animation</a>.
You can use it as <code>easing</code> option in all of the animations.</p>
</dd>
</dl>

<a name="Animation"></a>

## Animation ⇐ <code>EventEmitter</code>
Base class for creating other animations.
Each custom animation must extends from this class.

**Kind**: global class  
**Extends:** <code>EventEmitter</code>  
**Since**: 1.0.0  

* [Animation](#Animation) ⇐ <code>EventEmitter</code>
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


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Options object |
| [options.duration] | <code>Number</code> | <code>1000</code> | Duration of the animation in ms |
| [options.easing] | <code>String</code> | <code>&#x27;outQuad&#x27;</code> | Easing name from [EASING](#EASING) dictionary |

**Example**  
```js
Animation.create({
  duration: 5000,
  easing: 'outElastic'
});
```
<a name="Animation+get"></a>

### animation.get(path) ⇒ <code>\*</code>
Get option value.

**Kind**: instance method of <code>[Animation](#Animation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |

**Example**  
```js
animation.get('my.value.from.object');
```
<a name="Animation+set"></a>

### animation.set(path, value) ⇒ <code>[Animation](#Animation)</code>
Set new option value.

**Kind**: instance method of <code>[Animation](#Animation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |
| value | <code>\*</code> | Value that need to be written to the options object |

**Example**  
```js
animation.set('my.value.from.object', 'value');
```
<a name="Animation+getDuration"></a>

### animation.getDuration() ⇒ <code>Number</code>
Get animation duration in ms.

**Kind**: instance method of <code>[Animation](#Animation)</code>  
<a name="Animation+setDuration"></a>

### animation.setDuration([duration]) ⇒ <code>[Animation](#Animation)</code>
Set new animation duration in ms.

**Kind**: instance method of <code>[Animation](#Animation)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [duration] | <code>Number</code> | <code>1000</code> | Duration of the animation in ms |

<a name="Animation+getEasing"></a>

### animation.getEasing() ⇒ <code>String</code>
Get easing name.

**Kind**: instance method of <code>[Animation](#Animation)</code>  
<a name="Animation+setEasing"></a>

### animation.setEasing([easing]) ⇒ <code>[Animation](#Animation)</code>
Set new easing for animation.

**Kind**: instance method of <code>[Animation](#Animation)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [easing] | <code>String</code> | <code>&#x27;outQuad&#x27;</code> | Easing name from [EASING](#EASING) dictionary |

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
Triggers each time when animation ticks.

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
**Fulfil**: <code>Shape</code> If method is implemented, it should fulfil the Promise with a Shape instance  
**Reject**: <code>Error</code> If method is not overridden rejects the Promise with an Error  

| Param | Type | Description |
| --- | --- | --- |
| shape | <code>Shape</code> | Shape instance that need to be animated |

<a name="Animation+animateProperty"></a>

### animation.animateProperty(options) ⇒ <code>Promise</code>
Helper method that animates property in object.
On each animation tick it calls [onTick](onTick) method with shape, property and newValue arguments.
Also, you can subscribe in your childes to `tick` event and do your own stuff.

**Kind**: instance method of <code>[Animation](#Animation)</code>  
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
**Throws**:

- <code>Error</code> If object is not a representation of [Animation](#Animation)


| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Object from [toObject](toObject) method |

<a name="Animation.fromJSON"></a>

### Animation.fromJSON(json) ⇒ <code>[Animation](#Animation)</code>
Creates animation instance from the JSON representation.

**Kind**: static method of <code>[Animation](#Animation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>JSON</code> | JSON from [toJSON](toJSON) method |

<a name="EASING"></a>

## EASING : <code>Object</code>
Dictionary of all available easings for [Animation](#Animation).
You can use it as `easing` option in all of the animations.

**Kind**: global constant  
