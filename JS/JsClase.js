
fetch('https://criptoya.com/api/dolar')
    .then( response => response.json() )
    .then (({oficial}) => {


const carrito = []  // ARRAY carrito
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

  const productosJS = document.getElementById("productosJS")
productos.forEach((producto) => {
  productosJS.innerHTML += `
    <article class="card transparante" style="width: 20%;">
        <div class="card-body">
            <h3>${producto.nombre}</h3>
            <img class = "trein" src=${producto.imagen}  alt="">
            <p class="card-text convertir" id="dolar${producto.id}">$ ${producto.precio}</p>
            <a href="#" id="boton${producto.id}">Comprar</a>
        </div>
    </article>
    `    

    console.log(producto.precio)
    
}
)

const dolarizar = document.getElementById("dolarizar") // Para convertir precios a dolar oficial

dolarizar.addEventListener('click', () => {

  productos.forEach((producto) => {
    producto.precio = (producto.precio/oficial).toFixed(2)

    console.log(producto.precio)
    
    let preciodolar = `USD ${producto.precio}
    `
    let dolar =document.getElementById(`dolar${producto.id}`)
    dolar.innerHTML= preciodolar

  })

  })


  
  const pecificar = document.getElementById("pesificar") // Convertir precios a Pesos


  pecificar.addEventListener('click', () => {

  productos.forEach((producto) => {
    producto.precio = (producto.precio*oficial).toFixed(0 )

    console.log(producto.precio)
    
    let preciodolar = `$ ${producto.precio}
    `
    let dolar =document.getElementById(`dolar${producto.id}`)
    dolar.innerHTML= preciodolar
console.log("pesos")
  })

  })


productos.forEach((producto) => {                   //Uso un forEach para los botones de compra
  let botonCompra = document.getElementById(`boton${producto.id}`)
  botonCompra.addEventListener('click', () => {
      agregarCarrito (producto.id)
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
  }
  )
    
})

//FUNCIONES
function agregarCarrito (idProducto) // Funcion para agregar al carrito
 {
 
  let select = idProducto  // Selecciono segun el ID
  let productoelegido = select
  

  const seleccion = productos.find((producto) => producto.id === productoelegido)  // Buscador por ID
  

  if (carrito.find ((carritoArray) => carritoArray.id === seleccion.id)){ // Chequeo si esta el producto agregado, si lo esta aumento cantidad + 1, si no esta pusheo
    seleccion.cantidad += 1

    const cantidad = document.getElementById(`cantidad${seleccion.id}`)

    cantidad.innerHTML = `$ ${seleccion.precio} x${seleccion.cantidad}`
    
 }
    
  else {carrito.push(seleccion);

    const carritoH3 = document.getElementById("carritoH3")
    carritoH3.innerHTML = `Carrito  <img src="./mult/iconos/agregar.ico" alt=""> `



    const carritoJS = document.getElementById("tbody")


    carritoJS.innerHTML += `
    <article class="card transparante" style="width: 22%; margin-top: 5px;">
        <div class="card-body">
            <h6>${seleccion.nombre}             <button class="botonEliminar" id="botonEliminar${producto.id}"><img class = "trein" src="./mult/iconos/eliminar.ico"  alt=""></button></h6>
            <img class = "trein" src=${seleccion.imagen}  alt="">
            <p class="card-text" id="cantidad${seleccion.id}">$ ${seleccion.precio} x${seleccion.cantidad}</p>
        </div>
    </article>
    `}


  const obtenerTotal = (productosArray) => {     //Calculo el Total $$ multiplico cantidad por precio de cada objeto en el Array del carrito
      let total = 0;
    productosArray.forEach((producto) => {
        total += producto.precio * producto.cantidad;
    });
    return total;
  
  }
  
totalCarrito = obtenerTotal(carrito)


console.log('TOTAL: ' , obtenerTotal(carrito));  // Muestro el total

let lista = document.getElementById("precioFinal");

lista.innerHTML = "El total es $" + totalCarrito;


dolarizar.addEventListener('click', () => {     // Dolarizo el total
  console.log("dolarrrr")

  productos.forEach((producto) => {
  lista.innerHTML = "El total es USD " + totalCarrito;

  let dolarPrecio = document.getElementById(`cantidad${seleccion.id}`);

  dolarPrecio.innerHTML =`USD ${seleccion.precio} x${seleccion.cantidad}`

  })

  })



let carritoJSON = JSON.stringify (carrito)  // Agrego al almacenamiento local el carrito en forma de String y el total de la compra
  
localStorage.setItem("Carrito", carritoJSON )
localStorage.setItem("Total", obtenerTotal(carrito))

}  //Fin Agregar carrito
    
console.log(carrito)


})





