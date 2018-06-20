
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

var getCode = (function() {
    var apiCode = '0]Eal(eh&2';    // A code we do not want outsiders to be able to modify...
    
    return function() {
      return apiCode;
    };
})();
  
getCode();    // Returns the apiCode

/*  */
function celebrityID () {
    var celebrityID = 999;
    // We are returning an object with some inner functions
    // All the inner functions have access to the outer function's variables
    return {
        getID: function ()  {
            // This inner function will return the UPDATED celebrityID variable
            // It will return the current value of celebrityID, even after the changeTheID function changes it
          return celebrityID;
        },
        setID: function (theNewID)  {
            // This inner function will change the outer function's variable anytime
            celebrityID = theNewID;
        }
    }
}

var mjID = celebrityID (); // At this juncture, the celebrityID outer function has returned.
mjID.getID(); // 999
mjID.setID(567); // Changes the outer function's variable
mjID.getID(); // 567: It returns the updated celebrityId variable