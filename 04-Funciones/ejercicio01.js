
// Función que convierte de grados Fahrenheit a Celcius
// 32°F = 0°C, 68°F = 20°C
// C = (F - 32) * 5/9

function fahrenheit2celcius(gradoF) {
    var gradoC = (gradoF - 32) * 5 / 9
    return gradoC
}

var temperatura01 = fahrenheit2celcius(32)
var temperatura02 = fahrenheit2celcius(68)

console.log(temperatura01)
console.log(temperatura02)