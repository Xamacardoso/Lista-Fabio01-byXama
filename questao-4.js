// 4. Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).
import { question } from "readline-sync";

console.log("===== CONVERSOR DE DÓLAR($) PARA REAL(R$) =====\n")

//Entrada
let cotDolar = Number(question("Defina um valor para a cotação do dólar: "))
let valDolar = Number(question("Agora, defina um valor em dólares para ser convertido em Real(R$): "))

//Processamento
let valReal = cotDolar * valDolar

//Saída

console.log('\n')
console.log(`O valor de $${valDolar.toFixed(2)} dólares é de R$${valReal} reais `)

