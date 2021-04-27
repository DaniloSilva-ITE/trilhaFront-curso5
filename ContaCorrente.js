export class ContaCorrente{
    cliente;
    agencia;

    // https://github.com/tc39/proposal-class-fields#private-fields
    // atributo privado padrão node coloca #nomeVar
    // atributo privado padrão js coloca _nomeVar
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor > 0) this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}