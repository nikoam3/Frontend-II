window.addEventListener("load", function () {
  /* ---------------------- obtenemos variables globales ---------------------- */
  const form = document.querySelector("form");
  const nombre = document.getElementById("inputNombre")
  const apellido = document.getElementById("inputApellido")
  const email = document.getElementById("inputEmail")
  const password = document.getElementById("inputPassword")
  const repetirPassword = document.getElementById("inputPasswordRepetida")
  const url = "http://todo-api.ctd.academy:3000/v1";

  /* -------------------------------------------------------------------------- */
  /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
  /* -------------------------------------------------------------------------- */
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    //const boton = document.querySelector("button")
    //boton.disabled = true
    const div = document.getElementById("estado");
    if (div) {
      div.remove();
    }

    const datos = {
      firstName: nombre.value,
      lastName: apellido.value, 
      email: email.value,
      password: password.value
    }

    const configuracion = {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    if (datos.password === repetirPassword.value){
      realizarRegister(configuracion)
      form.reset()  
    }else{
      const div = document.createElement("div");
      div.setAttribute("id", "estado");
      div.style =
        "background:rgba(255, 0, 0, 0.2);padding:.5em 1em;color: red;margin: .5em 0;";
        div.innerHTML += "<p><small>Las contraseñas no coinciden</small></p>";
        form.appendChild(div);
        form.reset() 
      };
  });

  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
  /* -------------------------------------------------------------------------- */
  function realizarRegister(settings) {
    const div = document.getElementById("estado");
    if (div) {
      div.remove();
    }

    fetch(`${url}/users`, settings)
    .then((respuesta) => {
      console.log(respuesta);
      if (respuesta.ok){
        console.log("Usuario creado con exito")
        const div = document.createElement("div");
        div.setAttribute("id", "estado");
        div.style =
          "background:rgba(0, 255, 0, 0.2);padding:.5em 1em;color: white;margin: .5em 0;";
          div.innerHTML += "<p><small>Usuario creado con éxito!</small></p>";
          form.appendChild(div);
          form.reset() 
      }else {
        console.log("algo salio mal")
        form.reset() 
      }
      return respuesta.json();
    })
    .then((data) => {
      console.log(data);
      if (data.jwt){
        const token = data.jwt
        console.log(token);
      } else {
        const div = document.createElement("div");
        div.setAttribute("id", "estado");
        div.style =
        "background:rgba(255, 0, 0, 0.2);padding:.5em 1em;color: red;margin: .5em 0;";
          div.innerHTML += `<p><small>${data}</small></p>`;
          form.appendChild(div);
      }
    });
  }
});
