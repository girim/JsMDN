/* A string literal is the sequence of 0 or more characters
    enclosed in "" or '' */

var string_1 = "Russia";
var string_2 = 'France';
var string_3 = ''; // ""
var string_4 = "first line \nsecond line";

console.log(string_1);
console.log(string_2);
console.log(string_3);
console.log(string_4);

/* We can use any of the string methods on string literal also */
console.log("India".length); /* it creates a temp string object */
console.log("India".indexOf('i'));

/* Template literals (string interpolation) */

var templateLit  = `In Javascript \n is a line feed`;
console.log(templateLit);

var team = "Russia";
var group = "A";
var msg = `The ${team} is in group ${group}`;
console.log(msg);

/* Escape the Quotation mark */
var quote = "Quote is \"The misfits\" in the world";
console.log(quote);

var str = "this string \
is broken \
across multiple \
lines";
console.log(str);

/* Template strings allows multiline strings */
var poem = `Roses are red
Violets are blue.
sugar is sweet,
and so is js`

console.log(poem);
