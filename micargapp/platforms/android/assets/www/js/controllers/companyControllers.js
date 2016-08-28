
(function () {
    'use strict'
angular.module('app.Controllers').controller('CompanyCtrl', CompanyCtrl);

    CompanyCtrl.$inject = ['$scope','$ionicLoading','localStorageService','CompanyService','$ionicPopup','$state']

    function CompanyCtrl($scope,$ionicLoading,localStorageService,CompanyService,$ionicPopup,$state) {
        var access_token = localStorageService.get("access_token");
        $scope.perfil = onPerfil;
        $scope.eliminar = onEliminar;
        $scope.agregar = onAgregar
        $scope.datos = {};
        $scope.datos2 = {};
        $scope.datos3 = {};
        $ionicLoading.show({});
        var params= 0
        var params2= 2
          CompanyService.friend(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
              

                    $scope.datos= data.empresas;
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
                template: 'Por favor verifica tu red!'
            });
        });

        CompanyService.invitacion(access_token,params).success(function(data) {
            if(data.validacion == 'ok')
               {   
                   
                    $scope.datos2= data.solicitudes;
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
                template: 'Por favor verifica tu red!'
            });
        });

        CompanyService.invitacion(access_token,params2).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    $ionicLoading.hide();
                    $scope.datos3= data.solicitudes;
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
                template: 'Por favor verifica tu red!'
            });
        });


        function onPerfil(id){
            $ionicLoading.show({});
                CompanyService.see(access_token,id).success(function(data) {
                if(data.validacion == 'ok')
                   {   
                        $ionicLoading.hide();                         
                          $state.go('tab.perfil_empresa',{ company_rz: data.perfil.company_rz,
                                                        company_review: data.perfil.company_review,
                                                        company_avatar: data.perfil.company_avatar,
                                                        company_avg: data.perfil.company_avg                                                       
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

          function onEliminar(id){
            $ionicLoading.show({});
                CompanyService.deletesolicitude(access_token,id).success(function(data) {
                if(data.validacion == 'ok')
                   {   
                        $ionicLoading.hide();                         
                        var alertPopup = $ionicPopup.alert({
                            title: 'Solicitud eliminada!',
                            template: data.mensaje + '!'
                        });
                        $state.go('perfil');

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

          function onAgregar(id){
            console.log("prueba");  
            $ionicLoading.show({});
                CompanyService.aceptsolicitude(access_token,id).success(function(data) {
                if(data.validacion == 'ok')
                   {   
                        $ionicLoading.hide();                         
                         var alertPopup = $ionicPopup.alert({
                            title: 'Solicitud aceptada!',
                            template: data.mensaje + '!'
                        });                                               
                         $state.go('perfil');


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


