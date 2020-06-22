/*********************
 * Mensaje de Fecha y Hora
 * Desde: 01 de Enero de 1970 00:00:00
 */

// const ahora = new Date()
// const timeStamp = ahora.getTime()
// console.log(timeStamp.toString())

// const fechaActual = new Date(timeStamp)
// console.log(fechaActual.getFullYear())

// const fecha1 = new Date("December 17 , 1995 06:02:35")
// console.log(ahora)
// console.log(fecha1)

// console.log(`Año: ${ahora.getFullYear()}`)
// console.log(`Mes: ${ahora.getMonth() + 1}`)
// console.log(`Fecha: ${ahora.getDate()}`)
// console.log(`Día: ${ahora.getDay()}`)

// console.log(`Hora: ${fecha1.getHours()}`)
// console.log(`Minutos: ${fecha1.getMinutes()}`)
// console.log(`Segundos: ${fecha1.getSeconds()}`)

/******************
 * Ejercicio de comparación de fechas:
 * Crear dos objetos Date(), una con fecha cualquiera y la otra con
 * la fecha actual, luego comparar ambos valores. Visualizar cual de
 * las dos es la fecha menor.
 */

const hoy = new Date()
const fecha = new Date("April 25, 2019 04:06:54")

function fechaMenor(fecha1, fecha2) {
    let timeStamp1 = fecha1.getTime()
    let timeStamp2 = fecha2.getTime()

    return timeStamp1 < timeStamp2 ? fecha1 : fecha2
}

const menor = fechaMenor(hoy, fecha)

console.log(`La fecha menor es: ${menor}`)