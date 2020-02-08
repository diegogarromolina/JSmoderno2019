/*
    Ejercicio de sentencias


    Tienes dos alumnos, Pablo y María.
    Pablo tiene las siguientes notas: 14, 8, 16.
    María tiene las siguientes notas: 12, 18, 10.

    Calcular el promedio de cada alumno, además indicar quíen tiene el promedio 
    superior, e indicar si el alumno está aprobado, para ello su promedio debe
    ser superior a 13.
*/

var pablo = {
    nota1: 10,
    nota2: 12,
    nota3: 18
}

var maria = {
    nota1: 12,
    nota2: 18,
    nota3: 10
}

function promedio(persona) {
    var suma = persona.nota1 + persona.nota2 + persona.nota3
    var prom = suma / 3
    return prom
}

var promPablo = promedio(pablo)
var promMaria = promedio(maria)

if (promPablo > promMaria) {
    console.log('Pablo tiene el promedio más alto')
    if (promPablo >= 13) {
        console.log('Pablo aprobó el curso')
    } else {
        console.log('Pablo reprobó el curso')
    }
} else if (promMaria > promPablo) {
    console.log('María tiene el promedio más alto')
    if (promMaria >= 13) {
        console.log('María aprobó el curso')
    } else {
        console.log('María reprobó el curso')
    }
} else {
    console.log('Los promedios de Pablo y María son iguales.')
    if (promMaria >= 13) {
        console.log('Ambos aprobaron el curso')
    } else {
        console.log('Ambos reprobaron el curso')
    }
}