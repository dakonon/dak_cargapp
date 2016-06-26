angular.module('app.controllers', [])
  



.controller('CompanyCtrl', function($scope, localStorageService, CompanyService, $ionicPopup, $state) {

    
    var access_token = localStorageService.get("access_token");

    $scope.datos = {};
    // $scope.recover = function(){

        CompanyService.List(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    
                    $scope.datos= data.empresas;
                    // var alertPopup = $ionicPopup.alert({
                    //     title: 'Mensaje Enviado!',
                    //     template: data.solicitudes + '!',
                    // });
                    console.log($scope.datos)
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

