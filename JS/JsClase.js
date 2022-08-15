const carrito = []  // ARRAY carrito


class producto {   // CREADOR de productos/objetos
    
    constructor(id, nombre, precio, cantidad) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;

    }
 }
  
  const diablo = new producto(1, "diablo", 800, 1);
  const verde = new producto(2, "verde", 400, 1);
  const dorado = new producto(3, "dorado", 300, 1);
  const negro = new producto(4, "negro", 600, 1);

  const productos = [diablo, verde, dorado, negro] // Array de productos

  let totalCarrito 
//FUNCIONES

function agregarCarrito (h3Producto) // Funcion para agregar al carrito
 {
 

  let select = document.getElementById(h3Producto)  // Selecciono segun el titulo que tenga en el HTML 
  let productoelegido = select.innerHTML  
  
  
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
}




//BOTONES

const bCompraDiablo = document.querySelector("#bCompraDiablo") 
const bCompraVerde = document.querySelector("#bCompraVerde") 
const bCompraDorado = document.querySelector("#bCompraDorado") 
const bCompraNegro = document.querySelector("#bCompraNegro") 
const bConfirmar = document.querySelector("#bConfirmar")


// Opcion de compras por producto, acciona funcion agregarCarrito
bCompraDiablo.addEventListener("click", () => {
agregarCarrito ("h3diablo")
});

bCompraVerde.addEventListener("click", () => {
agregarCarrito ("h3verde")
});

bCompraDorado.addEventListener("click", () => {
agregarCarrito ("h3dorado")
});

bCompraNegro.addEventListener("click", () => {
agregarCarrito ("h3negro")
});



function confirmar(){   // Creo en el HTML el total a pagar, se activa al hacer click


  let lista = document.getElementById("lista");

  let li = document.createElement("li");
  li.innerHTML = "El total es $" + totalCarrito;

  lista.appendChild(li);


  }
bConfirmar.addEventListener("click", () =>{
  confirmar() })

    
console.log(carrito)
