


angular.module('app.Controllers')
.controller('mapaCtrl', function($scope, $ionicLoading, $ionicPopup){
    var zocalo = {
        lat: 19.4318818,
        lng: -99.13343450000002
    }

    initMap = function(){
        var mapDiv = document.getElementById('map');

        var mapOptions={
            center: zocalo,
            zoom: 10
        }

        $scope.map = new google.maps.Map(mapDiv, mapOptions)
        console.log($scope.map)
    }

    if(document.readyState === "complete"){
        initMap()
    } else {
        google.maps.event.addDomListener(window, 'load', initMap());
    }

})