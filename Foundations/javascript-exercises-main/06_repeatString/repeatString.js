const repeatString = function(inputString, num) {
    if (num < 0) {
        return "ERROR"
    }

    let newString = "";

    for (let index = 0; index < num; index++) {
        newString += inputString;
        
    }

    return newString;

};

// Do not edit below this line
module.exports = repeatString;
