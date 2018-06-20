/* const variables should not change thier values */

const PI = 3.1412
console.log("Value of PI: ",PI);

//const radius; //must be initialized
const variable = 11;
//variable = 22;   //cannot re-assign to const variables

/* But const object's properties can be modified */
const someObject = {id : 1};
console.log(someObject); 

someObject.id = 2;
console.log(someObject);

const array = ["HTML","CSS"];
console.log(array);
array.push("JAVASCRIPT");
console.log(array);
array[0] = "HTML5";
console.log(array);

