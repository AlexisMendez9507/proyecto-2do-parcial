<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit;
}
$username = $_SESSION['username'];
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mapa Interactivo</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css">
</head>
<body>
    <div class="container">
        <h1>Mapa Interactivo</h1>
        <form id="search-form">
            <input id="search-input" type="text" placeholder="Buscar ubicación...">
            <button type="submit">Buscar</button>
        </form>
        <button id="location-btn">Buscar mi ubicación</button>
        <div id="map"></div>
    </div>

    <!-- Scripts -->
    <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"></script>
    <script src="script.js"></script>
</body>
</html>
