class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;

    // https://github.com/tc39/proposal-class-fields#private-fields
    // atributo privado padrão node coloca #nomeVar
    // atributo privado padrão js coloca _nomeVar
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
            // console.log("\nSacado:",valor);
            // console.log("Saldo:",this._saldo);
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            // console.log("\nDepositado:",valor);
            // console.log("Saldo:",this.#saldo);
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = "11122233309";

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "88822233309";

const contaCorrenteRicardo = new ContaCorrente();
// cria qualquer coisa o gruda ele nesse objeto
// contaCorrenteRicardo.qualquerCoisa = 1000;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);