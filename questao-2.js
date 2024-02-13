// 2. Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.
import { question } from "readline-sync";

console.log('===== CONVERTER HORAS E MIN. PARA MINUTOS =====\n')

//Entrada
let input_horas = Number(question('Digite uma quantidade inteira de horas: '))
let input_minutos = Number(question(`... ${input_horas} horas e quantos minutos?: `))

//Processamento
const minutos = input_horas*60 + input_minutos

//Saída
console.log('\n')
console.log(`A quantidade de minutos que há no tempo escolhido é de ${minutos} minutos`)