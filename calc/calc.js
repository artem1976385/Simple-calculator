let expression = '';

function appendToDisplay(value) {
    expression += value;
    document.getElementById('display').value = expression;
}

function clearDisplay() {
    expression = '';
    document.getElementById('display').value = '';
}

function operation(operator) {
    expression += operator;
    document.getElementById('display').value = expression;
}

function calculate() {
    try {
        let result = eval(expression);
        document.getElementById('display').value = result;
        expression = '';
    } catch (error) {
        document.getElementById('display').value = 'Ошибка';
    }
}