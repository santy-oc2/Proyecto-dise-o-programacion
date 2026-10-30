// JavaScript básico del proyecto de Programación Web.
// No se usan librerías: solamente botones y funciones sencillas.

// Función para que los botones lleven a otra parte de la historia.
function irA(nombreSeccion) {
    var destino = document.getElementById(nombreSeccion);
    if (destino) {
        destino.scrollIntoView({ behavior: 'smooth' });
    }
}

// Función para mostrar u ocultar el secreto del código de Santi.
// Esta es la interacción extra con JavaScript solicitada en el PDF.
function mostrarPista() {
    var pista = document.getElementById('pista');
    var boton = document.getElementById('boton-pista');

    if (pista.hidden) {
        pista.hidden = false;
        boton.textContent = 'Ocultar el secreto';
        boton.setAttribute('aria-expanded', 'true');
    } else {
        pista.hidden = true;
        boton.textContent = 'Descubrir el secreto del código';
        boton.setAttribute('aria-expanded', 'false');
    }
}
