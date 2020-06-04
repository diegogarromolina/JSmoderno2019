/***********************
 * Arreglos en JavaScript
 */

var nombre = ['Melina', 'Diego', 'Samantha', 'Ana']
var vegetales = new Array('Tomate', 'Lechuga', 'Zanahoria')

console.log(nombre[2])
console.log(nombre[1])

console.log(vegetales[2])

nombre[1] = 'José'
console.log(nombre[1])

vegetales[2] = 'Navo'
console.log(vegetales[2])

console.log(nombre.length)


/***********************
 * Operaciones con arreglos
 */

var frutas = ['pera', 'manzana', 'uva', 'sandía']
console.log(frutas)

// for (var i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }

// Esta es la forma que más se usa
frutas.forEach(function(elemento, indice, Array) {
    console.log(indice, elemento)
})

frutas.push('naranja')
console.log(frutas)
frutas.unshift('fresa')
console.log(frutas)

frutas.pop()
console.log(frutas)


frutas.shift()
console.log(frutas)


var pos = frutas.indexOf('uva')
console.log(pos)

frutas.splice(1, 2)
console.log(frutas)

/**************************
 * Arreglo con elementos de distinto tipo
 */

var persona = ['Pablo', 'Vázquez', 34, '9999999', 1.75]
console.log(persona)

/**************************
 * Objetos Literales
 */

var persona2 = {
    nombre: 'Diego',
    apellido: 'Garro',
    gustos: [
        'fútbol',
        'ver películas',
        'inglés',
    ],
    trabajo: 'Programador',
    esCasado: true,
}
console.log(persona2)
console.log(persona2.apellido)
console.log(persona2['trabajo'])

persona2.esCasado = false
console.log(persona2.esCasado)

/**************************
 * Objetos con la sintaxis Object
 */

var persona3 = new Object()
persona3.nombre = 'Melina'
persona3.apellido = 'Mdrigal'
persona3['trabajo'] = 'Imágenes Médicas'

console.log(persona3)

/*************************
 * Objetos y métodos
 */

var persona4 = {
    // Propiedades
    nombre: 'Diego',
    apellido: 'Garro',
    gustos: [
        'fútbol',
        'ver películas',
        'inglés',
    ],
    trabajo: 'Programador',
    esCasado: true,
    anioNacimiento: 1986,

    // Métodos
    calcularEdad: function() {
        this.edad = 2020 - this.anioNacimiento
    },
}

console.log(persona4)
persona4.calcularEdad()
//var edad = persona4.calcularEdad(1986)
console.log(persona4.edad)