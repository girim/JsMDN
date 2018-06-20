
/* With hoisting you can refer to variables decalred later */

console.log("Value of variable before: ", variableA);
var variableA = 99;
console.log("Value of variable after: ", variableA);

/* 
 interpreter re-arranges as below,
    var variableA;
    console.log("Value of variable is: ", variableA);
    variableA = 99;
 */

var myVar = 'myVar';  //global variable

(function(){
    console.log(myVar);    //local variable
    var myVar = 'someText';
})()

/* (function(){
    var myVar;
    console.log(myVar);    //local variable
    myVar = 'someText';
})() */

/* 'let' do not hoist thorw ref Error*/

try {
    console.log("Value of variable: ", letVar);
    let letVar = 10;
} catch (error) {
    console.log("Ref Error:", error.message);
}

