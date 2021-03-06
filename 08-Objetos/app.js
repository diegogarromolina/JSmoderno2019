// let miLibro = {
//     titulo: 'El libro de JavaScript',
//     autor: 'Diego Garro Molina',
//     paginas: 400,
//     publicado: false,
// }

// let miLibroB = {
//     titulo: 'Mi libro en PHP',
//     autor: 'Diego Garro',
//     paginas: 700,
//     publicado: true,
// }

// console.log(miLibro.titulo)
// console.log(miLibro.autor)
// console.log(`${miLibro.titulo} creado por ${miLibro.autor}`)
// miLibro.paginas = 500
// console.log(miLibro.paginas)

// let getResumen = (libro) => {
//     return  {
//         resumen: `${libro.titulo} creado por ${libro.autor}`,
//         resumenPaginas: `${libro.titulo} tiene ${libro.paginas} páginas`,
//     }
// }

// let libroAResumen = getResumen(miLibro)
// let libroBResumen = getResumen(miLibroB)

// console.log(libroAResumen.resumen)
// console.log(libroAResumen.resumenPaginas)

/*******************
 * Crear un objeto persona con las siguientes propiedades:
 * nombre, edad, ciudad
 * cambiar la edad
 * Mostrar datos de la persona
 */

// let persona = {
//     nombre: 'Diego Garro',
//     edad: 34,
//     ciudad: 'San José',
// }

// persona.edad = 30
// console.log('\nDatos de la persona:')
// console.log(`Nombre: ${persona.nombre}`)
// console.log(`Edad: ${persona.edad}`)
// console.log(`Ciudad: ${persona.ciudad}`)

/***********************
 * Referencia de Objetos
 */

// let persona = {
//     nombre: 'Diego',
//     edad: '30',
//     sueldo: 1200,
// }

// let otraPersona = persona
// otraPersona.sueldo = 1500
// console.log(otraPersona)

// let cambiarSueldo = (person, monto) => {
//     person.sueldo = person.sueldo + monto
//     //console.log(person)
// }

// cambiarSueldo(persona, 500)
// console.log(otraPersona)
// console.log(persona)

/********************
 * Métodos
 */

// let persona = {
//     nombre: 'Diego',
//     edad: 30,
//     sueldo: 1200,
//     metodoPrueba: function() {
//         // console.log('Escribiendo desde el método de prueba')
//         return 'Resultado desde prueba'
//     },
//     cambiarEdad: function(e) {
//         this.edad = this.edad + e
//     }
// }

// let result = persona.metodoPrueba()
// console.log(result)
// persona.cambiarEdad(10)
// console.log(persona.edad)

/**********************
 * Objeto String
 */

// let nombre = 'Diego Garro'

// console.log(nombre.length)
// console.log(nombre.toUpperCase())

/**********************
 * Destructuración de objetos
 */

const getPersonaDatos = () => {
    const respuesta = [
            {
                codigo: 'Diego',
                data: {
                    persona: {
                        nombre: 'Diego',
                        direccion: {
                            ciudad: 'San José',
                            pais: 'Costa Rica',
                        }
                    }
                }
            },
            {
                codigo: 200,
                data: {
                    persona: {
                        nombre: 'Melina',
                        direccion: {
                            ciudad: 'San José',
                            pais: 'EEUU',
                        }
                    }
                }
            },
            {
                codigo: 400,
                data: {
                    persona: {
                        nombre: 'Samantha',
                        direccion: {
                            ciudad: 'Hong Kong',
                            pais: 'China',
                        }
                    }
                }
            },
        ]
    return respuesta
}



let {codigo : status, data : {persona : {nombre : num}}} = getPersonaDatos()[0]

// console.log(respuesta)
console.log(status)
console.log(num)

for (const {codigo : status, data : {persona : {nombre : nom}}} of getPersonaDatos()) {
    console.log(nom)
}