
(function () {
    'use strict'
angular.module('app.Controllers').controller('EditPerfilCtrl', EditPerfilCtrl);

    EditPerfilCtrl.$inject = ['$scope','localStorageService','cotizarService','$ionicPopup','$state']

    function EditPerfilCtrl($scope,localStorageService,cotizarService,$ionicPopup,$state) {
        var access_token = localStorageService.get("access_token");

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
