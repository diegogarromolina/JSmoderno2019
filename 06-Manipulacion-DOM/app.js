// Examinando el DOM

console.dir(document)

console.log(document.URL)
console.log(document.title)
document.title = 'Prueba'
console.log(document.title)
console.log(document.head)
console.log(document.body)
console.log(document.all)
console.log(document.all[5])
console.log(document.forms[0])

/************************
 * Obtener elementos del documento y manipularlos
 * getElementById()
 */
console.log('Obtener elementos por ID')
console.log(document.getElementById('header-title'))
var headerTitle = document.getElementById('header-title')
var header = document.getElementById('main-header')
//console.log(headerTitle)
headerTitle.textContent = 'Hola'
headerTitle.innerText = 'Adiós'
headerTitle.innerHTML = '<h3>Prueba</h3>'

/*************************
 * getElementsByClassName()
 */

console.log('Obtener elementos por Nombre de Clase')

var items = document.getElementsByClassName('list-group-item')
console.log(items)
items[0].textContent = 'Prueba'


/*************************
 * getElementsByTagName()
 */

var tags = document.getElementsByTagName('li')
tags[2].textContent = 'Prueba 02'


/*************************
 * querySelector
 */

var head = document.querySelector('#main-header')
header.style.borderBottom = 'solid 4px black'
header.style.boxShadow = '0 0 20px grey'

var input = document.querySelector('input')
input.value = 'Hola Mundo'

var submit = document.querySelector('input[type="submit"]')
submit.value = 'Enviar'

var item = document.querySelector('.list-group-item')
item.style.color = 'white'
item.style.backgroundColor = 'blue'

/*************************
 * querySelector
 */

var items = document.querySelectorAll('.list-group-item')
items[1].style.color = 'red'

var titles = document.querySelectorAll('.title')
console.log(titles)
titles[0].textContent = 'Prueba de Título'

var impar = document.querySelectorAll('li:nth-child(odd)')
var par = document.querySelectorAll('li:nth-child(even)')
for (var i = 0; i < impar.length; i++) {
    impar[i].style.backgroundColor = '#ccc'
    par[i].style.backgroundColor = 'grey'
}
