var arrayLegth = 5;
var array = new Array(arrayLegth);
console.log(array);

array = new Array(1,2,3,4,5);
console.log(array);

/* properites */
console.log("Array length: ", array.length);

/* Iterating over an array */
var color = ['red', 'green', 'blue'];
for(var index = 0; index < color.length; index++){
    console.log("Array element: ", color[index]);
}

/* Methods */
/* forEach */
color.forEach(function(element, index, array){
    console.log("element: " + element + " index: " + index + " array: " + array);
});

/* concat */
var odds = [1, 3, 5], evens = [2, 4, 6];
console.log("concat: ", odds.concat(evens));

/* join -returns string */
var fundamentals = ['Wind', 'Rain', 'Fire'];
console.log(fundamentals.join('+'));

/* push returns the index inserted*/
console.log(odds.push(7));
console.log(odds);

/* pop returns poped element*/
console.log(odds.pop());
console.log(odds);

/* shift- unshift */
console.log(fundamentals.shift());
console.log(fundamentals);
console.log(fundamentals.unshift('Wind'));
console.log(fundamentals);

/* reverse */
console.log(fundamentals.reverse());
console.log(fundamentals);

/* sort */
var sortFn = function(a, b) {
    if (a[a.length - 1] < b[b.length - 1]) return -1;
    if (a[a.length - 1] > b[b.length - 1]) return 1;
    if (a[a.length - 1] == b[b.length - 1]) return 0;
  }
console.log(fundamentals.sort(sortFn)); 

/* indexof */
console.log("Index of Fire", fundamentals.indexOf('Fire')); //returns index if found
console.log("Index of Fire", fundamentals.indexOf('Water'));  //returns -1 if not found

/* map */
var numbers = [1, 2, 3, 4];
var transformed = numbers.map(function(element, index, array){
    return element * element;
})

console.log("Transformed array: ", transformed);

/* filter */
numbers = [1, 2, 3, 4, 5, 6, 7];
var evenNumbers = numbers.filter(function(element, index, array){
    return (element % 2 === 0);
});
console.log("filter: ", evenNumbers);

/* reduce */
var sum = [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
});
console.log("sum is: ", sum);

/* every */
//numbers = [1,3,5,7];
var areAllOddNumbers = numbers.every(function(element, index, array){
    return (element % 2 !== 0);
})
console.log("areAllOddNumbers: ", areAllOddNumbers);

/* some */
numbers = [1, 2, 3, 5, 7];
var result = numbers.some(function(element, index, array){
    return (element % 2 == 0);
});
console.log("result of some: ", result);

