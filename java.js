// Obtén referencias a los elementos de input por sus IDs
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const mensajeInput = document.getElementById('mensaje');

// Función para reiniciar los campos de input
function reiniciarCampos() {
    nombreInput.value = ''; // Borra el valor del campo de nombre
    correoInput.value = ''; // Borra el valor del campo de correo
    mensajeInput.value = ''; // Borra el valor del campo de mensaje
}

// Obtén el formulario y el modal
const form = document.querySelector('form');
const modal = document.getElementById('confirmacion-modal');
const closeModal = document.getElementById('close-modal');

// Agrega un evento al formulario para mostrar el modal y reiniciar los campos
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe normalmente
    modal.style.display = 'block'; // Muestra el modal
    reiniciarCampos(); // Llama a la función para reiniciar los campos
});

// Agrega un evento para cerrar el modal al hacer clic en la "X"
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Oculta el modal
});

//evento para cerrar el modal si el usuario hace clic fuera del modal
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'; // Oculta el modal
        reiniciarFormulario(); // Llama a la función para reiniciar el formulario
    }
});




