/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
/*
function iniciarJuego() {
  alert("Bienvenido al piedra, papel o tijera de Front 2 :D");

  const nombre = prompt("Ingrese su nombre por favor: ");

  alert("Gracias por jugar " + nombre + ". Mucha suerte");

  console.log("El jugador es: " + nombre);

  return nombre;
}

const nombreJugador = iniciarJuego();
*/
/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.

function iniciarJuego() {

  alert("Bienvenido al piedra, papel o tijera de Front 2 :D");
  const flag = true;
  //1 y 2
  while (true) {
    const nombre = prompt("Ingrese su nombre por favor: ");
    if (nombre === null || !isNaN(nombre)){
      alert("Ingrese un nombre correcto");
      } else if (nombre.length <= 3){
        alert("Ingrese un nombre mas largo");
      } else {  
        alert("Gracias por jugar " + nombre + ". Mucha suerte");
        console.log("El jugador es: " + nombre.toUpperCase);
        return nombre.toUpperCase;
      }
    }  
  }

const nombreJugador = iniciarJuego();

