const removeFromArray = function (array, arrayRemove) {

    let newArray = [];
    arrayRemove = Array.prototype.slice.call(arguments, 1);

    for (const x in array) {

        if (arrayRemove.includes(array[x])) {
            continue
        } else {
            newArray.push(array[x])
        }

    }

    return newArray
};

module.exports = removeFromArray;
