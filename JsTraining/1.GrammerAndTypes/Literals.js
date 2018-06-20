/* You use literals to represent values in JavaScript.
 These are fixed values, not variables, that you literally provide in your script */

/* - Array Literals
   - Boolean Literals
   - Floating point Literals
   - Integers
   - Object Literals
   - String Literals
   - Regex Literals */

/* Array literals */
var countries = ['USA', 'Russia', 'India'];
console.log("country: ", countries[0]);
console.log("country: ", countries[1]);
console.log("country: ", countries[2]);
//console.log("country: ", countries[3]);
console.log(countries.length);

var langs = ['English', 'French', ,'Hindi'];
console.log(langs[2]);

langs = ['English', 'French', ,'Hindi',]
console.log(langs.length);

langs = ['English', 'French', ,'Hindi', ,]
console.log(langs.length);

langs = [,'English', 'French', ,'Hindi', ,]
console.log(langs.length);

/* Boolean */
var okay = true, notOkay = false;

if(true){
    console.log("Execute this line");
}

/* Numeric literals
    - Decimal
    - Octal
    - Hex
    - Binary */

var decimal = 1234;
var octal = 01737; //o02737
var hex = 0xFFA, otherForm = 0xff;
var bin = 0b0100, bin2 = 0B100;

/* Floating point literal */
/* [(+|-)][digits][.digits][(E|e)[(+|-)]digits] */


/* Object Literals */
var book = {
    title: 'The Mist',
    author: 'Stephan King',
    year: 1980
};

/* String literals */
var one = "one";
var two = '2';
var str = 'some text here';

/* string template literals */
var templateStr = `this is string template literal.
                    another type of string literal`;

var id = 444;
var str = `The id is ${id}`;
console.log(str);
