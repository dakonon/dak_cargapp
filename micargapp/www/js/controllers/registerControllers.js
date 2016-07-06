
(function () {
    'use strict'
angular.module('app.Controllers').controller('UserRegisterCtrl', UserRegisterCtrl);

    UserRegisterCtrl.$inject = ['$scope','RegisterService','$ionicPopup','$state']

    function UserRegisterCtrl($scope,RegisterService,$ionicPopup,$state) {
         $scope.data = {};

         $scope.register = onRegister;

          function onRegister(){
           RegisterService.registerUser($scope.data.name, $scope.data.email, 
               $scope.data.phone, $scope.data.password,
               $scope.data.password_repeat, $scope.data.avatar,
               $scope.data.type).success(function(data){
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
                  }).error(function(data){
                  var alertPopup = $ionicPopup.alert({
                      title: 'Error',
                      template: ''
                  });
               });
          }
    }
})()

