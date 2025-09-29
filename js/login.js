// login.js - Validación simple del formulario de login (educativo)
(function () {
    const form = document.getElementById('login-form');
    const errorEl = document.getElementById('login-error');


    // Credenciales 
    const VALID_USER = 'admin';
    const VALID_PASS = '1234';


    form.addEventListener('submit', function (e) {
        e.preventDefault();
        errorEl.textContent = '';
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();


        if (username === VALID_USER && password === VALID_PASS) {
            // Guardamos una señal en localStorage (sólo para demo)
            localStorage.setItem('isLoggedIn', 'true');
            // Redirigimos a la página principal
            window.location.href = 'index.html';
        } else {
            errorEl.textContent = 'Usuario o contraseña incorrectos.';
        }
    });
})();