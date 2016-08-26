
(function () {
    'use strict'
angular.module('app.Controllers').controller('perfilCompanyCtrl', perfilCompanyCtrl);

    perfilCompanyCtrl.$inject = ['$scope','$stateParams','CompanyService','$ionicPopup','$state']

    function perfilCompanyCtrl($scope,$stateParams,CompanyService,$ionicPopup,$state) {
        $scope.datos={};
        $scope.datos.avatar = $stateParams.company_avatar; 
        $scope.datos.company_review = $stateParams.company_review;
        $scope.datos.company_rz = $stateParams.company_rz;
        $scope.datos.company_avg = $stateParams.company_avg;
        $scope.datos.avatar= "http://micargapp.com/web"+$stateParams.company_avatar;

          
    }
})()


