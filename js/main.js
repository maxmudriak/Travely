;(function($){
    "use strict";
    $( document ).ready(function() {

        //Slider !!!
        var teamSlider = $('.ba-slider');
        teamSlider.slick({
            slide: '.ba-slide',
            arrows: true,
            prevArrow: '.ba-slide-prev',
            nextArrow: '.ba-slide-next',
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 4000
        });
        //Slider !!!
        var joinSlider = $('.ba-join-slider');
        joinSlider.slick({
            slide: '.ba-join-slide',
            arrows: true,
            prevArrow: '.ba-join-slider-prev',
            nextArrow: '.ba-join-slider-next',
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 4000
        });




    });






//GoogleMaps
    function initMap() {
        var mapDiv = document.getElementById('map'),
            poltavaAddress = mapDiv.innerHTML;

        var rome = {
            lat: 41.902783,
            lng: 12.496366
        };
        var madrid = {
            lat: 40.416775,
            lng: -3.703790
        };
        var paris = {
            lat: 46.286983,
            lng: 5.422852
        };

        var baMap = new google.maps.Map(mapDiv, {
            zoom: 6,
            center: rome,
            disableDefaultUI: true,
            styles:[
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#bdbdbd"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#dadada"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#c9c9c9"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    }
                ]
        });
        var marker = new google.maps.Marker({
            position: rome,
            map: baMap,
            animation: google.maps.Animation.BOUNCE
        });
        var marker = new google.maps.Marker({
            position: madrid,
            map: baMap,
            animation: google.maps.Animation.BOUNCE
        });
        var marker = new google.maps.Marker({
            position: paris,
            map: baMap,
            animation: google.maps.Animation.BOUNCE
        });

        // Center map on window resize
        google.maps.event.addDomListener(window, "resize", function() {
            var center = baMap.getCenter();
            google.maps.event.trigger(baMap, "resize");
            baMap.setCenter(center);
        });

    }
    window.onload = initMap;
})(jQuery);



