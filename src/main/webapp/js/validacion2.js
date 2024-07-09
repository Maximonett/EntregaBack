document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById("miFormulario");
    if (!formulario) {
        console.error("Error: No se encontró el formulario.");
        return;
    }

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener valores de los campos del formulario
        //.trim quita espacios en blanco
        var mail = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();
        
        // Obtener referencias a los elementos de error
        var emailError = document.getElementById("emailError");
        var passwordError = document.getElementById("passwordError");

        // Expresión regular para validar email
        var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Limpiar mensajes de error
        emailError.textContent = "";
        passwordError.textContent = "";

        // Validar cada campo
        if (mail === "") {
            emailError.textContent = "El email no puede estar vacío";
            return;
        }
        if (!regexEmail.test(mail)) {
            emailError.textContent = "El email no es válido";
            return;
        }
        if (password === "") {
            passwordError.textContent = "La contraseña no puede estar vacía";
            return;
        }

        alert("Has iniciado sesión con éxito");
    });

    // Desactivar la validación del navegador
    formulario.setAttribute("novalidate", "true");
});
