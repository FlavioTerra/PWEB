
let numbers = [];

for(let cont = 0; cont < 3; cont++) {
    let num =  parseFloat(prompt("Digite um numero: "));
    numbers.push(num);
}

let maior = Math.max.apply(null, numbers);

document.write(maior);

