
(function () {
    'use strict'
angular.module('app.Controllers').controller('readNotificacionCtrl', readNotificacionCtrl);

    readNotificacionCtrl.$inject = ['$scope','localStorageService','readNotificacionService','$ionicPopup','$state','$ionicLoading']

    function readNotificacionCtrl($scope,localStorageService,readNotificacionService,$ionicPopup,$state,$ionicLoading) {        
        var access_token = localStorageService.get("access_token");
        $scope.notificar = onNotificar;
        $scope.datos = {};
        function onNotificar(id){
            readNotificacionService.read(access_token,id).success(function(data) {
                if(data.validacion == 'ok')
                   {
                        if(id==1)
                            $state.go('tab.cotizar_a');
                        else if(id==2)
                            $state.go('tab.mis_cargas_a');
                        else if(id==3)
                            $state.go('tab.cotizar_cliente');
                        else if(id==4)
                            $state.go('tab.noticias');
                        else if(id==5)
                            $state.go('perfil');
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
