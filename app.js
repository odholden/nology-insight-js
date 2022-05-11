const london = { lat: 51.51, lng: -0.1};

const locations = {
    lond: { lat: 51.51, lng: -0.1},
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
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "hue": "#ff0000"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ff0000"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "color": "#ff0000"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#9b30f2"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#7620bd"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.landcover",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#c4c6f4"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "color": "#d3d4f3"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "weight": "0.01"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "weight": "0.01"
                    }
                ]
            },
            {
                "featureType": "transit.station.bus",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#eeeeff"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
    });
}
  
window.initMap = () => initMap(locations.london);

const buttons = document.getElementsByTagName("button");
[...buttons].forEach(button => {
    button.addEventListener("click", (event) => {
        initMap(locations[event.target.value]);
    })
})