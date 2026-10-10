const titulo = document.getElementById("titulo");
const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("boton");

boton.addEventListener("click", function(event) {
    mensaje.textContent = "El botón fue presionado";
    
    // Alternancia de colores solicitada en el punto 34
    if (titulo.style.color === "blue") {
        titulo.style.color = "red";
    } else {
        titulo.style.color = "blue";
    }

    console.log(event.target);
});