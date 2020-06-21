/*********************
 * Mensaje de Fecha y Hora
 */

const ahora = new Date()
const fecha1 = new Date("December 17 , 1995 06:02:35")
console.log(ahora)
console.log(fecha1)

console.log(`Año: ${ahora.getFullYear()}`)
console.log(`Mes: ${ahora.getMonth() + 1}`)
console.log(`Fecha: ${ahora.getDate()}`)
console.log(`Día: ${ahora.getDay()}`)

console.log(`Hora: ${fecha1.getHours()}`)
console.log(`Minutos: ${fecha1.getMinutes()}`)
console.log(`Segundos: ${fecha1.getSeconds()}`)