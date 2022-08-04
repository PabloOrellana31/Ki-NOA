function saludo() {
    alert("hola, bienvenido a Ki-NOA")
}
const btnSaludar = document.getElementById("");
btnSaludar.addEventListener("click", saludo);

let inputTexto = document.getElementById("");
const btnEnviar = document.getElementById("");

let titulo = document.getElementById("");

let cadena;

inputTexto.addEventListener("input", () => {
    cadena = inputTexto.value;
})

btnEnviar.addEventListener("click", () => {
    titulo.innerText = cadena
})

fondo = document.getElementById("");
btnSeleccion = document.getElementById("");

btnSeleccion.addEventListener("change", () => {
    let eleccion = btnSeleccion.value;
    console.log(eleccion);
    switch (eleccion) {
        case "nada":
            fondo.className = "cambiofondo"
            break;
        case "blanco":
            fondo.className = "cambiofondo1"
            break;
        case "negro":
            fondo.className = "cambiofondo2"
        default:
            break;
    }
})