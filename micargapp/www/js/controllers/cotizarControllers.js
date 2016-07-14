(function () {
    'use strict'
angular.module('app.Controllers').controller('cotizarCtrl', cotizarCtrl);

    cotizarCtrl.$inject = ['$scope','localStorageService','cotizarService','$ionicPopup','$state','$stateParams']

    function cotizarCtrl($scope,localStorageService,cotizarService,$ionicPopup,$state,$stateParams) {
        var access_token = localStorageService.get("access_token");    
        $scope.datos = {};
        $scope.datos2 = {};
        $scope.empresa = onEmpresa
        $scope.empresa2 = onEmpresa2
          cotizarService.list(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                   
                    $scope.datos= data.cotizacion;
                    
                   
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

            cotizarService.list2(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                   
                    $scope.datos2= data.cotizacion;
                  
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


        function onEmpresa(id){
                cotizarService.list(access_token).success(function(data) {
                if(data.validacion == 'ok')
                   {    
                          $state.go('tab.cotizar_empresa',{ name: data.cotizacion[id].company_name,
                                                        origen: data.cotizacion[id].origen,
                                                        destino: data.cotizacion[id].destino,
                                                        fecha: data.cotizacion[id].fecha,
                                                        peso: data.cotizacion[id].peso,
                                                        payment: data.cotizacion[id].payment,
                                                        comment: data.cotizacion[id].comment,
                                                        company_avatar: data.cotizacion[id].company_avatar,
                                                        pkcotizaremp: data.cotizacion[id].pkcotizaremp
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
                    title: 'Error al entrar!',
                    template: 'Por favor verifica tus credenciales!'
                });
            });
          }

          function onEmpresa2(id){
                
                cotizarService.list2(access_token).success(function(data) {
                if(data.validacion == 'ok')
                   {
                      
                       $state.go('tab.cotizar_empresa',{type: data.cotizacion[id].type, 
                                                        name: data.cotizacion[id].company_name,
                                                        origen: data.cotizacion[id].origen,
                                                        destino: data.cotizacion[id].destino,
                                                        fecha: data.cotizacion[id].fecha,
                                                        peso: data.cotizacion[id].peso,
                                                        payment: data.cotizacion[id].payment,
                                                        comment: data.cotizacion[id].comment,
                                                        company_avatar: data.cotizacion[id].company_avatar,
                                                        pkcotizaremp: data.cotizacion[id].pkcotizaremp,
                                                        pk_contract: data.cotizacion[id].pk_contract
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
                    title: 'Error al entrar!',
                    template: 'Por favor verifica tus credenciales!'
                });
            });
          }


          
    }
})()
