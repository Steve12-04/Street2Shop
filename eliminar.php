<?php
session_start();

$index = $_GET['index'];
unset($_SESSION['carrito'][$index]);

// Reorganiza el array
$_SESSION['carrito'] = array_values($_SESSION['carrito']);

header("Location: carrito.php");
?>