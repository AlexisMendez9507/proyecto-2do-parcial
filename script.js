// Inicializar el mapa
const map = L.map('map').setView([19.4326, -99.1332], 12);

// Cargar el mapa base desde OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Cargar marcadores desde la API
fetch('api.php')
    .then(response => response.json())
    .then(data => {
        data.forEach(location => {
            const marker = L.marker([location.lat, location.lng]).addTo(map);
            marker.bindPopup(`<b>${location.nombre}</b><br>${location.descripcion}`);
        });
    })
    .catch(error => console.error('Error cargando ubicaciones:', error));
