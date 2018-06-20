/* null primitive represents the intentional absence of the any object value */

function getVowel(str){
    var found = str.match(/[aeiou]/gi);
    
    if (found === null) {
        return 0;
    }
    
    //console.log("found: ", found);
    return found.length;
}

console.log(getVowel("sky"));
console.log(getVowel("addidas"));

console.log("typeof null is : ", typeof null);