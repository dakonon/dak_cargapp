(function () {
    'use strict'
angular.module('app.Controllers').controller('cotizarCtrl', cotizarCtrl);

    cotizarCtrl.$inject = ['$scope','$ionicLoading','localStorageService','cotizarService','$ionicPopup','$state','$stateParams']

    function cotizarCtrl($scope,$ionicLoading,localStorageService,cotizarService,$ionicPopup,$state,$stateParams) {
        var access_token = localStorageService.get("access_token"); 
        $scope.loading = false;   
        $scope.datos = {};
        $scope.datos2 = {};
        $scope.empresa = onEmpresa
        $scope.empresa2 = onEmpresa2
            $ionicLoading.show({});
          cotizarService.list(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    $ionicLoading.hide();
                    if(data.mensaje == 'Se encontraron las siguientes cotizaciones'){
                        $scope.loading = true;                        
                        $scope.datos= data.cotizacion;    
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

            cotizarService.list2(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    $ionicLoading.hide();                        
                    if(data.mensaje == 'Se encontraron las siguientes solicitudes'){
                        $scope.loading = true;
                        $scope.datos2= data.cotizacion;
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


        function onEmpresa(id){
                $ionicLoading.show({});
                cotizarService.list(access_token).success(function(data) {
                if(data.validacion == 'ok')
                   {    
                         $ionicLoading.hide();           
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
                     $ionicLoading.hide();           
                    var alertPopup = $ionicPopup.alert({
                        title: 'Error al entrar!',
                        template: data.mensaje + '!'
                    });
                }
            }).error(function(data) {
                 $ionicLoading.hide();           
                var alertPopup = $ionicPopup.alert({
                    title: 'Error al entrar!',
                    template: 'Por favor verifica tus credenciales!'
                });
            });
          }

          function onEmpresa2(id){
                $ionicLoading.show({});
                cotizarService.list2(access_token).success(function(data) {
                if(data.validacion == 'ok')
                   {
                        $ionicLoading.hide();     
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
                    $ionicLoading.hide();   
                    var alertPopup = $ionicPopup.alert({
                        title: 'Error al entrar!',
                        template: data.mensaje + '!'
                    });
                }
            }).error(function(data) {
                $ionicLoading.hide();   
                var alertPopup = $ionicPopup.alert({
                    title: 'Error al entrar!',
                    template: 'Por favor verifica tus credenciales!'
                });
            });
          }


          
    }
})()
