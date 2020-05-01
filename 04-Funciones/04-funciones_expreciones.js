// Funciones como expresiones

var prueba = function() {
    console.log('Prueba')
}

prueba()

var prueba2 = function(nombre) {
    return 'Hola ' + nombre
}

console.log(prueba2())