
function Employee(){
    this.name = 'John',
    this.empId = 1234
}

function Engineer(){
    this.role = 'Engineer',
    this.empId = 0000
}

Engineer.prototype = new Employee();

var engineer = new Engineer();

console.log(engineer.name);
console.log(engineer.empId);
console.log(engineer.role);