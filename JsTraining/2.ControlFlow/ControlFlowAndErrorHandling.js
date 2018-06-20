
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
} finally{
    console.log("Reached finally block");
}

console.log("some log here");


/* creating own exceptions */
function myException(message){
    this.message = message;
    this.name = 'MyException';
}

myException.prototype.toString = function(){
    return this.name + ": " + this.message + " ";
}

try {
    throw new myException("Operation Failed....");
} catch (error) {
    console.log(error);
}

/* Another example */
function getMonthName(month){
    month = month - 1;
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                  'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    if(months[month]) {
        return months[month];
    } else {
        throw 'InvalidMonthNo';
    }
}

try {
    var monthName = getMonthName(13);
} catch (error) {
    console.log(error);
}