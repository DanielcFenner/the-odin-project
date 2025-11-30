const removeFromArray = function(arr, ...args) {
    let newArray = arr;
    for (let i = 0; i < args.length; i++) {
        const element = args[i];
        console.log(element);

        newArray = newArray.filter(num => num !== element);
        
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
