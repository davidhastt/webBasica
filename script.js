 
    //Este script muestra los ultimos sismos en los ultimos 30 dias, en todo el mundo
    // Inicializar el mapa
    var map = L.map('map').setView([19.28676640168722, -99.67715832406732], 4); // Cambia las coordenadas y el nivel de zoom según tu ubicación deseada

    // Agregar una capa de mapa base (por ejemplo, OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);



            // Cargar datos GeoJSON desde el endpoint
            fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                // Crear una capa de GeoJSON y agregarla al mapa
                L.geoJSON(data, {
                    pointToLayer: function (feature, latlng) {
                        return L.circleMarker(latlng, {
                            radius: 5, // Tamaño del marcador
                            fillColor: 'red', // Color de relleno
                            color: 'black', // Color del borde
                            weight: 1, // Grosor del borde
                            opacity: 1, // Opacidad
                            fillOpacity: 0.8 // Opacidad del relleno
                        });
                    },
                    onEachFeature: function (feature, layer) {
                        // Puedes personalizar la información emergente aquí
                        layer.bindPopup('Magnitud: ' + feature.properties.mag + '<br>Ubicación: ' + feature.properties.place);
                    }
                }).addTo(map);
            });
