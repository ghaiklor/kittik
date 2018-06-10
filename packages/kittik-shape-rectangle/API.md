<a name="Rectangle"></a>

## Rectangle ⇐ <code>Shape</code>
Implements rectangle shape with text support.

**Kind**: global class  
**Extends:** <code>Shape</code>  
**Since**: 1.0.0  

* [Rectangle](#Rectangle) ⇐ <code>Shape</code>
    * [new Rectangle(cursor, [options])](#new_Rectangle_new)
    * [.render()](#Rectangle+render) ⇒ <code>[Rectangle](#Rectangle)</code>

<a name="new_Rectangle_new"></a>

### new Rectangle(cursor, [options])
Create Rectangle shape instance.


| Param | Type | Description |
| --- | --- | --- |
| cursor | <code>Cursor</code> | Cursor instance |
| [options] | <code>Object</code> | Options object |

**Example**  
```js
Rectangle.create(cursor, {
  text: 'Hello, World',
  width: 20,
  height: '50%',
  x: 'center',
  y: 'middle',
  background: 'black',
  foreground: 'white'
});
```
<a name="Rectangle+render"></a>

### rectangle.render() ⇒ <code>[Rectangle](#Rectangle)</code>
Render the rectangle with specified options.

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
