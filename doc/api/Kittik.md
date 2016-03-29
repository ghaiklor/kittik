## Functions

<dl>
<dt><a href="#run">run()</a> ⇒ <code>Deck</code></dt>
<dd><p>Run the presentation.</p>
</dd>
<dt><a href="#renderSlide">renderSlide([index])</a> ⇒ <code>Deck</code></dt>
<dd><p>Renders specified slide.</p>
</dd>
<dt><a href="#nextSlide">nextSlide()</a> ⇒ <code>Deck</code></dt>
<dd><p>Renders the next slide.</p>
</dd>
<dt><a href="#prevSlide">prevSlide()</a> ⇒ <code>Deck</code></dt>
<dd><p>Renders the previous slide.</p>
</dd>
<dt><a href="#exit">exit()</a></dt>
<dd><p>Closes the presentation and returns to terminal.</p>
</dd>
<dt><a href="#create">create(...args)</a> ⇒ <code>Deck</code></dt>
<dd><p>Wrapper around <code>new Presentation()</code>.</p>
</dd>
<dt><a href="#render">render(cursor)</a> ⇒ <code>Promise</code></dt>
<dd><p>Render the slide.</p>
</dd>
<dt><a href="#toObject">toObject()</a> ⇒ <code>Object</code></dt>
<dd><p>Serialize Slide state to Object representation.</p>
</dd>
<dt><a href="#toJSON">toJSON()</a> ⇒ <code>JSON</code></dt>
<dd><p>Serialize Slide state to JSON representation.</p>
</dd>
<dt><a href="#parseShapes">parseShapes(shapes)</a> ⇒ <code>Object</code></dt>
<dd><p>Parse shapes array and return object with references to the shapes.</p>
</dd>
<dt><a href="#parseAnimations">parseAnimations(animations)</a> ⇒ <code>Object</code></dt>
<dd><p>Parse animations array and return object with references to the animations.</p>
</dd>
<dt><a href="#parseOrder">parseOrder(order)</a> ⇒ <code>Array.&lt;Object&gt;</code></dt>
<dd><p>Parse array with order settings and return array with shape reference and its animations references.</p>
</dd>
<dt><a href="#create">create(...args)</a> ⇒ <code>Slide</code></dt>
<dd><p>Wrapper around <code>new Slide()</code>.</p>
</dd>
<dt><a href="#fromObject">fromObject(obj)</a> ⇒ <code>Slide</code></dt>
<dd><p>Create Slide instance from Object representation.</p>
</dd>
<dt><a href="#fromJSON">fromJSON(json)</a> ⇒ <code>Slide</code></dt>
<dd><p>Create Slide instance from JSON representation.</p>
</dd>
</dl>

<a name="run"></a>

## run() ⇒ <code>Deck</code>
Run the presentation.

**Kind**: global function  
<a name="renderSlide"></a>

## renderSlide([index]) ⇒ <code>Deck</code>
Renders specified slide.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [index] | <code>Number</code> | Slide index in presentation |

<a name="nextSlide"></a>

## nextSlide() ⇒ <code>Deck</code>
Renders the next slide.

**Kind**: global function  
<a name="prevSlide"></a>

## prevSlide() ⇒ <code>Deck</code>
Renders the previous slide.

**Kind**: global function  
<a name="exit"></a>

## exit()
Closes the presentation and returns to terminal.

**Kind**: global function  
<a name="create"></a>

## create(...args) ⇒ <code>Deck</code>
Wrapper around `new Presentation()`.

**Kind**: global function  

| Param | Type |
| --- | --- |
| ...args | <code>\*</code> | 

<a name="render"></a>

## render(cursor) ⇒ <code>Promise</code>
Render the slide.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise will be fulfilled when slide has rendered  

| Param | Type | Description |
| --- | --- | --- |
| cursor | <code>Cursor</code> | Cursor instance which is using for rendering the slide |

<a name="toObject"></a>

## toObject() ⇒ <code>Object</code>
Serialize Slide state to Object representation.

**Kind**: global function  
<a name="toJSON"></a>

## toJSON() ⇒ <code>JSON</code>
Serialize Slide state to JSON representation.

**Kind**: global function  
<a name="parseShapes"></a>

## parseShapes(shapes) ⇒ <code>Object</code>
Parse shapes array and return object with references to the shapes.

**Kind**: global function  
**Returns**: <code>Object</code> - Returns Object with created Shape instances  

| Param | Type | Description |
| --- | --- | --- |
| shapes | <code>Array.&lt;Object&gt;</code> | Array of shapes declaration |

<a name="parseAnimations"></a>

## parseAnimations(animations) ⇒ <code>Object</code>
Parse animations array and return object with references to the animations.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| animations | <code>Array.&lt;Object&gt;</code> | Array of animations declaration |

<a name="parseOrder"></a>

## parseOrder(order) ⇒ <code>Array.&lt;Object&gt;</code>
Parse array with order settings and return array with shape reference and its animations references.

**Kind**: global function  

| Param | Type |
| --- | --- |
| order | <code>Array.&lt;String&gt;</code> | 

<a name="create"></a>

## create(...args) ⇒ <code>Slide</code>
Wrapper around `new Slide()`.

**Kind**: global function  

| Param | Type |
| --- | --- |
| ...args | <code>\*</code> | 

<a name="fromObject"></a>

## fromObject(obj) ⇒ <code>Slide</code>
Create Slide instance from Object representation.

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>Object</code> | 

<a name="fromJSON"></a>

## fromJSON(json) ⇒ <code>Slide</code>
Create Slide instance from JSON representation.

**Kind**: global function  

| Param | Type |
| --- | --- |
| json | <code>JSON</code> | 

