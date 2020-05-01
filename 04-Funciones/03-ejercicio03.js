/*********************
 * 
 * Calcular cuantos años le faltan a una persona para que se jubile.
 * Una persona se jubila a los 65 años.
 * Enviar como datos a la función su año de nacimiento y su nombre.
 */

function calcularAniosJubilacion(nombre, anioNacimiento) {
    var edad = 2019 - anioNacimiento
    var aniosParaJubilarse = 65 - edad
    console.log(`A ${nombre} le faltan ${aniosParaJubilarse} para jubilarse`)
}

calcularAniosJubilacion('Diego', 1980)