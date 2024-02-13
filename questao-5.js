//5. Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).
import { question } from "readline-sync";

console.log("===== SOMA DE 3 NUMEROS =====\n")

//Entrada
let numero = Number(question('Digite um número qualquer de 3 dígitos: '))

//Processamento
let centena = Math.floor(numero / 100)
const resto = numero % 100
let dezena = Math.floor(resto / 10)
let unidade = numero % 10

const somatorio = centena + unidade + dezena;

//Saída

console.log('\n')
console.log(`>>> ${centena} + ${dezena} + ${unidade} = ${somatorio}`)