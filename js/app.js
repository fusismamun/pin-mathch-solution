// Pin genarate 
function pinHandelar (){
    const pin = Math.round(Math.random()* 10000);
    const pinSting = pin + '';
    if(pinSting.length == 4){
        return pin;
    }
    else{
        return pinHandelar();
    }
}
function genaretPin() {
    const pin = pinHandelar();
    document.getElementById('display-pin').value = pin;
}
// Type Keypad with even bubble 

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-number');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});
// Varify section
function varifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typeNumber = document.getElementById('typed-number').value;
    const successMessage = document.getElementById('notify-success');
    const failMessage = document.getElementById('notify-fail');
    if(pin == typeNumber){
        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    }
    else{
        failMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}