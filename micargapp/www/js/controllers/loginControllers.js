
(function () {
    'use strict'
angular.module('app.Controllers').controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope','$q','$ionicLoading','localStorageService','LoginService','$ionicPopup','$state']

    function LoginCtrl($scope,$q,$ionicLoading,localStorageService,LoginService,$ionicPopup,$state) {
         $scope.data = {};

         $scope.login = onLogin;

          function onLogin(){
              $ionicLoading.show({});
              console.log(1);
                LoginService.token($scope.data.username, $scope.data.password).success(function(data) {
                  console.log(data);
                if(data.validacion == 'ok')
                   {
                    console.log(3);
                       $ionicLoading.hide();
                       localStorageService.set('access_token', data.access_token);
                       $state.go('transportador-3-inicio');


                   }
                else{
                  console.log(4);
                     $ionicLoading.hide();
                    var alertPopup = $ionicPopup.alert({
                        title: 'Error al entrar!',
                        template: data.mensaje + '!'
                    });
                }
            }).error(function(data) {
                 $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                    title: 'Error al entrar!',
                    template: 'Por favor verifica tus credenciales!'
                });
            });
          }
    }
})()












