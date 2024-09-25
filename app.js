document.addEventListener('DOMContentLoaded', () => {
    const map = new OlaMaps.Map('map', {
        center: [77.4126, 23.2599], // Coordinates for Bhopal, India
        zoom: 12
    });

    // Add a marker
    const marker = new OlaMaps.Marker({
        position: [77.4126, 23.2599],
        map: map,
        title: 'Bhopal'
    });
})
;
