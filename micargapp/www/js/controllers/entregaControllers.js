(function () {
    'use strict'
angular.module('app.Controllers').controller('entregaCtrl', entregaCtrl);

    entregaCtrl.$inject = ['$scope','contratoService','localStorageService','$ionicPopup','$state','$stateParams','$cordovaGeolocation','geoService']

    function entregaCtrl($scope,contratoService,localStorageService,$ionicPopup,$state,$stateParams,$cordovaGeolocation,geoService) {         
         var access_token = localStorageService.get("access_token");  
         
          $scope.finalizar = onFinalizar;
           $scope.datos = {};
         $scope.datos.id_contract = $stateParams.id;            

         function onFinalizar(){  
               
            var parametros = new FormData();
            parametros.append("contract_id", $scope.datos.id_contract);
            parametros.append("codigo", $scope.datos.codigo);
            parametros.append("sello1", $scope.datos.sello1);
            parametros.append("sello2", $scope.datos.sello2);
            console.log($scope.datos.sello2)
            console.log($scope.datos.id_contract)
            console.log($scope.datos.sello1)
            console.log($scope.datos.codigo)
                    
                         contratoService.finalizar(access_token,parametros).success(function(data) {
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

         } 

    }
       
})()
