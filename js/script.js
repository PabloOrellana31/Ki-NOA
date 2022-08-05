function saludo() {
    alert("Holis, bienvenido a Ki-NOA")
}
const btnSaludar = document.getElementById("enviarSaludo");
btnSaludar.addEventListener("click", saludo);

let inputTexto = document.getElementById("textoParametro");
const btnEnviar = document.getElementById("enviarTexto");

let titulo = document.getElementById("titulodeprueba");

let cadena;

inputTexto.addEventListener("input", () => {
    cadena = inputTexto.value;
})

btnEnviar.addEventListener("click", () => {
    titulo.innerText = cadena
})

fondo = document.getElementById("fondo");
btnSeleccion = document.getElementById("selector");

btnSeleccion.addEventListener("change", () => {
    let eleccion = btnSeleccion.value;
    console.log(eleccion);
    switch (eleccion) {
        case "nada":
            fondo.className = "cambiofondo"
            break;
        case "color Ki-NOA":
            fondo.className = "cambiofondo1"
            break;
        case "blanco":
            fondo.className = "cambiofondo2"
        default:
            break;
    }
})