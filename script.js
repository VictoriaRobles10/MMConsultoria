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
setInterval(cambiarGaleria, 3500);


// ==========================================
// 3. CONTROL DE MODALES (ESTILO SEGURO)
// ==========================================

// Abre el modal aplicando los estilos directamente con JS
function abrirModal(idModal) {
    let modal = document.getElementById(idModal);
    modal.style.setProperty('display', 'flex', 'important');
    // Pequeño delay para que la transición de opacidad se vea fluida
    setTimeout(() => { 
        modal.style.opacity = '1'; 
        modal.querySelector('.modal-content').style.transform = 'translateY(0)';
    }, 10);
}

// Cierra el modal si se hace clic afuera (en el fondo gris)
function cerrarModal(event, idModal) {
    let modal = document.getElementById(idModal);
    if (event.target === modal) {
        forzarCierre(idModal);
    }
}

// Función centralizada para desvanecer y ocultar el elemento por completo
function forzarCierre(idModal) {
    let modal = document.getElementById(idModal);
    modal.style.opacity = '0';
    modal.querySelector('.modal-content').style.transform = 'translateY(-20px)';
    setTimeout(() => { 
        modal.style.setProperty('display', 'none', 'important'); 
    }, 300);
}
