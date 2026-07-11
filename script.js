// ===== Carrusel =====

const slides = document.querySelectorAll(".slide");

let indice = 0;

function cambiarSlide(){

    slides[indice].classList.remove("activo");

    indice++;

    if(indice >= slides.length){
        indice = 0;
    }

    slides[indice].classList.add("activo");

}

setInterval(cambiarSlide,5000);


// ===== Animación al hacer scroll =====

const cards = document.querySelectorAll(".card");

function animar(){

    cards.forEach(card=>{

        const posicion = card.getBoundingClientRect().top;

        if(posicion < window.innerHeight-100){

            card.style.opacity="1";
            card.style.transform="translateY(0px)";

        }

    });

}

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(60px)";
    card.style.transition="1s";

});

window.addEventListener("scroll",animar);

animar();
