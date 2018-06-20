/* Block statements */

var x = 0;

while(x < 10) {
    ++x;   //Block statement
}

console.log(x);

if(true){
    //var x = 0;
    let x = 0;
}

console.log(x);

/* Following values evaluates to false in conditions
    - false
    - null
    - 0
    - undefined
    - NaN
    - "" (empty string) */

if (!false) {
    console.log("false evaluates to 'false' in condition statements");
}

if(!null) {
    console.log("null evaluates to 'false' in condition statements")
}

if(!"") {
    console.log("\"\" evaluates to 'false' in condition statements");
}

if(!NaN){
    console.log("NaN evaluates to 'false' in condition statements");
}

if(!undefined){
    console.log("undefined evaluates to 'false' in condition statements");
}

/* if-else-if */

var value = 0;
if(value === 1) {
    console.log("Value is --> 1");
}else if (value === 0){
    console.log("Value is --> 0");
}else{
    console.log("Value is --> ", value);
}

team  = "Germany";
switch (team) {
    case 'Germany':
            console.log("Germany is in Group A ....");
        break;

    case 'Argentina':
            console.log("Argentia is in Group B ....");
        break;
    
    case 'Brazil':
            console.log("Brazil is in Group C ....");
        break;

    case 'Portugal':
            console.log("Portugal is in Group D ....");
        break;
    
    default:
            console.log("Team is not participating in WC 2018");
        break;
}

