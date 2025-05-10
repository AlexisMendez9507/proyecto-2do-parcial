// Inicializar el mapa
const map = L.map('map').setView([19.4326, -99.1332], 12);

// Cargar el mapa base desde OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Manejar la búsqueda de ubicaciones
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const locationButton = document.getElementById('location-btn');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
        fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const location = data[0];
                    const { lat, lon } = location;
                    map.setView([lat, lon], 15);
                    L.marker([lat, lon]).addTo(map)
                        .bindPopup(`<b>${location.display_name}</b>`)
                        .openPopup();
                } else {
                    alert('No se encontró ninguna ubicación con ese nombre.');
                }
            })
            .catch(error => console.error('Error en la búsqueda:', error));
    }
});

// Función para buscar la ubicación actual
function buscarUbicacionActual() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            L.marker([latitude, longitude]).addTo(map)
                .bindPopup(`<b>Tu ubicación actual</b>`)
                .openPopup();
            map.setView([latitude, longitude], 15);
        }, (error) => {
            console.error('Error obteniendo la ubicación:', error);
        });
    } else {
        alert('Tu navegador no soporta la geolocalización.');
    }
}

// Evento para el botón de ubicación actual
locationButton.addEventListener('click', buscarUbicacionActual);
