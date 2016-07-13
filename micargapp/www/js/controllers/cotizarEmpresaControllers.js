(function () {
    'use strict'
angular.module('app.Controllers').controller('cotizarEmpresaCtrl', cotizarEmpresaCtrl);

    cotizarEmpresaCtrl.$inject = ['$scope','localStorageService','$ionicPopup','$state','$stateParams']

    function cotizarEmpresaCtrl($scope,localStorageService,$ionicPopup,$state,$stateParams) {
         
         $scope.datos = {};
         $scope.datos.origen = $stateParams.origen;
         $scope.datos.destino = $stateParams.destino;
         $scope.datos.fecha = $stateParams.fecha;
         $scope.datos.peso = $stateParams.peso;
         $scope.datos.payment = $stateParams.payment;
         $scope.datos.comment = $stateParams.comment;
         $scope.datos.company_avatar = $stateParams.company_avatar; 
         $scope.datos.nombre = $stateParams.name;      
         $scope.datos.pkcotizaremp = $stateParams.pkcotizaremp;              

      


          
    }
})()
