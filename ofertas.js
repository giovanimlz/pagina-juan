// Obtén el botón "Aplicar" y la ventana emergente modal
const aplicarBtn = document.getElementById('aplicarBtn');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

// Agrega un evento de clic al botón "Aplicar" para mostrar la ventana emergente
aplicarBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Agrega un evento de clic al botón de cerrar para ocultar la ventana emergente
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cierra la ventana emergente si se hace clic fuera de ella
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
