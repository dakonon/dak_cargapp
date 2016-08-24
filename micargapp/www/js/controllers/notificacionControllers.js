
(function () {
    'use strict'
angular.module('app.Controllers').controller('notificacionCtrl', notificacionCtrl);

    notificacionCtrl.$inject = ['$scope','localStorageService','notificacionService','$ionicPopup','$state','$ionicLoading']

    function notificacionCtrl($scope,localStorageService,notificacionService,$ionicPopup,$state,$ionicLoading) {
        $ionicLoading.show({});
        var access_token = localStorageService.get("access_token");

        $scope.datos = {};
        
          notificacionService.get(access_token,1).success(function(data) {
            
            if(data.validacion == 'ok')
           {
                $scope.cotizar = data.cantidad;
                notificacionService.get2(access_token).success(function(data) {
                    if(data.validacion == 'ok')
                    {
                        $scope.cotizar+= data.cantidad;
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

    notificacionService.get(access_token,2).success(function(data) {
            if(data.validacion == 'ok')
           {
                $scope.activa = data.cantidad
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

      notificacionService.get(access_token,3).success(function(data) {
            if(data.validacion == 'ok')
           {
                $scope.finalizada = data.cantidad
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

    notificacionService.get(access_token,4).success(function(data) {
            if(data.validacion == 'ok')
           {
                $scope.noticias = data.cantidad
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

    notificacionService.get(access_token,5).success(function(data) {
            if(data.validacion == 'ok')
           {
                $ionicLoading.hide();
                $scope.amistad = data.cantidad
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
})()
