

function concatenate(delimiter) {
    var result = "";

    for(var index = 1; index < arguments.length; index++){
        result += arguments[index] + delimiter;
    }

    return result;
}

console.log(concatenate(',', 'c', 'c++', 'java', 'javaScript', 'python'));


function testFunction(){
    for(var args of arguments){
        console.log(args + " ");
    }
}

testFunction(1,2,3,4);