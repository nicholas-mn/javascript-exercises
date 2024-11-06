const removeFromArray = function(array, arrayRemove) {
    
    newArray = []

    for (const x of array) {
        
        if (x === arrayRemove) {
            continue
        } else {
        
        newArray.push(x)
        }
    }

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
