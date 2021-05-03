let site = 'http://www.fatecsorocaba.edu.br/';

function funcAbrirPopup(elemento) {
    let curso = elemento.options[elemento.selectedIndex].text;
    if (window.confirm(`Abrir janela com informações sobre o curso de ${curso}?`)) {
        let curso = elemento.value;
        window.open(site + curso, 'PopUp', 'width=600, height=300');
    }
}