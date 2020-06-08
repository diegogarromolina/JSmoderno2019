// // Examinando el DOM

// console.dir(document)

// console.log(document.URL)
// console.log(document.title)
// document.title = 'Prueba'
// console.log(document.title)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[5])
// console.log(document.forms[0])

// /************************
//  * Obtener elementos del documento y manipularlos
//  * getElementById()
//  */
// console.log('Obtener elementos por ID')
// console.log(document.getElementById('header-title'))
// var headerTitle = document.getElementById('header-title')
// var header = document.getElementById('main-header')
// //console.log(headerTitle)
// headerTitle.textContent = 'Hola'
// headerTitle.innerText = 'Adiós'
// headerTitle.innerHTML = '<h3>Prueba</h3>'

// /*************************
//  * getElementsByClassName()
//  */

// console.log('Obtener elementos por Nombre de Clase')

// var items = document.getElementsByClassName('list-group-item')
// console.log(items)
// items[0].textContent = 'Prueba'


// /*************************
//  * getElementsByTagName()
//  */

// var tags = document.getElementsByTagName('li')
// tags[2].textContent = 'Prueba 02'


// /*************************
//  * querySelector
//  */

// var head = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 4px black'
// header.style.boxShadow = '0 0 20px grey'

// var input = document.querySelector('input')
// input.value = 'Hola Mundo'

// var submit = document.querySelector('input[type="submit"]')
// submit.value = 'Enviar'

// var item = document.querySelector('.list-group-item')
// item.style.color = 'white'
// item.style.backgroundColor = 'blue'

// /*************************
//  * querySelector
//  */

// var items = document.querySelectorAll('.list-group-item')
// items[1].style.color = 'red'

// var titles = document.querySelectorAll('.title')
// console.log(titles)
// titles[0].textContent = 'Prueba de Título'

// var impar = document.querySelectorAll('li:nth-child(odd)')
// var par = document.querySelectorAll('li:nth-child(even)')
// for (var i = 0; i < impar.length; i++) {
//     impar[i].style.backgroundColor = '#ccc'
//     par[i].style.backgroundColor = 'grey'
// }

// /**************************
//  * Parent Node
//  */

// // var itemList = document.querySelector('#items')
// // console.log(itemList.parentNode)
// // var main = itemList.parentNode
// // main.style.backgroundColor = 'red'

// /**************************
//  * Parent Element: Funciona igual que parentNode
//  */

// var itemList = document.querySelector('#items')
// console.log(itemList.parentElement)
// var main = itemList.parentElement
// main.style.backgroundColor = 'red'

// /*********************
//  * childNodes
//  */

// console.log(itemList.childNodes)

// /*********************
//  * children
//  */

// console.log(itemList.children)

// /*********************
//  * firstChild / firstElementChild
//  */

// console.log(itemList.firstElementChild)

// /*********************
//  * lastChilc / lastElementChild
//  */

// console.log(itemList.lastElementChild)

// /*********************
//  * Elementos hermanos
//  */

// // previousSibling
// console.log(itemList.previousSibling)

// // previousElementSibling
// console.log(itemList.previousElementSibling)

// // nextSibling
// console.log(itemList.nextSibling)

// // nextElementSibling
// console.log(itemList.nextElementSibling)

// /***********************
//  * Crear Elementos
//  */

//  // createElement -> tagName
// var nuevoDiv = document.createElement('div')
// nuevoDiv.className = 'Hola'
// nuevoDiv.id = 'div-hola'
// nuevoDiv.setAttribute('title', 'Hola mundo')
// console.log(nuevoDiv)

// // createTextNode -> 
// var nuevoNodoText = document.createTextNode('Hola mundo')
// nuevoDiv.appendChild(nuevoNodoText)

// console.log(nuevoDiv)

// var contenedor = document.querySelector('.container')
// console.log(contenedor)
// var h1 = document.querySelector('h1')
// console.log(h1)
// contenedor.insertBefore(nuevoDiv, h1)
// contenedor.insertBefore(nuevoDiv, h1)

/************************
 * Eventos
 */

// document.getElementById('boton').addEventListener('click', function() {
//     console.log('Click 2')
// })

// document.getElementById('boton').addEventListener('click', hacerClick)
// document.getElementById('boton').addEventListener('')

// function hacerClick() {
//     console.log('Usted hizo click!')
//     document.getElementById('header-title').textContent = 'Texto Cambiado'
// }

// Agregar un elemento a la lista
var form = document.getElementById('formAgregar')
var lista = document.getElementById('items')
var filtro = document.getElementById('filtro')

// Evento submit del formulario
form.addEventListener('submit', agregarItem)

// Evento click de la lista
lista.addEventListener('click', eliminarItem)

// Evento del teclado en el campo de filtro
filtro.addEventListener('keyup', filtrarItems)

// Función para agregar un item a la lista
function agregarItem(e) {
    e.preventDefault()

    var newItem = document.getElementById('item').value

    var li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(newItem))

    var botonDel = document.createElement('button')
    botonDel.className = 'btn btn-danger btn-sm float-right'
    botonDel.appendChild(document.createTextNode('X'))

    li.appendChild(botonDel)

    lista.appendChild(li)
}

// Función para eliminar un item de la lista
function eliminarItem(e) {
    if (e.target.classList.contains('eliminar')) {
        if (confirm('¿Seguro que desea eliminar el elemento?')) {
            var li = e.target.parentElement
            lista.removeChild(li)
        }
        
    }
}

// Función para filtrar elementos de la lista
function filtrarItems(e) {
    var texto = e.target.value.toLowerCase()
    var items = lista.getElementsByTagName('li')
    Array.from(items).forEach(function(item) {
        var itemNombre = item.firstChild.textContent
        if (itemNombre.toLowerCase().indexOf(texto) != -1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })

    console.log(items)
}