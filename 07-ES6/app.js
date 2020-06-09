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

/************
 * Nuevas funciones de cadenas ES6
 */

let nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto)
console.log(`${nombre} `.repeat(5))
console.log(nombreCompleto.includes('Die'))
console.log(nombreCompleto.startsWith('De'))
console.log(nombreCompleto.endsWith('rr'))

/******************
 * Funciones flecha
 */

const years = [2000, 2005, 2008, 2012]

// ES5
var edad5_ = years.map(function(el) {
    return 2020 - el
})
console.log(edad5_)

// ES6
let edad6_ = years.map(el => 2020 - el)
console.log(edad6_)

edad6_ = years.map((el, index) => `Edad: ${index+1}: ${2020-el}`)
console.log(edad6_)

edad6_ = years.map(
    (el, index) => {
        const yearActual = new Date().getFullYear()
        const edad = yearActual - el
        return `Edad: ${index+1}: ${edad}`
    }
)

console.log(edad6_)

// ES5

function cuadrado(num) {
    return num * num
}

console.log(cuadrado(5))

// ES6

const cuadrado_ = (num) => num * num

console.log(cuadrado_(5))

/// Con arreglo de personas
const personas = [
    {
        nombre: 'Diego',
        edad: 24
    },
    {
        nombre: 'Melina',
        edad: 25
    },
    {
        nombre: 'Carlos',
        edad: 30
    }
]

// const menores30 = personas.filter(function(persona) {
//     return persona.edad < 30
// })

const menores30 = personas.filter((persona) => persona.edad < 30)

console.log(menores30)

/**********************
 * Destructuración o Destrucción
 */

// ES5
var datos = ['Pablo', 25]
var nombre_5 = datos[0]
var edad_5 = datos[1]
console.log(nombre_5)
console.log(edad_5)

// ES6
var [nombre_6, edad_6] = ['Pablo', 25]
console.log(nombre_6)
console.log(edad_6)

const persona = {
    Nombre: 'Carlos',
    Edad: 30
}

const {Nombre, Edad} = persona
console.log(Nombre)
console.log(Edad)

const {Nombre: n, Edad: e} = persona
console.log(n)
console.log(e)

const calcMayorEdad = (year) => {
    const edad = new Date().getFullYear() - year
    const mayoria = edad >= 18 ? true : false
    return [edad, mayoria]
}
const [edad2, mayoria] = calcMayorEdad(2010)
console.log(edad2)
console.log(`Es mayor de edad: ${mayoria}`)

/*******************
 * Mapas
 */

const data = new Map()

data.set('nombre', 'Grover')
data.set('edad', 34)
data.set(1, 'diego@correo.com')

console.log(data.get('nombre'))
console.log(data.get(1))

//data.delete(1)
//data.clear()

data.forEach((value, key) => {
    console.log(`${key}: ${value}`)
})

/****************
 * Operador de propagación
 */

var sumar = function(a, b, c, d) {
    return a + b + c + d
}

var ope1 = sumar(10, 20, 30, 40)
console.log(ope1)

var valores = [10, 20, 30, 40]
const ope2 = sumar(...valores)
console.log(ope2)

const rrhh = ['Pedro', 'Pablo', 'Ana']
const contabilidad = ['Felipe', 'Carlos', 'María']

const empresa = [...rrhh, ...contabilidad]
console.log(empresa)