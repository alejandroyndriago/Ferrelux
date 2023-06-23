//Función para el botón que sube el scroll
window.onscroll = function () {
    var button = document.getElementById("scrollButton");
    if (document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    document.documentElement.scrollTop = 0;
}

//Animación para que todos los objetos de la sección nuestros servicios se movilicen

var elementosSeccion = document.querySelectorAll('.container.py-5 *');

function animarElementosSeccion() {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;

    elementosSeccion.forEach(function (elemento) {
        var rect = elemento.getBoundingClientRect();
        var elementoTop = rect.top + scrollY;

        var isVisible = (
            elementoTop >= scrollY &&
            elementoTop <= (scrollY + window.innerHeight)
        );

        if (isVisible) {
            if (!elemento.classList.contains('animado')) {
                elemento.style.opacity = '0';
                elemento.style.transform = 'translateX(-40px)';

                elemento.animate([
                    { opacity: '0', transform: 'translateX(-40px)' },
                    { opacity: '1', transform: 'translateX(0)' }
                ], {
                    duration: 1000,
                    easing: 'ease-out',
                    fill: 'forwards'
                });

                elemento.classList.add('animado');
            }
        } else {
            elemento.classList.remove('animado');
        }
    });
}

window.addEventListener('scroll', animarElementosSeccion);

// Llamar a la función una vez al cargar la página
animarElementosSeccion();

//Animación para que el navbar baje cada que se recarga la pagina
var navbar = document.querySelector('.nav-white');

function animarNavbar() {
  navbar.style.transform = 'translateY(-100%)';
  navbar.style.opacity = '0';

  navbar.animate([
    { transform: 'translateY(-100%)', opacity: '0' },
    { transform: 'translateY(0)', opacity: '1' }
  ], {
    duration: 1000,
    easing: 'ease-out',
    fill: 'forwards'
  });
}

window.addEventListener('load', animarNavbar);

