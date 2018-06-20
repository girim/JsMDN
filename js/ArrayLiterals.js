/* 1. Array literals */

var emptyArray = [];

var teams = ['Germany', 'France', 'spain'];
console.log(teams);
console.log(typeof teams);

console.log(teams[0])
console.log(teams[1])
console.log(teams[2])
console.log(teams[3])

/* Use comma's to define the missing elements */
var groupA = ['Russia', , 'SaudiArabia'];
console.log(groupA);
console.log(groupA[1]);
console.log("size of groupA: ", groupA.length);

var groupB = [, "Argentina", "Iceland"];
console.log(groupB);
console.log(groupB[0]);
console.log("size of groupB: ", groupB.length);

var groupC = ['Germany', 'Mexico', ]  //single ',' at the end 
console.log(groupC);
console.log("size of groupC: ", groupC.length);

var groupD = ['Brazil', 'Chile',,]   //double ',' at the end
console.log(groupD);
console.log("size of groupD: ", groupD.length);
