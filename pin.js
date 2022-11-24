function getPin () {
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pinString;
    }
    else{
        return getPin();
    }
}
document.getElementById('calculator').addEventListener('click', function (event) {
    const typedNumbersField = document.getElementById('typed-numbers');
    const previousTypedNumbers = typedNumbersField.value;
    const number = event.target.innerText;

    if (isNaN(number)) {
        if (number === 'C') {
            typedNumbersField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumbers.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumbersField.value = remainingDigits;
        }
    }
    else {
        const newTypedNumber = previousTypedNumbers + number;
        typedNumbersField.value = newTypedNumber;
    }
})

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})

document.getElementById("verify-pin").addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const displayPin = displayPinField.value;

    const typedNumbersField = document.getElementById('typed-numbers');
    const typedNumbers = typedNumbersField.value;
    
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if (displayPin === typedNumbers) {
        setTimeout(myGreeting, 1000)
        pinFailureMessage.style.display = 'none';
        pinSuccessMessage.style.display = 'block';
    }
    else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})

function myGreeting() {
    window.location.assign('main.html')
}