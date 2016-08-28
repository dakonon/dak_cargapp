(function () {
    'use strict'
angular.module('app.Controllers').controller('finalizadasCtrl', finalizadasCtrl);

    finalizadasCtrl.$inject = ['$scope','$ionicLoading','localStorageService','cotizarService','$ionicPopup','$state','$stateParams']

    function finalizadasCtrl($scope,$ionicLoading,localStorageService,cotizarService,$ionicPopup,$state,$stateParams) {
        var access_token = localStorageService.get("access_token");    
        $scope.loading = false;  
        $scope.datos = {};
        
        $scope.empresa = onEmpresa
        $ionicLoading.show({});
          cotizarService.finalizadas(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    $ionicLoading.hide();
                    if(data.mensaje == 'Se encontraron los siguientes contratos'){
                        $scope.loading = true;                        
                         $scope.datos= data.contratos;
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


        function onEmpresa(){
            $ionicLoading.show({});            
                cotizarService.list(access_token).success(function(data) {
                if(data.validacion == 'ok')
                   {
                        $ionicLoading.hide();
                        localStorageService.set('nombre', data.cotizacion[0].company_name);
                        localStorageService.set('origen', data.cotizacion[0].origen);
                        localStorageService.set('destino', data.cotizacion[0].destino);
                        localStorageService.set('fecha', data.cotizacion[0].fecha);
                        localStorageService.set('peso', data.cotizacion[0].peso);
                        localStorageService.set('payment', data.cotizacion[0].payment);
                        localStorageService.set('comment', data.cotizacion[0].comment);
                        localStorageService.set('company_avatar', data.cotizacion[0].company_avatar);
                        localStorageService.set('pkcotizaremp', data.cotizacion[0].pkcotizaremp);
                       $state.go('tab.cotizar_empresa');


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
