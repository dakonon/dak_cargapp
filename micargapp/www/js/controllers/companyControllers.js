
(function () {
    'use strict'
angular.module('app.Controllers').controller('CompanyCtrl', CompanyCtrl);

    CompanyCtrl.$inject = ['$scope','localStorageService','CompanyService','$ionicPopup','$state']

    function CompanyCtrl($scope,localStorageService,CompanyService,$ionicPopup,$state) {
        var access_token = localStorageService.get("access_token");

        $scope.datos = {};

      
          CompanyService.list(access_token).success(function(data) {
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


          
    }
})()


