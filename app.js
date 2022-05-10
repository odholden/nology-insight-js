import mapStyles from "./mapStyles.js";

const locations = {
    london: { lat: 51.51, lng: -0.1},
    bristol: { lat: 51.45, lng: -2.58},
    manchester: { lat: 53.48, lng: -2.24},
    edinburgh: { lat: 55.95, lng: -3.19},
    leeds: { lat: 53.8, lng: -1.55}
}

const initMap = (location) => {
    const map = createMap(location);
    const service = new google.maps.places.PlacesService(map);

    const request = {
        keyword: "Digital",
        location:  location,
        radius: '5000'
    }

    service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (const result of results) {
                const infowindow = createInfoWindow(result);
                const marker = createMarker(result, map);
                marker.addListener("click", () => {
                    infowindow.open({
                        anchor: marker,
                        map,
                        shouldFocus: false,
                    });
                });
            }
        }
    });
}

const createInfoWindow = ({name, vicinity}) => {
    return new google.maps.InfoWindow({
        content: `<h2>${name}</h2><p>${vicinity}</p>`,
    });
}

const createMarker = (result, map) => {
    return new google.maps.Marker({
        position: result.geometry.location,
        map: map,
        icon: "./images/purple-marker.png"
    });
}

const createMap = (location) => {
    return new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: location,
        styles: mapStyles
    });
}
  
window.initMap = () => initMap(locations.london);

const buttons = document.getElementsByTagName("button");
[...buttons].forEach(button => {
    button.addEventListener("click", (event) => {
        initMap(locations[event.target.value]);
    })
})