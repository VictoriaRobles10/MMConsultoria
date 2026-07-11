// ==========================================
// 1. CONTROL DE CAMBIO DE BANNERS (INICIO)
// ==========================================
let slidesBanner = document.querySelectorAll('.slide-banner');
let bannerActual = 0;

function cambiarBanner() {
    slidesBanner[bannerActual].classList.remove('activo');
    bannerActual = (bannerActual + 1) % slidesBanner.length;
    slidesBanner[bannerActual].classList.add('activo');
}

// Cambia el banner del inicio automáticamente cada 4 segundos
setInterval(cambiarBanner, 4000);


// ==========================================
// 2. CONTROL DEL CARRUSEL DE LA GALERÍA
// ==========================================
let slidesGaleria = document.querySelectorAll('.slide-galeria');
let galeriaActual = 0;

function cambiarGaleria() {
    slidesGaleria[galeriaActual].classList.remove('activo');
    galeriaActual = (galeriaActual + 1) % slidesGaleria.length;
    slidesGaleria[galeriaActual].classList.add('activo');
}

// Cambia la foto de la galería automáticamente cada 3.5 segundos
setInterval(cambiarGaleria, 3500);


// ==========================================
// 3. LOGICA NUEVA: VENTANAS EMERGENTES (MODALES)
// ==========================================

// Función para abrir la ventana con la información correspondiente
function abrirModal(idModal) {
    document.getElementById(idModal).classList.add('mostrar');
}

// Función para cerrar la ventana al hacer clic en el fondo gris oscuro
function cerrarModal(event, idModal) {
    // Si el clic fue en el fondo y no dentro de la caja blanca de texto, se cierra
    if (event.target === document.getElementById(idModal)) {
        document.getElementById(idModal).classList.remove('mostrar');
    }
}
