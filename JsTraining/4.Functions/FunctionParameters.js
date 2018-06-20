
function testFunction_0(param){
    console.log("parameter passed: ", param);
    //console.log("second param: ", arguments[1]);
}
testFunction_0("green", "blue");

function testFunction_1(firstParam, secondParam){
    console.log("params passed are: ", firstParam, secondParam);
}
testFunction_1("red", "green");

/* default parameters */
function testFunction_2(first, second){
    console.log("first: ", first);
    console.log("second: ", second);
}

testFunction_2(10);

var second = 10;
function testFunction_3(first, second = 1){
    console.log("first: ", first);
    console.log("second: ", second);
    return first * second;
}

console.log("testFunc", testFunction_3(40));
console.log(testFunction_3(40, 20));

/* Rest parameters */
function testFunction_4(firstParam, ...restParams){
    console.log("firstParam: ", firstParam);
    console.log("restParams: ", restParams[0]);
}

testFunction_4(1, 2, 4, 6, 8);





