let carrito = []  // ARRAY carrito
class producto {   // CREADOR de productos/objetos

    
    constructor(id, nombre, precio, cantidad, imagen) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
      this.imagen = imagen;
    }
 }

  const diablo = new producto(1, "Diablo", 800, 1, "https://http2.mlstatic.com/D_NQ_NP_2X_929142-MLA45343464483_032021-F.webp"); 
  const verde = new producto(2, "Verde", 400, 1, "https://images.cults3d.com/Sc4hyz-V2GaCf_iNb9xvcnkcGvY=/516x516/https://files.cults3d.com/uploaders/18131720/illustration-file/23e0b840-2e1c-4537-9f2e-0db7c42d1159/grinder.jpg#1") ;
  const dorado = new producto(3, "Dorado", 300, 1, "https://images.squarespace-cdn.com/content/v1/59d5f200bebafbe0830d4c9b/1562664238015-SLASGUM3BP5O28MA4AAW/Grinder-solid-8-gold-open.jpg?format=1000w");
  const negro = new producto(4, "Negro", 600, 1, "https://img2.cgtrader.com/items/2890504/c1f8405e3d/spirited-away-kaonashi-no-face-herb-grinder-3d-model-3ds-stl.jpg");

  const productos = [diablo, verde, dorado, negro] // Array de productos

 
  let totalCarrito 
  let divisa = "$"

  function mostrarProductosDOM() {      //Funcion para mostrar productos en HTML
  
    productos.forEach((producto) => {  // Para cada producto creo un arituciulo
  const productosJS = document.getElementById("productosJS")

  productosJS.innerHTML += `
    <article class="card transparante" style="width: 20%;">
        <div class="card-body">
            <h3>${producto.nombre}</h3>
            <img class = "trein" src=${producto.imagen}  alt="">
            <p class="card-text convertir" id="dolar${producto.id}"> ${divisa} ${producto.precio}</p>
            <a href="#" id="boton${producto.id}">Comprar</a>
        </div>
    </article>
    `  
}
)
}
  mostrarProductosDOM()


productos.forEach((producto) => { //Uso un forEach para los botones de compra y saber que agrego al carrito
  let botonCompra = document.getElementById(`boton${producto.id}`)
  botonCompra.addEventListener('click', () => {
    agregarCarrito(producto.id)
    Toastify({
      text: `${producto.nombre} agregado al carrito  😉`,
      duration: 3000,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
    
      style: {
        background: "linear-gradient(to right, #D35400, #2E4053)",
        fontSize: "10px",
      },
      onClick: function(){} // Callback after click
    }).showToast();
  })
  })



  function agregarCarrito (idProducto) // Funcion para agregar al carrito
 {

  function agregadoYChequeadoProducto (idProducto){  //Verfico si se encuentra el producto ya en el carrito para agregar cantidad o todo el producto

  const seleccion = productos.find((producto) => producto.id === idProducto)  // Buscador por ID

  if (carrito.find ((carritoArray) => carritoArray.id === seleccion.id)){ // Chequeo si esta el producto agregado, si lo esta aumento cantidad + 1, si no esta pusheo
    seleccion.cantidad += 1

    const cantidad = document.getElementById(`cantidad${seleccion.id}`)

    cantidad.innerHTML = `${divisa} ${seleccion.precio} x${seleccion.cantidad}`


    localStorage.setItem("itemsGuardados", JSON.stringify(carrito))



    
 }
    
  else {carrito.push(seleccion);   // Si no esta agregado el producto al carrito, Pinto todo en HTML y agrego al carrito

    const carritoH3 = document.getElementById("carritoH3")
    carritoH3.innerHTML = `Carrito  <img src="./mult/iconos/agregar.ico" alt=""> `


    const carritoJS = document.getElementById("tbody")


    carritoJS.innerHTML += `
    <article id="productoJS${seleccion.id}"class="card transparante" style="width: 22%; margin-top: 5px;">
        <div class="card-body">
            <h6>${seleccion.nombre}             <button id="botonEliminar${seleccion.id}"><img class = "trein" src="./mult/iconos/eliminar.ico"  alt=""></button></h6>
            <img class = "trein" src=${seleccion.imagen}  alt="">
            <p class="card-text" id="cantidad${seleccion.id}">${divisa} ${seleccion.precio} x${seleccion.cantidad}</p>
        </div>
    </article>
    `

    localStorage.setItem("itemsGuardados", JSON.stringify(carrito))

  }

}
agregadoYChequeadoProducto (idProducto)


 const obtenerTotal = (productosArray) => {     //Calculo el Total $$ multiplico cantidad por precio de cada objeto en el Array del carrito
      let total = 0;
    productosArray.forEach((producto) => {
        total = carrito.reduce((x, e) => x + (e.precio * e.cantidad), 0)

    });
    return total; 
  
  }

eliminarDelCarrito ()
function eliminarDelCarrito (){
  carrito.forEach((seleccion) => { //PARA ELIMINAR DEL CARRITO
  let botonEliminar = document.getElementById(`botonEliminar${seleccion.id}`)
  botonEliminar.addEventListener('click', () => {

  

      const elimino = seleccion // Buscador por producto
      totalCarrito = totalCarrito - elimino.cantidad * elimino.precio

      let SeElimina = carrito.indexOf(elimino)  //Busco el indice del Objeto Producto en el Array Carrito

      console.log(SeElimina) //Muestro en consola el indice, lo uso para desbuguear
    
      carrito.splice(SeElimina,1) //Elimina del carrito el objeto con el indice seleccionado
      console.log(carrito)

      const productoJS = document.getElementById(`productoJS${seleccion.id}`) //Ubico el espacio en HTML para eliminar
      productoJS.innerHTML = ``

      console.log(totalCarrito)   
      let lista = document.getElementById("precioFinal");

      lista.innerHTML = "El total es " + divisa + totalCarrito

      localStorage.setItem("itemsGuardados", JSON.stringify(carrito))
   })
  })
}

totalCarrito = obtenerTotal(carrito) // Variable con total carrito


let lista = document.getElementById("precioFinal");  // Paraincertar en DOM precio total del carrito

lista.innerHTML = "El total es " + divisa + totalCarrito + `<button class="btn btn-outline-success" id="finalizarCompra">Confirmar compra</button>`
finalizarCompra ()





}  //Fin Agregar carrito

function finalizarCompra (){

let finalizarCompra = document.getElementById("finalizarCompra")
finalizarCompra.addEventListener('click', () => {

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Muchas gracias por su compra',
    showConfirmButton: false,
    timer: 2000
  })

  carrito == []
  const carritoJS = document.getElementById("tbody")
  carritoJS.innerHTML = ``
  let lista = document.getElementById("precioFinal");
  lista.innerHTML = ``
  localStorage.setItem("itemsGuardados", JSON.stringify(carrito))


  console.log()

  })
}



console.log(productos)
console.log(carrito)


fetch('https://criptoya.com/api/dolar')  //Uso de Fetch para poder mostar precios en Dolar oficial tiempo real
    .then( response => response.json() )
    .then (({oficial}) => {



const dolarizar = document.getElementById("dolarizar") // Para convertir precios a dolar oficial

function dolarizando (){
dolarizar.addEventListener('click', () => {
  dolarizar.disabled = true   //Habilito y desabilito el boton, depende que cotizacion este activa
  pesificar.disabled = false
   
  productos.forEach((producto) => {   //Recorro los productos para modificarlos en el DOM y cada uno
    producto.precio = (producto.precio/oficial).toFixed(2)

    let preciodolar = `${divisa} ${producto.precio}
    `
    let dolar =document.getElementById(`dolar${producto.id}`)
    dolar.innerHTML= preciodolar
    divisa = "USD"
  })
 recorrerCarritoCambiaMoneda()
  

  })
}
dolarizando()

  
  const pesificar = document.getElementById("pesificar") // Convertir precios a Pesos
  pesificar.disabled = true


function pesificando (){



  pesificar.addEventListener('click', () => {
    dolarizar.disabled = false
    pesificar.disabled = true

  productos.forEach((producto) => {
    producto.precio = (producto.precio*oficial).toFixed(0 )
    
    let preciodolar = `${divisa} ${producto.precio}
    `

    let dolar =document.getElementById(`dolar${producto.id}`)
    dolar.innerHTML= preciodolar
    divisa = "$"

    recorrerCarritoCambiaMoneda ()
  })

  })
}
pesificando ()
    })

    function recorrerCarritoCambiaMoneda(){ // Funcion creada para poder modificar los precios en carrito segun pesos o dolar
      carrito.forEach((producto) => {
        const cantidad = document.getElementById(`cantidad${producto.id}`)
      
       cantidad.innerHTML = `${divisa} ${producto.precio} x${producto.cantidad}`
        })
    }