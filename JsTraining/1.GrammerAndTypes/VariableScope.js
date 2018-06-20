/* - global scope
    - local scope
    - block scope */

var globalVar = 10;

function testFunction(){
    var localVar = 20;
    var globalVar = 99;
    console.log("localVar within testFunction: ", localVar);
    console.log("globalVar within testFunction: ", globalVar);
}

//console.log("localVar is not accessible out side the function : ", localVar);

if(true) {
    let blockScopedVar = 40;
}
console.log("blockScopedVar: ", blockScopedVar);
testFunction();
console.log("globalVar outside testFunction: ", globalVar);
