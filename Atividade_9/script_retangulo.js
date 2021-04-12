let Retangulo = function (x, y) {
    
    this.base = x;
    this.altura = y;

    this.calculaArea = function (){
        return this.base * 2 + this.altura * 2;
    }
}

let largura = prompt('Digite a largura do retângulo: ');
let altura = prompt('Digite a altura do retângulo: ');

let retangulo = new Retangulo(largura, altura);

console.log(`A area do retangulo e: ${retangulo.calculaArea()}`);