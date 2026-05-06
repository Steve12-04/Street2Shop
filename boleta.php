<?php include("header.php"); ?>

<?php
$nombre = $_POST['nombre'] ?? '';
$dni = $_POST['dni'] ?? '';
$direccion = $_POST['direccion'] ?? '';
$celular = $_POST['celular'] ?? '';
?>

<div class="boleta-container">

    <div class="boleta">

        <h2>🧾 Boleta de Compra</h2>

        <div class="cliente" id="cliente-data"></div>

<script>
function cargarCliente() {
    const cliente = JSON.parse(localStorage.getItem("cliente")) || {};

    document.getElementById("cliente-data").innerHTML = `
        <p><strong>Cliente:</strong> ${cliente.nombre || ''}</p>
        <p><strong>DNI:</strong> ${cliente.dni || ''}</p>
        <p><strong>Dirección:</strong> ${cliente.direccion || ''}</p>
        <p><strong>Celular:</strong> ${cliente.celular || ''}</p>
    `;
}

document.addEventListener("DOMContentLoaded", cargarCliente);
</script>

        <hr>

        <h3>Productos:</h3>
        <ul id="lista-boleta"></ul>

        <h3 id="total-boleta"></h3>

        <button onclick="window.print()">🖨️ Imprimir</button>

    </div>

</div>

<!-- =========================
     🧾 SCRIPT BOLETA (CARRO DESDE LOCALSTORAGE)
========================= -->
<script>
function cargarBoleta() {

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const lista = document.getElementById("lista-boleta");
    const total = document.getElementById("total-boleta");

    if (!lista || !total) return;

    if (carrito.length === 0) {
        lista.innerHTML = "<li>Carrito vacío</li>";
        total.textContent = "";
        return;
    }

    lista.innerHTML = "";

    let suma = 0;

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - S/ ${item.precio}`;
        lista.appendChild(li);
        suma += item.precio;
    });

    total.textContent = "Total: S/ " + suma.toFixed(2);

    // 🧹 limpiar carrito después de mostrar boleta
    localStorage.removeItem("carrito");
}

document.addEventListener("DOMContentLoaded", cargarBoleta);
</script>

<?php include("footer.php"); ?>