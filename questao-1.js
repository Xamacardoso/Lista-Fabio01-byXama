//1. Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h.
import { question } from "readline-sync";

console.log("===== TRANSFORMAR M/S EM KM/H =====\n");


// Entrada
const vel_ms = Number(question("Digite uma velocidade, em m/s, a ser convertida: ")) 

// Processamento
const vel_kmh = vel_ms * 3.6

// Saída
console.log(`Velocidade em m/s: ${vel_ms.toFixed(2)} m/s`)
console.log(`Velocidade em km/h: ${vel_kmh.toFixed(2)} km/h`)
