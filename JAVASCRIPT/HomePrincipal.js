// Seleccionar elementos
const userIcon = document.getElementById('UserIcono');
const menuHamburguesa = document.getElementById('menuHamburguesa');
const cerrarIcon = document.getElementById('cerrarMenu');
const logoutBtn = document.getElementById('logout');

// Mostrar menú al hacer clic en el ícono de usuario
userIcon.addEventListener('click', () => {
    menuHamburguesa.classList.add('mostrar');
});

// Ocultar menú al hacer clic en el ícono de cerrar
cerrarIcon.addEventListener('click', () => {
    menuHamburguesa.classList.remove('mostrar');
});

// Acción de cerrar sesión
logoutBtn.addEventListener('click', () => {
    alert('Cerrando sesión...');
    // Redirigir o realizar acción de cierre de sesión
    window.location.href = 'InicioSesion.html';
});
