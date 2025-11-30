const sumAll = function(a, b) {

    if (a < 0 || b < 0) return "ERROR";
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

    let sumOfAll = 0;
    let small = a <= b ? a : b
    let big = a >= b ? a : b

    for (let i = small; i <= big; i++) {

        sumOfAll += i;
    }

    return sumOfAll

};

sumAll(1, 5)


// Do not edit below this line
module.exports = sumAll;
