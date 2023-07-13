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
