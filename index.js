// https://docs.npmjs.com/cli/v7/configuring-npm/package-json
// npm init 
// enter all
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = "11122233309";

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "88822233309";

const contaCorrenteRicardo = new ContaCorrente();
// cria qualquer coisa o gruda ele nesse objeto
// contaCorrenteRicardo.qualquerCoisa = 1000;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.agencia = 1001;

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.cliente = cliente2;
contaCorrenteAlice.agencia = 1002;

contaCorrenteRicardo.depositar(100);
contaCorrenteAlice.depositar(100);

contaCorrenteRicardo.transferir(50, contaCorrenteAlice);

console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);