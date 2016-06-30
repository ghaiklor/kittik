<a name="Cell"></a>

## Cell
Cell responsible for mapping separate cells in the real terminal to the virtual one.

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
        * [.getBackground()](#Cell+getBackground) ⇒ <code>String</code>
        * [.setBackground([colorName])](#Cell+setBackground) ⇒ <code>[Cell](#Cell)</code>
        * [.getForeground()](#Cell+getForeground) ⇒ <code>String</code>
        * [.setForeground([colorName])](#Cell+setForeground) ⇒ <code>[Cell](#Cell)</code>
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
| [char] | <code>String</code> | Char that you want to wrap with control sequences |
| [options] | <code>Object</code> | Options object where you can set additional style to char |
| [options.x] | <code>Number</code> | X coordinate |
| [options.y] | <code>Number</code> | Y coordinate |
| [options.background] | <code>String</code> | Background color name, `none` to disable color |
| [options.foreground] | <code>String</code> | Foreground color name, `none` to disable color |
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

| Param | Type | Default |
| --- | --- | --- |
| [char] | <code>String</code> | <code>&#x27; &#x27;</code> | 

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

### cell.getBackground() ⇒ <code>String</code>
Get current background color.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell+setBackground"></a>

### cell.setBackground([colorName]) ⇒ <code>[Cell](#Cell)</code>
Set new background color.

**Kind**: instance method of <code>[Cell](#Cell)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [colorName] | <code>String</code> | <code>none</code> | Color name from [COLORS](#COLORS) dictionary. |

<a name="Cell+getForeground"></a>

### cell.getForeground() ⇒ <code>String</code>
Get current foreground color.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell+setForeground"></a>

### cell.setForeground([colorName]) ⇒ <code>[Cell](#Cell)</code>
Set new foreground color.

**Kind**: instance method of <code>[Cell](#Cell)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [colorName] | <code>String</code> | <code>none</code> | Color name from [COLORS](#COLORS) dictionary. |

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
Convert cell to VT100 compatible control sequence.

**Kind**: instance method of <code>[Cell](#Cell)</code>  
<a name="Cell.create"></a>

### Cell.create() ⇒ <code>[Cell](#Cell)</code>
Wrapper around `new Cell()`.

**Kind**: static method of <code>[Cell](#Cell)</code>  
