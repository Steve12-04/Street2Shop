/* =========================
   🛒 CARRITO
========================= */

function obtenerCarrito() {
    try {
        const data = JSON.parse(localStorage.getItem("carrito"));
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

let carrito = obtenerCarrito();

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function mostrarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const total = document.getElementById("total");
    const btnComprar = document.getElementById("btn-comprar");

    if (!lista || !total) return;

    lista.innerHTML = "";
    let suma = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.nombre} - S/ ${item.precio}
            <button class="btn-eliminar" data-index="${index}">❌</button>
        `;
        lista.appendChild(li);
        suma += item.precio;
    });

    total.textContent = "Total: S/ " + suma.toFixed(2);

    if (btnComprar) {
        btnComprar.disabled = carrito.length === 0;
    }
}

/* eliminar */
document.addEventListener("click", (e) => {

    // eliminar
    if (e.target.classList.contains("btn-eliminar")) {
        const index = e.target.dataset.index;
        carrito.splice(index, 1);
        guardarCarrito();
        mostrarCarrito();
    }

    // comprar
    if (e.target.id === "btn-comprar") {

        if (carrito.length === 0) {
            alert("Carrito vacío 🛒");
            return;
        }

        window.location.href = "checkout.php";
    }
});

/* agregar */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-agregar")) {
        const nombre = e.target.dataset.nombre;
        const precio = parseFloat(e.target.dataset.precio);

        carrito.push({ nombre, precio });
        guardarCarrito();
        mostrarCarrito();
    }
});

/* =========================
   🧾 BOLETA
========================= */

function cargarBoleta() {

    const lista = document.getElementById("lista-boleta");
    const total = document.getElementById("total-boleta");

    const carritoLocal = JSON.parse(localStorage.getItem("carrito")) || [];

    if (!lista || !total) return;

    if (carritoLocal.length === 0) {
        console.warn("Carrito vacío");
        return;
    }

    lista.innerHTML = "";

    let suma = 0;

    carritoLocal.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - S/ ${item.precio}`;
        lista.appendChild(li);
        suma += item.precio;
    });

    total.textContent = "Total: S/ " + suma.toFixed(2);
}

/* =========================
   💳 CHECKOUT (YAPE / TARJETA)
========================= */

function initCheckout() {

    const form = document.getElementById("form-checkout");
    if (!form) return;

    const metodo = document.getElementById("metodo-pago");
    const tarjeta = document.getElementById("form-tarjeta");
    const yape = document.getElementById("form-yape");
    const estado = document.getElementById("estado");

    function toggleMetodo() {

    const metodo = document.getElementById("metodo-pago");

    const tarjetaInputs = document.querySelectorAll("#form-tarjeta input");

    if (metodo.value === "tarjeta") {

        document.getElementById("form-tarjeta").style.display = "block";
        document.getElementById("form-yape").style.display = "none";

        tarjetaInputs.forEach(i => i.setAttribute("required", "true"));

    } else {

        document.getElementById("form-tarjeta").style.display = "none";
        document.getElementById("form-yape").style.display = "block";

        tarjetaInputs.forEach(i => i.removeAttribute("required"));
    }
}

    metodo.addEventListener("change", toggleMetodo);
    toggleMetodo();

    form.addEventListener("submit", (e) => {
    e.preventDefault();

    const carritoLocal = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carritoLocal.length === 0) {
        alert("Carrito vacío 🛒");
        return;
    }

    estado.textContent = "Procesando pago... ⏳";

    setTimeout(() => {

        estado.textContent = "Pago aprobado ✅";

        setTimeout(() => {
            const cliente = {
    nombre: document.querySelector("[name='nombre']").value,
    dni: document.querySelector("[name='dni']").value,
    direccion: document.querySelector("[name='direccion']").value,
    celular: document.querySelector("[name='celular']").value
};

localStorage.setItem("cliente", JSON.stringify(cliente));
            window.location.href = "boleta.php";
        }, 800);

    }, 1200);
});
}

/* =========================
   🚀 INICIALIZAR SEGÚN PÁGINA
========================= */

document.addEventListener("DOMContentLoaded", () => {

    // 🛒 carrito
    mostrarCarrito();

    // 🧾 boleta
    cargarBoleta();

    // 💳 checkout
    initCheckout();

    // 📦 abrir/cerrar carrito
    const btn = document.getElementById("btn-carrito");
    const carritoBox = document.getElementById("carrito");

    if (btn && carritoBox) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            carritoBox.style.display =
                carritoBox.style.display === "block" ? "none" : "block";
        });
    }

});