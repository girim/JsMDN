
/* String Objects 
    var str = new String()*/

var hello = new String('Say Hello!');
console.log("hello: ", hello.toString());

/* Properties
- length */
console.log("length of hello: ", hello.length);

             /* 012345678901234567890123456890123456789012345 */
var sentence = 'The quick brown fox jumped over the lazy dog.The dog barked.';
/* Methods */
/*  charAt() - Return the character at the specified position in string.*/
console.log("character at the position 4 is : ", sentence.charAt(4));   //start's from index 0

/* indexOf, lastIndexOf */
console.log("index of substring 'fox' is: ", sentence.indexOf('fox'));
console.log("last index of substring 'dog' is: ", sentence.lastIndexOf('dog'));  //matches last occurence

/* startsWith, endsWith, includes */
console.log("Is sentence start's with 'The'? ", sentence.startsWith('The'));
console.log("Is sentence end's with '.'? ", sentence.endsWith('.'));
console.log("Is sentence includes 'lazy'? ", sentence.includes('lazy'));

/* concat */
var hello = 'Hello', js = 'JavaScript', space = ' ', end = '!';
var fullString = hello.concat(space, js, end);  //can be 'n' number of strings
console.log("fullString: ", fullString);

/* split */
var pieces = sentence.split(' '); //space as delimiter
console.log("split: ", pieces);

var line = 'Jan,Feb,Mar,Apr';
console.log("split: ", line.split(','));
console.log("split char wise: ", pieces[1].split(''));

/* substring */
var mz =  "Mozilla";
console.log("substring: ", mz.substring(1, 3)); //start index = 1, end = 3 end

/* trim  - removes whitespace from both ends*/
var sayHello = " Hello JS! ";
console.log(sayHello.trim());

