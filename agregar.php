<?php
session_start();

$id = $_GET['id'];
$nombre = $_GET['nombre'];
$precio = $_GET['precio'];

$item = [
    "id" => $id,
    "nombre" => $nombre,
    "precio" => $precio
];

$_SESSION['carrito'][] = $item;

header("Location: carrito.php");
?>