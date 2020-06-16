let miLibro = {
    titulo: 'El libro de JavaScript',
    autor: 'Diego Garro Molina',
    paginas: 400,
    publicado: false,
}

let miLibroB = {
    titulo: 'Mi libro en PHP',
    autor: 'Diego Garro',
    paginas: 700,
    publicado: true,
}

console.log(miLibro.titulo)
console.log(miLibro.autor)
console.log(`${miLibro.titulo} creado por ${miLibro.autor}`)
miLibro.paginas = 500
console.log(miLibro.paginas)

let getResumen = (libro) => {
    return  {
        resumen: `${libro.titulo} creado por ${libro.autor}`,
        resumenPaginas: `${libro.titulo} tiene ${libro.paginas} páginas`,
    }
}

let libroAResumen = getResumen(miLibro)
let libroBResumen = getResumen(miLibroB)

console.log(libroAResumen.resumen)
console.log(libroAResumen.resumenPaginas)

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

