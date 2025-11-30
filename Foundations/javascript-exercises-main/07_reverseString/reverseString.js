const reverseString = function(inputString) {
    let newString = "";
    for (let index = inputString.length - 1; index >= 0; index--) {
        const element = inputString[index];
        newString += element;
        
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
