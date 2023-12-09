let h2 = document.querySelector('h2');
var map;
console.log(map);

function success(position){
console.log(position.coords.latitude, position.coords.longitude);
h2.textContent= `Latitude: ${position.coords.latitude}, Longitude${position.coords.longitude}`;

if (map == undefined){
    map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 15);
} else {
    map.remove();   
    map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 15);
}

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
    .bindPopup('Você está aqui')
    .openPopup();
}

function error (error){
    console.log(error);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy:true,
    timeout: 5000
});

