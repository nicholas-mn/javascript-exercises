const reverseString = function(string) {
    
    let output = ""

    for (i = string.length; i > 0; i--) {
        const stringLength = string.length;

        output += string.charAt(i - 1);
    }

    return output;
};



// Do not edit below this line
module.exports = reverseString;
