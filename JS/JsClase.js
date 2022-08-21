const carrito = []  // ARRAY carrito


class producto {   // CREADOR de productos/objetos
    
    constructor(id, nombre, precio, cantidad, imagen, boton) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
      this.imagen = imagen;
      this.boton = boton;
    }
 }
  
  const diablo = new producto("1", "diablo", 800, 1, "https://http2.mlstatic.com/D_NQ_NP_2X_929142-MLA45343464483_032021-F.webp", "b1"); 
  const verde = new producto("2", "verde", 400, 1, "https://images.cults3d.com/Sc4hyz-V2GaCf_iNb9xvcnkcGvY=/516x516/https://files.cults3d.com/uploaders/18131720/illustration-file/23e0b840-2e1c-4537-9f2e-0db7c42d1159/grinder.jpg#1", "b2") ;
  const dorado = new producto(3, "dorado", 300, 1, "https://files.cults3d.com/uploaders/14629481/illustration-file/09bf3f5b-198c-489e-9c8c-b8318ebb9e4f/IMG-20210728-WA0008.jpg", "b3");
  const negro = new producto(4, "negro", 600, 1, "https://img2.cgtrader.com/items/2890504/c1f8405e3d/spirited-away-kaonashi-no-face-herb-grinder-3d-model-3ds-stl.jpg", "b4");

  const productos = [diablo, verde, dorado, negro] // Array de productos

  let totalCarrito 

  const productosJS = document.getElementById("productosJS")
productos.forEach((producto) => {
  productosJS.innerHTML += `
    <article class="card transparante" style="width: 20%;">
        <div class="card-body">
            <h3 id="${producto.id}">${producto.nombre}</h3>
            <img class = "trein" src=${producto.imagen}  alt="">
            <p class="card-text">$ ${producto.precio}</p>
            <p class="card-text">${producto.cantidad}</p>
            <a href="#" class="botonCompra">Comprar</a>
        </div>
    </article>
    `
})


  
//FUNCIONES
let botonCompra = document.querySelectorAll(".botonCompra") // Busco los botones compra que se generen en HTML

for(let botones of botonCompra){ // Asigno un boton por siclo para poder seleccionar productos
  botones.addEventListener("click", boton)
}

function boton (e){ // Funcion para agregar al carrito
  let hijo = e.target // Uso target para saber que selecciono
  let padre = hijo.parentNode.parentNode //busco al contenedor del nombre del producto

  let productoelegido = padre.querySelector("h3").textContent // Uso el nombre del titula H3 como valor para buscar

  const seleccion = productos.find((producto) => producto.nombre === productoelegido)  // Buscador por nombre
  
  if (carrito.find ((carritoArray) => carritoArray.id === seleccion.id)){ // Chequeo si esta el producto agregado, si lo esta aumento cantidad + 1, si no esta pusheo
    seleccion.cantidad += 1}
    
  else carrito.push(seleccion);

  const obtenerTotal = (productosArray) => {     //Calculo el Total $$ multiplico cantidad por precio de cada objeto en el Array del carrito
      let total = 0;
    productosArray.forEach((producto) => {
        total += producto.precio * producto.cantidad;
    });
    return total;
  }

  console.log('TOTAL: ' , obtenerTotal(carrito));  // Muestro el total

totalCarrito = obtenerTotal(carrito)




let carritoJSON = JSON.stringify (carrito)  // Agrego al almacenamiento local el carrito en forma de String y el total de la compra
  
localStorage.setItem("Carrito", carritoJSON )
localStorage.setItem("Total", obtenerTotal(carrito))
}



// Finalizar compra

function confirmar(){   // Creo en el HTML el total a pagar, se activa al hacer click


  let lista = document.getElementById("lista");

  let li = document.createElement("li");
  li.innerHTML = "El total es $" + totalCarrito;

  lista.appendChild(li);


  }
bConfirmar.addEventListener("click", () =>{
  confirmar() })

    
console.log(carrito)









