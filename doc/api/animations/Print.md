<a name="Print"></a>

## Print ⇐ <code>[Animation](#Animation)</code>
Animation that simulates text typing.

**Kind**: global class  
**Extends:** <code>[Animation](#Animation)</code>  
**Since**: 1.0.0  

* [Print](#Print) ⇐ <code>[Animation](#Animation)</code>
    * [new Print(options)](#new_Print_new)
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

<a name="new_Print_new"></a>

### new Print(options)
Creates Print animation instance.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options object |

**Example**  
```js
Print.create({
  duration: 5000
}).animate(someShapeInstance);
```
<a name="Animation+get"></a>

### print.get(path) ⇒ <code>\*</code>
Get option value.

**Kind**: instance method of <code>[Print](#Print)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |

**Example**  
```js
animation.get('my.value.from.object');
```
<a name="Animation+set"></a>

### print.set(path, value) ⇒ <code>[Animation](#Animation)</code>
Set new option value.

**Kind**: instance method of <code>[Print](#Print)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |
| value | <code>\*</code> | Value that need to be written to the options object |

**Example**  
```js
animation.set('my.value.from.object', 'value');
```
<a name="Animation+getDuration"></a>

### print.getDuration() ⇒ <code>Number</code>
Get animation duration in ms.

**Kind**: instance method of <code>[Print](#Print)</code>  
<a name="Animation+setDuration"></a>

### print.setDuration([duration]) ⇒ <code>[Animation](#Animation)</code>
Set new animation duration in ms.

**Kind**: instance method of <code>[Print](#Print)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [duration] | <code>Number</code> | <code>1000</code> | Duration of the animation in ms |

<a name="Animation+getEasing"></a>

### print.getEasing() ⇒ <code>String</code>
Get easing name.

**Kind**: instance method of <code>[Print](#Print)</code>  
<a name="Animation+setEasing"></a>

### print.setEasing([easing]) ⇒ <code>[Animation](#Animation)</code>
Set new easing for animation.

**Kind**: instance method of <code>[Print](#Print)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [easing] | <code>String</code> | <code>&#x27;outQuad&#x27;</code> | Easing name from [EASING](#EASING) dictionary |

<a name="Animation+delay"></a>

### print.delay(ms) ⇒ <code>Promise</code>
Makes delay before executing function.

**Kind**: instance method of <code>[Print](#Print)</code>  
**Returns**: <code>Promise</code> - Returns Promise that fulfills when delay is over  

| Param | Type | Description |
| --- | --- | --- |
| ms | <code>Number</code> | Timeout in ms |

<a name="Animation+onTick"></a>

### print.onTick(shape, property, value) ⇒ <code>[Animation](#Animation)</code>
Triggers each time when animation ticks.

**Kind**: instance method of <code>[Print](#Print)</code>  

| Param | Type | Description |
| --- | --- | --- |
| shape | <code>Shape</code> | Shape instance |
| property | <code>String</code> | Property name of the shape |
| value | <code>Number</code> | New value of the specified property |

<a name="Animation+onEasing"></a>

### print.onEasing(easing, time, startValue, byValue, duration) ⇒ <code>Number</code>
Triggers each time when easing calculates new value in time.

**Kind**: instance method of <code>[Print](#Print)</code>  

| Param | Type | Description |
| --- | --- | --- |
| easing | <code>String</code> | Easing name |
| time | <code>Number</code> | Current time |
| startValue | <code>Number</code> | Start value |
| byValue | <code>Number</code> | Change in value |
| duration | <code>Number</code> | Duration |

<a name="Animation+animate"></a>

### print.animate(shape) ⇒ <code>Promise</code>
Main method that calls every time when shape needs to be animated.
This method must return Promise that fulfills with shape instance that has been animated.

**Kind**: instance method of <code>[Print](#Print)</code>  
**Overrides:** <code>[animate](#Animation+animate)</code>  
**Returns**: <code>Promise</code> - Returns Promise that fulfills with shape instance when animation is done  
**Fulfil**: <code>Shape</code> If method is implemented, it should fulfil the Promise with a Shape instance  
**Reject**: <code>Error</code> If method is not overridden rejects the Promise with an Error  

| Param | Type | Description |
| --- | --- | --- |
| shape | <code>Shape</code> | Shape instance that need to be animated |

<a name="Animation+animateProperty"></a>

### print.animateProperty(options) ⇒ <code>Promise</code>
Helper method that animates property in object.
On each animation tick it calls [onTick](onTick) method with shape, property and newValue arguments.
Also, you can subscribe in your childes to `tick` event and do your own stuff.

**Kind**: instance method of <code>[Print](#Print)</code>  
**Overrides:** <code>[animateProperty](#Animation+animateProperty)</code>  
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

### print.toObject() ⇒ <code>Object</code>
Serializes animation to the object representation.

**Kind**: instance method of <code>[Print](#Print)</code>  
<a name="Animation+toJSON"></a>

### print.toJSON() ⇒ <code>JSON</code>
Serializes animation to the JSON representation.

**Kind**: instance method of <code>[Print](#Print)</code>  
