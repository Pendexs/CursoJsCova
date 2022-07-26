<<<<<<< HEAD
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
=======
$(document).ready( function(){



  
$("#verCarrito").click(function(e){
  $("#carrito").toggle() ;


  if( e.target.innerHTML != "Ocultar carrito"){

    e.target.innerHTML = "Ocultar carrito";

}
else{
    e.target.innerHTML = "Ver carrito";




}



});

})




let carrito = [];
let usuarios = [];

                           // Funciones
function AgregarUsuario(usuario){
  usuarios.push(usuario);
}


let usuario = prompt("Ingrese su nombre")   //Solicitud Nombre de Usuario


AgregarUsuario(usuario) 

>>>>>>> 3c54774238b86264cf3958ceb6461c744d5a5ff2

localStorage.setItem("Nombre de Usuario", usuario )

<<<<<<< HEAD
//FUNCIONES
const fmultiplicacion = (numeroA, numeroB) => precio = numeroA * numeroB;

const fiva = (numero) => sinIva = numero / 1.21;


// LOGIN

if (nombreUsuario == "ivan") {
    alert("Hola Admin");
}
else {
    console.log ("Hola " + nombreUsuario + " bienvenido/a");
=======
console.log(usuario)


function fconsole(mensaje) {
  console.log(mensaje);
}




let bCompra = document.querySelectorAll(".bCompra")
console.log( bCompra);

for(let boton of bCompra ){

  boton.addEventListener("click", fCarrito)

  console.log(boton)
>>>>>>> 3c54774238b86264cf3958ceb6461c744d5a5ff2
}

// COMPRA

function fCarrito(e){

<<<<<<< HEAD
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
  
  
=======
  let hijo = e.target;
  let padre = hijo.parentNode.parentNode;

  let nombreProducto = padre.querySelector("h3").textContent;
  let img = padre.querySelector("img").src;
  let precio = padre.querySelector("p").textContent;
  


  const producto = {

      nombre: nombreProducto,
      img: img,
      precio: precio,
  

  }


  carrito.push(producto);
  mostrarCarrito( producto);

}





function mostrarCarrito( producto){

  $("tbody").append(`<tr><td><img src="${producto.img} "></td>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td></tr>
                    `)

  
  let carritoJSON = JSON.stringify (carrito)
  
  localStorage.setItem("Carrito", carritoJSON )



}

console.log(carrito);



let geoLoc = navigator.geolocation.getCurrentPosition( mostrarGeo);

function mostrarGeo( position ){

    $.ajax({


      url:'http://api.openweathermap.org/data/2.5/weather',
      type:"GET",
      data:{
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          appid: 'bbf8893c6e8030e157bb633d11a66e17',
          dataType:"jsonp",
          units: 'metric'
      },
      success:function(data){
  
          console.log( data);
          let icono = data.weather[0].icon;
          let iconoURL = "http://openweathermap.org/img/w/" + icono + ".png";
          $("#icono").attr("src" , iconoURL);


    

          let contenido = `<div>
                              <p>${data.name}</p>                            
                              <p>${data.weather[0].main}</p>
                              <p>TEMP: ${data.main.temp}</p>
  
                          </div>`;
  
  
          $("#cajaClima").append(contenido);
      } 
  })
}

$("#botonClima").click(function(){

  $("#cajaClima").toggle(1000)})
>>>>>>> 3c54774238b86264cf3958ceb6461c744d5a5ff2
