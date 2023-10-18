// Objetos Materiais
const carro = {
    cor: "azul",
    qtdPortas: 4,
    direcao: "Elétrica"
}

function estacionarCarro() {
    return "Para o carro!"
}

console.log(estacionarCarro())
console.log(carro.cor)
console.log(carro.qtdPortas)
console.log(carro.direcao)


const pessoa = {
    nome: "Ronaldo",
    sobreNome: "Fernando",
    idade: 33
}

function nomeCompleto() {
    return `${pessoa.nome} ${pessoa.sobreNome}`
}

console.log(nomeCompleto())
console.log(pessoa.nome)
console.log(pessoa.sobreNome)
console.log(pessoa.idade)


