(function () {
    'use strict'
angular.module('app.Controllers').controller('contratoCtrl', contratoCtrl);

    contratoCtrl.$inject = ['$scope','contratoService','localStorageService','$ionicPopup','$state','$stateParams','$cordovaGeolocation','geoService']

    function contratoCtrl($scope,contratoService,localStorageService,$ionicPopup,$state,$stateParams,$cordovaGeolocation,geoService) {         
         var access_token = localStorageService.get("access_token");  
          $scope.ruta = onRuta;
         console.log($stateParams.name)  
         $scope.datos = {};
         $scope.datos.nombre = $stateParams.name; 
         $scope.datos.origen = $stateParams.origen;
         $scope.datos.destino = $stateParams.destino;
         $scope.datos.fecha = $stateParams.fecha;
         $scope.datos.peso = $stateParams.peso;
         $scope.datos.payment = $stateParams.payment;
         $scope.datos.company_avatar = $stateParams.company_avatar;               
         $scope.datos.pkcotizaremp = $stateParams.pkcotizaremp;  
         $scope.datos.company_mail = $stateParams.company_mail;   
         $scope.datos.id_contract = $stateParams.id_contract;            


         contratoService.send(access_token,$scope.datos.id_contract).success(function(data) {
            if(data.validacion == 'ok')
               {   
                   
                    console.log(data)
                    
                   
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
            
        
        function onRuta(id){

           var posOptions = {timeout: 10000, enableHighAccuracy: false};
            $cordovaGeolocation
              .getCurrentPosition(posOptions)
              .then(function (position) {


                  var lat  = position.coords.latitude
                  var long = position.coords.longitude                 
               
                 
                   var parametros = JSON.stringify({"contract_id": $scope.datos.id_contract,
                                             "latitude": String(lat), "longitude": String(long)})

                    
                         geoService.send(access_token,parametros).success(function(data) {
                            if(data.validacion == 'ok')
                               {   
                                   console.log(data)
                                   var alertPopup = $ionicPopup.alert({
                                        title: 'Perfecto',
                                        template: data.mensaje
                                    });
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
