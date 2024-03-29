mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    // style: 
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 9 // starting zoom
});


 const marker = new mapboxgl.Marker({color:"red"})
    .setLngLat(listing.geometry.coordinates) //listing.geometry.coordinates
    .setPopup(
        new mapboxgl.Popup({offset: 25})
        .setHTML(`<h4>${listing.title}</h4><p>Exact location provided after booking.</p>`)
    )
    .addTo(map);

// const popup = new mapboxgl.Popup({offset: 25})
//     .setLngLat(listing.geometry.coordinates)
//     .setHTML(`<h4>${Location}</h4><p>Exact location provided after booking.</p>`)
//     .addTo(map)

