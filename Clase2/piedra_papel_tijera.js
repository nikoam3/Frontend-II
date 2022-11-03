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

function elijeJugador() {
    while (true) {
        let jugada = prompt("Elija entre Papel, Piedra o Tijera");
        jugada = jugada.toLowerCase();
        switch (jugada) {
            case "piedra":
                return 1
            case "papel":
                return 2
            case "tijera":
                return 3
            default:
                alert("Elija un objeto correctamente");
                break;
        }
    }    
}

function juego() {
    let pc = parseInt(Math.random() * 3 + 1)
    const valorJugador = elijeJugador()
    switch (pc) {
        case 1:
            if (valorJugador === 1) {
                alert("PC elijio Piedra, Empate!");
            } else if (valorJugador === 2){
                alert("PC elijio Piedra, Ganaste!");
            } else {
                alert("PC elijio Piedra, Perdiste!");
            }
            break;
        case 2:
            if (valorJugador === 2) {
                alert("PC elijio Papel, Empate!");
            } else if (valorJugador === 3){
                alert("PC elijio Papel, Ganaste!");
            } else {
                alert("PC elijio Papel, Perdiste!");
            }
            break;
        case 3:
            if (valorJugador === 3) {
                alert("PC elijio Tijera, Empate!");
            } else if (valorJugador === 1){
                alert("PC elijio Tijera, Ganaste!");
            } else {
                alert("PC elijio Tijera, Perdiste!");
            }
            break;
        default:
            break;
    } 
}
const nombreJugador = iniciarJuego();
juego()