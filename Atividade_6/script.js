
let score_1 = 0;
let score_2 = 0;

function escolhaAleatoria() {
    let num =  Math.floor(Math.random() * 3);

    if(num == 0) {
        return 'pedra';
    } else if(num == 1) {
        return 'papel';
    } else {
        return 'tesoura';
    }
}

// 0 = pedra            // 0 = empate
// 1 = papel            // 1 = perde
// 2 = tesoura          // 2 = vence

function funcPedra() {
    let maquina = escolhaAleatoria();
    if(maquina == 'pedra') {
        resul =  0;
    } else if(maquina == 'papel') {
        resul = 1;
    } else {
        resul = 2;
    }

    mostraResultado(resul, maquina);
}

function funcPapel() {
    let maquina = escolhaAleatoria();
    if(maquina == 'pedra') {
        resul = 2;
    } else if(maquina == 'papel') {
        resul = 0;
    } else {
        resul = 1;
    }

    mostraResultado(resul, maquina);
}

function funcTesoura() {
    let maquina = escolhaAleatoria();
    if(maquina == 'pedra') {
        resul = 1;
    } else if(maquina == 'papel') {
        resul = 2;
    } else {
        resul = 0;
    }

    mostraResultado(resul, maquina);
}

function mostraResultado(resultado, maquina) {
    switch (resultado) {
        case 0:
            alert(`Empate!!! Escolha do oponente: ${maquina}.`);
            break;
        case 1:
            alert(`Você Perdeu!!! Tente novamente. Escolha do oponente: ${maquina}.`);
            break;
        case 2:
            alert(`Parabéns Você venceu!!! Escolha do oponente: ${maquina}.`);
            break;
    }

    if(resultado == 2) {
        score_1++;
        document.getElementById('scorePlayer').innerHTML = score_1;
    } else if(resultado == 1){
        score_2++;
        document.getElementById('scoreOpponent').innerHTML = score_2;
    }
}