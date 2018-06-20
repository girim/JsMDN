/* global --> variables declared outside functions 
   local  --> variables declared inside functions
   blockScope --> variable declared inside {..}*/

var globalVar = 999;

function someFunction(){
    var localVar = 44;
    let someVar = 77;
    console.log("Local variable: ", localVar);
    console.log("Global variable: ", globalVar);
    globalVar = 45;

    if(localVar === 44){
        var x = 20; //local variable
        let y = 40; //block scope
        const PI = 3.142; //block scope
    }
    console.log("value of x is: ", x);
    
    if(true){
        x = 0;
        let y = 30;
    }
    console.log("value of x is: ", x);

    try {
        console.log("value of PI: ", PI);
    } catch (error) {
        console.log("Ref error: ", error.message);
    }

    try {
        console.log("value of y is: ", y);
    } catch (error) {
        console.log("Ref error: ", error.message);
    }
    console.log("value of someVar: ", someVar);
}

someFunction();
console.log("Global variable: ", globalVar);

try {
    console.log("someVar: ", somelVar);
} catch (error) {
    console.log("Ref err: ", error.message);
}