/* function definitions can be hoisted */

testFunction();

function testFunction(){
    console.log("testFunction called....");
}

/* function experessions cannot be hoisted */
//console.log("anotherFunc: ", anotherFunc);
//notherFunc();
var anotherFunc = function(){
    console.log("anotherFunc called....");
}

anotherFunc();
