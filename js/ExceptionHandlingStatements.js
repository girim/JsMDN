
function InValidMonthException(month) {
    this.message = "value passed is " + month;
    this.name = "InValidMonthException";
}

InValidMonthException.prototype.toString = function(){
    return this.name + ": Invalid month " + this.message;
}

function validateMonthName(month) {
    var monthNames = [ 'Jan', 'Feb', 'March', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    if(monthNames[month - 1]) {
        return monthNames[month - 1];
    } else {
        throw new InValidMonthException(month);
    }
}

try {
    validateMonthName(13);
} catch (error) {
    console.log(error.toString());
}