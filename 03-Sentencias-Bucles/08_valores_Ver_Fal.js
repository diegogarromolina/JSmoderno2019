
// Valores falsos: undefined, null, 0, ''
// Valores verdaderos: NOT valores falsos

var edad
edad = '10'

if (edad) {
    console.log('Variable está definida.')
} else {
    console.log('Variable no definida')
}

// Operadores de igualdad

if (edad === 10) {
    console.log('Variable con coersión')
} else {
    console.log('Variable sin coersión')
}