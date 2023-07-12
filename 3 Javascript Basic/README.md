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

<br>

## String Concatenation <a id='30'></a>

<br>

## String Concat Challenge <a id='31'></a>

<br>

## Numbers Basics <a id='32'></a>

<br>

## Numbers - Additional Features <a id='33'></a>

<br>

## Numbers Challenge <a id='34'></a>

<br>

## Implicit Type Conversion <a id='35'></a>

<br>

## Data Types <a id='36'></a>

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
