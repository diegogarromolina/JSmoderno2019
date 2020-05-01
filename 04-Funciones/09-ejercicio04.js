/******************
 * Ejercicio 04
 * Implementar una función que nos permita evaluar el porcentaje de respuestas
 * positivas y negativas de un examen. La función debe recibir el nombre y la 
 * cantidad de respuestas positivas y negativas
 * 
 * La función debe calcular el porcentaje que representa cada tipo de respuesta,
 * en una base de 100 preguntas.
 * 
 * De las respuestas positivas se define el score de la persona como sigue:
 * A(> 90%), B(70% - 89%), C(45% - 69%), D(<45%)
 */

function imprimirInfo(nombre, nota) {
    console.log(`La nota de ${nombre} es: ${nota}`)
}

function evaluacion(nombre, positivas, negativas) {
    var totales = positivas + negativas
    var score = (positivas / totales) * 100

    if (score >= 90) {
        imprimirInfo(nombre, 'A')
    } else if (score >= 70) {
        imprimirInfo(nombre, 'B')
    } else if (score >= 45) {
        imprimirInfo(nombre, 'C')
    } else {
        imprimirInfo(nombre, 'D')
    }
}

evaluacion("Diego Garro", 35, 5)