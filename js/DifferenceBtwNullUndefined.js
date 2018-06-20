/* Difference between null and undefined */

console.log(null === undefined); //false -> types are different
console.log(null == undefined) ; //true -> type conversion happens

console.log(null === null);
console.log(null == null);

console.log(isNaN(1 + null)); //null --> 0
console.log(isNaN(1 + undefined)); //cannot reduce undefined to any number

console.log(!null);

var n = new Number(1);
console.log(typeof 1); //primitive number
console.log(typeof n); // Object wrapper for number
