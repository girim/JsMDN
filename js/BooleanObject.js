/* new Boolean([value])
    Boolean is initialized to false --> if value passed is 
    - nothing
    - 0
    - (-0)
    - false
    - Nan
    - null
    - undefined
    - "" (emptyString)
    
    Boolean is initialized to true --> All the objects except above values 
*/

/* All objects evaluates to 'true' in boolean context except,
    - undefined
    - null
*/

/* Below rule only applies to Boolean Object not primitives */
var x = new Boolean(false);
if(x){
    console.log("Boolean object x evaluates to 'true' ");
}

var xPrimitive =  false;
if(xPrimitive){
    console.log("xPritive is true");
}else{
    console.log("xPritive is false");
}

/* Creating Boolean objects with an initial value as false */
var boolean_nothing = new Boolean();
var boolean_zero = new Boolean(0);
var boolean_nzero = new Boolean(-0);
var boolean_undefined = new Boolean(undefined);
var boolean_null = new Boolean(null);
var boolean_false =  new Boolean(false);
var boolean_emptyString =  new Boolean('');

console.log("boolean_nothing: ", boolean_nothing.valueOf());
console.log("boolean_zero: ", boolean_zero.valueOf());
console.log("boolean_nzero: ", boolean_nzero.valueOf());
console.log("boolean_undefined: ", boolean_undefined.valueOf());
console.log("boolean_null: ", boolean_null.valueOf());
console.log("boolean_emptyString: ", boolean_emptyString.valueOf());
console.log("boolean_false: ", boolean_false.valueOf());

/* Creating Boolean objects with an initial value as true */
var boolean_true = new Boolean(true);
var boolean_falseStr =  new Boolean("false"); // false as string
var arr = [];
var boolean_anyObj =  new Boolean(arr);

console.log("boolean_true: ", boolean_true.valueOf());
console.log("boolean_falseStr: ", boolean_falseStr.valueOf());
console.log("boolean_anyObj: ", boolean_anyObj.valueOf());

/* Do not use a Boolean object to convert a non-boolean value to a boolean value. 
Instead, use Boolean as a function to perform this task: */
var x = Boolean(undefined); //using boolen function
console.log("value of x :", x);

var y  = new Boolean(undefined);
console.log("value of y: ", y);

