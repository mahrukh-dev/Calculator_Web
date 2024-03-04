document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.querySelector('input[name="calculator"]');
    const buttons = document.querySelectorAll('.Number, .Operator, .Equal, .Clear');
    let currentInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            
            if (value === '=') {
                calculateResult();
            } else if (value === 'C') {
                clearInput();
            } else {
                appendToInput(value);
            }
        });
    });

    function calculateResult() {
        try {
            inputField.value = eval(currentInput);
        } catch (error) {
            inputField.value = 'Error';
        }
        currentInput = '';
    }

    function clearInput() {
        inputField.value = '';
        currentInput = '';
    }

    function appendToInput(value) {
        currentInput += value;
        inputField.value += value;
    }
});
