function getPin() {
    const pin = Math.round(Math.random() * 10000 - 1);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function kyePad(number) {
    const inputField = document.getElementById('inputNum');
    if (isNaN(number) == false) {
        const preNum = inputField.value;
        const newNum = preNum + number;
        inputField.value = newNum;
    }
    else if (number == "C") {
        inputField.value = '';
    }
    else {
        inputField.value = inputField.value.substring(0, inputField.value.length - 1);
    }
}

document.getElementById('generate-btn').addEventListener('click', function () {
    const pin = getPin();
    const generateInput = document.getElementById('generate-num');
    generateInput.value = pin;
})

document.getElementById('calculator').addEventListener('click', (event) => {
    const num = event.target.innerText;
    kyePad(num)
})

document.getElementById('submit').addEventListener('click', function () {
    const pinInput = document.getElementById('generate-num').value;
    const inputField = document.getElementById('inputNum').value;

    const correct = document.getElementById('correct');
    const wrong = document.getElementById('wrong');
    if (pinInput == inputField) {
        correct.style.display = 'block';
        wrong.style.display = 'none';
    }
    else {
        correct.style.display = 'none';
        wrong.style.display = 'block';
    }

})

