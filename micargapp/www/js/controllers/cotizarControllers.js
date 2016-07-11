
(function () {
    'use strict'
angular.module('app.Controllers').controller('cotizarCtrl', cotizarCtrl);

    cotizarCtrl.$inject = ['$scope','localStorageService','cotizarService','$ionicPopup','$state','$stateParams']

    function cotizarCtrl($scope,localStorageService,cotizarService,$ionicPopup,$state,$stateParams) {
        var access_token = localStorageService.get("access_token");
            console.log(access_token)
        $scope.datos = {};

      
          cotizarService.list(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    console.log(data.cotizacion)
                    $scope.datos= data.cotizacion;
                   
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
})()
