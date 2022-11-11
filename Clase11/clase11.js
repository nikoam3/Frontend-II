/* -------------------------------------------------------------------------- */
/*               [1] FUNCION: capturar los datos del formulario               */
/* -------------------------------------------------------------------------- */
function capturarDatosFormulario() {
  const objetoInformacion = {
    nombre: "",
    password: "",
    telefono: "",
    hobbies: [],
    nacionalidad: "",
  };

  const nom = document.querySelector("#nom");
  const pass = document.querySelector("#pass");
  const tel = document.querySelector("#tel");
  //const hobbies = document.querySelectorAll("[name=hobbies]");
  const hobbies = document.getElementsByName("hobbies");
  const nacionalidad = document.querySelectorAll("[name=nacionalidad]");

  objetoInformacion.nombre = nom.value;
  objetoInformacion.password = pass.value;
  objetoInformacion.telefono = tel.value;
  hobbies.forEach((hobbie) => {
    if (hobbie.checked) {
      objetoInformacion.hobbies.push(hobbie.id);
    }
  });
  nacionalidad.forEach((nacion) => {
    if (nacion.checked) {
      objetoInformacion.nacionalidad = nacion.id;
    }
  });

  return objetoInformacion;
}

/* -------------------------------------------------------------------------- */
/*                 [2] FUNCION: escuchamos el submit del form                 */
/* -------------------------------------------------------------------------- */
const form = document.querySelector("form");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const datos = capturarDatosFormulario();
  //console.log(datos);

  const errores = validarInformacion(datos);
  console.log(errores);

  // renderizarErrores(errores);

  // mostrarMensajeExito(errores);
});

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [3] FUNCION: validar datos                         */
/* -------------------------------------------------------------------------- */
// Desarrollar la funcion 3 de validar los datos.
// Esta funcion va a recibir un objeto con la misma estructura de objetoInformacion
// Entonces dentro de esta función vamos a chequear ciertas validaciones.
// 1- La funcion devuelve un listado de errores según las comprobaciones que hace sobre el objeto.
// 2- Si el nombre no es un texto y tiene menos de 3 caracteres sumar el error: "El nombre debe tener al menos 3 caracteres."
// 3- Si la contraseña tiene menos de 6 caracteres, sin contar espacios al principio, en el medio o final, sumar el error: "La contraseña debe tener al menos 6 caracteres, entre letras y símbolos."
// 4- Si el telefono tiene menos de 10 números, sumar el error: "No es un teléfono válido."
// 5- Si la lista de hobbies tiene más de 4 items, sumar el error: "Sólo es posible seleccionar 4 hobbies."
// 5- Si no hay una nacionalidad definida, sumar el error: "Debe seleccionar una nacionalidad."

function validarInformacion(usuario) {
  let errores = [];
    if (usuario.nombre.length <= 3 || !isNaN(usuario.nombre)){
      errores.push("El nombre debe tener al menos 3 carateres")
    }
         
    if ((usuario.password.trim()).length <= 6){
      errores.push("La contraseña debe tener al menos 6 caracteres, entre letras y símbolos.")
    }

    if (usuario.telefono.length <= 10){
      errores.push("No es un teléfono válido.")
    }
    
    if (usuario.hobbies.length > 4){
      errores.push("Sólo es posible seleccionar 4 hobbies.")
    }

    if (usuario.nacionalidad === ""){
      errores.push("Debe seleccionar una nacionalidad.")
    }
  return errores;
}
