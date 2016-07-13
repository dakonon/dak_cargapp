(function () {
    'use strict'
angular.module('app.Controllers').controller('activosCtrl', activosCtrl);

    activosCtrl.$inject = ['$scope','localStorageService','cotizarService','$ionicPopup','$state','$stateParams']

    function activosCtrl($scope,localStorageService,cotizarService,$ionicPopup,$state,$stateParams) {
        var access_token = localStorageService.get("access_token");    

        $scope.datos = {};
        
        $scope.empresa = onEmpresa
        
          cotizarService.activos(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                   
                    $scope.datos= data.contratos;
                   
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
                cotizarService.activos(access_token).success(function(data) {
                if(data.validacion == 'ok')
                   {                      
                       $state.go('tab.mis_cargas_b',{ name: data.contratos[id].company_name,
                                                        origen: data.contratos[id].origen,
                                                        destino: data.contratos[id].destino,
                                                        fecha: data.contratos[id].fecha,
                                                        peso: data.contratos[id].peso,
                                                        payment: data.contratos[id].payment,                                                       
                                                        company_avatar: data.contratos[id].company_avatar,
                                                        pkcotizaremp: data.contratos[id].pkcotizaremp,
                                                        company_mail : data.contratos[id].company_mail,
                                                        id_contract : data.contratos[id].id_contract
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
