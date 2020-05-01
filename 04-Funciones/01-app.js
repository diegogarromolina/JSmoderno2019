
function bienvenido() {
    console.log('Hola bienvenido a la sección de funciones')
}

bienvenido()

function bienvenido2() {
    return 'Nueva funcion bienvenido'
}

// Nueva función
var mensaje = bienvenido2()
console.log(mensaje)

// Partes de una función
// parámetros, código, salida

function cuadradoNumero(num) {
    var resultado = num * num
    return resultado
}

var num = 3
console.log(cuadradoNumero(num))