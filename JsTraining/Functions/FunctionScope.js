
var globalVar = 10;  //global scope

function testFunction(){
    var localVar = 30;   //local scope
    //var globalVar = 99;
    console.log("Function can access global var: ", globalVar);
    console.log("Local variables can be accessed only within function: ", localVar);
    
    function innerFunction(){
        //var localVar = 50;   //local scope
        var innerlocalVar = 40;
        console.log("innerlocalVar: " + innerlocalVar + " globalVar: "+ globalVar + " localVar: "+ localVar);
    }
    //console.log("Accessing innerlocalVar: ", innerlocalVar);
    innerFunction();
}

//console.log("Accessing the localVar outside function: ", localVar);

testFunction();