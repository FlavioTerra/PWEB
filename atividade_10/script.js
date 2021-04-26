function carregaJanelaFechada() {
    let window = document.getElementById('janela');

    window.innerHTML = '<img id="imgJanela" width="350" src="./images/closedWindow.jpg" onmouseover="abreJanela()" onmouseout="fechaJanela()" onclick="quebraJanela()" />';
    document.getElementById('titulo').innerHTML = 'Abra a janela';
}

function abreJanela() {
    let window = document.getElementById('imgJanela');
    window.src = './images/openWindow.jpg';

    document.getElementById('titulo').innerHTML = 'Feche a janela';
}

function fechaJanela() {
    let window = document.getElementById('imgJanela');
    window.src = './images/closedWindow.jpg';

    document.getElementById('titulo').innerHTML = 'Abra a janela';
}

function quebraJanela() {
    let window = document.getElementById('imgJanela');
    window.src = './images/brokenWindow.jpg';

    document.getElementById('titulo').innerHTML = 'Janela quebrada';
}