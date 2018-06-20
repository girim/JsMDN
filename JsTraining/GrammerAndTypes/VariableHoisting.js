
//var x;
console.log("value of variable x before: ", x);
var x = 10;

console.log("value of variable x after: ", x);


var y; //initialized with value 'undefined'
y = 10; // Assign value 10 to y


var name = "someName";

(function(){
    console.log("name: ", name);
    var name = "Stephan";
    console.log("name: ", name);
})()

/* cannot do same thing with let - does not support variable hoisting */
//console.log("value of z: ", z);
//let z = 4;
