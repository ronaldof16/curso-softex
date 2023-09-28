/* function calculadora1() {
    let a = Number(prompt("Digite o primeiro número: "));
    let b = Number(prompt("Digite o segundo número: "));
    let operador = prompt("Digite o operador: ");
    let resultado;

    if(operador === "+") {
        resultado = a + b;
        document.write(resultado);
    } else if(operador === "-") {
        resultado = a - b;
        document.write(resultado);
    } else if(operador === "*") {
        resultado = a * b;
        document.write(resultado);
    } else if(operador === "/") {
        resultado = a / b;
        document.write(resultado);
    } else {
        document.write("O operador não é válido!");
    }

}

calculadora1(); */

/* function calculadora2(a, b, c) {

    if(c === "+") {
        return a + b;
    } else if(c === "-") {
        return a - b;
    } else if(c === "*") {
        return a * b;;
    } if(c === "/") {
        return a / b;
    } else {
        return ("O operador não é válido!");
    } 
}

document.write(calculadora2(5, 3, "-")); */

let calculadora = (a, b, c) => {
    if(c === "+") {
        return a + b;
    } else if(c === "-") {
        return a - b;
    } else if(c === "*") {
        return a * b;;
    } if(c === "/") {
        return a / b;
    } else {
        return ("O operador não é válido!");
    } 
}

alert(calculadora(2, 3, "/"));

    

