let usuario = prompt("Ingresar nombre de usuario");


const carrito = []

class producto {
    
    constructor( nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
 }
  
  const diablo = new producto("diablo", 800);
  const verde = new producto("verde", 400);
  const dorado = new producto("dorado", 300);
  const negro = new producto("negro", 600);

  const productos = [diablo, verde, dorado, negro] // Array de productos
  const Usuarios = []  // Lo uso para poder aplicar Push

//FUNCIONES
const fmultiplicacion = (numeroA, numeroB) => precio = numeroA * numeroB;


function AgregarUsuario(usuario){
  Usuarios.push(usuario);  // Funcion para pushear usuario
}



//LOGIN

if (usuario == "ivan") {
  alert("Hola Admin");
}
else {
  console.log ("Hola " + usuario + " bienvenido/a");
  AgregarUsuario(Usuarios)  // Uso Push
}



function AgregarCarrito (){  // COMPRAS

let productoelegido = prompt("Indique el producto que desea: \n\n diablo \n\n verde \n\n dorado \n\n negro").toLowerCase()
let cantidad = prompt("Cuantos desea?")

let continuar = prompt ("Deesea continuar comprando").toLowerCase()

const seleccion = productos.find((el) => el.nombre === productoelegido)  // Buscador por nombre

console.log(seleccion)

fmultiplicacion(seleccion.precio, cantidad); // Funcion para calcular precio por cantidad

console.log("total " + precio)

carrito.push(seleccion.nombre,seleccion.precio * cantidad); // Agrego al carrito Nombre y valor de cantidad por precio

if (continuar == "si") {AgregarCarrito()}

}

AgregarCarrito()


console.log (carrito)