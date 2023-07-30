let qtdVotosCandidato_X = 0;
let qtdVotosCandidadto_Y = 0;
let qtdVotosCandidadto_Z = 0;
let qtdVotosBranco = 0;
let qtdVotosNulo = 0;
let votar = true;

while(votar) {
    let voto = window.prompt("Digite seu voto: ");

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
  
    let continua = window.prompt("Deseja finalizar a votação? ");
    if(continua === "SIM" || continua === "sim") {
        votar = false;
    }
}

if(qtdVotosCandidato_X > qtdVotosCandidadto_Y && qtdVotosCandidato_X > qtdVotosCandidadto_Z) {
    window.alert("O candidato X venceu a eleição!");
} else if(qtdVotosCandidadto_Y > qtdVotosCandidadto_Z) {
    window.alert("O candidato Y venceu a eleição!");
} else if(qtdVotosCandidadto_Z > qtdVotosCandidadto_Y) {
    window.alert("O candidato Z venceu a eleição!");
} else {
    window.alert("Nenhum candidato obteve voto!")
}

window.alert(`O candidato X teve ${qtdVotosCandidato_X} votos.`);
window.alert(`O candidato Y teve ${qtdVotosCandidadto_Y} votos.`);
window.alert(`O candidato Z teve ${qtdVotosCandidadto_Z} votos.`);
window.alert(`A quantidade de votos brancos foi de: ${qtdVotosBranco} votos.`);
window.alert(`A quantidade de votos brancos foi de: ${qtdVotosNulo} votos.`);

