let nombreUsuario = prompt("Ingresar nombre de usuario");
let producto = prompt("Indique el producto que desea: diablo - verde- dorado - negro").toUpperCase()
let cantidad = prompt("Cuantos desea?")
let consumidorFinal = prompt("Consumidor final?").toUpperCase();


class Producto {
    
    constructor( nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
 }
  
  const DIABLO = new Producto("diablo", 800);
  const VERDE = new Producto("verde", 400);
  const DORADO = new Producto("dorado", 300);
  const NEGRO = new Producto("negro", 600);


//FUNCIONES
const fmultiplicacion = (numeroA, numeroB) => precio = numeroA * numeroB;

const fiva = (numero) => sinIva = numero / 1.21;


// LOGIN

if (nombreUsuario == "ivan") {
    alert("Hola Admin");
}
else {
    console.log ("Hola " + nombreUsuario + " bienvenido/a");
}

// COMPRA


 switch (producto) { 

    case "DIABLO": 
    console.log("El precio por unidad $" + DIABLO.precio);
  
    fmultiplicacion(DIABLO.precio, cantidad);
    
    console.log ("Total " + precio);

  
        break;
  
    case "VERDE": 
    console.log("El precio por unidad es $" + VERDE.precio);
  
    fmultiplicacion(VERDE.precio, cantidad);
    
    console.log ("Total " + precio);
    
        break;
  
    case "DORADO": 
    console.log("El precio por unidad es $" + DORADO.precio);
  
    fmultiplicacion(DORADO.precio, cantidad);
    
    console.log ("Total " + precio);
       break;
  
    case "NEGRO": 
    console.log("El precio por unidad es $" + NEGRO.precio);
  
    fmultiplicacion(NEGRO.precio, cantidad);
    
    console.log ("Total " + precio);
      break;

      default:
            console.log("Producto no valido")
  }


  if(consumidorFinal == "NO"){
    fiva(precio)
    console.log ("Precio final sin I.V.A. $" + sinIva + " muchas gracias por su compra");
  
    }
    else if(precio == "SI"){
    console.log ("Muchas gracias por su compra")
    }   
  
  
