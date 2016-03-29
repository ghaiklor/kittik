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
<dt><a href="#Cell">Cell</a></dt>
<dd><p>Wrapper around one cell in the terminal.
Used for filling terminal wrapper in the cursor.</p>
</dd>
<dt><a href="#Color">Color</a></dt>
<dd><p>Color class responsible for converting colors between rgb and hex.</p>
</dd>
<dt><a href="#Cursor">Cursor</a></dt>
<dd><p>Cursor implements low-level API to terminal control codes.</p>
</dd>
<dt><a href="#Shape">Shape</a></dt>
<dd><p>Base class for creating other shapes.
Each custom shape must extends from this class.</p>
</dd>
<dt><a href="#FigText">FigText</a></dt>
<dd></dd>
<dt><a href="#Image">Image</a></dt>
<dd><p>Implements support for Image drawing in terminal.</p>
</dd>
<dt><a href="#Rectangle">Rectangle</a></dt>
<dd><p>Implements rectangle shape with text support.</p>
</dd>
<dt><a href="#Text">Text</a></dt>
<dd><p>Implements Text shape which is rendering the text at specified point.
Supports different styles kinda bold, dim, underlined, etc...</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#EASING">EASING</a></dt>
<dd><p>Dictionary of all available easing.</p>
</dd>
<dt><a href="#COLORS">COLORS</a> : <code>Object</code></dt>
<dd><p>Dictionary of colors which can be used for instantiating the <a href="#Color">Color</a> instance.</p>
</dd>
<dt><a href="#DISPLAY_MODES">DISPLAY_MODES</a> : <code>Object</code></dt>
<dd><p>Map of the display modes that can be used in Cursor API.
There are the most commonly supported control sequences for formatting text and their resetting.</p>
</dd>
<dt><a href="#encodeToVT100">encodeToVT100</a> ⇒ <code>String</code></dt>
<dd><p>Bytes to encode to VT100 control sequence.</p>
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
| shape | <code>[Shape](#Shape)</code> | Shape instance |
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
| shape | <code>[Shape](#Shape)</code> | Shape instance that need to be animated |

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
| shape | <code>[Shape](#Shape)</code> | 

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
| shape | <code>[Shape](#Shape)</code> | 

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
| shape | <code>[Shape](#Shape)</code> | 

<a name="Slide+toObject"></a>

### slide.toObject() ⇒ <code>Object</code>
Serializes animation to Object representation.

**Kind**: instance method of <code>[Slide](#Slide)</code>  
<a name="Cell"></a>

## Cell
Wrapper around one cell in the terminal.
Used for filling terminal wrapper in the cursor.

**Kind**: global class  
**Since**: 3.1.0  

* [Cell](#Cell)
    * [new Cell([char], [options])](#new_Cell_new)
    * _instance_
        * [.getChar()](#Cell+getChar) ⇒ <code>String</code>
        * [.setChar([char])](#Cell+setChar) ⇒ <code>[Cell](#Cell)</code>
        * [.getX()](#Cell+getX) ⇒ <code>Number</code>
        * [.setX([x])](#Cell+setX) ⇒ <code>[Cell](#Cell)</code>
        * [.getY()](#Cell+getY) ⇒ <code>Number</code>
        * [.setY([y])](#Cell+setY) ⇒ <code>[Cell](#Cell)</code>
        * [.getBackground()](#Cell+getBackground) ⇒ <code>Object</code>
        * [.setBackground([r], [g], [b])](#Cell+setBackground) ⇒ <code>[Cell](#Cell)</code>
        * [.getForeground()](#Cell+getForeground) ⇒ <code>Object</code>
        * [.setForeground([r], [g], [b])](#Cell+setForeground) ⇒ <code>[Cell](#Cell)</code>
        * [.getDisplay()](#Cell+getDisplay) ⇒ <code>Object</code>
        * [.setDisplay([bold], [dim], [underlined], [blink], [reverse], [hidden])](#Cell+setDisplay) ⇒ <code>[Cell](#Cell)</code>
        * [.setModified([isModified])](#Cell+setModified) ⇒ <code>[Cell](#Cell)</code>
        * [.isModified()](#Cell+isModified) ⇒ <code>Boolean</code>
        * [.reset()](#Cell+reset) ⇒ <code>[Cell](#Cell)</code>
        * [.toString()](#Cell+toString) ⇒ <code>String</code>
    * _static_
        * [.create()](#Cell.create) ⇒ <code>[Cell](#Cell)</code>

<a name="new_Cell_new"></a>

### new Cell([char], [options])
Create Cell instance which are able to convert itself to ASCII control sequence.


| Param | Type | Description |
| --- | --- | --- |
| [char] | <code>String</code> | Char that you want to wrap with control sequence |
| [options] | <code>Object</code> | Options object where you can set additional style to char |
| [options.x] | <code>Number</code> | X coordinate |
| [options.y] | <code>Number</code> | Y coordinate |
| [options.background] | <code>Object</code> | Background color, fill with -1 if you don't want to use background |
| [options.background.r] | <code>Number</code> | Red channel |
| [options.background.g] | <code>Number</code> | Green channel |
| [options.background.b] | <code>Number</code> | Blue channel |
| [options.foreground] | <code>Object</code> | Foreground color, fill with -1 if you don't want to use foreground |
| [options.foreground.r] | <code>Number</code> | Red channel |
| [options.foreground.g] | <code>Number</code> | Green channel |
| [options.foreground.b] | <code>Number</code> | Blue channel |
| [options.display] | <code>Object</code> | Object with display modes |
| [options.display.bold] | <code>Boolean</code> | Bold style |
| [options.display.dim] | <code>Boolean</code> | Dim style |
| [options.display.underlined] | <code>Boolean</code> | Underlined style |
| [options.display.blink] | <code>Boolean</code> | Blink style |
| [options.display.reverse] | <code>Boolean</code> | Reverse style |
| [options.display.hidden] | <code>Boolean</code> | Hidden style |

<a name="Cell+getChar"></a>

### cell.getChar() ⇒ <code>String</code>
Get current char.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell+setChar"></a>

### cell.setChar([char]) ⇒ <code>[Cell](#Cell)</code>
Set new char to cell.
If char is longer than 1 char, it slices string to 1 char.

**Kind**: instance method of <code>[Cell](#Cell)</code>  

| Param | Type |
| --- | --- |
| [char] | <code>String</code> | 

<a name="Cell+getX"></a>

### cell.getX() ⇒ <code>Number</code>
Get X coordinate of this cell.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell+setX"></a>

### cell.setX([x]) ⇒ <code>[Cell](#Cell)</code>
Set new X coordinate for cell.

**Kind**: instance method of <code>[Cell](#Cell)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [x] | <code>Number</code> | <code>0</code> | 

<a name="Cell+getY"></a>

### cell.getY() ⇒ <code>Number</code>
Get Y coordinate.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell+setY"></a>

### cell.setY([y]) ⇒ <code>[Cell](#Cell)</code>
Set new Y coordinate for cell.

**Kind**: instance method of <code>[Cell](#Cell)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [y] | <code>Number</code> | <code>0</code> | 

<a name="Cell+getBackground"></a>

### cell.getBackground() ⇒ <code>Object</code>
Get current background color.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell+setBackground"></a>

### cell.setBackground([r], [g], [b]) ⇒ <code>[Cell](#Cell)</code>
Set new background color.

**Kind**: instance method of <code>[Cell](#Cell)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [r] | <code>Number</code> | <code>-1</code> | Red channel |
| [g] | <code>Number</code> | <code>-1</code> | Green channel |
| [b] | <code>Number</code> | <code>-1</code> | Blue channel |

<a name="Cell+getForeground"></a>

### cell.getForeground() ⇒ <code>Object</code>
Get current foreground color.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell+setForeground"></a>

### cell.setForeground([r], [g], [b]) ⇒ <code>[Cell](#Cell)</code>
Set new foreground color.

**Kind**: instance method of <code>[Cell](#Cell)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [r] | <code>Number</code> | <code>-1</code> | Red channel |
| [g] | <code>Number</code> | <code>-1</code> | Green channel |
| [b] | <code>Number</code> | <code>-1</code> | Blue channel |

<a name="Cell+getDisplay"></a>

### cell.getDisplay() ⇒ <code>Object</code>
Get current display modes.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell+setDisplay"></a>

### cell.setDisplay([bold], [dim], [underlined], [blink], [reverse], [hidden]) ⇒ <code>[Cell](#Cell)</code>
Set new display modes to cell.

**Kind**: instance method of <code>[Cell](#Cell)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [bold] | <code>Boolean</code> | <code>false</code> | Bold style |
| [dim] | <code>Boolean</code> | <code>false</code> | Dim style |
| [underlined] | <code>Boolean</code> | <code>false</code> | Underlined style |
| [blink] | <code>Boolean</code> | <code>false</code> | Blink style |
| [reverse] | <code>Boolean</code> | <code>false</code> | Reverse style |
| [hidden] | <code>Boolean</code> | <code>false</code> | Hidden style |

<a name="Cell+setModified"></a>

### cell.setModified([isModified]) ⇒ <code>[Cell](#Cell)</code>
Mark cell as modified or not.
It useful when you need to filter out only modified cells without building the diff.

**Kind**: instance method of <code>[Cell](#Cell)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isModified] | <code>Boolean</code> | <code>true</code> | Flag shows if cell is modified |

<a name="Cell+isModified"></a>

### cell.isModified() ⇒ <code>Boolean</code>
Check if cell has been modified.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell+reset"></a>

### cell.reset() ⇒ <code>[Cell](#Cell)</code>
Reset display settings.
It resets char, background, foreground and display mode.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell+toString"></a>

### cell.toString() ⇒ <code>String</code>
Convert cell to ASCII control sequence.
Disables flag which marks cell as modified.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell.create"></a>

### Cell.create() ⇒ <code>[Cell](#Cell)</code>
Wrapper around `new Cell()`.

**Kind**: static method of <code>[Cell](#Cell)</code>  
<a name="Color"></a>

## Color
Color class responsible for converting colors between rgb and hex.

**Kind**: global class  
**Since**: 3.1.0  

* [Color](#Color)
    * [new Color(color)](#new_Color_new)
    * _instance_
        * [.getR()](#Color+getR) ⇒ <code>Number</code>
        * [.setR(value)](#Color+setR) ⇒ <code>[Color](#Color)</code>
        * [.getG()](#Color+getG) ⇒ <code>Number</code>
        * [.setG(value)](#Color+setG) ⇒ <code>[Color](#Color)</code>
        * [.getB()](#Color+getB) ⇒ <code>Number</code>
        * [.setB(value)](#Color+setB) ⇒ <code>[Color](#Color)</code>
        * [.toRgb()](#Color+toRgb) ⇒ <code>Object</code>
        * [.toHex()](#Color+toHex) ⇒ <code>String</code>
    * _static_
        * [.isNamed(color)](#Color.isNamed) ⇒ <code>Boolean</code>
        * [.isRgb(rgb)](#Color.isRgb) ⇒ <code>Boolean</code>
        * [.isHex(hex)](#Color.isHex) ⇒ <code>Boolean</code>
        * [.fromRgb(rgb)](#Color.fromRgb) ⇒ <code>[Color](#Color)</code>
        * [.fromHex(hex)](#Color.fromHex) ⇒ <code>[Color](#Color)</code>
        * [.create()](#Color.create) ⇒ <code>[Color](#Color)</code>

<a name="new_Color_new"></a>

### new Color(color)
Create new Color instance.
You can use different formats of color: named, rgb or hex.
Class will try to parse your provided color, otherwise throws an error.


| Param | Type | Description |
| --- | --- | --- |
| color | <code>String</code> &#124; <code>Object</code> | String with named color, rgb, hex or object with {r, g, b} properties |
| color.r | <code>Number</code> | Red channel |
| color.g | <code>Number</code> | Green channel |
| color.b | <code>Number</code> | Blue channel |

**Example**  
```js
Color.create('black');
Color.create('rgb(0, 10, 20)');
Color.create('#AABBCC');
Color.create({r: 0, g: 10, b: 20});
```
<a name="Color+getR"></a>

### color.getR() ⇒ <code>Number</code>
Get rounded value of red channel.

**Kind**: instance method of <code>[Color](#Color)</code>  
<a name="Color+setR"></a>

### color.setR(value) ⇒ <code>[Color](#Color)</code>
Set clamped value of red channel.

**Kind**: instance method of <code>[Color](#Color)</code>  

| Param | Type |
| --- | --- |
| value | <code>Number</code> | 

<a name="Color+getG"></a>

### color.getG() ⇒ <code>Number</code>
Get rounded value of green channel.

**Kind**: instance method of <code>[Color](#Color)</code>  
<a name="Color+setG"></a>

### color.setG(value) ⇒ <code>[Color](#Color)</code>
Set clamped value of green channel.

**Kind**: instance method of <code>[Color](#Color)</code>  

| Param | Type |
| --- | --- |
| value | <code>Number</code> | 

<a name="Color+getB"></a>

### color.getB() ⇒ <code>Number</code>
Get rounded value of blue channel.

**Kind**: instance method of <code>[Color](#Color)</code>  
<a name="Color+setB"></a>

### color.setB(value) ⇒ <code>[Color](#Color)</code>
Set clamped value of blue channel.

**Kind**: instance method of <code>[Color](#Color)</code>  

| Param | Type |
| --- | --- |
| value | <code>Number</code> | 

<a name="Color+toRgb"></a>

### color.toRgb() ⇒ <code>Object</code>
Convert color to RGB representation.

**Kind**: instance method of <code>[Color](#Color)</code>  
<a name="Color+toHex"></a>

### color.toHex() ⇒ <code>String</code>
Convert color to HEX representation.

**Kind**: instance method of <code>[Color](#Color)</code>  
<a name="Color.isNamed"></a>

### Color.isNamed(color) ⇒ <code>Boolean</code>
Check if provided color is named color.

**Kind**: static method of <code>[Color](#Color)</code>  

| Param | Type |
| --- | --- |
| color | <code>String</code> | 

<a name="Color.isRgb"></a>

### Color.isRgb(rgb) ⇒ <code>Boolean</code>
Check if provided color written in RGB representation.

**Kind**: static method of <code>[Color](#Color)</code>  

| Param | Type | Description |
| --- | --- | --- |
| rgb | <code>String</code> | RGB color |

<a name="Color.isHex"></a>

### Color.isHex(hex) ⇒ <code>Boolean</code>
Check if provided color written in HEX representation.

**Kind**: static method of <code>[Color](#Color)</code>  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>String</code> | HEX color |

<a name="Color.fromRgb"></a>

### Color.fromRgb(rgb) ⇒ <code>[Color](#Color)</code>
Parse RGB color and return Color instance.

**Kind**: static method of <code>[Color](#Color)</code>  

| Param | Type | Description |
| --- | --- | --- |
| rgb | <code>String</code> | RGB color |

<a name="Color.fromHex"></a>

### Color.fromHex(hex) ⇒ <code>[Color](#Color)</code>
Parse HEX color and return Color instance.

**Kind**: static method of <code>[Color](#Color)</code>  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>String</code> | HEX color |

<a name="Color.create"></a>

### Color.create() ⇒ <code>[Color](#Color)</code>
Wrapper around `new Color()`.

**Kind**: static method of <code>[Color](#Color)</code>  
<a name="Cursor"></a>

## Cursor
Cursor implements low-level API to terminal control codes.

**Kind**: global class  
**See**

- http://www.termsys.demon.co.uk/vtansi.htm
- http://misc.flogisoft.com/bash/tip_colors_and_formatting
- http://man7.org/linux/man-pages/man4/console_codes.4.html
- http://www.x.org/docs/xterm/ctlseqs.pdf
- http://wiki.bash-hackers.org/scripting/terminalcodes

**Since**: 1.0.0  

* [Cursor](#Cursor)
    * [new Cursor([options])](#new_Cursor_new)
    * _instance_
        * [.write(data)](#Cursor+write) ⇒ <code>[Cursor](#Cursor)</code>
        * [.flush()](#Cursor+flush) ⇒ <code>[Cursor](#Cursor)</code>
        * [.getPointerFromXY([x], [y])](#Cursor+getPointerFromXY) ⇒ <code>Number</code>
        * [.getXYFromPointer(index)](#Cursor+getXYFromPointer) ⇒ <code>Array</code>
        * [.up([y])](#Cursor+up) ⇒ <code>[Cursor](#Cursor)</code>
        * [.down([y])](#Cursor+down) ⇒ <code>[Cursor](#Cursor)</code>
        * [.right([x])](#Cursor+right) ⇒ <code>[Cursor](#Cursor)</code>
        * [.left([x])](#Cursor+left) ⇒ <code>[Cursor](#Cursor)</code>
        * [.moveBy(x, y)](#Cursor+moveBy) ⇒ <code>[Cursor](#Cursor)</code>
        * [.moveTo(x, y)](#Cursor+moveTo) ⇒ <code>[Cursor](#Cursor)</code>
        * [.foreground(color)](#Cursor+foreground) ⇒ <code>[Cursor](#Cursor)</code>
        * [.background(color)](#Cursor+background) ⇒ <code>[Cursor](#Cursor)</code>
        * [.bold([isBold])](#Cursor+bold) ⇒ <code>[Cursor](#Cursor)</code>
        * [.dim([isDim])](#Cursor+dim) ⇒ <code>[Cursor](#Cursor)</code>
        * [.underlined([isUnderlined])](#Cursor+underlined) ⇒ <code>[Cursor](#Cursor)</code>
        * [.blink([isBlink])](#Cursor+blink) ⇒ <code>[Cursor](#Cursor)</code>
        * [.reverse([isReverse])](#Cursor+reverse) ⇒ <code>[Cursor](#Cursor)</code>
        * [.hidden([isHidden])](#Cursor+hidden) ⇒ <code>[Cursor](#Cursor)</code>
        * [.erase(x1, y1, x2, y2)](#Cursor+erase) ⇒ <code>[Cursor](#Cursor)</code>
        * [.eraseToEnd()](#Cursor+eraseToEnd) ⇒ <code>[Cursor](#Cursor)</code>
        * [.eraseToStart()](#Cursor+eraseToStart) ⇒ <code>[Cursor](#Cursor)</code>
        * [.eraseToDown()](#Cursor+eraseToDown) ⇒ <code>[Cursor](#Cursor)</code>
        * [.eraseToUp()](#Cursor+eraseToUp) ⇒ <code>[Cursor](#Cursor)</code>
        * [.eraseLine()](#Cursor+eraseLine) ⇒ <code>[Cursor](#Cursor)</code>
        * [.eraseScreen()](#Cursor+eraseScreen) ⇒ <code>[Cursor](#Cursor)</code>
        * [.saveScreen()](#Cursor+saveScreen) ⇒ <code>[Cursor](#Cursor)</code>
        * [.restoreScreen()](#Cursor+restoreScreen) ⇒ <code>[Cursor](#Cursor)</code>
        * [.hideCursor()](#Cursor+hideCursor) ⇒ <code>[Cursor](#Cursor)</code>
        * [.showCursor()](#Cursor+showCursor) ⇒ <code>[Cursor](#Cursor)</code>
        * [.reset()](#Cursor+reset) ⇒ <code>[Cursor](#Cursor)</code>
    * _static_
        * [.create()](#Cursor.create) ⇒ <code>[Cursor](#Cursor)</code>

<a name="new_Cursor_new"></a>

### new Cursor([options])
Creates cursor that writes direct to `stdout`.
You can override target stream with another one.
Also, you can specify custom width and height of viewport where cursor will render the frame.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Object with options |
| [options.stream] | <code>Stream</code> | <code>process.stdout</code> | Writable stream |
| [options.width] | <code>Number</code> | <code>stream.columns</code> | Number of columns (width) |
| [options.height] | <code>Number</code> | <code>stream.rows</code> | Number of rows (height) |

<a name="Cursor+write"></a>

### cursor.write(data) ⇒ <code>[Cursor](#Cursor)</code>
Write to the stream.
It doesn't applies immediately but stores in virtual terminal that represented as array of [Cell](#Cell) instances.
For applying changes you need to [flush](flush) changes.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>String</code> | Data to write to the terminal |

<a name="Cursor+flush"></a>

### cursor.flush() ⇒ <code>[Cursor](#Cursor)</code>
Takes only modified cells from virtual terminal and flush changes to the real terminal.
There is no requirements to build diff or something, we have the markers for each cell that has been modified.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
<a name="Cursor+getPointerFromXY"></a>

### cursor.getPointerFromXY([x], [y]) ⇒ <code>Number</code>
Get index of the virtual terminal representation from (x, y) coordinates.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
**Returns**: <code>Number</code> - Returns index in the buffer array  

| Param | Type | Description |
| --- | --- | --- |
| [x] | <code>Number</code> | X coordinate on the terminal |
| [y] | <code>Number</code> | Y coordinate on the terminal |

<a name="Cursor+getXYFromPointer"></a>

### cursor.getXYFromPointer(index) ⇒ <code>Array</code>
Get (x, y) coordinate from the virtual terminal pointer.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
**Returns**: <code>Array</code> - Returns an array [x, y]  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>Number</code> | Index in the buffer |

<a name="Cursor+up"></a>

### cursor.up([y]) ⇒ <code>[Cursor](#Cursor)</code>
Move the cursor up.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [y] | <code>Number</code> | <code>1</code> | 

<a name="Cursor+down"></a>

### cursor.down([y]) ⇒ <code>[Cursor](#Cursor)</code>
Move the cursor down.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [y] | <code>Number</code> | <code>1</code> | 

<a name="Cursor+right"></a>

### cursor.right([x]) ⇒ <code>[Cursor](#Cursor)</code>
Move the cursor right.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [x] | <code>Number</code> | <code>1</code> | 

<a name="Cursor+left"></a>

### cursor.left([x]) ⇒ <code>[Cursor](#Cursor)</code>
Move the cursor left.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [x] | <code>Number</code> | <code>1</code> | 

<a name="Cursor+moveBy"></a>

### cursor.moveBy(x, y) ⇒ <code>[Cursor](#Cursor)</code>
Move the cursor position relative current coordinates.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | Offset by X coordinate |
| y | <code>Number</code> | Offset by Y coordinate |

<a name="Cursor+moveTo"></a>

### cursor.moveTo(x, y) ⇒ <code>[Cursor](#Cursor)</code>
Set the cursor position by absolute coordinates.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | X coordinate |
| y | <code>Number</code> | Y coordinate |

<a name="Cursor+foreground"></a>

### cursor.foreground(color) ⇒ <code>[Cursor](#Cursor)</code>
Set the foreground color.
This color is used when text is rendering.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>String</code> &#124; <code>Boolean</code> | Color name or false if you want to disable foreground filling |

<a name="Cursor+background"></a>

### cursor.background(color) ⇒ <code>[Cursor](#Cursor)</code>
Set the background color.
This color is used for filling the whole cell in the TTY.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>String</code> &#124; <code>Boolean</code> | Color name or false if you want to disable background filling |

<a name="Cursor+bold"></a>

### cursor.bold([isBold]) ⇒ <code>[Cursor](#Cursor)</code>
Toggle bold display mode.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isBold] | <code>Boolean</code> | <code>true</code> | If false, disables bold mode |

<a name="Cursor+dim"></a>

### cursor.dim([isDim]) ⇒ <code>[Cursor](#Cursor)</code>
Toggle dim display mode.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isDim] | <code>Boolean</code> | <code>true</code> | If false, disables dim mode |

<a name="Cursor+underlined"></a>

### cursor.underlined([isUnderlined]) ⇒ <code>[Cursor](#Cursor)</code>
Toggle underlined display mode.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isUnderlined] | <code>Boolean</code> | <code>true</code> | If false, disables underlined mode |

<a name="Cursor+blink"></a>

### cursor.blink([isBlink]) ⇒ <code>[Cursor](#Cursor)</code>
Toggle blink display mode.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isBlink] | <code>Boolean</code> | <code>true</code> | If false, disables blink mode |

<a name="Cursor+reverse"></a>

### cursor.reverse([isReverse]) ⇒ <code>[Cursor](#Cursor)</code>
Toggle reverse display mode.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isReverse] | <code>Boolean</code> | <code>true</code> | If false, disables reverse display mode |

<a name="Cursor+hidden"></a>

### cursor.hidden([isHidden]) ⇒ <code>[Cursor](#Cursor)</code>
Toggle hidden display mode.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [isHidden] | <code>Boolean</code> | <code>true</code> | If false, disables hidden display mode |

<a name="Cursor+erase"></a>

### cursor.erase(x1, y1, x2, y2) ⇒ <code>[Cursor](#Cursor)</code>
Erase the specified region.
The region describes the rectangle shape which need to erase.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  

| Param | Type |
| --- | --- |
| x1 | <code>Number</code> | 
| y1 | <code>Number</code> | 
| x2 | <code>Number</code> | 
| y2 | <code>Number</code> | 

<a name="Cursor+eraseToEnd"></a>

### cursor.eraseToEnd() ⇒ <code>[Cursor](#Cursor)</code>
Erase from current position to end of the line.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
<a name="Cursor+eraseToStart"></a>

### cursor.eraseToStart() ⇒ <code>[Cursor](#Cursor)</code>
Erase from current position to start of the line.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
<a name="Cursor+eraseToDown"></a>

### cursor.eraseToDown() ⇒ <code>[Cursor](#Cursor)</code>
Erase from current line to down.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
<a name="Cursor+eraseToUp"></a>

### cursor.eraseToUp() ⇒ <code>[Cursor](#Cursor)</code>
Erase from current line to up.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
<a name="Cursor+eraseLine"></a>

### cursor.eraseLine() ⇒ <code>[Cursor](#Cursor)</code>
Erase current line.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
<a name="Cursor+eraseScreen"></a>

### cursor.eraseScreen() ⇒ <code>[Cursor](#Cursor)</code>
Erase the entire screen.

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
<a name="Cursor+saveScreen"></a>

### cursor.saveScreen() ⇒ <code>[Cursor](#Cursor)</code>
Save current terminal contents into the buffer.
Applies immediately without calling [flush](flush).

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
<a name="Cursor+restoreScreen"></a>

### cursor.restoreScreen() ⇒ <code>[Cursor](#Cursor)</code>
Restore terminal contents to previously saved via [saveScreen](saveScreen).
Applies immediately without calling [flush](flush).

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
<a name="Cursor+hideCursor"></a>

### cursor.hideCursor() ⇒ <code>[Cursor](#Cursor)</code>
Set the terminal cursor invisible.
Applies immediately without calling [flush](flush).

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
<a name="Cursor+showCursor"></a>

### cursor.showCursor() ⇒ <code>[Cursor](#Cursor)</code>
Set the terminal cursor visible.
Applies immediately without calling [flush](flush).

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
<a name="Cursor+reset"></a>

### cursor.reset() ⇒ <code>[Cursor](#Cursor)</code>
Reset all terminal settings.
Applies immediately without calling [flush](flush).

**Kind**: instance method of <code>[Cursor](#Cursor)</code>  
<a name="Cursor.create"></a>

### Cursor.create() ⇒ <code>[Cursor](#Cursor)</code>
Wrapper around `new Cursor()`.

**Kind**: static method of <code>[Cursor](#Cursor)</code>  
<a name="Shape"></a>

## Shape
Base class for creating other shapes.
Each custom shape must extends from this class.

**Kind**: global class  
**Since**: 1.0.0  

* [Shape](#Shape)
    * [new Shape(cursor, [options])](#new_Shape_new)
    * _instance_
        * [.get(path)](#Shape+get) ⇒ <code>\*</code>
        * [.set(path, value)](#Shape+set) ⇒ <code>[Shape](#Shape)</code>
        * [.getCursor()](#Shape+getCursor) ⇒ <code>[Cursor](#Cursor)</code>
        * [.setCursor(cursor)](#Shape+setCursor) ⇒ <code>[Shape](#Shape)</code>
        * [.getText()](#Shape+getText) ⇒ <code>String</code>
        * [.setText([text])](#Shape+setText) ⇒ <code>[Shape](#Shape)</code>
        * [.getWidth()](#Shape+getWidth) ⇒ <code>Number</code>
        * [.setWidth([width])](#Shape+setWidth) ⇒ <code>[Shape](#Shape)</code>
        * [.getHeight()](#Shape+getHeight) ⇒ <code>Number</code>
        * [.setHeight([height])](#Shape+setHeight) ⇒ <code>[Shape](#Shape)</code>
        * [.getX()](#Shape+getX) ⇒ <code>Number</code>
        * [.setX([x])](#Shape+setX) ⇒ <code>[Shape](#Shape)</code>
        * [.getY()](#Shape+getY) ⇒ <code>Number</code>
        * [.setY([y])](#Shape+setY) ⇒ <code>[Shape](#Shape)</code>
        * [.getBackground()](#Shape+getBackground) ⇒ <code>String</code> &#124; <code>Boolean</code>
        * [.setBackground([background])](#Shape+setBackground) ⇒ <code>[Shape](#Shape)</code>
        * [.getForeground()](#Shape+getForeground) ⇒ <code>String</code> &#124; <code>Boolean</code>
        * [.setForeground([foreground])](#Shape+setForeground) ⇒ <code>[Shape](#Shape)</code>
        * *[.render()](#Shape+render)*
        * [.toObject()](#Shape+toObject) ⇒ <code>Object</code>
        * [.toJSON()](#Shape+toJSON) ⇒ <code>JSON</code>
    * _static_
        * [.create(args)](#Shape.create) ⇒ <code>[Shape](#Shape)</code>
        * [.fromObject(obj, [cursor])](#Shape.fromObject) ⇒ <code>[Shape](#Shape)</code>
        * [.fromJSON(json, [cursor])](#Shape.fromJSON) ⇒ <code>[Shape](#Shape)</code>

<a name="new_Shape_new"></a>

### new Shape(cursor, [options])

| Param | Type | Description |
| --- | --- | --- |
| cursor | <code>[Cursor](#Cursor)</code> | Cursor instance used for render the shape |
| [options] | <code>Object</code> |  |
| [options.text] | <code>String</code> | Text that will be rendered in the shape |
| [options.width] | <code>Number</code> &#124; <code>String</code> | Shape width can be 100 (cells) or 100% |
| [options.height] | <code>Number</code> &#124; <code>String</code> | Shape height can be 100 (cells) or 100% |
| [options.x] | <code>Number</code> &#124; <code>String</code> | Absolute coordinate X can be 100 (cells), left, center, right or percents |
| [options.y] | <code>Number</code> &#124; <code>String</code> | Absolute coordinate Y can be 100 (cells), top, middle, bottom or percents |
| [options.background] | <code>String</code> | Background color can be color name, rgb or hex |
| [options.foreground] | <code>String</code> | Foreground color can be color name, rgb or hex |

**Example**  
```js
import Shape from 'kittik-shape-basic';

export default class Rectangle extends Shape {
  render() {
    const cursor = this.getCursor();
    // Implement your logic here for rendering the shape
  }
}
```
<a name="Shape+get"></a>

### shape.get(path) ⇒ <code>\*</code>
Get option value.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |

<a name="Shape+set"></a>

### shape.set(path, value) ⇒ <code>[Shape](#Shape)</code>
Set new option value.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | Path can be set with dot-notation |
| value | <code>\*</code> | Value that need to be written to the options object |

<a name="Shape+getCursor"></a>

### shape.getCursor() ⇒ <code>[Cursor](#Cursor)</code>
Get cursor that used for render this shape.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+setCursor"></a>

### shape.setCursor(cursor) ⇒ <code>[Shape](#Shape)</code>
Assign cursor to the shape which will be used for render this shape.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type |
| --- | --- |
| cursor | <code>[Cursor](#Cursor)</code> | 

<a name="Shape+getText"></a>

### shape.getText() ⇒ <code>String</code>
Get text content from this shape.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+setText"></a>

### shape.setText([text]) ⇒ <code>[Shape](#Shape)</code>
Set new text content to this shape.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [text] | <code>String</code> | <code>&#x27;&#x27;</code> | New text |

<a name="Shape+getWidth"></a>

### shape.getWidth() ⇒ <code>Number</code>
Get shape width.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+setWidth"></a>

### shape.setWidth([width]) ⇒ <code>[Shape](#Shape)</code>
Set new shape width.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [width] | <code>Number</code> &#124; <code>String</code> | <code>15</code> | Shape width |

<a name="Shape+getHeight"></a>

### shape.getHeight() ⇒ <code>Number</code>
Get shape height.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+setHeight"></a>

### shape.setHeight([height]) ⇒ <code>[Shape](#Shape)</code>
Set new shape height.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [height] | <code>Number</code> &#124; <code>String</code> | <code>5</code> | Shape height |

<a name="Shape+getX"></a>

### shape.getX() ⇒ <code>Number</code>
Get X coordinate.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+setX"></a>

### shape.setX([x]) ⇒ <code>[Shape](#Shape)</code>
Set X coordinate.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [x] | <code>Number</code> &#124; <code>String</code> | <code>10</code> | 

<a name="Shape+getY"></a>

### shape.getY() ⇒ <code>Number</code>
Get Y coordinate.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+setY"></a>

### shape.setY([y]) ⇒ <code>[Shape](#Shape)</code>
Set Y coordinate.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [y] | <code>Number</code> &#124; <code>String</code> | <code>10</code> | 

<a name="Shape+getBackground"></a>

### shape.getBackground() ⇒ <code>String</code> &#124; <code>Boolean</code>
Get background color.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+setBackground"></a>

### shape.setBackground([background]) ⇒ <code>[Shape](#Shape)</code>
Set new background color.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [background] | <code>String</code> &#124; <code>Boolean</code> | <code>false</code> | Color name, rgb, hex or false if you want to disable background |

<a name="Shape+getForeground"></a>

### shape.getForeground() ⇒ <code>String</code> &#124; <code>Boolean</code>
Get foreground color.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+setForeground"></a>

### shape.setForeground([foreground]) ⇒ <code>[Shape](#Shape)</code>
Set new foreground color.

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [foreground] | <code>String</code> &#124; <code>Boolean</code> | <code>false</code> | Color name, rgb, hex or false if you want to disable foreground |

<a name="Shape+render"></a>

### *shape.render()*
Base render method that must be implemented in childes.

**Kind**: instance abstract method of <code>[Shape](#Shape)</code>  
**Throws**:

- <code>Error</code> Throws error if method will not be overridden

<a name="Shape+toObject"></a>

### shape.toObject() ⇒ <code>Object</code>
Returns Object representation of the shape.
This representation consists of all options fields.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape+toJSON"></a>

### shape.toJSON() ⇒ <code>JSON</code>
Returns JSON representation of the shape.

**Kind**: instance method of <code>[Shape](#Shape)</code>  
<a name="Shape.create"></a>

### Shape.create(args) ⇒ <code>[Shape](#Shape)</code>
Wrapper around `new Shape()`.

**Kind**: static method of <code>[Shape](#Shape)</code>  

| Param | Type |
| --- | --- |
| args | <code>\*</code> | 

<a name="Shape.fromObject"></a>

### Shape.fromObject(obj, [cursor]) ⇒ <code>[Shape](#Shape)</code>
Creates new Shape instance from Object representation.
You can ignore cursor param and create only Shape representation.
Though, you can add cursor in the runtime via [setCursor](setCursor) method.

**Kind**: static method of <code>[Shape](#Shape)</code>  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Object that you got from [toObject](toObject) method |
| [cursor] | <code>[Cursor](#Cursor)</code> | Cursor instance |

<a name="Shape.fromJSON"></a>

### Shape.fromJSON(json, [cursor]) ⇒ <code>[Shape](#Shape)</code>
Creates new Shape instance from JSON representation.
You can ignore cursor param and create only Shape representation.
Though, you can add cursor in the runtime via [setCursor](setCursor) method.

**Kind**: static method of <code>[Shape](#Shape)</code>  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>String</code> | JSON string that you got from [Shape.toJSON](Shape.toJSON) |
| [cursor] | <code>[Cursor](#Cursor)</code> | Cursor instance |

<a name="FigText"></a>

## FigText
**Kind**: global class  

* [FigText](#FigText)
    * [new FigText(cursor, [options])](#new_FigText_new)
    * [.getWidth()](#FigText+getWidth) ⇒ <code>Number</code>
    * [.getHeight()](#FigText+getHeight) ⇒ <code>Number</code>
    * [.getFont()](#FigText+getFont) ⇒ <code>String</code>
    * [.setFont([font])](#FigText+setFont) ⇒ <code>[FigText](#FigText)</code>
    * [.getHorizontalLayout()](#FigText+getHorizontalLayout) ⇒ <code>String</code>
    * [.setHorizontalLayout([layout])](#FigText+setHorizontalLayout) ⇒ <code>[FigText](#FigText)</code>
    * [.getVerticalLayout()](#FigText+getVerticalLayout) ⇒ <code>String</code>
    * [.setVerticalLayout([layout])](#FigText+setVerticalLayout) ⇒ <code>[FigText](#FigText)</code>
    * [.render()](#FigText+render) ⇒ <code>[FigText](#FigText)</code>
    * [.toObject()](#FigText+toObject) ⇒ <code>Object</code> &#124; <code>\*</code>

<a name="new_FigText_new"></a>

### new FigText(cursor, [options])
Create ASCII-art shape.


| Param | Type | Description |
| --- | --- | --- |
| cursor | <code>[Cursor](#Cursor)</code> | Cursor instance |
| [options] | <code>Object</code> |  |
| [options.font] | <code>String</code> |  |
| [options.horizontalLayout] | <code>String</code> |  |
| [options.verticalLayout] | <code>String</code> |  |

<a name="FigText+getWidth"></a>

### figText.getWidth() ⇒ <code>Number</code>
Get actual width of the shape.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="FigText+getHeight"></a>

### figText.getHeight() ⇒ <code>Number</code>
Get actual height of the shape.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="FigText+getFont"></a>

### figText.getFont() ⇒ <code>String</code>
Get font that uses for rendering text.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="FigText+setFont"></a>

### figText.setFont([font]) ⇒ <code>[FigText](#FigText)</code>
Set font that will be used for rendering the text.

**Kind**: instance method of <code>[FigText](#FigText)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [font] | <code>String</code> | <code>Standard</code> | 

<a name="FigText+getHorizontalLayout"></a>

### figText.getHorizontalLayout() ⇒ <code>String</code>
Get horizontal layout.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="FigText+setHorizontalLayout"></a>

### figText.setHorizontalLayout([layout]) ⇒ <code>[FigText](#FigText)</code>
Set horizontal layout.

**Kind**: instance method of <code>[FigText](#FigText)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [layout] | <code>String</code> | <code>default</code> | 

<a name="FigText+getVerticalLayout"></a>

### figText.getVerticalLayout() ⇒ <code>String</code>
Get vertical layout.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="FigText+setVerticalLayout"></a>

### figText.setVerticalLayout([layout]) ⇒ <code>[FigText](#FigText)</code>
Set vertical layout.

**Kind**: instance method of <code>[FigText](#FigText)</code>  

| Param | Type | Default |
| --- | --- | --- |
| [layout] | <code>String</code> | <code>default</code> | 

<a name="FigText+render"></a>

### figText.render() ⇒ <code>[FigText](#FigText)</code>
Render the shape.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="FigText+toObject"></a>

### figText.toObject() ⇒ <code>Object</code> &#124; <code>\*</code>
Serialize shape to object representation.

**Kind**: instance method of <code>[FigText](#FigText)</code>  
<a name="Image"></a>

## Image
Implements support for Image drawing in terminal.

**Kind**: global class  
**Since**: 1.0.0  

* [Image](#Image)
    * [new Image(cursor, [options])](#new_Image_new)
    * _instance_
        * [.getImage()](#Image+getImage) ⇒ <code>String</code>
        * [.setImage(image)](#Image+setImage) ⇒ <code>[Shape](#Shape)</code>
        * [.isPreserveAspectRatio()](#Image+isPreserveAspectRatio) ⇒ <code>Boolean</code>
        * [.setPreserveAspectRatio([isPreserveAspectRatio])](#Image+setPreserveAspectRatio) ⇒ <code>[Shape](#Shape)</code>
        * [.render()](#Image+render) ⇒ <code>[Image](#Image)</code>
        * [.toObject()](#Image+toObject) ⇒ <code>Object</code> &#124; <code>\*</code>
    * _static_
        * [.isBase64(string)](#Image.isBase64) ⇒ <code>Boolean</code>

<a name="new_Image_new"></a>

### new Image(cursor, [options])
Creates new Image instance.


| Param | Type | Description |
| --- | --- | --- |
| cursor | <code>[Cursor](#Cursor)</code> | Cursor instance |
| [options] | <code>Object</code> |  |
| [options.image] | <code>String</code> | Base64 encoded file or path to image |
| [options.preserveAspectRatio] | <code>Boolean</code> | If true, preserve aspect ratio |

<a name="Image+getImage"></a>

### image.getImage() ⇒ <code>String</code>
Get base64 encoded image.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Image+setImage"></a>

### image.setImage(image) ⇒ <code>[Shape](#Shape)</code>
Set image to the shape.

**Kind**: instance method of <code>[Image](#Image)</code>  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>String</code> | Can be path to the image or base64 encoded image |

<a name="Image+isPreserveAspectRatio"></a>

### image.isPreserveAspectRatio() ⇒ <code>Boolean</code>
Check if image is preserve aspect ratio.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Image+setPreserveAspectRatio"></a>

### image.setPreserveAspectRatio([isPreserveAspectRatio]) ⇒ <code>[Shape](#Shape)</code>
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

### image.toObject() ⇒ <code>Object</code> &#124; <code>\*</code>
Serializes shape to the object representation.

**Kind**: instance method of <code>[Image](#Image)</code>  
<a name="Image.isBase64"></a>

### Image.isBase64(string) ⇒ <code>Boolean</code>
Check if string is base64 encoded string.

**Kind**: static method of <code>[Image](#Image)</code>  

| Param | Type |
| --- | --- |
| string | <code>String</code> | 

<a name="Rectangle"></a>

## Rectangle
Implements rectangle shape with text support.

**Kind**: global class  
**Since**: 1.0.0  
<a name="Text"></a>

## Text
Implements Text shape which is rendering the text at specified point.
Supports different styles kinda bold, dim, underlined, etc...

**Kind**: global class  
**Since**: 1.0.0  

* [Text](#Text)
    * [new Text(cursor, [options])](#new_Text_new)
    * [.getWidth()](#Text+getWidth) ⇒ <code>Number</code>
    * [.getHeight()](#Text+getHeight) ⇒ <code>Number</code>
    * [.isBold()](#Text+isBold) ⇒ <code>Boolean</code>
    * [.setBold([bold])](#Text+setBold) ⇒ <code>[Shape](#Shape)</code>
    * [.isDim()](#Text+isDim) ⇒ <code>Boolean</code>
    * [.setDim([dim])](#Text+setDim) ⇒ <code>[Shape](#Shape)</code>
    * [.isUnderlined()](#Text+isUnderlined) ⇒ <code>Boolean</code>
    * [.setUnderlined([underlined])](#Text+setUnderlined) ⇒ <code>[Shape](#Shape)</code>
    * [.isBlink()](#Text+isBlink) ⇒ <code>Boolean</code>
    * [.setBlink([blink])](#Text+setBlink) ⇒ <code>[Shape](#Shape)</code>
    * [.isReverse()](#Text+isReverse) ⇒ <code>Boolean</code>
    * [.setReverse([reverse])](#Text+setReverse) ⇒ <code>[Shape](#Shape)</code>
    * [.isHidden()](#Text+isHidden) ⇒ <code>Boolean</code>
    * [.setHidden([hidden])](#Text+setHidden) ⇒ <code>[Shape](#Shape)</code>
    * [.getAlign()](#Text+getAlign) ⇒ <code>String</code>
    * [.setAlign(align)](#Text+setAlign) ⇒ <code>[Shape](#Shape)</code>
    * [.render()](#Text+render) ⇒ <code>[Text](#Text)</code>
    * [.toObject()](#Text+toObject) ⇒ <code>Object</code>

<a name="new_Text_new"></a>

### new Text(cursor, [options])
Create Text shape.


| Param | Type | Description |
| --- | --- | --- |
| cursor | <code>[Cursor](#Cursor)</code> | Cursor instance |
| [options] | <code>Object</code> |  |
| [options.bold] | <code>Boolean</code> |  |
| [options.dim] | <code>Boolean</code> |  |
| [options.underlined] | <code>Boolean</code> |  |
| [options.blink] | <code>Boolean</code> |  |
| [options.reverse] | <code>Boolean</code> |  |
| [options.hidden] | <code>Boolean</code> |  |
| [options.align] | <code>String</code> |  |

<a name="Text+getWidth"></a>

### text.getWidth() ⇒ <code>Number</code>
Returns actual width of the shape.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Text+getHeight"></a>

### text.getHeight() ⇒ <code>Number</code>
Returns actual height of the shape.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Text+isBold"></a>

### text.isBold() ⇒ <code>Boolean</code>
Check if text should be rendered as bold.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Text+setBold"></a>

### text.setBold([bold]) ⇒ <code>[Shape](#Shape)</code>
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

### text.setDim([dim]) ⇒ <code>[Shape](#Shape)</code>
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

### text.setUnderlined([underlined]) ⇒ <code>[Shape](#Shape)</code>
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

### text.setBlink([blink]) ⇒ <code>[Shape](#Shape)</code>
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

### text.setReverse([reverse]) ⇒ <code>[Shape](#Shape)</code>
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

### text.setHidden([hidden]) ⇒ <code>[Shape](#Shape)</code>
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

### text.setAlign(align) ⇒ <code>[Shape](#Shape)</code>
Set text align.

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type |
| --- | --- |
| align | <code>String</code> | 

<a name="Text+render"></a>

### text.render() ⇒ <code>[Text](#Text)</code>
Render the shape based on options.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Text+toObject"></a>

### text.toObject() ⇒ <code>Object</code>
Overrides default toObject() method because we have new fields here.

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="EASING"></a>

## EASING
Dictionary of all available easing.

**Kind**: global constant  
<a name="COLORS"></a>

## COLORS : <code>Object</code>
Dictionary of colors which can be used for instantiating the [Color](#Color) instance.

**Kind**: global constant  
<a name="DISPLAY_MODES"></a>

## DISPLAY_MODES : <code>Object</code>
Map of the display modes that can be used in Cursor API.
There are the most commonly supported control sequences for formatting text and their resetting.

**Kind**: global constant  
<a name="encodeToVT100"></a>

## encodeToVT100 ⇒ <code>String</code>
Bytes to encode to VT100 control sequence.

**Kind**: global constant  
**Returns**: <code>String</code> - Returns encoded string  

| Param | Type | Description |
| --- | --- | --- |
| code | <code>String</code> | Control code that you want to encode |

