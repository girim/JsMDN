
console.log("Square of 4 is: ",square(4));  //Function hoisting will bring the func def up

function square(number) {
    return number * number;
}

console.log("Square of 8 is: ", square(8));

/* Pass by value --> All primitives are passed by value*/
function multiply(number){
    number = number * 10;
}

var count = 5;
console.log("count before: ", count);
multiply(count);
console.log("count after: ", count);

/* Pass by reference --> All 'Objcets' are passed by reference */
var car = {
    make: 'Audi',
    model: 'audi A6',
    year: 2018
};

function changeModel(obj){
    obj.model = 'audi A8';
}
console.log("Car before: ", car);
changeModel(car);
console.log("Car after: ", car);


/* Function expressions */
