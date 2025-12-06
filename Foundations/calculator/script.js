const BUTTON_ZERO = document.getElementById('0');
const BUTTON_ONE = document.getElementById('1');
const BUTTON_TWO = document.getElementById('2');
const BUTTON_THREE = document.getElementById('3');
const BUTTON_FOUR = document.getElementById('4');
const BUTTON_FIVE = document.getElementById('5');
const BUTTON_SIX = document.getElementById('6');
const BUTTON_SEVEN = document.getElementById('7');
const BUTTON_EIGHT = document.getElementById('8');
const BUTTON_NINE = document.getElementById('9');
const BUTTON_ADD = document.getElementById('add');
const BUTTON_SUBTRACT = document.getElementById('subtract');
const BUTTON_MULTIPLY = document.getElementById('multiply');
const BUTTON_DIVIDE = document.getElementById('divide');
const BUTTON_EQUALS = document.getElementById('equals');
const BUTTON_CLEAR = document.getElementById('clear');
const SCREEN = document.getElementsByClassName('screen')[0];

let currentNumber = '';
let firstNumber = 0;
let secondNumber = 0;
let displayNumber = 0;
let currentOperator = null; // New variable to store "+", "-", etc.

function updateDisplay() {
   SCREEN.textContent = displayNumber.toString();
}

function calculate(n1, n2, operator) {
    // A helper function to perform the actual math
    switch (operator) {
        case "add":
            return n1 + n2;
        case "subtract":
            return n1 - n2;
        case "multiply":
            return n1 * n2;
        case "divide":
            // Handle division by zero
            if (n2 === 0) {
                alert("u silly goose! You can't divide by zero!");
                return 0; // Or some error value
            }
            return n1 / n2;
        default:
            return n2; // If no operator, just return the second number
    }
}

function operate(operation) {
    if (currentNumber !== '') {
        secondNumber = displayNumber; // secondNumber is the currently entered number
    }
    
    // Check if there is an existing operation to execute
    if (currentOperator !== null) {
        // Perform the pending calculation
        firstNumber = calculate(firstNumber, secondNumber, currentOperator);
        displayNumber = firstNumber;
        updateDisplay();
        
        // Reset secondNumber
        secondNumber = 0;
    } 
    // If it's the first operation, just set firstNumber
    else {
        firstNumber = displayNumber;
    }

    // Set the new operation (unless it's equals)
    if (operation !== "equals") {
        currentOperator = operation;
    } else {
        currentOperator = null; // Clear the operator after equals
    }
    
    currentNumber = ''; // Clear current number entry for the next input
}


function numberClick(number) {
    currentNumber += number.toString();
    displayNumber = parseFloat(currentNumber);
    updateDisplay();
}

// Even listeners from number buttons
BUTTON_ZERO.addEventListener('click', () => numberClick(0));
BUTTON_ONE.addEventListener('click', () => numberClick(1));
BUTTON_TWO.addEventListener('click', () => numberClick(2));
BUTTON_THREE.addEventListener('click', () => numberClick(3));
BUTTON_FOUR.addEventListener('click', () => numberClick(4));
BUTTON_FIVE.addEventListener('click', () => numberClick(5));
BUTTON_SIX.addEventListener('click', () => numberClick(6));
BUTTON_SEVEN.addEventListener('click', () => numberClick(7));
BUTTON_EIGHT.addEventListener('click', () => numberClick(8));
BUTTON_NINE.addEventListener('click', () => numberClick(9));

// Event listeners for operation buttons
BUTTON_ADD.addEventListener('click', () => operate("add"));
BUTTON_SUBTRACT.addEventListener('click', () => operate("subtract"));
BUTTON_MULTIPLY.addEventListener('click', () => operate("multiply"));
BUTTON_DIVIDE.addEventListener('click', () => operate("divide"));
BUTTON_EQUALS.addEventListener('click', () => operate("equals"));
BUTTON_CLEAR.addEventListener('click', () => {
    firstNumber = 0;
    secondNumber = 0;
    displayNumber = 0;
    updateDisplay();
});

