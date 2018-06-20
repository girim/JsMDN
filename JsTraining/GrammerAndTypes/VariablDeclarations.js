/* 3 Kinds of declarations in JS
   - var
   - let   //block scoped
   - const //block scoped, read-only */


/* Variable naming - must begin with _ or $ or [a-z] not with digits */
var _name;
var $name;
var name;
var NAME;   // case insensitive NAME != name

/* var */
var variable;
console.log("variable: ", variable);
variable = 10;
console.log("variable: ", variable);

if(variable === 10){
    var variable = 40;
    var age = 10;
    console.log("variable: ", variable);
}

console.log("age: ", age);
console.log("variable: ", variable);


/* let */
let blockVariable;
console.log("blockVariable: ", blockVariable);
blockVariable = 2;
console.log("blockVariable: ", blockVariable);

if(blockVariable === 2){
    let blockVariable = 100;
    let someVar = 10;
    console.log("blockVariable: ", blockVariable);
}
//console.log("someVar: ", someVar);
console.log("blockVariable: ", blockVariable);

/* const */
const PI = 3.141;
//PI = 3232.2323; // cannot assign

if(true){
    const MAX = 1024;
    console.log("MAX: ", MAX);
}
//console.log("MAX: ", MAX);

if(!undefined){
    console.log("undefined evaluates to 'false' in Boolean context");
}


