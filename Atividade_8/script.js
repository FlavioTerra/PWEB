const ra = '0030481921035';
const nome = 'Flavio Moreira Terra';

let alunoObjTipo1 = {
    RA: ra,
    NOME: nome,

    chamafuncao() {
        console.log(`RA: ${this.RA} - Nome: ${this.NOME}`);
    }
};

alunoObjTipo1.chamafuncao();

let alunoObjTipo2 = new Object();

alunoObjTipo2.RA = ra;
alunoObjTipo2.NOME = nome;

console.log(`RA: ${alunoObjTipo2.RA } - Nome: ${alunoObjTipo2.NOME}`);

let alunoObjTipo3 = {};

alunoObjTipo3['RA'] = ra;
alunoObjTipo3['NOME'] = nome;

console.log(`RA: ${alunoObjTipo3.RA } - Nome: ${alunoObjTipo3.NOME}`);