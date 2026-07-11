// ===== 1. Carrusel del Banner Principal (Inicio) =====
const slidesBanner = document.querySelectorAll(".slide-banner");
let indiceBanner = 0;

function cambiarSlideBanner() {
    if (slidesBanner.length > 0) { // Verifica si existen los elementos
        slidesBanner[indiceBanner].classList.remove("activo");
        indiceBanner++;

        if (indiceBanner >= slidesBanner.length) {
            indiceBanner = 0;
        }

        slidesBanner[indiceBanner].classList.add("activo");
    }
}
if (slidesBanner.length > 0) {
    setInterval(cambiarSlideBanner, 5000);
}


// ===== 2. Carrusel de la Galería Ambiental =====
const slidesGaleria = document.querySelectorAll(".slide-galeria");
let indiceGaleria = 0;

function cambiarSlideGaleria() {
    if (slidesGaleria.length > 0) { // Verifica si existen los elementos
        slidesGaleria[indiceGaleria].classList.remove("activo");
        indiceGaleria++;

        if (indiceGaleria >= slidesGaleria.length) {
            indiceGaleria = 0;
        }

        slidesGaleria[indiceGaleria].classList.add("activo");
    }
}
if (slidesGaleria.length > 0) {
    setInterval(cambiarSlideGaleria, 5000);
}


// ===== 3. Animación al hacer scroll (Cards de Servicios) =====
const cards = document.querySelectorAll(".card");

function animar() {
    cards.forEach(card => {
        const posicion = card.getBoundingClientRect().top;
        // Detecta si la tarjeta entró al campo visual
        if (posicion < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";
        }
    });
}

// Configuración inicial oculta para las tarjetas
cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(60px)";
    card.style.transition = "1s ease-in-out";
});

// Escuchar el evento de scroll
window.addEventListener("scroll", animar);

// Ejecutar una vez al cargar por si hay tarjetas visibles desde el inicio
document.addEventListener("DOMContentLoaded", animar);
