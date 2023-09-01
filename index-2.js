const resultElement = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons button');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

let currentInput = '';

function calculate() {
    try {
        const result = eval(currentInput);
        resultElement.textContent = result;
    } catch (error) {
        resultElement.textContent = 'Error';
    }
}

function handleButtonClick(event) {
    const buttonValue = event.target.textContent;

    if (buttonValue === '=') {
        calculate();
    } else if (buttonValue === 'C') {
        currentInput = '';
        resultElement.textContent = '0';
    } else {
        currentInput += buttonValue;
        resultElement.textContent = currentInput;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    resultElement.textContent = '0';
});

const inputField = document.getElementById('result');
const clearButtonLetter = document.getElementById('clearButtonLetter');

clearButton.addEventListener('click', () => {
    const inputValue = inputField.value;
    inputField.value = inputValue.slice(0, -1); // Remove the last character
});

