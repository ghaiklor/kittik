<a name="Deck"></a>

## Deck
Deck class is responsible for managing slides and their rendering.

**Kind**: global class  
**Since**: 1.0.0  

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
Creates deck instance.
You can declare shapes\animations\etc at the root of the declaration.
It will automatically merges to each instance of the slide.


| Param | Type | Description |
| --- | --- | --- |
| declaration | <code>Object</code> | Declaration for the deck, also consists of additional parameters to the deck |
| [declaration.cursor] | <code>Cursor</code> | Cursor instance that you want to use when rendering slides |
| [declaration.shapes] | <code>Array.&lt;Object&gt;</code> | Array of shapes declaration will be merged into each slide |
| [declaration.animations] | <code>Array.&lt;Object&gt;</code> | Array of animations declaration will be merged into each slide |
| declaration.slides | <code>Array.&lt;Object&gt;</code> | Array of slides declaration |

**Example**  
```js
Deck.create({
  cursor: Cursor.create(), // custom instance of the cursor
  shapes: [{ // global shapes will be merged into each slide and will be available there by name
    name: 'Global Shape',
    type: 'Text',
    options: {
      text: 'Hello, World'
    }
  }],
  animations: [{
    name: 'Global Animation',
    type: 'Print',
    options: {
      duration: 3000,
      easing: 'inOutElastic'
    }
  }],
  slides: [{ // declaration for each slide
    shapes: [], // local shapes applied only to current slide
    animations: [], // local animations applied only to current slide
    order: [] // order of the current slide
  }]
});
```
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

