const fibonacci = function(num1) {

    let num = parseInt(num1);
    if (num === 0) return 0;
    if (num === 1) return 1;
    if (num < 0) return "OOPS";
    
    let fib = [0, 1];
    for (let i = 2; i <= num; i++) {
        fib.push(fib[i - 2] + fib[i - 1]);
    }
    return fib[fib.length - 1];

};



// Do not edit below this line
module.exports = fibonacci;
