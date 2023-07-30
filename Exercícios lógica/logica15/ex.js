let readline = require('readline-sync');
let qtdVotosCandidato_X = 0;
let qtdVotosCandidadto_Y = 0;
let qtdVotosCandidadto_Z = 0;
let qtdVotosBranco = 0;
let qtdVotosNulo = 0;
let votar = true;

while(votar) {
    let voto = parseInt(readline.question("Digite seu voto: "));
    console.log(typeof voto)
    while(typeof voto != "number") {
        console.log("Erro: é necessário digitar um número.");
        voto = readline.question("Digite seu voto: ");
        console.log(typeof voto)
    }


    if(voto === 889) {
        qtdVotosCandidato_X++;
    } else if(voto === 847) {
        qtdVotosCandidadto_Y++;
    } else if(voto === 515) {
        qtdVotosCandidadto_Z++;
    }else if(voto === 0) {
        qtdVotosBranco++;
        qtdVotosNulo++;
    } else {
        qtdVotosNulo++;
    }
    

    
  
    

    let continua = readline.question("Deseja finalizar a votação? ");
    if(continua === "SIM" || continua === "sim") {
        votar = false;
    }
}

if(qtdVotosCandidato_X > qtdVotosCandidadto_Y && qtdVotosCandidato_X > qtdVotosCandidadto_Z) {
    console.log("O candidato X venceu a eleição!");
} else if(qtdVotosCandidadto_Y > qtdVotosCandidadto_Z) {
    console.log("O candidato Y venceu a eleição!");
} else if(qtdVotosCandidadto_Z > qtdVotosCandidadto_Y) {
    console.log("O candidato Z venceu a eleição!");
} else {
    console.log("Nenhum candidato pbteve voto!")
}

console.log(`O candidato X teve ${qtdVotosCandidato_X} votos.`);
console.log(`O candidato Y teve ${qtdVotosCandidadto_Y} votos.`);
console.log(`O candidato Z teve ${qtdVotosCandidadto_Z} votos.`);
console.log(`A quantidade de votos brancos foi de: ${qtdVotosBranco} votos.`);
console.log(`A quantidade de votos brancos foi de: ${qtdVotosNulo} votos.`);



