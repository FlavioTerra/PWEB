function transformarMaiusculas() {

    if(document.getElementById('checkMaiusculas').checked == true) {
        let textoMaiusculo = document.getElementById('inputTexto').value.toUpperCase();
        document.getElementById('inputTexto').value = textoMaiusculo;
    }
}

function transformarMinusculas() {
    
    if(document.getElementById('checkMinusculas').checked == true) {
        let textoMinusculo = document.getElementById('inputTexto').value.toLowerCase();
        document.getElementById('inputTexto').value = textoMinusculo;
    }
}