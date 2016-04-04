## Classes

<dl>
<dt><a href="#Deck">Deck</a></dt>
<dd><p>Implements Presentation class.
Responsible for switching slide and running the presentation.</p>
</dd>
<dt><a href="#Slide">Slide</a></dt>
<dd><p>Slide instance is responsible for rendering the slide.</p>
</dd>
</dl>

<a name="Deck"></a>

## Deck
Implements Presentation class.
Responsible for switching slide and running the presentation.

**Kind**: global class  
**Since**: 1.0.0  
**Version**: 1.0.0  

* [Deck](#Deck)
    * [new Deck(declaration)](#new_Deck_new)
    * _instance_
        * [.run()](#Deck+run) ⇒ <code>[Deck](#Deck)</code>
        * [.renderSlide([index])](#Deck+renderSlide) ⇒ <code>[Deck](#Deck)</code>
        * [.nextSlide()](#Deck+nextSlide) ⇒ <code>[Deck](#Deck)</code>
        * [.prevSlide()](#Deck+prevSlide) ⇒ <code>[Deck](#Deck)</code>
        * [.exit()](#Deck+exit)
    * _static_
        * [.create(args)](#Deck.create) ⇒ <code>[Deck](#Deck)</code>

<a name="new_Deck_new"></a>

### new Deck(declaration)
Creates presentation instance with slides.


| Param | Type |
| --- | --- |
| declaration | <code>Array.&lt;Array.&lt;Object&gt;&gt;</code> | 

<a name="Deck+run"></a>

### deck.run() ⇒ <code>[Deck](#Deck)</code>
Run the presentation.

**Kind**: instance method of <code>[Deck](#Deck)</code>  
<a name="Deck+renderSlide"></a>

### deck.renderSlide([index]) ⇒ <code>[Deck](#Deck)</code>
Renders specified slide.

**Kind**: instance method of <code>[Deck](#Deck)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [index] | <code>Number</code> | Slide index in presentation |

<a name="Deck+nextSlide"></a>

### deck.nextSlide() ⇒ <code>[Deck](#Deck)</code>
Renders the next slide.

**Kind**: instance method of <code>[Deck](#Deck)</code>  
<a name="Deck+prevSlide"></a>

### deck.prevSlide() ⇒ <code>[Deck](#Deck)</code>
Renders the previous slide.

**Kind**: instance method of <code>[Deck](#Deck)</code>  
<a name="Deck+exit"></a>

### deck.exit()
Closes the presentation and returns to terminal.

**Kind**: instance method of <code>[Deck](#Deck)</code>  
<a name="Deck.create"></a>

### Deck.create(args) ⇒ <code>[Deck](#Deck)</code>
Wrapper around `new Presentation()`.

**Kind**: static method of <code>[Deck](#Deck)</code>  

| Param | Type |
| --- | --- |
| args | <code>\*</code> | 

<a name="Slide"></a>

## Slide
Slide instance is responsible for rendering the slide.

**Kind**: global class  
**Since**: 1.0.0  

* [Slide](#Slide)
    * [new Slide(cursor, [declaration])](#new_Slide_new)
    * _instance_
        * [.renderShapes(shapes)](#Slide+renderShapes) ⇒ <code>[Slide](#Slide)</code>
        * [.render()](#Slide+render) ⇒ <code>Promise</code>
        * [.toObject()](#Slide+toObject) ⇒ <code>Object</code>
        * [.toJSON()](#Slide+toJSON) ⇒ <code>JSON</code>
    * _static_
        * [.create(args)](#Slide.create) ⇒ <code>[Slide](#Slide)</code>
        * [.fromObject(obj, [cursor])](#Slide.fromObject) ⇒ <code>[Slide](#Slide)</code>
        * [.fromJSON(json, [cursor])](#Slide.fromJSON) ⇒ <code>[Slide](#Slide)</code>

<a name="new_Slide_new"></a>

### new Slide(cursor, [declaration])
Creates new Slide instance.


| Param | Type | Description |
| --- | --- | --- |
| cursor | <code>Cursor</code> | Cursor instance |
| [declaration] | <code>Object</code> | Declaration of the slide |
| [declaration.shapes] | <code>Array.&lt;Object&gt;</code> | Array of shapes to render |
| [declaration.animations] | <code>Array.&lt;Object&gt;</code> | Array of animations to create in this slide |
| [declaration.order] | <code>Array.&lt;String&gt;</code> | Order for rendering shapes for this slide |

**Example**  
```js
Slide.create(cursor, {
  shapes: [{
    name: 'Your shape name', // custom name of your shape
    type: 'Text', // what is the type of this shape
    options: { // Additional options will be passed to shape constructor
      text: 'Hello, World',
      x: 'center',
      y: 'middle'
    }
  }],
  animations: [{
    name: 'Your animation name', // custom name of your animation
    type: 'Slide', // what is the type of this animation
    options: { // Additional options will be passed to animation constructor
      duration: 2000
    }
  }],
  order: [
    'Your shape name', // renders the specified shape immediately
    'Your shape name::Your animation name', // renders the specified shape with specified animation
    'Your shape name::Your animation name->Your animation name' // you can chain animations in sequence
  ]
});
```
<a name="Slide+renderShapes"></a>

### slide.renderShapes(shapes) ⇒ <code>[Slide](#Slide)</code>
Render the array of shapes.
Applies immediately in the terminal.
Clears the entire screen -> renders each shape from the array -> flush the changes.

**Kind**: instance method of <code>[Slide](#Slide)</code>  

| Param | Type | Description |
| --- | --- | --- |
| shapes | <code>Array.&lt;Shape&gt;</code> | Array of Shape instances |

<a name="Slide+render"></a>

### slide.render() ⇒ <code>Promise</code>
Renders the slide.
It builds the sequence of promises that responsible for sequentially rendering the slide as in order.

**Kind**: instance method of <code>[Slide](#Slide)</code>  
**Returns**: <code>Promise</code> - Promise will be fulfilled when slide has been rendered  
<a name="Slide+toObject"></a>

### slide.toObject() ⇒ <code>Object</code>
Serialize Slide to Object representation.

**Kind**: instance method of <code>[Slide](#Slide)</code>  
<a name="Slide+toJSON"></a>

### slide.toJSON() ⇒ <code>JSON</code>
Serialize Slide to JSON representation.

**Kind**: instance method of <code>[Slide](#Slide)</code>  
<a name="Slide.create"></a>

### Slide.create(args) ⇒ <code>[Slide](#Slide)</code>
Wrapper around `new Slide()`.

**Kind**: static method of <code>[Slide](#Slide)</code>  

| Param | Type |
| --- | --- |
| args | <code>\*</code> | 

<a name="Slide.fromObject"></a>

### Slide.fromObject(obj, [cursor]) ⇒ <code>[Slide](#Slide)</code>
Create Slide instance from Object representation.

**Kind**: static method of <code>[Slide](#Slide)</code>  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Object representation from [toObject](toObject) method |
| [cursor] | <code>Cursor</code> | Cursor instance |

<a name="Slide.fromJSON"></a>

### Slide.fromJSON(json, [cursor]) ⇒ <code>[Slide](#Slide)</code>
Create Slide instance from JSON representation.

**Kind**: static method of <code>[Slide](#Slide)</code>  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>JSON</code> | JSON representation from [toJSON](toJSON) method |
| [cursor] | <code>Cursor</code> | Cursor instance |

