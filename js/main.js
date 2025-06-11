// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Scroll suave para enlaces internos
    const enlaces = document.querySelectorAll('a[href^="#"]');
    enlaces.forEach(function (enlace) {
        enlace.addEventListener("click", function (e) {
            e.preventDefault();
            const destino = document.querySelector(this.getAttribute("href"));
            if (destino) {
                destino.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Validación del formulario de contacto
    const formulario = document.getElementById("formulario-contacto");
    if (formulario) {
        formulario.addEventListener("submit", function (e) {
            e.preventDefault();

            const inputs = this.querySelectorAll("input, textarea");
            let valid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.border = "1px solid red";
                    valid = false;
                } else {
                    input.style.border = "1px solid #ccc";
                }
            });

            if (!valid) {
                alert("Por favor completa todos los campos.");
                return;
            }

            // Simulación de envío exitoso
            alert("¡Mensaje enviado con éxito! Gracias por contactarme.");

            this.reset(); // Limpiar campos
        });
    }
});
