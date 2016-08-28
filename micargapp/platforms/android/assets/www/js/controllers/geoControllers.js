(function () {
    'use strict'
angular.module('app.Controllers').controller('GeolocationCtrl', GeolocationCtrl);

    GeolocationCtrl.$inject = ['$scope','$cordovaGeolocation','geoService','localStorageService','$ionicPopup']

    function GeolocationCtrl($scope,$cordovaGeolocation,geoService,localStorageService,$ionicPopup) {  
        var access_token = localStorageService.get("access_token");  
        $scope.ruta = onRuta;
         function onRuta(id){

           var posOptions = {timeout: 10000, enableHighAccuracy: false};
            $cordovaGeolocation
              .getCurrentPosition(posOptions)
              .then(function (position) {


                  var lat  = position.coords.latitude
                  var long = position.coords.longitude
                  alert(lat + " --- " + long);
                    var parametros = new FormData();
                    
                    parametros.append("latitude", lat);
                    parametros.append("longitude", long);
                         geoService.send(access_token,parametros).success(function(data) {
                            if(data.validacion == 'ok')
                               {   
                                   
                               }
                            else{
                                var alertPopup = $ionicPopup.alert({
                                    title: 'Error al entrar!',
                                    template: data.mensaje + '!'
                                });
                            }
                        }).error(function(data) {
                            var alertPopup = $ionicPopup.alert({
                                title: 'Error al enviar!',
                                template: 'Por favor verifica tu correo!'
                            });
                        });



              }, function(err) {
                // error
            });         
        }
    }
       
})()

