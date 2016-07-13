(function () {
    'use strict'
angular.module('app.Controllers').controller('finalizadasCtrl', finalizadasCtrl);

    finalizadasCtrl.$inject = ['$scope','localStorageService','cotizarService','$ionicPopup','$state','$stateParams']

    function finalizadasCtrl($scope,localStorageService,cotizarService,$ionicPopup,$state,$stateParams) {
        var access_token = localStorageService.get("access_token");    

        $scope.datos = {};
        
        $scope.empresa = onEmpresa
        
          cotizarService.finalizadas(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                   
                    $scope.datos= data.contratos;
                   console.log(data)
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


        function onEmpresa(){
                console.log("")
                cotizarService.list(access_token).success(function(data) {
                if(data.validacion == 'ok')
                   {
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
