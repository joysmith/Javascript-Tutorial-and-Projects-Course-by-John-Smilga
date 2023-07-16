// nested objects
// 1a. set variable as property value
// 1b. dot notation vs bracket notation

// step 1a: how to set variable as obj-property value
const age = 40;

// step 1b. how to set variable as obj-property value
let random = "random-value";

random = "age";

const person = {
  name: "john",

  // step 2a: modify obj-value using variable
  age: age,
  married: true,
  siblings: ["anna", "peter"],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },

  // how to create nested obj
  job: {
    title: "developer",
    company: {
      name: "coding addict",
      address: "123 main street",
    },
  },

  // step 2b: how to use string to write key
  "random-value": "random",
};

console.log(person.job.title);
console.log(person.job.company.address);
console.log(person);

console.log(person["name"]);

// step 3b: how to access obj-key using bracket notation
console.log(person["random-value"]);

console.log(person[random]);
