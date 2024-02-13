//Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).
import { question } from "readline-sync";

console.log("===== NUMEROS EM ORDEM INVERSA =====\n")

//Entrada
let num1 = Number(question("Digite um número: "))
let num2 = Number(question("Agora digite outro número: "))

//Saída
console.log(`\n A ordem inversa desses números é: (${num2},${num1})`)