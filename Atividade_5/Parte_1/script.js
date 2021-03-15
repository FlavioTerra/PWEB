
let x = confirm('Voce gostaria de fazer o calculo da média?');

if(x) {
    let nome = prompt('Digite o nome do aluno: ');
    let nota1 = parseFloat(prompt('Digite a nota 1 do aluno ' + nome + ': '));
    let nota2 = parseFloat(prompt('Digite a nota 2 do aluno ' + nome + ': '));
    let nota3 = parseFloat(prompt('Digite a nota 3 do aluno ' + nome + ': '));

    media = (nota1 + nota2 + nota3) / 3;

    document.write('<h1>A media total do aluno ' + nome + ' e: ' + media.toFixed(2) + '</h1>');
}
