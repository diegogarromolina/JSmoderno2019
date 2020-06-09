/***********
 * ES5 - Variables
 */
var nombre5 = 'Pablo'
console.log(nombre5)

var edad5 = 35
nombre5 = 'Carlos'
console.log(nombre5)

/*****************
 * ES6 - Variables
 */
const nombre6 = 'Pedro'
console.log(nombre6)

let edad6 = 28
//nombre6 = 'Ana'
edad6 = 30
console.log(edad6)

/********************
 * Bloques y alcance de las variables
 */
let test
test = 10
function prueba() {
    let test
    test = 15
}
prueba()
console.log(test)

{
    const a = 3
    let b = 4
    var c = 5
}

/*****
 * Con const y let las variables solo tiene alcance dentro del
 * bloque donde son declaradas. Con var las variables tienen
 * alcance en todo el script */
//console.log(a + b)
console.log(c)

/*****************
 * Template Strings
 */

let nombre = 'Diego'
let apellido = 'Garro'
let ciudad = 'Quepos'
const nacimiento = 1986

function calcularEdad(year) {
    return 2020 - year
}

// ES5
console.log(nombre + ' ' + apellido + ', nació en ' + ciudad + ', y su edad es ' + calcularEdad(nacimiento) )

// ES6
console.log(`${nombre} ${apellido}, nació en ${ciudad}, y su edad es ${calcularEdad(nacimiento)}`)