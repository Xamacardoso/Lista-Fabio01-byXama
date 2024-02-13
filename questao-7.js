// 7. Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.
import { question } from "readline-sync";

console.log("===== SOMA E DIFERENÇA ENTRE NUMEROS =====\n")

//Entrada
const a = Number(question("A. Digite um numero qualquer para ser seu primeiro numero: "))
const b = Number(question("B. Agora digite um numero para ser seu segundo numero: "))
const c = Number(question("C. Perfeiro, agora insira um numero qualquer que será seu terceiro numero: "))

//Processamento
const a_mais_b =  a + b
const b_menos_c = b - c

//Saída
console.log(`\n Numero 1: ${a}\n Numero 2: ${b}\n Numero 3: ${c}`)
console.log(`\n Num1 + Num2 >>> ${a} + ${b} = ${a_mais_b}`)
console.log(`\n Num2 - Num3 >>> ${b} - ${c} = ${b_menos_c}`)