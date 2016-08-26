angular.module('app.Controllers')
.controller('mapaCtrl', function($scope, $ionicLoading, $ionicPopup,$stateParams){
    
    var origen = {
        lat: parseFloat($stateParams.latitude_origin),
        lng: parseFloat($stateParams.longitude_origin)
    }

    console.log(origen)

    var destino = {
        lat: parseFloat($stateParams.latitude_destination),
        lng: parseFloat($stateParams.longitude_destination)
    }

    var miUbicacion = {}

    function initMap(){
        var mapDiv = document.getElementById('map');

        var mapOptions={
            center: origen,
            zoom: 18
        }
      
        $scope.map = new google.maps.Map(mapDiv, mapOptions);
        traceRoute(origen,destino);
    }

      $scope.locateMe = function() {
            
            $ionicLoading.show({});

            navigator.geolocation.getCurrentPosition(function(pos) {

                miUbicacion.lat = pos.coords.latitude;
                miUbicacion.lng = pos.coords.longitude;

                $scope.map.setCenter(miUbicacion);

                $ionicLoading.hide();

            }, function(error) {
                $ionicLoading.hide();
                $ionicPopup.alert({
                    title: 'Error de localización',
                    template: error.message,
                    okType: 'button-assertive'
                });
            })
        }

     traceRoute = function(origen,destino){
            var directionsDisplay = new google.maps.DirectionsRenderer({
                map: $scope.map
            });

            var request = {
                destination: destino,
                origin: origen,
                travelMode: google.maps.TravelMode.DRIVING
            }

            var directionsService = new google.maps.DirectionsService();

            directionsService.route(request, function(response, status){
                if(status == google.maps.DirectionsStatus.OK){
                    directionsDisplay.setDirections(response);
                }
            })
        }    

    if(document.readyState === "completed"){
       
        initMap()

        
    } else {
         
        google.maps.event.addDomListener(window, 'load', initMap())
        
    }
})