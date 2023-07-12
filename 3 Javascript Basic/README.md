#### 14. [Basics Intro](#14)

#### 15. [Basic Project](#15)

#### 16. [Inline Javascript](#16)

#### 17. [Internal Javascript](#17)

#### 18. [External Javascript](#18)

#### 19. [Cleanup Workspace](#19)

#### 20. [Helper Methods](#20)

#### 21. [Statements and Comments](#21)

#### 22. [Variables](#22)

#### 23. [Assign Variable Value Later](#23)

#### 24. [Variable Naming Rules](#24)

#### 25. [const, let, var](#25)

#### 26. [Challenges Intro](#26)

#### 27. [Variables Challange](#27)

#### 28. [Prettier Settings](#28)

#### 29. [Quotation Marks](#29)

#### 30. [String Concatenation](#30)

#### 31. [String Concat Challenge](#31)

#### 32. [Numbers Basics](#32)

#### 33. [Numbers - Additional Features](#33)

#### 34. [Numbers Challenge](#34)

#### 35. [Implicit Type Conversion](#35)

#### 36. [Data Types](#36)

#### 37. [Arrays](#37)

#### 38. [Array Challenge](#38)

#### 39. [Functions - Declare, Invoke](#39)

#### 40. [Functions - Parameters, Arguments](#40)

#### 41. [Functions - Return](#41)

#### 42. [Function Expressions](#42)

#### 43. [Function Challenge](#43)

#### 44. [Objects](#44)

#### 45. [Object Challenge](#45)

#### 46. [Conditional Statements - Basics](#46)

#### 47. [Conditional Statements Continued](#47)

#### 48. [Equality](#48)

#### 49. [Logical Operators](#49)

#### 50. [Switch Statement](#50)

#### 51. [Conditionals Challenge](#51)

#### 52. [while Loops](#52)

#### 53. [do while loops](#53)

#### 54. [for loop](#54)

---

<br>

## Basics Intro <a id='14'></a>

<br>

## Basic Project <a id='15'></a>

<br>

## Inline Javascript <a id='16'></a>

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Java script interactive basic</title>
  </head>
  <body>
    <h1>Sanity check</h1>

    <!-- How to inject inline js in button-tag -->
    <button onclick="alert('Alert box')">click me</button>
  </body>
</html>


```

<br>

## Internal Javascript <a id='17'></a>

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript Basics</title>
  </head>
  <body>
    <h1>hello world</h1>
    <h4>hello people</h4>

    <!--emmet shortcut: btn.btn*7{random button} -->
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>

    <!-- How to internal inject js in html page  -->
    <script>
      document.querySelectorAll(".btn").forEach((item) => {
        item.addEventListener("click", () => {
          alert("this is good ");
        });
      });
    </script>
  </body>
</html>

```

<br>

## External Javascript <a id='18'></a>

- index.html

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript Basics</title>
  </head>
  <body>
    <a href="about.html">about</a>

    <h1>home page</h1>
    <h4>hello people</h4>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>

    <!-- How to externally inject js using relative path -->
    <script src="./app.js"></script>
  </body>
</html>

```

---

- about.html

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About Page</title>
  </head>
  <body>
    <a href="index.html">home</a>
    <h4>about page</h4>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>
    <button class="btn">random button</button>

    <!-- How to externally inject js using relative path -->
    <script src="./app.js"></script>
  </body>
</html>

```

---

- app.js

```js
document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", () => {
    alert("I will affect index.html, about.html alert-content from here only ");
  });
});
```

<br>

## Cleanup Workspace <a id='19'></a>

<br>

## Helper Methods <a id='20'></a>

- index.html

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript Basics</title>
  </head>
  <body>
    <h1>javascript tutorial</h1>

    <script src="./app.js"></script>
  </body>
</html>

```

---

- app.js

```js
// How to write on browser page using write method
document.write("hello world");

// How to write on alert-popup
alert("hello world");

// How to write on dev console
console.log("hello world");
```

<br>

## Statements and Comments <a id='21'></a>

- index.html (same template)
- app.js

```js
// I woke,? up early!!!! him today.

// statements - sets of instructions or anything that ends with ; (semi-colon)
// comments - shortcut Command ctrl + /

// this is console statement
// console.log("hello world");
console.log("hello people");

/*
console.log("hello people");
console.log("hello my friend bob");
console.log("hello susan");
document.write("hello anna");
*/
```

<br>

## Variables <a id='22'></a>

- index.html (same template)
- app.js

```js
// Variable feature - Most Basic Building Block
// Variables use for - Store, Access, Modify === Value
// Declare, Assignment Operator, Assign Value

// variable declaration, assign value by using assingment operator
let name = "john shrimp taco VI";

// access variable
console.log(name);
// some code here
console.log(name);
// some code here
console.log(name);
// some code here
console.log(name);
// some code here
console.log(name);
// some code here
console.log(name);
// some code here
```

<br>

## Assign Variable Value Later <a id='23'></a>

- index.html (same template)
- app.js

```js
// Variable - Most Basic Building Block
// Variables - Store, Access, Modify === Value
// Declare, Assignment Operator, Assign Value
// assign value later, modify existing

let name = "john shrimp taco VI";

// declaring variable assinging later
let address, zip, state;
address = "101 main street";
zip = "60612";
state = "CA";
console.log(address, zip, state);

// modifying variable
name = "fish burrito ";

console.log(name);
```

<br>

## Variable Naming Rules <a id='24'></a>

- index.html (same template)
- app.js

```js
// can contain digits, letters, underscore, $
// must start with letter, $ or _

// no keyword
// cannot start with number

// case sensitive - fullname vs Fullname

// camelCase or underscore

let full_name = "random";
console.log(full_name);
```

<br>

## const, let, var <a id='25'></a>

- index.html (same template)
- app.js

```js
// LET VS CONST VS VAR

// using var
var value = "some value";
value = "some other value";
// using let
let name = "john";
name = "peter";
// using const (CONSTANT) - can't re-assign
const lastName = "smith";

console.log(value);
console.log(name);
console.log(lastName);
```

  <br>

## Challenges Intro <a id='26'></a>

<br>

## Variables Challange <a id='27'></a>

Variables #1

1. create "firstName" and "last_name" variables
2. assign your values
3. create "address" variable and assign "main street" value to it
4. re-assign address to "first street" later
5. log all values in the console

<br>

- index.html (same template)
- app.js

```js
const firstName = "john";
const last_name = "smilga";

let address = "main street";
address = "first street";

console.log(firstName, last_name, address);
```

<br>

## Prettier Settings <a id='28'></a>

<br>

## Quotation Marks <a id='29'></a>

- index.html (same template)
- app.js

```js
// "" or ''
const name = "john's courses are the best";

console.log(name);
```

<br>

## String Concatenation <a id='30'></a>

- index.html (same template)
- app.js
  - uncomment websites name to visit diff site from dev-console

```js
// String Concatenation - combine string values
// `` - backticks (template strings) easier option.

// const name = 'john';
// const lastName = 'shakeandbake';
// let fullName = name + ' ' + lastName;

// console.log('Hello there your full name is : ' + fullName);

const website = "google";
// const website = "udemy";
// const website = "youtube";
// const website = "facebook";

const url = "https://www." + website + ".com";
console.log(url);
```

<br>

## String Concat Challenge <a id='31'></a>

Concatenate Strings #2

1. create "street" and "country" variables
2. assign your values
3. create "fullMailingAddress" variable and assign
   the result of "street + country"
4. remember about the space
5. log "fullMailingAddress" in the console

<br>

- index.html (same template)
- app.js

```js
const street = "main street";
const country = "USA";

const fullMailingAddress = street + " " + country;
console.log(fullMailingAddress);
```

<br>

## Numbers Basics <a id='32'></a>

- index.html (same template)
- app.js

```js
// Numbers
// Loosely Typed = don't declare type
// In dev-console string are in black color and number are in blue color

const number = 34;
// let pants = 2.466;
// pants = 'are great';
const number2 = 2.456;
const number3 = "2.456";

const add = number + number2;
const sub = number - number2;
const mult = number * number2;
const div = number / number2;

console.log(add);
console.log(sub);
console.log(mult);
console.log(div);
console.log(number3);
```

<br>

## Numbers - Additional Features <a id='33'></a>

- index.html (same template)
- app.js

```js
// Numbers
// +=, -=, /=, *=, ++ , --, %
// Modulus (%) operator returns the remainder after integer division

let number = 40;
number += 5;
number += 5;
number += 5;
number += 5;
number += 5;
number -= 5;
number++;
number--;
number--;

const slices = 10;
const children = 4;
const amount = slices % children;

const calculate = 4 + 6 + 10 * 10;
const calculate2 = (4 + 6 + 10) * 10;
console.log(calculate);
console.log(calculate2);

console.log(amount);
```

<br>

## Numbers Challenge <a id='34'></a>

Numbers #3

1. create "score1", "score2", "score3" variables and
   assign values (0-100)
2. calculate total score and average score, and assign them to the variables.
3. log total score and average score

4. create "plates" variable and assign 20
5. create "people" variable and assign 7
6. calculate remaining plates and assign to the variable
7. add one to remaining plates
8. create message variable and display 'There are (your value goes here) plates available' - string concatenation
9. log message

<br>

```js
const score1 = 98;
const score2 = 75;
const score3 = 45;

const totalScore = score1 + score2 + score3;
const avgScore = totalScore / 3;
// console.log(totalScore, avgScore);

const plates = 20;
const people = 7;
let remainingPlates = 20 % 7;
remainingPlates++;

const message = "There are " + remainingPlates + " plates available";
console.log(message);
```

<br>

## Implicit Type Conversion <a id='35'></a>

- index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript Basics</title>
  </head>
  <body>
    <h1>Javascript Tutorial</h1>
    <form class="form">
      <label for="amount">Enter Number</label>
      <input type="number" id="amount" />
      <button type="submit">Submit</button>
    </form>
    <script src="./app.js"></script>
  </body>
</html>
```

---

- app.js

```js
// Implicit Type Conversion

// const name = 'john';
// const lastName = 'jordan';
// const fullName = name + ' ' + lastName;
// console.log(fullName);

// const number = 4;
// const number2 = 10;
// const result = number + number2;
// console.log(result);

// const value = name - lastName;
// console.log(value);

// let number3 = 10;
// let number4 = 23;
// // 100 lines
// number4 = '23';
// const result2 = number3 + number4;
// console.log(result2);

const randomNumber = 13;
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();
  let value = document.getElementById("amount").value;
  value = parseInt(value);
  console.log("Input Value Type");
  console.log(value);
  console.log("Sum of Two Values");
  console.log(randomNumber + value);
});
```

<br>

## Data Types <a id='36'></a>

- index.html (same template)
- app.js

```js
// Data Types - 7 total (primitive + obj)
// Primitive - String, Number, Boolean, Null, Undefined, Symbol
// Object - Arrays, Functions, Objects

// typeof - operator (typeof variable) (typeof value)

// String
const text = "some text";

// Number
const number = 45;

// Boolean
let value1 = true;
let value2 = false;

// Null
const result = null;

// Undefined
let name;

// Symbol(ES6)

// How to use typeof operator to know datatype
console.log(typeof text);
console.log(typeof true);
console.log(typeof number);
console.log(typeof value1);
console.log(typeof value2);
console.log(typeof null);
console.log(typeof name);
```

<br>

## Arrays <a id='37'></a>

<br>

## Array Challenge <a id='38'></a>

<br>

## Functions - Declare, Invoke <a id='39'></a>

<br>

## Functions - Parameters, Arguments <a id='40'></a>

<br>

## Functions - Return <a id='41'></a>

<br>

## Function Expressions <a id='42'></a>

<br>

## Function Challenge <a id='43'></a>

<br>

## Objects <a id='44'></a>

<br>

## Object Challenge <a id='45'></a>

<br>

## Conditional Statements - Basics <a id='46'></a>

<br>

## Conditional Statements Continued <a id='47'></a>

<br>

## Equality <a id='48'></a>

<br>

## Logical Operators <a id='49'></a>

<br>

## Switch Statement <a id='50'></a>

<br>

## Conditionals Challenge <a id='51'></a>

<br>

## while Loops <a id='52'></a>

<br>

## do while loops <a id='53'></a>

<br>

## for loop <a id='54'></a>

<br>
```
