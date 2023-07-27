let a, b, c;

function calculadora(a, b, c) {
    if(c == 1) {
        return a + b;
    } else if(c == 2) {
        return a - b;
    } else if(c== 3) {
        return a * b;
    } else if(c == 4) {
        return a / b;
    } else {
        return 0;
    }
}

console.log(calculadora(2, 3, 3));