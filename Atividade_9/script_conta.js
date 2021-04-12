function Conta() {
    this.nomeCorrentista;
    this.banco;
    this.numeroConta; 
    this.saldo;

    this.setNomeCorrentista = (value) => {
        this.nomeCorrentista = value;
    }

    this.getNomeCorrentista = () => {
        return this.nomeCorrentista;
    }

    this.setBanco = (value) => {
        this.banco = value;    
    }

    this.getBanco = () => {
        return this.banco;
    }

    this.setNumeroConta = (value) => {
        this.numeroConta = value;
    }

    this.getNumeroConta = () => {
        return this.numeroConta;
    }

    this.setSaldo = (value) => {
        this.saldo = value;
    }

    this.getSaldo = () => {
        return this.saldo;
    }
}

function Corrente() {
    this.saldoEspecial;

    this.setSaldoEspecial = (value) => {
        this.saldoEspecial = value;
    }

    this.getSaldoEspecial = () => {
        return this.saldoEspecial;
    }
}

function Poupanca() {
    this.juros;
    this.dataVencimento

    this.setJuros = (value) => {
        this.juros = value;
    }

    this.getJuros = () => {
        return this.juros;
    }

    this.setDataVencimento = (value) => {
        this.dataVencimento = value;    
    }

    this.getDataVencimento = () => {
        return this.dataVencimento;
    }
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

ncontaCorrente = new Corrente();
ncontaPoupança = new Poupanca();

ncontaCorrente.setNomeCorrentista('Cristiano Ronaldo');
ncontaCorrente.setBanco('Santander');
ncontaCorrente.setNumeroConta(1010);
ncontaCorrente.setSaldo(10000);
ncontaCorrente.setSaldoEspecial(50);

ncontaPoupança.setNomeCorrentista('Garrincha');
ncontaPoupança.setBanco('Caixa');
ncontaPoupança.setNumeroConta(2020);
ncontaPoupança.setSaldo(5000);
ncontaPoupança.setJuros(5);
ncontaPoupança.setDataVencimento(new Date(2021, 10, 7));

console.log('CONTA CORRENTE');
console.log(`Nome Correntista: ${ncontaCorrente.getNomeCorrentista()}`);
console.log(`Banco: ${ncontaCorrente.getBanco()}`);
console.log(`Numero da conta: ${ncontaCorrente.getNumeroConta()}`);
console.log(`Saldo: ${ncontaCorrente.getSaldo()}`);
console.log(`Saldo especial: ${ncontaCorrente.getSaldoEspecial()}`);

console.log('CONTA POUPANÇA');
console.log(`Nome Correntista: ${ncontaPoupança.getNomeCorrentista()}`);
console.log(`Banco: ${ncontaPoupança.getBanco()}`);
console.log(`Numero da conta: ${ncontaPoupança.getNumeroConta()}`);
console.log(`Saldo: ${ncontaPoupança.getSaldo()}`);
console.log(`Juros: ${ncontaPoupança.getJuros()}%`);
console.log(`Data Vencimento: ${ncontaPoupança.getDataVencimento()}`);
