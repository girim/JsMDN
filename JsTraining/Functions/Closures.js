
function outerFunction(x){
    function innerFunction(y){
        return x + y;
    }

    return innerFunction;
}

var innerFunc = outerFunction(5);
console.log(innerFunc(8));
console.log(innerFunc(1));
console.log(innerFunc(0));

console.log(outerFunction(3)(8));

function A(x){
    function B(y){
        function C(z){
            console.log("sum:", x + y + z);
        }
        C(1);
    }
    B(2);
}
A(1);


function showFullName(firstName, secondName){
    var prefix = "Full Name is : ";

    function getFullName(){
        return prefix +  " " + firstName + " " + secondName;
    }

    return getFullName();
}

console.log(showFullName("Albert", "Einstein"));
