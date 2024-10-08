document.querySelectorAll('.container').forEach(section => {
    section.addEventListener('click', function(event) {
        event.stopPropagation(); // Evitar que el clic en el contenedor active el evento del documento
        this.classList.toggle('active');

        // Si el contenedor está activo, ocultar los otros contenedores
        if (this.classList.contains('active')) {
            document.querySelectorAll('.container').forEach(activeSection => {
                if (activeSection !== this) {
                    activeSection.style.opacity = '0'; // Oculta los otros contenedores
                    activeSection.style.pointerEvents = 'none'; // Deshabilita los eventos en los ocultos
                }
            });
        } else {
            // Si se desactiva, mostrar todos los contenedores
            document.querySelectorAll('.container').forEach(activeSection => {
                activeSection.style.opacity = '1'; // Muestra todos los contenedores
                activeSection.style.pointerEvents = 'auto'; // Habilita los eventos nuevamente
            });
        }
    });
});

// Cierra el contenedor al hacer clic fuera de él
document.addEventListener('click', function() {
    document.querySelectorAll('.container.active').forEach(activeSection => {
        activeSection.classList.remove('active');
        activeSection.style.opacity = '1'; // Muestra todos los contenedores nuevamente
        activeSection.style.pointerEvents = 'auto'; // Habilita los eventos nuevamente
    });

    // Asegura que todos los contenedores sean visibles
    document.querySelectorAll('.container').forEach(section => {
        section.style.opacity = '1'; // Asegura que todos los contenedores sean visibles
        section.style.pointerEvents = 'auto'; // Habilita los eventos nuevamente
    });
});
