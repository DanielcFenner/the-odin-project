const palindromes = function (string) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz123456789";
    let newString = "";
    let newStringNotReversed = "";
    let lowerCaseString = string.toLowerCase();
    for (let i = lowerCaseString.length; i >= 0; i--) {
        const element = lowerCaseString[i];
        if (alphabet.includes(element)) {
            newString += element;
        }
    }

    for (let i = 0; i < lowerCaseString.length; i++) {
        const element = lowerCaseString[i];
        if (alphabet.includes(element)) {
            newStringNotReversed += element;
        }
    }

    
    return newStringNotReversed === newString;

};



// Do not edit below this line
module.exports = palindromes;
