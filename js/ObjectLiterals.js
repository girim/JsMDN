
var sales = 'Toyota';

function carType(name) {
    if(name === 'Audi') {
        return "Audi";
    }else {
        return "sorry ..We don't sell " + name + " here ....";
    }
}

var car = {
    myCar : 'Saturn',
    getCar : carType,
    special :  sales
};

console.log(car.myCar);
console.log(car.getCar('Audi'));
console.log(car.special);

var employee = {
    name: 'someName',
    empId: 23429323,
    skills: {
        1: 'c',
        2: 'c++',
        3: 'Js'
    }
};

console.log(employee);
console.log(employee.name);
console.log(employee.skills[3]); //Nemuric keys should be accessed using []
