let nome = window.prompt("Digite o nome: ");
let ano = true;

while(ano) {
    let anoNascimento = parseInt(window.prompt("Digite o ano de nascimento"));
    let idade = 2022 -anoNascimento;
    if(anoNascimento >= 1922 && anoNascimento <= 2021) {
        window.alert("Nome: " + nome);
        window.alert("Idade: " + idade + " anos");
        ano = false;
    } else {
        window.alert("Digite um ano válido:")
    }
}