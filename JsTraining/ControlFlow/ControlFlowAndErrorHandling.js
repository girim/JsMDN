
/* Block statement */
var variable = 10;
{
    let variable =  20;
}

console.log("Value of variable: ", variable);

/* Conditional statements if-else-elseif switch */
var condition;
if(condition){

}else{

}

if(condition){

}else if(condition){

}else if(condition){

}else{

}

/* falsy values 
    - false
    - null
    - undefined 
    - 0
    - NaN
    - "" (empty string)*/

if(false || null || undefined || 0 || NaN || ""){
    console.log("condition hit");
}


/* Switch */

var country = "India";
switch (country) {
    case 'USA':
        console.log("Currency used is Doller: ");
        break;
        
        case 'India':
        console.log("Currency used is Rupee: ");
        break;
        
        case 'Finland':
        case 'UK':
        console.log("Currency used is Euro: ");
        break;

    default:
        console.log("no currency found");
        break;
}

/*  try-catch-finally*/
//throw new ReferenceError("out of range");

try {
    throw new ReferenceError("out of range");
} catch (error) {
    console.log(error.message);
} finally()

console.log("some log here");