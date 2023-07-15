#### 88. [DOM - Intro](#88)

#### 89. [DOM - General Concepts](#89)

#### 90. [Window and Document Overview](#90)

#### 91. [Get Element By ID](#91)

#### 92. [Get Elements By Tag Name](#92)

#### 93. [Get Element By Class Name](#93)

#### 94. [Query Selector and Query Selector ALL](#94)

#### 95. [Navigate the DOM - Children](#95)

#### 96. [Navigate the DOM - parentElement](#96)

#### 97. [Navigate the DOM - nextSibling, previousSibling](#97)

#### 98. [Navigate the DOM - nextElementSibling, previousElementSibling](#98)

#### 99. [textContent nodeValue](#99)

#### 100. [getAttribute() setAttribute()](#100)

#### 101. [classList and className](#101)

#### 102. [createElement - createTextNode - appendChild](#102)

#### 103. [insertBefore](#103)

#### 104. [replaceChild](#104)

#### 105. [prepend innerText](#105)

#### 106. [remove removeChild](#106)

#### 107. [innerHTML and textContent](#107)

#### 108. [Change CSS with style property](#108)

#### 109. [Events Overview](#109)

#### 110. [Click Event](#110)

#### 111. [Function Reference](#111)

#### 112. [Mouse Events](#112)

#### 113. [Key Events](#113)

#### 114. [Event Object](#114)

#### 115. [CurrentTarget vs Target](#115)

#### 116. [Event Propagation - Bubbling- Capturing](#116)

#### 117. [Event Propagation Example](#117)

#### 118. [Forms](#118)

#### 119. [Local Storage](#119)

#### 120. [Local Storage With Multiple Values](#120)

#### 121. [setTimeout](#121)

#### 122. [setInterval](#122)

#### 123. [Events - "DOMContentLoaded"](#123)

#### 124. [Events - "load"](#124)

#### 125. [Events - "scroll"](#125)

#### 126. [Width, Height, GetBoundingClientRect](#126)

#### 127. [Events - "resize"](#127)

<br>

## DOM - Intro <a id='88'></a>

<br>

## DOM - General Concept <a id='89'></a>

<br>

## Window and Document Overvie <a id='90'></a>

<br>

## Get Element By Id <a id='91'></a>

<br>

## Get Elements By Tag Name <a id='92'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .btn {
        font-size: 2rem;
        background: lightgray;
        text-transform: uppercase;
      }
    </style>
  </head>
  <body>
    <h2>hello world</h2>
    <h2>hello people</h2>
    <ul>
      <li>apple</li>
      <li>orange</li>
      <li>banana</li>
      <li>pear</li>
      <li>tomato</li>
    </ul>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
//1. Select the element or group of elements the we want
//2. Decide the effect we want to apply to the selection

// getElementsByTagName('tagname');
// returns: HTMLCollection =  array-like object
// index, length property but not array methods (forEach)

// querySelectorAll() in most cases
// NodeList - objects are collections of nodes
// can run forEach
// turn them into array - spread operator [...]
// after that can use any array properties and methods

const headings = document.getElementsByTagName("h2");
headings[0].style.color = "red";
// console.log(headings.length);

const items = document.getElementsByTagName("li");
items[2].style.color = "orange";
// How to turn HTMLCollection into array, so we can use array prop, methods
const betterItems = [...items];

betterItems.forEach(function (item) {
  console.log(item);
});

console.log(items);
console.log(betterItems);
```

<br>

## Get Element By Class Name <a id='93'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .btn {
        font-size: 2rem;
        background: lightgray;
        text-transform: uppercase;
      }
    </style>
  </head>
  <body>
    <h2>hello world</h2>
    <h2>hello people</h2>
    <ul>
      <li class="special">apple</li>
      <li>orange</li>
      <li class="special">banana</li>
      <li>pear</li>
      <li class="special">tomato</li>
    </ul>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// getElementsByClassName('classname');

// returns: HTMLCollection

const listItems = document.getElementsByClassName("special");
listItems[2].style.color = "blue";
console.log(listItems);
```

<br>

## Query Selector and Query Selector ALL <a id='94'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .btn {
        font-size: 2rem;
        background: lightgray;
        text-transform: uppercase;
      }
    </style>
  </head>
  <body>
    <ul id="result">
      <li class="special">apple</li>
      <li>orange</li>
      <li class="special">banana</li>
      <li>pear</li>
      <li class="special last">tomato</li>
    </ul>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// querySelector('any css'); - selects single
// querySelectorAll('any css') - selects all

const result = document.querySelector("#result");
result.style.backgroundColor = "blue";

const item = document.querySelector(".special");
// console.log(item);

const lastItem = document.querySelector("li:last-child");
// console.log(lastItem);

const list = document.querySelectorAll(".special");

list.forEach(function (item) {
  console.log(item);
  item.style.color = "yellow";
});
```

<br>

## Navigate the DOM - Children <a id='95'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .btn {
        font-size: 2rem;
        background: lightgray;
        text-transform: uppercase;
      }
    </style>
  </head>
  <body>
    <ul id="result">
      <li>apple</li>
      <li>orange</li>
      <li>banana</li>
      <li>pear</li>
      <li>tomato</li>
    </ul>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// Select the element or group of elements the we want
// Traversing through DOM tree- using children property.
// Decide the effect we want to apply to the selection

// property: childNodes - returns all childNodes including whitespace which is treated as a text node

// property: children
// property: firstChild
// property: lastChild

const result = document.querySelector("#result");
const allChildren = result.childNodes;
// console.log(allChildren);

const children = result.children;
console.log(children);

console.log(result.firstChild);
console.log(result.lastChild);
```

<br>

## Navigate the DOM - parentElement <a id='96'></a>

<br>

## Navigate the DOM - nextSibling, previousSibling <a id='97'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .btn {
        font-size: 2rem;
        background: lightgray;
        text-transform: uppercase;
      }
    </style>
  </head>
  <body>
    <ul id="result">
      <li class="first">first</li>
      <li>list item 2</li>
      <li>list item 3</li>
      <li id="last">last</li>
    </ul>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// property: previousSibling
// property: nextSibling
// return whitespace

const first = document.querySelector(".first");
const second = (first.nextSibling.nextSibling.style.color = "red");
console.log(second);

const last = document.querySelector("#last");
const third = last.previousSibling.previousSibling;

console.log(third);
console.log(last.nextSibling.nextSibling);
```

<br>

## Navigate the DOM - nextElementSibling, previousElementSibling <a id='98'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## textContent nodeValue <a id='99'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## getAttribute() setAttribute() <a id='100'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## classList and className <a id='101'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## createElement - createTextNode - appendChild <a id='102'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## insertBefore <a id='103'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## replaceChild <a id='104'></a>

<br>

## prepend innerText <a id='105'></a>

<br>

## remove removeChild <a id='106'></a>

<br>

## innerHTML and textContent <a id='107'></a>

<br>

## Change CSS with style property <a id='108'></a>

<br>

## Events Overview <a id='109'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>

    <style>
      .red {
        background: red;
        color: white;
        text-transform: uppercase;
        font-size: 2rem;
      }
      .blue {
        background: blue;
        color: white;
        text-transform: capitalize;
        letter-spacing: 10px;
      }
      .btn {
        background: #f15025;
        color: white;
        font-size: 1.2rem;
        border: none;
      }
    </style>
  </head>

  <body>
    <h2>events in javascript</h2>
    <p>hey, I can trigger an event</p>
    <button class="btn">click me</button>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
const heading = document.querySelector("h2");
const btn = document.querySelector(".btn");
const text = document.querySelector("p");

text.addEventListener("mouseenter", function () {
  heading.classList.add("red");
});

text.addEventListener("mouseleave", function () {
  heading.classList.remove("red");
});

btn.addEventListener("click", function () {
  if (heading.classList.contains("blue")) {
    heading.classList.remove("blue");
  } else {
    heading.classList.add("blue");
  }
});
```

<br>

## Click Event <a id='110'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .red {
        background: red;
        color: white;
        text-transform: uppercase;
        font-size: 2rem;
      }
      .blue {
        background: blue;
        color: white;
        text-transform: capitalize;
        letter-spacing: 10px;
      }
      .btn {
        background: #f15025;
        color: white;
        font-size: 1.2rem;
        border: none;
      }
    </style>
  </head>
  <body>
    <h2>events in javascript</h2>
    <button class="btn">click me</button>
    <!-- javascript -->
    <p onclick="this.classList.add('red')">
      the old style, DONT USE THIS WAY TO CODE IN JS
    </p>
    <script src="app.js"></script>
  </body>
</html>
```

---

- In app.js, the process of adding event
  - Step 1: select element
  - Step 2: addEventListener()
  - Step 3: what event, what to do

```js
// Step 1: select element
// Step 2: addEventListener()
// Step 3: what event, what to do

const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

btn.addEventListener("click", function () {
  heading.classList.add("red");
});
```

<br>

## Function Reference <a id='111'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .red {
        background: red;
        color: white;
        text-transform: uppercase;
        font-size: 2rem;
      }
      .blue {
        background: blue;
        color: white;
        text-transform: capitalize;
        letter-spacing: 10px;
      }
      .btn {
        background: #f15025;
        color: white;
        font-size: 1.2rem;
        border: none;
      }
    </style>
  </head>
  <body>
    <h2>events in javascript</h2>
    <button class="btn">click me</button>
    <!-- javascript -->

    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// Step 1: select element
// Step 2: addEventListener()
// Step 3: what event, what to do

const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

function changeColors() {
  // this line will return true/false
  let hasClass = heading.classList.contains("red");

  if (hasClass) {
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
}

btn.addEventListener("click", changeColors);
```

<br>

## Mouse Events <a id='112'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .red {
        background: red;
        color: white;
        text-transform: uppercase;
        font-size: 2rem;
      }
      .blue {
        background: blue;
        color: white;
        text-transform: capitalize;
        letter-spacing: 10px;
      }
      .btn {
        background: #f15025;
        color: white;
        font-size: 1.2rem;
        border: none;
      }
    </style>
  </head>
  <body>
    <h1>events in javascript</h1>
    <button class="btn">click me</button>

    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// click - fires after full-action(mousedown & mouseup) occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");

// click
btn.addEventListener("click", function () {
  console.log("you clicked me");
});

// mousedown
btn.addEventListener("mousedown", function () {
  console.log("down");
});

// mouseup
btn.addEventListener("mouseup", function () {
  console.log("up");
});

// mouseenter
heading.addEventListener("mouseenter", function () {
  heading.classList.add("blue");
});

// mouseleave
heading.addEventListener("mouseleave", function () {
  heading.classList.remove("blue");
});
```

<br>

## Key Events <a id='113'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .red {
        background: red;
        color: white;
        text-transform: uppercase;
        font-size: 2rem;
      }
      .blue {
        background: blue;
        color: white;
        text-transform: capitalize;
        letter-spacing: 10px;
      }
      .btn {
        background: #f15025;
        color: white;
        font-size: 1.2rem;
        border: none;
      }
    </style>
  </head>
  <body>
    <input type="text" id="name" />
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released

const nameInput = document.getElementById("name");

// nameInput.addEventListener('keypress', function() {
//   console.log('you pressed a key');
// });

// nameInput.addEventListener('keydown', function() {
//   console.log('you pressed a key');
// });
nameInput.addEventListener("keyup", function () {
  // accessing  keyboard-key object all props & method
  console.dir(nameInput);

  console.log(nameInput.value);
});
```

<br>

## Event Object <a id='114'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .red {
        background: red;
        color: white;
        text-transform: uppercase;
        font-size: 2rem;
      }
      .btn {
        background: #f15025;
        color: white;
        font-size: 1.2rem;
        border: none;
      }
      .blue {
        background: blue;
        color: white;
        text-transform: capitalize;
        letter-spacing: 10px;
      }
      a {
        display: inline-block;
        margin-top: 100vh;
      }
    </style>
  </head>
  <body>
    <button class="btn">click me</button>
    <h1>some heading</h1>
    <a href="#" id="link">random link</a>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// event object argument e,evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behaviour

const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");
const link = document.getElementById("link");

heading.addEventListener("click", (event) => {
  console.log(event.currentTarget);
  console.log(this);
});

btn.addEventListener("click", function (event) {
  event.currentTarget.classList.add("blue");
  console.log(event.type);
});

function someFunc(e) {
  e.preventDefault();
}

link.addEventListener("click", someFunc);
```

<br>

## CurrentTarget vs Target <a id='115'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM</title>
    <style>
      .red {
        background: red;
        color: white;
        text-transform: uppercase;
        font-size: 2rem;
      }
      .btn {
        background: #f15025;
        color: white;
        font-size: 1.5rem;
        text-transform: uppercase;
        border: none;
        display: inline-block;
        margin: 0.5rem;
      }
      .blue {
        background: blue;
        color: white;
        text-transform: capitalize;
        letter-spacing: 10px;
      }
      a {
        display: inline-block;
        margin-top: 100vh;
      }
    </style>
  </head>
  <body>
    <button class="btn">first button</button>
    <button class="btn">
      second <strong>button <strong>more nested </strong> </strong>
    </button>
    <button class="btn">third button</button>
    <!-- javascript -->
    <script src="app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// currentTarget - always refers to the element to which the event handler has been attached to
// target - identifies the element on which the event occured

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // console.log(e.currentTarget);
    // e.currentTarget.style.color = 'green';

    console.log("current", e.currentTarget);
    console.log("target", e.target);
    e.target.style.color = "green";
  });
});
```

<br>

## Event Propagation - Bubbling- Capturing <a id='116'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## Event Propagation Example <a id='117'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## Forms <a id='118'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## Local Storage <a id='119'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## Local Storage With Multiple Values <a id='120'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## setTimeout <a id='121'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## setInterval <a id='122'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## Events - "DOMContentLoaded" <a id='123'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## Events - "load" <a id='124'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## Events - "scroll" <a id='125'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## Width, Height, GetBoundingClientRect <a id='126'></a>

- index.html

```html

```

---

- app.js

```js

```

<br>

## Events - "resize" <a id='127'></a>

- index.html

```html

```

---

- app.js

```js

```
