import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const cc1 = new ContaCorrente(cliente1, 1001);
const cc2 = new ContaCorrente(cliente2, 1002);

cc1.depositar(1000);
cc2.depositar(1000);

let valor = 200;
cc1.transferir(valor, cc2);

console.log(cc1);
console.log(ContaCorrente.numDeContas);
//console.log(cc2);