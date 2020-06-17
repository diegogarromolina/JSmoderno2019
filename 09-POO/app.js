/**********************
 * Manejo de Clases en JavaScript
 */

// class Persona {

//     constructor(nombre, edad, profesiones=[]) {
//         this.nombre = nombre
//         this.edad = edad
//         this.profesiones = profesiones
//     }

//     getBiografia() {
//         let biografia = `${this.nombre}, tiene ${this.edad} años de edad. Profesiones: `
//         this.profesiones.forEach((profesion) => {
//             biografia += `${profesion}, `
//         })
//         return biografia
//     }
// }

// class Empleado extends Persona {

//     constructor(nombre, edad, profesiones=[], sueldo, puesto) {
//         super(nombre, edad, profesiones)
//         this.sueldo = sueldo
//         this.puesto = puesto
//     }

//     getBiografia() {
//         return super.getBiografia() + `Puesto: ${this.puesto}. Salario: ${this.sueldo}`
//     }
// }

// const persona1 = new Empleado('Diego', 30, ['arquitecto', 'doctor'], 1500, 'Gerente')
// const persona2 = new Empleado('Melina', 29, ['ingeniero', 'instructor'], 1000, 'RRHH')
// const persona3 = new Empleado('Samantha', 5, ['Administración'], 1000, 'Administradora')

// console.log(persona1.getBiografia())
// console.log(persona2.getBiografia())
// console.log(persona3.getBiografia())

const datos = {
    _ubicacion: 'Lima',
    get ubicacion() {
        return this._ubicacion
    },
    set ubicacion(valor) {
        this._ubicacion = valor
    }
}

datos.ubicacion = 'Buenos Aires'
console.log(datos.ubicacion)
console.log(datos)