const sumAll = function(value1, value2) {

    console.log(typeof(value1))
    let sum = 0

    if (value1 < 1 || value2 < 1) {
        return "ERROR"
    } else if (typeof(value1) !== "number" || typeof(value2) !== "number") {
        return "ERROR"
    } else if (!isInt(value1) || !isInt(value2)) {
        return "ERROR"
    }

    if (value1 < value2) {
        for (i = value1; i <= value2; i++) {
            sum += i
        }
    } else if (value1 > value2) {
        for (i = value2; i <= value1; i++) {
            sum += i
        }
    } 

    return sum

};

// Didn't know Number.isInteger() was a thing before checking solutions.. damn
function isInt(number) {
    
    return (number === Math.floor(number))

}

console.log(isInt(2))

// console.log(sumAll(1, 2))

// Do not edit below this line
module.exports = sumAll;
