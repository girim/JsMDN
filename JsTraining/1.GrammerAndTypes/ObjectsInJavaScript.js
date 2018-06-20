/* Object : An Object is a unordered list of primitive data types, 
   stored as name-value(key-value) pair.
   property : Each item in the Object(key-value pair) is called property,
   if value is a function then item is called 'method'
*/

/* A Sample JS Object */
var engineer = {
    name: "Steve",
    empId: 284723,
    skills: {
        1: "C",
        2: "C++",
        3: "Java",
        4: "JavaScript"
    },

    printDetails : function(){
        console.log("{ name : " + this.name + " empId: " + this.empId + " }");
    }
};

/* 4 Ways of creating the Objects in JS 
    1. Object Literal
    2. Object Constructor
    3. Constructor Pattern
    4. Prototype Pattern*/

console.log(engineer);

/* Accessing the property of an Object
 1. Dot notation
 2. Bracket notation */

console.log(engineer.name); //dot notation
console.log(engineer.empId);
console.log(engineer.skills[1]);

console.log(engineer["name"]);   //Bracket notation
console.log(engineer["skills"][2]);  


/* 2. Object constructor */
var author = new Object();
author.firstName = "Stephan"
author.lastName = "King"

console.log(author);

/* 3. Constructor Pattern */
function Book(title, author, numberOfCopiesSold, price){
    this.title = title;
    this.author = author;
    this.numberOfCopiesSold = numberOfCopiesSold;
    this.price = price;

    this.getISBNNumber = function(){
        return 0xfffff;
    }
};

var textBook = new Book("JS Good Parts", 'Douglas', 900000, 100);
console.log(textBook);
console.log(textBook.getISBNNumber());
console.log(textBook.title);

/* 4. Prototype Pattern */

function Car(){

};
Car.prototype.model = "Audi Q8";
Car.prototype.company = "Audi";
Car.prototype.year = 2011;
Car.prototype.showRegNumber = function(){
    return 0xfbffb;
}

var myCar = new Car();
console.log(myCar.model);
console.log(myCar.year);