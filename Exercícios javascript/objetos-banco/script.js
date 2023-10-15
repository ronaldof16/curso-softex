let banco = {
    conta: 2526,
    saldo: 1500,
    tipo: "conta corrente",
    agencia: 6528
}
    
function mostrarSaldo() {
    return banco.saldo
}

function depositar(valor) {
    return banco.saldo += valor;
}

function sacar(valor) {
    return banco.saldo -= valor;
}

function numeroConta() {
    return banco.conta
}

alert(mostrarSaldo());
alert(depositar(150));
alert(sacar(550));
alert(numeroConta());

