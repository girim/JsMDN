/* Function declarations */

//console.log(square(16));

function square(number){
    return number * number;
}

console.log("Square of 4 is : ", square(4));

/* Passing argument by
    - value
    - reference */

function passByValue(parameter){
    parameter = 'Hello';
    console.log("paramter: ", parameter);
}

var param = "";
passByValue(param);

function modifyArray(array){
    array.push(9);
}

function passByReference(obj){
    obj[3] = 'c';
}

var obj = {
    1: 'a',
    2: 'b'
};

passByReference(obj);
console.log(obj);

var primeNumbers  = [1, 3, 5, 7];
modifyArray(primeNumbers);
console.log(primeNumbers);


/* Function expression */
var cube = function(number){
    return number * square(number);
}

console.log("cube of 5: ", cube(5));

function takeFuncAsArgs(f, number){
    return f(number);
}

console.log(takeFuncAsArgs(square, 10));
console.log(takeFuncAsArgs(cube, 8));


var factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1); 
};

console.log(factorial(3));
