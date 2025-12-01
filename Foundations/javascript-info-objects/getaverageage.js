let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        total += element.age;
    }
    return total / arr.length;
}

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28