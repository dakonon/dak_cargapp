
(function () {
    'use strict'
angular.module('app.Controllers').controller('NoticiasCtrl', NoticiasCtrl);

    NoticiasCtrl.$inject = ['$scope','localStorageService','NoticiasService','$ionicPopup','$state']

    function NoticiasCtrl($scope,localStorageService,NoticiasService,$ionicPopup,$state) {
        var access_token = localStorageService.get("access_token");

        $scope.datos = {};

      
          NoticiasService.list(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    $scope.datos= data.noticias;
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
