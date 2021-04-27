import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cc1 = new ContaCorrente();
cc1.cliente = new Cliente();
cc1.cliente.nome = "Ricardo";
cc1.cliente.cpf = 11122233309;
cc1.agencia = 1001;
cc1.depositar(1000);

const cc2 = new ContaCorrente();
cc2.cliente = new Cliente();
cc2.cliente.nome = "Alice";
cc2.cliente.cpf = 88822233309;
cc2.agencia = 1002;
cc2.depositar(3000);

let valor = 200;
cc1.transferir(valor, cc2);

console.log(cc1);
console.log(cc2);