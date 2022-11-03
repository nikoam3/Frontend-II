const sitio = document.querySelector("body");
const btnTema = document.querySelector(".tema button");
const menuItems = document.querySelectorAll("nav li");
const contenedorNoticias = document.querySelector("main");
const articulos = document.querySelectorAll("article");
const titulos = document.querySelectorAll("article h2");

console.log(menuItems[0].style);

menuItems.forEach((item) => {
  item.style.textTransform = "uppercase";
  item.style.color = "aqua";
  item.style.backgroundColor = "white";
  item.style.borderRadius = "50vh";
});

// console.log(sitio.classList);

// console.log(sitio.classList.contains("dark"));

// console.log(sitio.classList.add("dark"));

// console.log(sitio.classList);

// console.log(sitio.classList.contains("dark"));

// console.log(sitio.classList.remove("dark"));

// console.log(sitio.classList);

// console.log(sitio.classList.contains("dark"));

/* console.log(sitio.classList.toggle("dark"));

console.log(sitio.classList);

console.log(sitio.classList.contains("dark")); */

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Desarrollar la función a continuacion para que el usuario elija el tema del sitio.
// 2- Debemos preguntarle al usuario mediante un confirm si desea usar el modo oscuro.
// 3- Si el usuario confirma debemos aplicar la clase "dark" al "sitio", si cancela debe quedar en modo claro.
// 4- A su vez, si está en modo oscuro, el texto del boton debe decir "Cambiar a modo claro 🌞". De lo contrario, si está en modo claro debe decir "Cambiar a modo oscuro 🌛"

function elegirTema() {
  const body = document.querySelector("body")
  const tema = confirm("Desea usar el modo oscuro?")
  if (tema){
    body.classList.toggle('dark')
    document.querySelector('.tema button').innerText = "Cambiar a modo claro 🌞"
  } else {
    document.querySelector('.tema button').innerText = "Cambiar a modo oscuro 🌛"
  }
}
elegirTema();
