let botonTexto = document.getElementById("cambiarTexto");
let titulo = document.getElementById("titulo");
botonTexto.addEventListener("click", function() {
    titulo.textContent = "¡Texto modificado!";
});

let botonColor = document.getElementById("cambiarColor");
let cajas = document.getElementsByClassName("caja");
botonColor.addEventListener("click", function() {
for (let i = 0; i < cajas.length; i++) {
cajas[i].style.backgroundColor = "lightcoral";
}
});