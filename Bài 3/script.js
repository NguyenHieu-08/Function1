let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
function sum(a,b) {
    return a + b;
}

function printMessage(num1,num2) {
    num1 = +(num1.value);
    num2 = +(num2.value);
    if(num1 > num2) {
        alert('Số thứ 1 lớn hơn số thứ 2');
    }
    if(num1 <= num2) {
        alert('Tổng 2 số: ' + sum(num1,num2))
    }
}
