/* 3 Kinds of declarations in JS
   - var
   - let   //block scoped
   - const //block scoped, read-only */


/* Variable naming - must begin with _ or $ or [a-z] not with digits */
var _name;
var $name;
var name;
var NAME;   // case   sensitive NAME != name

/* var */
var variable;
console.log("variable declared: ", variable);

variable = 10;
console.log("variable initialized: ", variable);

if(variable === 10){
    var variable = 40;
    var age = 10;
    console.log("variable within block scope: ", variable);
}

console.log("age: ", age);
console.log("variable outside block scope: ", variable);


/* let */
let blockVariable;
console.log("blockVariable declared: ", blockVariable);
blockVariable = 2;
console.log("blockVariable initialized: ", blockVariable);

if(blockVariable === 2){
    let blockVariable = 100;
    let someVar = 10;
    console.log("blockVariable with block scope: ", blockVariable);
}
//console.log("someVar: ", someVar);
console.log("blockVariable outside block scope: ", blockVariable);

/* const */
const PI = 3.141;
//PI = 3232.2323; // cannot assign

if(true){
    var MAX = 1024;    
    let PI = 5;
    console.log("MAX: ", MAX);
    console.log("PI: ", PI);
}
//console.log("MAX: ", MAX);

if(!undefined){
    console.log("undefined evaluates to 'false' in Boolean context");
}


