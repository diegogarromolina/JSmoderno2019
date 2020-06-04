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
