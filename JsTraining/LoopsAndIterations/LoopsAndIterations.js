/* for loop */

for (var count = 1; count < 5; count++){
    console.log("count is : ", count);
}


/* do - while */
var index = 1;
do {
    console.log("index is : ",index++);
    if(index == 4) break;
} while (index < 6);

/* while */
var counter = 0;
while(counter < 4){
    ++counter;
    if(counter == 3) continue;
    console.log("counter is : ", counter);
}

/* for/in loop */
var student = {
    name: 'Rohit',
    age: 25,
    id:1234
};

for(var property in student){
    console.log("key: " + property + "-value: " + student[property]);
}
/* Array, Map, Set, arguments */
var numbers = [1, 2, 3, 4];
for(var values of numbers){
    console.log(values);
}