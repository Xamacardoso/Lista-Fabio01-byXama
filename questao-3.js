//3. Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
import { question } from "readline-sync";

console.log('===== CONVERTER MINUTOS PRA HORAS E MINS. =====\n')

//Entrada
let input_minutos = Number(question("Digite uma quantidade de minutos a ser convertida: "))

//Processamento
let horas = input_minutos/60 
let minutos = input_minutos %60

//Saída
console.log('\n')
console.log(`O tempo é de ${input_minutos} minutos.`)
console.log(`Esse tempo equivale a ${horas.toFixed(2)} e ${minutos} minuto(s)`)