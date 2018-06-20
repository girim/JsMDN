
function loop(x){
    if(x >= 3)
        return;

    loop(x + 1);
    console.log('x:' ,x);
}

loop(0);

function foo(i) {
    if (i < 0)
      return;
    console.log('begin: ' + i);
    foo(i - 1);
    console.log('end: ' + i);
  }
foo(3)