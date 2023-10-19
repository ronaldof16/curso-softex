try {
    let a = parseInt(prompt("Digite o primeiro número: "))
    let c = a + b;
    let b = parseInt(prompt("Digite o segundo número: "))

    console.log(`A soma de ${a} com ${b} é ${c}`)
} catch(e) {
    console.log("A soma não foi realizada " + e)
}


