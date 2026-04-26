
mapboxgl.accessToken = mapToken;

const coordinates = (listing.geometry && listing.geometry.coordinates.length === 2) 
    ? listing.geometry.coordinates 
    : [77.209, 28.613]; 

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: coordinates, 
    zoom: 9
});


if (listing.geometry && listing.geometry.coordinates.length === 2) {
    const marker = new mapboxgl.Marker({ color: "red" })
        .setLngLat(coordinates)
        .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`
            )
        )
        .addTo(map);
}