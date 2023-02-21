// Seleccionar los elementos de la navegación
const navegacion = document.querySelector('nav');
const enlaces = document.querySelectorAll('nav a');

// Añadir evento de click a cada enlace de la navegación
enlaces.forEach(enlace => {
  enlace.addEventListener('click', function(evento) {
    evento.preventDefault(); // Prevenir que se recargue la página al hacer click en un enlace

    // Obtener el atributo href del enlace y el elemento correspondiente
    const seccionId = enlace.getAttribute('href');
    const seccion = document.querySelector(seccionId);

    // Desplazarse hasta la sección correspondiente con animación
    seccion.scrollIntoView({ behavior: 'smooth' });

    // Cambiar la clase "activo" del enlace seleccionado
    enlaces.forEach(enlace => enlace.classList.remove('activo'));
    enlace.classList.add('activo');
  });
});
