
let stockProductos =[ { id: 1,
        nombre: 'Fernet',
        tipo:'Botella',
        precio: 800,
        imagen:'./imagenes/fernet.jpg'
    },
    {id: 2,
        nombre: 'Gancia',
        tipo:'Botella',
        precio: 400,
        imagen: './imagenes/gancia.jpg'
    },
    {id: 3,
        nombre: 'Heineken',
        tipo:'Lata',
        precio: 200,
        imagen: './imagenes/heineken.jpeg'
    },
    {id: 4,
        nombre: 'Patagonia',
        tipo:'Lata',
        precio: 210,
        imagen: './imagenes/patagonia.webp'
    },
    {id: 5,
        nombre: 'Quilmes',
        tipo:'Lata',
        precio: 160,
        imagen:'./imagenes/quilmes.jpg'
    },
    {id:6,
        nombre: 'Rutini',
        tipo:'Botella', 
        precio: 600,
        imagen:'./imagenes/rutini.jpg'

    },
    {id:7,
        nombre: 'Jack Daniels',
        tipo:'Botella', 
        precio: 4000,
        imagen:'./imagenes/wwisky.jpg'

    },
    {id:8,
        nombre: 'Cynar',
        tipo:'Botella', 
        precio: 900,
        imagen:'./imagenes/cynaar.jpg'

    },

]

const pedirProductos =() =>{
    return new Promise ((resolve,reject) =>{
        setTimeout( () =>{
            resolve(stockProductos)
        
        },3000)
    })
}
const renderProductos = (arr) =>{
    }
    pedirProductos()
    .then((res) =>{
        productos =res
        renderProductos(productos)
    })

const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')

const precioTotal = document.getElementById('precioTotal')

const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        
        carrito = JSON.parse(localStorage.getItem('carrito'))

        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click',()=>{
    carrito.length = 0
    actualizarCarrito()
localStorage.clear()

})


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})



stockProductos.forEach((producto)=>{
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML=`
    <img src=${producto.imagen} alt=''>
    <h3 class="hola">${producto.nombre}</h3>
    <p class= 'precioProducto'>PRECIO USS$ ${producto.precio}</p>
    <button id='agregar${producto.id}' class='boton-agregar'>AGREGAR <i class='fas fa-shopping-cart'></i></button>`
contenedorProductos.appendChild(div)
const boton = document.getElementById(`agregar${producto.id}`)
boton.addEventListener('click', () => {
    agregarAlCarrito(producto.id)

})
})



const agregarAlCarrito = (prodId) => {

        const item = stockProductos.find(prod => prod.id === prodId) 
        carrito.push(item)
        actualizarCarrito()
        console.log(carrito)
        }
    
const eliminarDelCarrito = (prodId) => {
        const item = carrito.find((prod) => prod.id === prodId)
        const indice = carrito.indexOf(item) 
        carrito.splice(indice, 1) 
        actualizarCarrito()  
        console.log(carrito)
    }


const actualizarCarrito= ()=>{
contenedorCarrito.innerHTML=""
if (carrito != null){


    carrito.forEach((prod) =>{
    const div =document.createElement('div')
    div.className=('productoEnCarrito')
    div.innerHTML=`
    <p>${prod.nombre}</p>
    <p>Precio:USS$ ${prod.precio}</p>
<button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt></button>
`
contenedorCarrito.appendChild(div)
 localStorage.setItem('carrito',JSON.stringify(carrito))
})
contadorCarrito.innerText = carrito.length
precioTotal.innerText = carrito.reduce((acc,prod) => acc + prod.precio,0)
}}




//sweetAlert

swal({
     title: "ÉSTA PÁGINA ES SOLO PARA +18!",
    text: "CHIN,CHIN! ",
    icon: "success",
    button: "A COMPRAR!!",
  });






//Toastify


  function agregartoastify()
  { const btn =document.getElementById("agregar2")
     btn.addEventListener('click',()=>{

     Toastify({
    text: "SE AGREGÓ AL CARRITO",
    duration: 3000,
               }).showToast()
})
}
Toastify({
    text: "EL BEBER ES PERJUDICIAL PARA TU SALUD, COMPARTÍ TU TRAGO:)",
    id: '1',
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();




  