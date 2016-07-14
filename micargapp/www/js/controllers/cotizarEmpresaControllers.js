(function () {
    'use strict'
angular.module('app.Controllers').controller('cotizarEmpresaCtrl', cotizarEmpresaCtrl);

    cotizarEmpresaCtrl.$inject = ['$scope','cotizarService','localStorageService','$ionicPopup','$state','$stateParams']

    function cotizarEmpresaCtrl($scope,cotizarService,localStorageService,$ionicPopup,$state,$stateParams) {
         var access_token = localStorageService.get("access_token");    
         console.log($stateParams.type)
         $scope.datos = {};
         $scope.datos.origen = $stateParams.origen;
         $scope.datos.destino = $stateParams.destino;
         $scope.datos.fecha = $stateParams.fecha;
         $scope.datos.peso = $stateParams.peso;
         $scope.datos.payment = $stateParams.payment;
         $scope.datos.comment = $stateParams.comment;
         $scope.datos.company_avatar = $stateParams.company_avatar; 
         $scope.datos.nombre = $stateParams.name;   
         $scope.datos.type = $stateParams.type;      
         $scope.datos.pkcotizaremp = $stateParams.pkcotizaremp;   
         $scope.datos.pk_contract = $stateParams.pk_contract;              
         
         $scope.aceptar = onAceptar;
         function onAceptar(){

                if($scope.datos.type){
                    if($scope.datos.type=='tload'){
                            
                        cotizarService.aceptar1(access_token,$scope.datos.pkcotizaremp).success(function(data) {
                            if(data.validacion == 'ok')
                               {
                                  
                                   $state.go('tab.cotizar_a');
                                


                               }
                            else{
                                var alertPopup = $ionicPopup.alert({
                                    title: 'Error al entrar!',
                                    template: data.mensaje + '!'
                                });
                            }
                        }).error(function(data) {
                            var alertPopup = $ionicPopup.alert({
                                title: 'Error al entrar!',
                                template: 'Por favor verifica tus credenciales!'
                            });
                        });



                    }
                    if($scope.datos.type=='uload'){
                        cotizarService.aceptar2(access_token,$scope.datos.pk_contract).success(function(data) {
                            if(data.validacion == 'ok')
                               {
                                  
                                   $state.go('tab.cotizar_a');
                                


                               }
                            else{
                                var alertPopup = $ionicPopup.alert({
                                    title: 'Error al entrar!',
                                    template: data.mensaje + '!'
                                });
                            }
                        }).error(function(data) {
                            var alertPopup = $ionicPopup.alert({
                                title: 'Error al entrar!',
                                template: 'Por favor verifica tus credenciales!'
                            });
                        });
                    }


                }
                else{
                      cotizarService.aceptar3(access_token,$scope.datos.pkcotizaremp).success(function(data) {
                            if(data.validacion == 'ok')
                               {
                                  
                                   $state.go('tab.cotizar_a');
                                


                               }
                            else{
                                var alertPopup = $ionicPopup.alert({
                                    title: 'Error al entrar!',
                                    template: data.mensaje + '!'
                                });
                            }
                        }).error(function(data) {
                            var alertPopup = $ionicPopup.alert({
                                title: 'Error al entrar!',
                                template: 'Por favor verifica tus credenciales!'
                            });
                        });

                }
          }

          
    }
})()
