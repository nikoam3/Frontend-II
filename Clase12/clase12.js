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
  const hobbies = document.querySelectorAll("[name=hobbies]");
  // const hobbies = document.getElementsByName("hobbies");
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
  console.log(datos);

  const errores = validarInformacion(datos);
  console.log(errores);

  renderizarErrores(errores);

  mostrarMensajeExito(errores);
});

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [3] FUNCION: validar datos                         */
/* -------------------------------------------------------------------------- */
function validarInformacion(usuario) {
  let errores = [];
  // 👇 desarrollar aqui la funcion

  // validando el nombre
  if (usuario.nombre.length < 3) {
    errores.push("El nombre debe tener al menos 3 caracteres.");
  }
  // validando la contraseña
  if (usuario.password.trim().length < 6) {
    errores.push(
      "La contraseña debe tener al menos 6 caracteres, entre letras y símbolos."
    );
  }
  // validando el telefono
  if (usuario.telefono.length < 10) {
    errores.push("No es un teléfono válido.");
  }
  // validando los hobbies
  if (usuario.hobbies.length > 4) {
    errores.push("Sólo es posible seleccionar 4 hobbies.");
  }
  // validando la nacionalidad
  if (usuario.nacionalidad == "") {
    errores.push("Debe seleccionar una nacionalidad.");
  }

  return errores;
}

/* -------------------------------------------------------------------------- */
/*                       [4] FUNCION: renderizar errores                      */
/* -------------------------------------------------------------------------- */
function renderizarErrores(listado) {
  const divErrores = document.getElementById("errores");

  if (divErrores) {
    divErrores.remove();
  }

  if (listado.length > 0) {
    const divTemplate = document.createElement("div");
    divTemplate.setAttribute("id", "errores");
    divTemplate.style =
      "background:rgba(255, 0, 0, 0.2);padding:.5em 1em;color: red;margin: .5em 0;";
    listado.forEach((error) => {
      divTemplate.innerHTML += `<p><small>${error}</small></p>`;
    });

    form.appendChild(divTemplate);
  }
}

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de mostrar que el formulario se completó correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Recibe el listado de errores, y solo si no hay ninguno debe:
// 2 - mostrar al final del formulario un caja con la misma estructura que la caja de errores, pero con la tonalidad verde
// 3 - dentro la caja debe mostrar un párrafo con el mensaje: "¡Formulario completado con éxito!"
// 4 - a su vez se debe deshabilitar el boton del formulario
// 5 - finalmente pasados 4 segundos: se debe eliminar esa caja, habilitar el boton y limpiar el formulario

function mostrarMensajeExito(listado) {
  const boxExito = document.getElementById("exito")
  
  if(boxExito){
    boxExito.remove()
  }

  if (listado.length === 0) {
    const box = document.createElement("div")
    const button = document.querySelector("button")
    const hobbies = document.getElementsByName("hobbies");
    const nacionalidad = document.getElementsByName("nacionalidad");
    box.setAttribute("id", "exito")
    box.style =
      "background:rgba(255, 0, 0, 0.2);padding:.5em 1em;color: green;margin: .5em 0;";
    box.innerHTML += `<p>¡Formulario completado con éxito!</p>`;
    form.appendChild(box);
    button.disabled = true
    setTimeout(() => {
      box.remove()
      button.disabled = false
      nom.value = "";
      pass.value = "";
      tel.value = "";
      hobbies.forEach((hobbie) => {
      if (hobbie.checked) {
        hobbie.checked = false;
      }})
      nacionalidad.forEach((nacion) => {
      if (nacion.checked) {
        nacion.checked = false;
      }})    
    }, 4000)
  }
}
