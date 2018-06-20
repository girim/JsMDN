
/* for loop */
for(var step = 0; step <= 4; step++) {
    console.log("For loop iteration: %s ", step);
}

var count = 0;
for(; count <= 2; count++) {
    console.log("For loop count: %s ", count);
}

var index = 0;
for(; index < 2 ;) {
    console.log("For loop iteration: %s ", index);
    index++;
}

/* do-while */
var counter = 0;
do{
    ++counter;
    console.log(counter);
}while(counter < 1);

/* while */
var x = 0;
while(x < 4) {
    if (x === 2){
        ++x;
        continue;  /* skip the below code when x==2 */
    }
    console.log("Value of x: %s ", x);
    if (x === 3){
        break;
    }
    ++x;
}

/* for .... in */
var car = {
    maker: 'Bugatti',
    model: 1232,
    color: 'orange'
};

for(var property in car){
    console.log("key: " + property + " , value: " + car[property]);
};

var array = [00,11,22,33];
for(var pr of array){
    console.log(pr);
}