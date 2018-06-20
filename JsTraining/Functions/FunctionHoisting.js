/* function definitions can be hoisted */

testFunction();

function testFunction(){
    console.log("testFunction called....");
}


//anotherFunc();

var anotherFunc = function(){
    console.log("anotherFunc called....");
}

anotherFunc();

/* function experessions cannot be hoisted */