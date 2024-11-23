// Mostrar un mensaje de bienvenida al cargar la página
window.onload = function () {
    alert("¡Bienvenido/a a mi página web! Espero que te guste.");
};

document.addEventListener("DOMContentLoaded", function () {
    const botonAdmisiones = document.getElementById("boton-admisiones");
    botonAdmisiones.addEventListener("click", function () {
        window.open("https://ucompensar.edu.co/", "_blank"); // Abre en una nueva pestaña
    });
});

