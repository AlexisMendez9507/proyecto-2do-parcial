<?php
include 'db.php';

// Obtener todas las ubicaciones de la base de datos
$sql = "SELECT * FROM locations";
$result = $conn->query($sql);

$locations = [];
while ($row = $result->fetch_assoc()) {
    $locations[] = $row;
}

// Devolver las ubicaciones como JSON
header('Content-Type: application/json');
echo json_encode($locations);
?>
