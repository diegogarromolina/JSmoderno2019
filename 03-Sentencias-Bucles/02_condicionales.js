
var nombre = 'Pablo'
var edad = 61

if (edad < 12) {
    console.log(nombre + ' es un niño.')
} else if ((edad >= 12) && (edad < 18)) {
    console.log(nombre + ' es un adolescente.')
} else if ((edad >= 18) && (edad < 60)) {
    console.log(nombre + ' es un adulto.')
} else {
    console.log(nombre + ' es un anciano.')
}