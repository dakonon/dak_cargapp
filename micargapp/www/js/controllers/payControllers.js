
(function () {
    'use strict'
angular.module('app.Controllers').controller('InvitacionCtrl', InvitacionCtrl);

    InvitacionCtrl.$inject = ['$scope','localStorageService','InvitacionService','$ionicPopup','$state']

    function InvitacionCtrl($scope,localStorageService,InvitacionService,$ionicPopup,$state) {
        var access_token = localStorageService.get("access_token");

        $scope.datos = {};

      
          EditPerfilService.invitacion(access_token).success(function(data) {
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



          
    }
})()
