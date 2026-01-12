document.addEventListener('DOMContentLoaded', () => {
    
    const btnLogin = document.getElementById('btnLogin');
    const emailInput = document.getElementById('emailInput');

    if (btnLogin && emailInput) {
        btnLogin.addEventListener('click', () => {
            const emailValue = emailInput.value.trim();

            if (emailValue === "") {
                alert("Por favor, ingresa tu correo electrónico.");
            } else {
                localStorage.setItem('usuarioAgenda', emailValue);
                
                window.location.href = "pages/principal.html"; 
            }
        });
    }

    const displayNombre = document.getElementById('nombreUsuario');

    if (displayNombre) {
        const usuarioGuardado = localStorage.getItem('usuarioAgenda');

        if (usuarioGuardado) {
            const nombreLimpio = usuarioGuardado.split('@')[0];
            displayNombre.innerText = "Bienvenido " + nombreLimpio;
        } else {
            window.location.href = "../index.html";
        }
    }
});