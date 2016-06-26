angular.module('app.controllers', [])
  
.controller('UserRegisterCtrl', function($scope, RegisterService, $ionicPopup, $state) {
    $scope.data = {};
    $scope.register = function(){
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

})


.controller('LoginCtrl', function($scope, localStorageService, LoginService, $ionicPopup,$state) {
  /*  var LocalStorage = require('json-localstorage');
    var localStorage = new LocalStorage();
*/

    $scope.data = {};
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            if(data.validacion == 'ok')
               {
                   localStorageService.set('access_token', data.access_token);                 
                   $state.go('tab.cotizar_cliente');             

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
})

.controller('RecoverCtrl', function($scope, RecoverService, $ionicPopup, $state) {
    $scope.data = {};
    $scope.recover = function() {
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
})


.controller('InvitacionCtrl', function($scope, localStorageService, InvitacionService, $ionicPopup, $state) {

    
    var access_token = localStorageService.get("access_token");

    $scope.data = {};
    // $scope.recover = function(){

        InvitacionService.Invitacion(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    // var alertPopup = $ionicPopup.alert({
                    //     title: 'Mensaje Enviado!',
                    //     template: data.solicitudes + '!',
                    // });
                    console.log("DATA: ", data.solicitudes[0]);
                    // $state.go('home');
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


});

