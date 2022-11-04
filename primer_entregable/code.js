/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingrese su nombre: ")
  datosPersona.edad = 2022 - parseInt(prompt("Ingrese su año de nacimiento: "))
  datosPersona.ciudad = prompt("Ingrese su localidad: ")
  datosPersona.interesPorJs = confirm("¿Le interesa Javascript?")
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.querySelector("#nombre").innerText = datosPersona.nombre
  document.querySelector("#edad").innerText = datosPersona.edad
  document.querySelector("#ciudad").innerText = datosPersona.ciudad
  document.querySelector("#javascript").innerText = datosPersona.interesPorJs === true ? "Si" : "No"
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.querySelector("#fila")
  if(!fila.hasChildNodes()){
    listado.forEach((lista) => {
      const contenedor = 
      `<article class="caja"> 
        <img src="${lista.imgUrl}" alt="${lista.lenguajes}"/>
        <p> ${lista.lenguajes} </p>
        <p> ${lista.bimestre} </p>
      </article>`
      fila.innerHTML += contenedor
    }) 
  };
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 const sitio = document.querySelector("#sitio")
 sitio.classList.toggle('dark')
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
window.addEventListener("keypress", function (e) {
  if (e.key === "f" || e.key === "F") {
    const sobre_mi = document.querySelector("#sobre-mi")
    sobre_mi.removeAttribute("class")
  }
})