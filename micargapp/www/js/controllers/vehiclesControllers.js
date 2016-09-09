
(function () {
    'use strict'
angular.module('app.Controllers').controller('vehiclesCtrl', vehiclesCtrl);

    vehiclesCtrl.$inject = ['$scope','$ionicLoading','localStorageService','vehiclesService','$ionicPopup','$state']

    function vehiclesCtrl($scope,$ionicLoading,localStorageService,vehiclesService,$ionicPopup,$state) {
        $scope.data = {};

        $ionicLoading.show({});
          vehiclesService.list().success(function(data) {
       
                    $ionicLoading.hide();
                        $scope.data= data;
               
        }).error(function(data) {
             $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
                title: 'Error al enviar!',
                template: 'Por favor verifica tu correo!'
            });
        });

          
    }
})()
