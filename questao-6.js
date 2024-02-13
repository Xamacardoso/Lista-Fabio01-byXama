// 6. Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)
import { question } from "readline-sync";

console.log("===== TRANSFORMAR KM/H EM M/S =====\n");


// Entrada
const vel_kmh = Number(question("Digite uma velocidade, em km/h, a ser convertida: ")) 

// Processamento
const vel_ms = vel_kmh / 3.6

// Saída
console.log(`\nVelocidade em km/h: ${vel_kmh.toFixed(2)} km/h`)
console.log(`Velocidade em m/s: ${vel_ms.toFixed(2)} m/s`)