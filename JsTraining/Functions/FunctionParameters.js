
/* function overloading */

function testFunction_1(param){
    console.log("parameter passed: ", param);
    console.log("second param: ", arguments[1]);
}

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

function testFunction_3(first, second = 1){
    return first * second;
}

console.log(testFunction_3(40));
console.log(testFunction_3(40, 20));

/* Rest parameters */
function testFunction_4(firstParam, ...restParams){
    console.log("firstParam: ", firstParam);
    console.log("restParams: ", restParams);
}

testFunction_4(1, 2, 4, 6, 8);





