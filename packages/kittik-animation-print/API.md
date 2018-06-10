<a name="Print"></a>

## Print ⇐ <code>Animation</code>
Animation that simulates text typing.

**Kind**: global class  
**Extends:** <code>Animation</code>  
**Since**: 1.0.0  

* [Print](#Print) ⇐ <code>Animation</code>
    * [new Print(options)](#new_Print_new)
    * [.animate(shape)](#Print+animate) ⇒ <code>Promise</code>
    * [.animateProperty(options)](#Print+animateProperty) ⇒ <code>Promise</code>

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
<a name="Print+animate"></a>

### print.animate(shape) ⇒ <code>Promise</code>
Main method that calls when shape need to be animated.

**Kind**: instance method of <code>[Print](#Print)</code>  
**Fulfil**: <code>Shape</code> When animation is done, fulfils with the Shape instance  

| Param | Type |
| --- | --- |
| shape | <code>Shape</code> | 

<a name="Print+animateProperty"></a>

### print.animateProperty(options) ⇒ <code>Promise</code>
Helper method that animates property in object.
On each animation tick it calls [onTick](onTick) method with shape, property and newValue arguments.

**Kind**: instance method of <code>[Print](#Print)</code>  
**Returns**: <code>Promise</code> - Returns Promise, that fulfills with shape instance which has been animated  
**Fulfil**: <code>Shape</code> When animation is done, fulfils Shape instance  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options object |
| options.shape | <code>Object</code> | Shape where property is need to be animated |
| options.property | <code>String</code> | Property name that need to be animated |
| options.startValue | <code>String</code> | Start value for animation |
| options.endValue | <code>String</code> | End value for animation |
| [options.byValue] | <code>Number</code> | Step value for easing, by default it calculates automatically |
| [options.duration] | <code>Number</code> | Duration of the animation in ms, by default it takes from Animation options |
| [options.easing] | <code>String</code> | Easing that need to apply to animation, by default it takes from Animation options |

