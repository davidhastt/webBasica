 
    
    // Inicializar el mapa
    var map = L.map('map').setView([51.505, -0.09], 13); // Cambia las coordenadas y el nivel de zoom según tu ubicación deseada

    // Agregar una capa de mapa base (por ejemplo, OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

