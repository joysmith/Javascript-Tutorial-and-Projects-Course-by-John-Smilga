/* In Reg Functions (not arrow) "this"
determined by "HOW"!!! a function is invoked (left of .)

defaults to global - window
arrow functions - pump the breaks
*/

// console.log(this);

// showThis fun. will point to window-obj which is a default-obj
function showThis() {
  console.log(this);
}

// showThis fun. will point to john-obj
const john = {
  name: "john",
  showThis: showThis,
};

// showThis fun. will point to bob-obj
const bob = {
  name: "bob",
  showThis: showThis,
};

john.showThis(); // john-obj
bob.showThis(); //bob-obj

showThis(); // window-obj
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

btn1.addEventListener("click", showThis); // btn1-obj
btn2.addEventListener("click", showThis); // btn2-obj

btn2.addEventListener("click", function () {
  // point to window-obj, because we are calling it inside anonymous fun, not declaring it as a call-back
  showThis();
});
