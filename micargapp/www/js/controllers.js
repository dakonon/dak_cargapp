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

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup,$state, StorageService) {
    

   

    $scope.data = {};
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            if(data.validacion == 'ok')
               { 

                    var things = data.access_token;
    
    
                     $scope.add = function (things) {
                        StorageService.add(things);
                    };

                     

                    

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

.controller('InvitacionCtrl', function($scope, InvitacionService, $ionicPopup, $state,StorageService) {
    var things="prueba";
     $scope.add = function (things) {
                        StorageService.add(things);
                    };
     things = StorageService.getAll();
    

    console.log(things)

    $scope.data = {};
    $scope.recover = function(){
        InvitacionService.Invitacion($scope.data.email).success(function(data) {
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
});