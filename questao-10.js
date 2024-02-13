//10. Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.
import { question } from "readline-sync";

console.log('===== QUOCIENTE E RESTO DE DOIS NUMEROS =====\n')

//Entrada
let dividendo = Number(question(" Digite um número que a ser dividido: "))
let divisor = Number(question(" Esse número será dividido por: "))

//Processamento
const quociente = Math.floor(dividendo/divisor)
const resto = dividendo%divisor

//Saída
console.log(`\n Dividendo: ${dividendo}\n Divisor: ${divisor}\n`)
console.log(`  ${dividendo}  \n-----  =  ${quociente} \n  ${divisor}  \n`)
console.log(`O resto é ${resto}`)