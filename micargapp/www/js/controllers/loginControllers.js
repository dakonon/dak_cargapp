
(function () {
    'use strict'
angular.module('app.Controllers').controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope','$q','localStorageService','LoginService','$ionicPopup','$state']

    function LoginCtrl($scope,$q,localStorageService,LoginService,$ionicPopup,$state) {
         $scope.data = {};

         $scope.login = onLogin;

          function onLogin(){
                LoginService.token($scope.data.username, $scope.data.password).success(function(data) {
                if(data.validacion == 'ok')
                   {
                       localStorageService.set('access_token', data.access_token);
                       $state.go('transportador-3-inicio');


                   }
                else{
                    var alertPopup = $ionicPopup.alert({
                        title: 'Error al entrar!',
                        template: data.mensaje + '!'
                    });
                }
            }).error(function(data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Error al entrar!',
                    template: 'Por favor verifica tus credenciales!'
                });
            });
          }
    }
})()












