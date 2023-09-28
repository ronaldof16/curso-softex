let x = Number(prompt("Digite o primeiro número: "));
let y = Number(prompt("Digite o segundo número: "));
let operador = prompt("Digite o operador: ");
let resultado;
let sobra;


if(operador === "+") {
    resultado = x + y;
    document.write("O resultado da operação é: " + resultado);
} else if(operador === "-") {
    resultado = x - y;
    document.write("O resultado da operação é: " + resultado);
} else if(operador === "*") {
    resultado = x * y;
    document.write("O resultado da operação é: " + resultado);
} else if(operador === "/") {
    resultado = x / y;
    sobra = x % y;
    if(sobra !== 0) {
        document.write("O resultado da operação é: " + resultado.toFixed(0) + 
    " e tem resto " + sobra);
    } else {
        document.write("O resultado da operação é: " + resultado);
    } 
} else {
    document.write("O operador não é válido!");
}
    

