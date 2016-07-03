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


.controller('Login', function($scope, localStorageService, LoginService, $ionicPopup,$state) {
  /*  var LocalStorage = require('json-localstorage');
    var localStorage = new LocalStorage();
*/

    $scope.data = {};
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
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

    var things;
    var access_token = localStorageService.get("access_token");
    $scope.data = {};
    InvitacionService.Invitacion(access_token).success(function(data) {
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

})

.controller('Transportador3Inicio', function($scope, localStorageService, InvitacionService, $ionicPopup, $state) {

    var things;
    var access_token = localStorageService.get("access_token");
    $scope.data = {};
    InvitacionService.Invitacion(access_token).success(function(data) {
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

})


.controller('CompanyCtrl', function($scope, localStorageService, CompanyService, $ionicPopup, $state) {

    
    var access_token = localStorageService.get("access_token");

    $scope.datos = {};
    // $scope.recover = function(){

        CompanyService.List(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    
                    $scope.datos= data.empresas;
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


})

.controller('EditPerfilCtrl', function($scope, localStorageService, EditPerfilService, $ionicPopup, $state) {

    
    var access_token = localStorageService.get("access_token");

    $scope.datos = {};
    // $scope.recover = function(){

        EditPerfilService.List(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    
                    $scope.datos= data.datos;
                    console.log(data.datos)
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


})

.controller('NoticiasCtrl', function($scope, localStorageService, NoticiasService, $ionicPopup, $state) {

    
    var access_token = localStorageService.get("access_token");

    $scope.datos = {};
    // $scope.recover = function(){

        NoticiasService.List(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    $scope.datos= data.noticias;
                    console.log(data.datos)
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


})

.controller('Shell',function(localStorageService){
    var access_token = localStorageService.get("access_token");

    var vm = this;

    vm.messages = [
      {
        'username': 'Matt',
        'content': 'Hi!'
      },
      {
        'username': 'Elisa',
        'content': 'Whats up?'
      },
      {
        'username': 'Matt',
        'content': 'I found this nice AngularJS Directive'
      },
      {
        'username': 'Elisa',
        'content': 'Looks Great!'
      }
    ];

    vm.username = access_token;

    vm.sendMessage = function(message, username) {
      if(message && message !== '' && username) {
        vm.messages.push({
          'username': username,
          'content': message
        });
      }
    }

  })


