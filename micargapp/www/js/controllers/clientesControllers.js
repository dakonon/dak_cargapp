(function () {
    'use strict'
angular.module('app.Controllers').controller('clientesCtrl', clientesCtrl);

    clientesCtrl.$inject = ['$scope','localStorageService','$ionicPopup','$state','$stateParams']

    function clientesCtrl($scope,localStorageService,$ionicPopup,$state,$stateParams) {         
         $scope.datos = {};
         $scope.datos.nombre = $stateParams.name; 
         $scope.datos.origen = $stateParams.origen;
         $scope.datos.destino = $stateParams.destino;
         $scope.datos.fecha = $stateParams.fecha;
         $scope.datos.peso = $stateParams.peso;
         $scope.datos.payment = $stateParams.payment;
         $scope.datos.company_avatar = $stateParams.company_avatar;               
         $scope.datos.pkcotizaremp = $stateParams.pkcotizaremp;  
         $scope.datos.company_mail = $stateParams.company_mail;           

      


          
    }
})()
