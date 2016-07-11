
(function () {
    'use strict'
angular.module('app.Controllers').controller('cotizarCtrl', cotizarCtrl);

    cotizarCtrl.$inject = ['$scope','localStorageService','cotizarService','$ionicPopup','$state','$stateParams']

    function cotizarCtrl($scope,localStorageService,cotizarService,$ionicPopup,$state,$stateParams) {
        var access_token = localStorageService.get("access_token");
        console.log($stateParams.id);
        $scope.datos = {};

      
          cotizarService.list(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    
                    $scope.datos= data.datos;
                   
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
