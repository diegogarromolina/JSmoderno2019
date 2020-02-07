// Ejercicio de codificación
// Se tienen los siguientes datos:

var pesoLuis = 72
var alturaLuis = 1.72

var pesoCarlos = 89
var alturaCarlos = 1.75

/*
  Utilicar la siguiente fórmula para calcular el IMC (Indice de masa corporal) de Luis y Carlos,
  IMC = peso del individuo / altura al cuadrado. Luego comparar e indicar si el IMC de Carlos es
  superior al de Luis.
*/

// Solución

imcLuis = pesoLuis / alturaLuis**2
imcCarlos = pesoCarlos / alturaCarlos**2

var comparacion = imcCarlos > imcLuis

console.log(`¿El IMC de Carlos es superior al de Luis?: ` + comparacion)
console.log('IMC de Carlos: ' + imcCarlos)
console.log('IMC de Luis: ' + imcLuis)