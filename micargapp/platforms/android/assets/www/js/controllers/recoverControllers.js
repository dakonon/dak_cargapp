
(function () {
    'use strict'
angular.module('app.Controllers').controller('RecoverCtrl', RecoverCtrl);

    RecoverCtrl.$inject = ['$scope','RecoverService','$ionicPopup','$state']

    function RecoverCtrl($scope,RecoverService,$ionicPopup,$state) {
         $scope.data = {};

         $scope.recover = onRecover;

          function onRecover(){
                RecoverService.recoverAccount($scope.data.email).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    var alertPopup = $ionicPopup.alert({
                        title: 'Mensaje Enviado!',
                        template: data.mensaje + '!',
                    });
                    $state.go('home');
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







