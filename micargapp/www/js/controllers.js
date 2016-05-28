angular.module('app.controllers', [])
  
.controller('userRegisterCtrl', function($scope) {

})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('notfound');
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
            var alertPopup = $ionicPopup.alert({
                title: 'Mensaje Enviado!',
                template: data.mensaje + '!'
            });
            $state.go('home');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Error al enviar!',
                template: 'Por favor verifica tu correo!'
            });
        });
    }
});