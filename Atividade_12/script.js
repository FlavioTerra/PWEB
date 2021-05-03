
function funcValidar() {

    let tamNome = document.form1.elements[0].value;
    let retornoNome = validaNome(tamNome);
    if(retornoNome) {
        alert(retornoNome);
    }

    let email = document.form1.elements[1].value;
    let retornoEmail = validaEmail(email);
    if(retornoEmail) {
        alert(retornoEmail);
    }

    let tamComentario = document.form1.elements[2].value;
    let retornoComentario = validaComentario(tamComentario);
    if(retornoComentario) {
        alert(retornoComentario);
    }

    let radioSim = document.getElementById('radioSim')
    let redioNao = document.getElementById('radioNao');
    let retornoPesquisa = validaPesquisa(radioSim, redioNao);
    if(retornoPesquisa) {
        alert(retornoPesquisa);
    } else {
        alert('Voce precisa responder a pesquisa')
    }
}

function validaNome (tamNome) {
    if(tamNome.length < 10) {
        return 'O nome precisa ter pelo menos 10 caracteres';
    } 
    return false;
}

function validaComentario (tamComentario) {
    if(tamComentario.length < 20) {
        return 'O comentário precisa ter pelo menos 20 caracteres';
    }
    return false;
}

function validaPesquisa () {
    if(radioSim.checked || radioNao.checked) {
        if(radioSim.checked) {
            return 'Que bom que você voltou a visitar esta página!';
        } else {
            return 'Volte sempre à esta página';
        }
    } 
    return false;
}

function validaEmail (email) {
    if(email.indexOf('.') == -1) {
        return 'Preencha campo E-MAIL corretamente!';
    }
    return false;
}