/*******************
 * Función setTimeout()
 */

//setTimeout(() => console.log('Esto aparece luego de 3 segundos'), 3000)

/************************
 * JavaScript Asíncrono
 */

// const segundo = () => {
//     setTimeout(() => {
//         console.log('Llamada a segundo')
//     }, 2000)
// }

// const primero = () => {
//     console.log('Inicio de primero')
//     segundo()
//     console.log('Fin de primero')
// }

// primero()

/*****************
 * Simulación
 */

// const getUsuarios = () => {
//     setTimeout(() => {
//         const userIDs = [101, 102, 103, 105]
//         console.log(userIDs)

//         setTimeout((id) => {
//             const usuario = {
//                 email: 'diego@diego.com',
//                 nombre: 'Diego',
//             }
//             console.log(`${id} - ${usuario.email} - ${usuario.nombre}`)

//             setTimeout((idPermiso) => {
//                 const permisos = ['admin', 'creador']
//                 console.log(permisos)
//             }, 1500, userIDs[2])
//         }, 1500, userIDs[2])
//     }, 1500)
// }

// getUsuarios()

/********************
 * Ejemplos de uso de promesas
 */

// Ejemplo 01

let promesa = new Promise((resolve, reject) => {
    if (true) {
        resolve('La operación fue exitosa')
    } else {
        reject('Hubo un error')
    }
})

promesa.then(response => {
    console.log('Response: ' + response)
}).catch(error => {
    console.log('Error: ' + error)
})

// Ejemplo 02

let miPromesa = Promise.resolve('comida')
miPromesa.then(resp => console.log(resp))

// Ejemplo 03

var miPromesa2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(4))
}, 2000)

miPromesa2.then(resp => {
    resp += 5
    console.log(resp)
})