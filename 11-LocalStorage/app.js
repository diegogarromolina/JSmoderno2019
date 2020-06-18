/*************************
 * Setear info
 */
// localStorage.setItem('nombreUsuario', 'Diego')
// console.log(localStorage.getItem('nombreUsuario'))
// localStorage.setItem('ubicación', 'Alajuela')

/*******************
 * Remover
 */

//localStorage.removeItem('nombreUsuario')

// Limpiar todo
// localStorage.clear()

/***********************
 * Notación JSON
 */

const usuario = {
    nombre: 'Diego',
    edad: 30,
}

const usuarioJSON = JSON.stringify(usuario)
localStorage.setItem('usuario', usuarioJSON)

const userJSON = localStorage.getItem('usuario')
// console.log(usuarioJSON)
const usuario2 = JSON.parse(userJSON)
console.log(`${usuario2.nombre}: ${usuario2.edad}`)

