const leapYears = function(year) {

    if (year % 100 === 0) {
        if (year % 400 === 0) {return true}
        return false
    } 

    if (year % 4 === 0) {
        return true
    }
    
    return false
};

console.log(leapYears(2000))

// Do not edit below this line
module.exports = leapYears;
