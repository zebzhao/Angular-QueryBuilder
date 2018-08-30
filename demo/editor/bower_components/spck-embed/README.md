# Spck-Embed

[Spck Editor](https://spck.io) is an embeddable online code editor, optimized for the web and building web projects. This library builds is a wrapper around the `iframe` messaging interface provided by the editor.

*If you like this project please leave a star. Your support is greatly appreciated.*

## Getting Started

1. Install with [bower](http://bower.io): ```bower install spck-embed```
2. Install with [npm](https://www.npmjs.com): ```npm install spck-embed```

## Usage

### 1. Create an `iframe` element:

index.html
```html
<iframe id="editor" src="https://embed.spck.io/" frameBorder="0" width="600" height="360"></iframe>
```

*Make sure `src` is exactly `https://embed.spck.io/` or problems with https may occur. Certain cosmetic features can be configured with the url, see below.*

### 2. Load this library. You have the following options:

#### Browser Global
```javascript
var editor = new SpckEditor('#editor');

editor.connect(function () {
  // Do stuff with editor here
});
```

```html
<!--Include the script file if using Browser Global-->
<script src="spck-embed.js"></script>
```

#### AMD
```javascript
define(['SpckEditor'] , function (SpckEditor) {
  var editor = new SpckEditor('#editor');

  editor.connect(function () {
    // Do stuff with editor here
  });
});
```

#### CommonJS
```javascript
var SpckEditor = require('SpckEditor');
var editor = new SpckEditor('#editor');

editor.connect(function () {
  // Do stuff with editor here
});
```

#### *Experimental: ES2015 Modules (after npm install)*
```javascript
import {SpckEditor} from 'spck-embed';

var editor = new SpckEditor('#editor');

editor.connect(function () {
  // Do stuff with editor here
});
```


## API Reference

### SpckEditor URL

Certain cosmetic features can be set by the iframe's `src` url by using query parameters.

|URL Parameter|Optional|Description|
|:--- |:--- |:--- |
|`files`|Yes|If present, will display a side menu for file management.|
|`preview`|Yes|If present, will display a Run button for previewing code output.|
|`theme`|Yes|Changes the editor theme. Options: chrome, xcode, ayu-light, dracula, monokai, ayu-mirage.|

#### Example

```html
<iframe src="https://embed.spck.io/?files=1&preview=1&theme=dracula"></iframe>
```

### SpckEditor constructor

```javascript
new SpckEditor(element, origin)
```

|Parameter|Optional|Description|
|:--- |:--- |:--- |
|`element`|No|Either a CSS selector string or the `iframe` HTMLElement to connect to.|
|`origin`|Yes|String to specify another domain origin for the editor. (*Defaults to `https://embed.spck.io`*)|

### SpckEditor Methods

```javascript
connect(successCallback: Function, errorCallback: Function, options: Object): void
```

|Parameter|Optional|Description|
|:--- |:--- |:--- |
|`successCallback`|Yes|Handles when editor successfully connects. Editor has fully initialized. First argument is number of tries it took to connect.|
|`errorCallback`|Yes|Handles when editor fails to connect. Something wrong has occurred. Either browser does not support some features used or problems with domain or security. If provided, an error would not be thrown on failure, instead the error object would be passed to this callback.|
|`options`|Yes|Defines `maxTries` (*default: 10*), `interval` (*default: 500ms*) for connecting to the iframe.|

```javascript
configure(config: Object): void
```

|Parameter|Optional|Description|
|:--- |:--- |:--- |
|`config`|No|Tells the editor to perform tasks. See example below.|

#### Example

```javascript
editor.configure({
  files: [
    // Create files ("files" mode must be enabled in the url)
    {
      path: 'index.html',
      text: '...'
    }, {
      path: 'index.js',
      text: '...'
    }
  ],
  // Default file ("files" mode must be enabled in the url)
  defaultFile: 'index.js',
  // Sets the language mode
  mode: 'javascript' // 'typescript, css, less, scss, html...',
  // Sets the editor current text
  text: '...',
  // Sets the editor font size
  fontSize: '12px',
  // Sets the editor tab size
  tabSize: 2,
  // Show line numbers or not
  gutter: true
});
```

```javascript
getText(callback: Function): void
```

|Parameter|Optional|Description|
|:--- |:--- |:--- |
|`callback`|No|Handles the returned text data. First argument of callback is an `Event` object with the text stored in the `data` attribute. See example below.|

#### Example

```javascript
editor.getText(function (event) {
  console.log(event.data); // Editor text data
});
```
