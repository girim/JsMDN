/* Variable Naming 
    1. can start with _ (underscore), $(doller), or a letter(A-Z, a-z)*/

var _firstOne = 1;
var $secondOne = 2;
var thirdOne = 3;
var temp_var = "";

/* There are three kinds of declarations in JavaScript.
    var: Declares a variable, optionally initializing it to a value.
    let: Declares a block-scoped, local variable, optionally initializing it to a value.
    const: Declares a block-scoped, read-only named constant.
 */

var variableA;
console.log("Value of variableA: ", variableA);

let variableB;
console.log("Value of variableB: ", variableB);

const variableC = 4; /* must be initialized before use else give SyntaxError: Missing initializer in const declaration */
console.log("Value of variableC: ", variableC);

var variableD;
console.log("value of variableD: ", variableD);
variableD = 10;

try {
    console.log("value of variableE : ", variableE);
    let variableE;
} catch (error) {
    console.log("Ref error: ", error.message);
}

/* 'undefined' evaluates to 'false' in boolean context
   'undefined' evaluates to 'NaN' in numeric context
   'undefined' evaluates to string "undefined" in string context */

if(!undefined){
    console.log("undefined evaluates to 'false' in boolean context");
} 

var number = 4;
console.log("Result is : ", number + undefined);

var text = "someText#";
console.log("Result is : ", text + undefined);

/* 'null' evaluates to 'false' in boolean context
   'null' evaluates to '0' in numeric context */
var nothing = null;
if(!null){
    console.log("null evaluates to false.... ");
}
console.log("null evaluates to 0....", 550 * null);
console.log("null evaluates to ....", 550 + null);
console.log("null evaluates to string..."+"someText$" + null);