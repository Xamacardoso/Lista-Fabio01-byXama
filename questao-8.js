//8. Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.
import { question } from "readline-sync";

console.log("===== DIVISAO DA SOMA PELA SUBTRACAO =====\n")

//Entrada
const a = Number(question("A. Digite um numero qualquer para ser seu primeiro numero: "))
const b = Number(question("B. Agora digite um numero para ser seu segundo numero: "))

//Processamento
const resultado = (a+b)/(a-b)

//Saída
console.log(`\n Numero 1: ${a}\n Numero 2: ${b}`)


console.log(`\n ${a} + ${b}`)
console.log(` ------`)
console.log(` ${a} - ${b}`)
console.log(`\n Resultado >>> ${resultado}`)