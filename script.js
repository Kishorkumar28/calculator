function addToDisplay(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        alert("Invalid expression");
    }
}


function clearDisplay() {
    document.getElementById('result').value = '';
}

function memoryClear() {
    localStorage.clear();
}


document.addEventListener('keydown', function(event) {
    if ((event.key >= '0' && event.key <= '9') ) {

        addToDisplay(event.key);
    } else if (event.key === 'Enter') {

        calculate();
    } else if (event.key === 'Backspace') {

        clearDisplay();
    } else {
        alert("Only numbers are allowed");
    }
});