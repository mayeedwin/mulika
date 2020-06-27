## Mulika, Tiniest JavaScript Test Tool

### Install mulika

```bash
npm i mulika 
```

### Mulika CDN

Minimal in-browser UI add-on to your pages! Google Chrome, MS Edge recommended anf Firefox.

![Mulika Terminal](https://raw.githubusercontent.com/mayeedwin/mulika/master/assets/mulikaterminal.png)

#### Add the scripts above any files to be tested in your html page.

```js
<script src="https://pwafire.org/code/mulika/@latest.js"></script>
```

#### Add styles to your html page

```html
<link rel="stylesheet" href="https://pwafire.org/code/mulika/@latest.css" />
```

#### Add the html component at the bottom of your html page

```html
<section id="mulika" class="mulika">
    <div class="top">
        <div class="btns">
            <span class="circle red"></span>
            <span class="circle yellow"></span>
            <span class="circle green"></span>
            <span class="mulika-title">Mulika Tests</span>
        </div>
    </div>
    <pre class="tests" id="tests"></pre>
</section>
```

#### Configuring for in-browser mulika

In your test js file, you need to enable **debug/dev mode** and **start mulika** first as shown below,
all at the top of the test file.

```js

// Mulika...
mulika.debug = true;
mulika.start();

//...
```

### Specification...

All variables must be provided, all are required!

```js
// Type check...
mulika.typeCheck({ type: type, value: value });

// Other tests...
mulika.expect(message, func, expected_value);
```

### Example...

Launch Playground [Here](https://npm.runkit.com/mulika)

```js
// Require mulika...
const mulika = require("mulika");

const registered = true;
// 1. Type check...
mulika.typeCheck({ type: "boolean", value: registered });

// 2. All tests...
mulika.expect("Sum to be 1", add(1, 9), 1);
// Function to test...
function add(a, b) {
    return a + b;
}
```

Enjoy!
