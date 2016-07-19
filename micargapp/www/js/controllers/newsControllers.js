
(function () {
    'use strict'
angular.module('app.Controllers').controller('NoticiasCtrl', NoticiasCtrl);

    NoticiasCtrl.$inject = ['$scope','$ionicLoading','localStorageService','NoticiasService','$ionicPopup','$state']

    function NoticiasCtrl($scope,$ionicLoading,localStorageService,NoticiasService,$ionicPopup,$state) {
        var access_token = localStorageService.get("access_token");
        $scope.loading = false;   
        $scope.datos = {};

        $ionicLoading.show({});
          NoticiasService.list(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    $ionicLoading.hide();
                     if(data.mensaje == 'Estas son las noticias'){
                        $scope.loading = true;                        
                        $scope.datos= data.noticias;
                    }                                        
               }
            else{
                 $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({                   
                    title: 'Error al entrar!',
                    template: data.mensaje + '!'
                });
            }
        }).error(function(data) {
             $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
                title: 'Error al enviar!',
                template: 'Por favor verifica tu correo!'
            });
        });

          
    }
})()
