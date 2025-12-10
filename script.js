// Saludo dinámico según la hora del día
function actualizarSaludo() {
    const saludo = document.getElementById("saludo");
    if (!saludo) return;

    const hora = new Date().getHours();
    let texto = "Bienvenido(a)";

    if (hora >= 5 && hora < 12) texto = "Buenos días y bienvenido(a)";
    else if (hora >= 12 && hora < 19) texto = "Buenas tardes y bienvenido(a)";
    else texto = "Buenas noches y bienvenido(a)";

    saludo.textContent = texto + " a Puente de Enseñanza Digital";
}

actualizarSaludo();

// --- Lógica del FAQ: abrir/cerrar respuestas ---
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
        // Cerrar otros, si quieres que solo uno esté abierto:
        // faqItems.forEach(i => { if (i !== item) i.classList.remove("activo"); });

        item.classList.toggle("activo");
    });
});

// --- Simulación de envío de formulario ---
function enviarFormulario(event) {
    event.preventDefault();

    const mensajeEstado = document.getElementById("mensaje-estado");
    const nombre = document.getElementById("nombre").value.trim();

    if (mensajeEstado) {
        mensajeEstado.textContent =
            (nombre ? `${nombre}, ` : "") +
            "tu interés ha sido registrado exitosamente. Pronto recibirás más información por correo electrónico.";
        mensajeEstado.style.color = "#16a34a";
    }

    event.target.reset();
    return false;
}
