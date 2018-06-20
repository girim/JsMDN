/* only function defenitions are Hoisted not function expressions */

someFunction();

function someFunction(){
    console.log("this is someFunction ....");
}

/* 
    Above code will be re-arranged as,
    
    function someFunction(){
        console.log("this is someFunction ....");
    }

    someFunction();
 */


try {
    anotherFunction();
     /* Below is the function expression */
     var anotherFunction =  function(){
         console.log("this is function expression");
     }
 } catch (error) {
     console.log("TypeError: ", error.message);
 }