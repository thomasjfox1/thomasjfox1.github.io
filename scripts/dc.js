var bounds = [
    [-77.226609, 38.733842], // Southwest coordinates
    [-76.820447, 39.038098]  // Northeast coordinates
];

mapboxgl.accessToken = 'pk.eyJ1IjoidGhvbWFzamZveDEiLCJhIjoiYTU2MDA5MjUwNWRiYmRjNGQwY2Y1MzliYjcwNDI1YjQifQ.tXE2iD2Y-oXjV-H-s0LqHA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/thomasjfox1/cin61teo7001bckktxk58irja',
    center: [-77.031130, 38.896974], // starting position
    zoom: 11, // starting zoom
    minZoom: 11,
    maxZoom: 18,
    maxBounds: bounds // Sets bounds as max
});

// var sw = new mapboxgl.LngLat(-77.171510, 38.780583);
// var ne = new mapboxgl.LngLat(-76.880999, 39.013983);
// var llb = new mapboxgl.LngLatBounds(sw, ne);
//
// map.fitBounds([[
//     -77.171510, 38.780583
// ], [
//     -76.880999, 39.013983
// ]]);
