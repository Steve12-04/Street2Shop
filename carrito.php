<?php session_start(); ?>

<!DOCTYPE html>
<html>
<head>
    <title>Carrito</title>
</head>
<body>

<h1>Tu carrito 🛒</h1>

<?php
$total = 0;

if (!empty($_SESSION['carrito'])) {
   foreach ($_SESSION['carrito'] as $index => $item) {
        echo "<p>{$item['nombre']} - S/ {$item['precio']}</p>";
    echo "<a href='eliminar.php?index=$index'>Eliminar ❌</a>";
        $total += $item['precio'];

    }

    echo "<h3>Total: S/ $total</h3>";
} else {
    echo "<p>Carrito vacío</p>";
}
?>

<a href="index.php">Seguir comprando</a>

</body>
</html>