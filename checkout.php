<?php include("header.php"); ?>

<div class="checkout-container">

    <form id="form-checkout" class="checkout-form" action="boleta.php" method="POST">
        <h2>Finalizar Compra 🧾</h2>

        <div class="input-group">
            <input type="text" name="nombre" required>
            <label>Nombre completo</label>
        </div>

        <div class="input-group">
            <input 
                type="text" 
                name="dni" 
                placeholder="DNI" 
                maxlength="8"
                pattern="[0-9]{8}" 
            required>
            <label>DNI (8 dígitos)</label>
        </div>

        <div class="input-group">
            <input type="text" name="direccion" required>
            <label>Dirección</label>
        </div>

        <div class="input-group">
            <input 
                type="text" 
                name="celular" 
                placeholder="Celular" 
                maxlength="9"
                pattern="[0-9]{9}" 
            required>
            <label>Celular</label>
        </div>
        <div class="input-group">
    <select id="metodo-pago">
    <option value="tarjeta">Tarjeta</option>
    <option value="yape">Yape</option>
</select>
</div>



<!-- TARJETA -->
<div id="form-tarjeta">

    <div class="input-group">
        <input type="text" id="numero" required>
        <label>Número de tarjeta</label>
    </div>

    <div class="input-group">
        <input type="text" id="nombre-tarjeta" required>
        <label>Nombre en la tarjeta</label>
    </div>

    <div class="input-group">
        <input type="text" id="fecha" required>
        <label>MM / AA</label>
    </div>

    <div class="input-group">
        <input type="text" id="cvv" required>
        <label>CVV</label>
    </div>

</div>

<!-- YAPE -->
<div id="form-yape" style="display:none; text-align:center; margin-top:15px;">
    <p>Paga con Yape escaneando el QR:</p>
    <img src="img/qr-yape.png" alt="QR Yape" style="width:200px; border-radius:10px;">
</div>

<p id="estado"></p>


        <button type="submit">Generar Boleta</button>
    

</div>
</form>

<?php include("footer.php"); ?>