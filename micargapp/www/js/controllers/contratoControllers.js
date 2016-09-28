(function () {
    'use strict'
angular.module('app.Controllers').controller('contratoCtrl', contratoCtrl);

    contratoCtrl.$inject = ['$scope','contratoService','PayService','localStorageService','$ionicPopup','$ionicLoading','$state','$stateParams','$cordovaGeolocation','geoService']

    function contratoCtrl($scope,contratoService,PayService,localStorageService,$ionicPopup,$ionicLoading,$state,$stateParams,$cordovaGeolocation,geoService) {         
         $ionicLoading.show({});
         var access_token = localStorageService.get("access_token");  
          $scope.ruta = onRuta;
          $scope.destino = onDestino;
         
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
         $scope.datos.latitude_destination = $stateParams.latitude_destination;   
         $scope.datos.latitude_origin = $stateParams.latitude_origin;   
         $scope.datos.longitude_destination = $stateParams.longitude_destination;   
         $scope.datos.longitude_origin = $stateParams.longitude_origin;            
         $ionicLoading.hide();
         contratoService.send(access_token,$scope.datos.id_contract).success(function(data) {
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

        PayService.pay(access_token,$scope.datos.id_contract).success(function(data) {
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
            
        

         function onRuta(id){
            $ionicLoading.show({});

            navigator.geolocation.getCurrentPosition(function(pos) {
                var miUbicacion = {}
                miUbicacion.lat = pos.coords.latitude;
                miUbicacion.lng = pos.coords.longitude;

                 var parametros = {"contract_id": 1,                  
                                      "latitude":  miUbicacion.lat,
                                   "longitude": miUbicacion.lng
                                   }

                geoService.send(access_token,parametros).success(function(data) {
                        console.log("prueba");
        
                        console.log(data);
                        if(data.validacion == 'ok')
                           {   
                                 $ionicLoading.hide();
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


      

             

            }, function(error) {
                $ionicLoading.hide();
                $ionicPopup.alert({
                    title: 'Error de localización',
                    template: error.message,
                    okType: 'button-assertive'
                });
            })
        }


          function onDestino(id){             
               
                    var status = 12
                   var parametros = JSON.stringify({"contract_id": id,
                                             "status": status
                                         })

                    
                         contratoService.destino(access_token,parametros).success(function(data) {
                            if(data.validacion == 'ok')
                               {                                    
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
                                template: 'Por favor verifica tu internet!'
                            });
                        });

         } 



    }
       
})()
