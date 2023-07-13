#### 55. [Connecting The Dots](#55)

#### 56. [String Properties and Methods](#56)

#### 57. [Template Literals](#57)

#### 58. [Strings Challenge](#58)

#### 59. [Array Properties and Methods](#59)

#### 60. [Exercise - Full Name](#60)

#### 61. [Exercise - Calculate Total](#61)

#### 62. [Value vs Reference](#62)

#### 63. [Null and Undefined](#63)

#### 64. [Truthy and Falsy](#64)

#### 65. [Ternary Operator](#65)

#### 66. [Global Scope](#66)

#### 67. [Local Scope](#67)

#### 68. [Variable Lookup](#68)

#### 69. [Callback Functions, Higher Order Functions](#69)

#### 70. [Array Iterators](#70)

#### 71. [forEach](#71)

#### 72. [map](#72)

#### 73. [filter](#73)

#### 74. [find](#74)

#### 75. [reduce](#75)

#### 76. [Array Challenge - Intro](#76)

#### 77. [Array Challenge - Setup Data](#77)

#### 78. [Array Challenge - Multiple Files](#78)

#### 79. [Array Challenge - Map](#79)

#### 80. [Array Challenge - Filter](#80)

#### 81. [Array Challenge - Filter Alternative Syntax](#81)

#### 82. [Array Challenge - Find](#82)

#### 83. [Array Challenge - Reduce #1](#83)

#### 84. [Square Bracket Notation](#84)

#### 85. [Array Challenge - Reduce #2](#85)

#### 86. [Math Object](#86)

#### 87. [Date Object](#87)

<br>

## Connecting The Dots <a id='55'></a>

<br>

## String Properties and Methods <a id='56'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript Tutorial</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }
      h1 {
        letter-spacing: 2px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1>Javascript</h1>
    <script src="./app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// String properties and methods
// wrapper String Object, don't memorize methods

let text = " Peter Jordan";
let result = text.length;
console.log(result);

console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(text.length - 1));
console.log(text.indexOf("e"));
console.log(text);

// Remove white space
console.log(text.trim());

// How to do method chaning on string
console.log(text.trim().toLowerCase().startsWith("peter"));

// Does this string has eter
console.log(text.includes("eter"));

// give me a substring
console.log(text.slice(0, 2));
console.log(text.slice(-3));
```

- <a href="https://www.w3schools.com/js/js_string_methods.asp" target="_blank">javascript string method W3School</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank">javascript string method MDN</a>

<br>

## Template Literals <a id='57'></a>

- index.html (same template id=55)
- app.js

```js
// Template Literals - ES6+
// Backtick characters `` - above tab (left from one)
// Interpolation ${} - insert expression(value)

// old way
const name = "john";
const age = 25;
const sentence = "Hey it's " + name + " and he is " + age + " years old";

// Template literal
const value = `Hey it's ${name} and he is ${age} years old. And here is some simple math ${
  4 + 4
}`;
console.log(value);

console.log(sentence);
```

<br>

## Strings Challenge <a id='58'></a>

Strings #8

1. create function fullName
2. accept two parameters "firstName", "lastName"
3. add them together (concat) and return result in uppercase
4. invoke fullName and pass some values
5. log result
6. change the order of arguments
7. refactor to object parameter
   <br>

---

- index.html (same template id=55)
- app.js

```js
// function fullName(firstName, lastName) {
//   const fullName = `${firstName} ${lastName}`;
//   return fullName.toUpperCase();
// }
// console.log(fullName('john', 'smith'));

function fullName({ firstName, lastName }) {
  const fullName = `${firstName} ${lastName}`;
  return fullName.toUpperCase();
}

// refactor: pass input in any order
console.log(fullName({ lastName: "jordan", firstName: "peter" }));
```

<br>

## Array Properties and Methods <a id='59'></a>

- index.html (same template id=55)
- app.js

```js
// Array Properties and Methods
let names = ["john", "bobo", "barry", "olga", "ben"];

//length: how to get length of an array
console.log(names.length);
console.log(names[names.length - 1]);

// concat: How to combine two array
const lastNames = ["pepper", "onion", "banana"];
const allNames = names.concat(lastNames);
console.log(allNames);

// reverse: how to get reverse array
console.log(allNames.reverse());

//unshift: how to add item at the beginning of array
allNames.unshift("susy");
allNames.unshift("anna");
console.log(allNames);

//shift: how to remove item at the beginning of array
allNames.shift();
allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);

//push: how to add item at the end of array
allNames.push("susy");
console.log(allNames);

//pop: how to remove item at the end of array
allNames.pop();
console.log(allNames);

// splice - mutates original array: how delete item from original array
const specificNames = allNames.splice(0, 3);
console.log(specificNames);
console.log(allNames);
```

- <a href="https://www.w3schools.com/js/js_array_methods.asp" target="_blank">javascript array methods W3School</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">javascript array methods MDN</a>
  <br>

## Exercise - Full Name <a id='60'></a>

<br>

- index.html (same template id=55)
- app.js

```js
// Arrays and for loop

const names = ["anna", "susy", "bob"];
const lastName = "shakeandbake";
let newArray = [];

//for loop
for (let i = 0; i < names.length; i++) {
  console.log(i);
  console.log(names[i]);

  // combine firstname and lastname
  const fullName = `${names[i]} ${lastName}`;

  // put fullname in new array
  newArray.push(fullName);
}

console.log(names);
console.log(newArray);
```

<br>

## Exercise - Calculate Total <a id='61'></a>

<br>

## Value vs Reference <a id='62'></a>

- index.html (same template id=55)
- app.js

```js
// Refernce vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null,
// Arrays, Functions, Objects = object
// typeof

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references.

const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let person = { name: "bob" };

// CASE 1
// copy the person reference/address to person2-obj
// let person2 = person;

// CASE 2
// pass/copy the value of peron to person2 variable not the reference/address
let person2 = { ...person };
person2.name = "susy";

console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);
```

<br>

## Null and Undefined <a id='63'></a>

- index.html (same template id=55)
- app.js

```js
//  Null and Undefined
// both represent "no value"

// Undefined - "javascript can not find value for this", done by javascript

// variable without value
// missing function arguments
// missing obj arguments

// null - "developer sets the value", done by developer
```

<br>

## Truthy and Falsy <a id='64'></a>

- index.html (same template id=55)
- app.js

```js
// Truthy and Falsy
// Truthy value:"anything", 1, true
// Falsy value: "",'',``,0 ,-0 ,NaN ,false, null, undefined

const bool1 = true;
const bool2 = 2 > 1;

const text = "life";

if (text) {
  // "anything" give truthy
  console.log("hey the value Truthy");
} else {
  // "" give falsy
  console.log("hey the value Falsy");
}

// if (bool1) {
//   console.log(`Hey it works!`);
// }
// if (bool2) {
//   console.log(`Hey it also works!`);
// }
```

<br>

## Ternary Operator <a id='65'></a>

- index.html (same template id=55)
- app.js

```js
// unary operator -  typeof
let text = "some text";
// console.log(typeof text); // operand

// binary operator - assignment
let number = 3;
let number2 = 2 + 5;

// ternary operator
// condition ? (runs if true) : (runs if false)
const value = 1 < 0;
value ? console.log("value is true") : console.log("value is false");

// for ref.
// if (value) {
//   console.log('value is true');
// } else {
//   console.log('value is false');
// }
```

<br>

## Global Scope <a id='66'></a>

<br>

## Local Scope <a id='67'></a>

<br>

## Variable Lookup <a id='68'></a>

<br>

## Callback Functions, Higher Order Functions <a id='69'></a>

<br>

## Array Iterators <a id='70'></a>

<br>

## forEach <a id='71'></a>

<br>

## map <a id='72'></a>

<br>

## filter <a id='73'></a>

<br>

## find <a id='74'></a>

<br>

## reduce <a id='75'></a>

<br>

## Array Challenge - Intro <a id='76'></a>

<br>

## Array Challenge - Setup Data <a id='77'></a>

<br>

## Array Challenge - Multiple Files <a id='78'></a>

<br>

## Array Challenge - Map <a id='79'></a>

<br>

## Array Challenge - Filter <a id='80'></a>

<br>

## Array Challenge - Filter Alternative Syntax <a id='81'></a>

<br>

## Array Challenge - Find <a id='82'></a>

<br>

## Array Challenge - Reduce #1 <a id='83'></a>

<br>

## Square Bracket Notation <a id='84'></a>

<br>

## Array Challenge - Reduce #2 <a id='85'></a>

<br>

## Math Object <a id='86'></a>

<br>

## Date Object <a id='87'></a>

<br>
