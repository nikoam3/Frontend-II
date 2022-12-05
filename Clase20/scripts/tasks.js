/* ---- SEGURIDAD: Si no se encuentra en localStorage info del usuario 👇 --- */
// funcion autoejecutable, antes de la carga del DOM

(function comprobacion() {
  // no lo deja acceder a la página, redirigiendo al login inmediatamente
  const jwt = localStorage.getItem("jwt");

  if (!jwt) {
    location.replace("./");
  }

  console.log("Paso correctamente la comprobacion");
})();

/* ----- comienzan las funcionalidades una vez que carga el documento 👇 ---- */
window.addEventListener("load", function () {
  /* ---------------- variables globales ---------------- */
  const btnCerrarSesion = document.querySelector("#closeApp");
  const nombreUsuario = document.querySelector(".user-info p");
  const contenedorTareasPendientes =
    document.querySelector(".tareas-pendientes");
  const contenedorTareasTerminadas =
    document.querySelector(".tareas-terminadas");
  const formCrearTarea = document.querySelector("form.nueva-tarea");
  const descripcionTarea = document.getElementById("nuevaTarea")
  const urlBase = "http://todo-api.ctd.academy:3000/v1";
  const jwt = localStorage.getItem("jwt");

  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener("click", function () {
    console.log("Cerrar sesion");
    const confirmacion = confirm("¿Seguro desea cerrar sesión?");

    // si lo confirmo, cerramos la sesion
    if (confirmacion) {
      //  limpiamos el storage
      localStorage.clear();
      // lo llevamos a la pantalla de login
      location.replace("./");
    }
  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    const url = `${urlBase}/users/getMe`;

    const configuraciones = {
      method: "GET",
      headers: {
        authorization: jwt,
      },
    };

    // lanzamos la consulta para saber los datos del usuario
    fetch(url, configuraciones)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data);
        // reemplazamos el texto del nodo parrafo correspondiente
        nombreUsuario.innerText = data.firstName;
      })
      .catch((error) => console.log(error));
  }
  obtenerNombreUsuario();

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    const url = `${urlBase}/tasks`;

    const configuraciones = {
      method: "GET",
      headers: {
        authorization: jwt,
      },
    };

    // lanzamos la consulta para saber las tareas del usuario
    fetch(url, configuraciones)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data);
        // llamo a la funcion que renderiza las tareas en pantalla
        renderizarTareas(data);
      })
      .catch((error) => console.log(error));
  }
  consultarTareas();

  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const url = `${urlBase}/tasks` 
    
    const datos = {
      description: descripcionTarea.value,
      completed: false
    }

    const configuracion = {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        authorization: jwt,
        "Content-Type": "application/json",
      },
    };

    fetch(url, configuracion)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data);
        // llamo a la funcion que renderiza las tareas en pantalla
        renderizarTareas(data);
      })
      .catch((error) => console.log(error));
    //formCrearTarea.reset()  
    
    });
  
  });

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */

  function renderizarTareas(listado) {}

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {}

  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {}
