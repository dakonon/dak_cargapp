
(function () {
    'use strict'
angular.module('app.Controllers').controller('buscarCompanyCtrl', buscarCompanyCtrl);

    buscarCompanyCtrl.$inject = ['$scope','$ionicLoading','localStorageService','CompanyService','$ionicPopup','$state']

    function buscarCompanyCtrl($scope,$ionicLoading,localStorageService,CompanyService,$ionicPopup,$state) {
        var access_token = localStorageService.get("access_token");
        $scope.perfil = onPerfil;
        $scope.send = onSend;
        $scope.eliminar = onEliminar;
        $scope.agregar = onAgregar;
        $scope.datos = {};
        $ionicLoading.show({});
          
          CompanyService.list(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    $ionicLoading.hide();
                    $scope.datos= data.empresas;
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


        CompanyService.friend(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    $ionicLoading.hide();
                    
                    for (var i = 0; i < data.empresas.length; i++) { 
                        console.log($scope.datos)
                      $scope.datos.splice(data.empresas[i][0].pkcompany)
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

        //datos que voy a eliminar 
      /*
          CompanyService.friend(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    $ionicLoading.hide();
                    $scope.datos= data.empresas;
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

        CompanyService.invitacion(access_token,params).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    $ionicLoading.hide();
                    console.log(data.solicitudes)
                    $scope.datos2= data.solicitudes;
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
                template: 'Por favor verifica tu correo!'
            });
        });


*/


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

          function onSend(id){
            $ionicLoading.show({});
                CompanyService.sendsolicitude(access_token,id).success(function(data) {
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

          function onAgregar(id){
            console.log("prueba");  
            $ionicLoading.show({});
                CompanyService.sendsolicitude(access_token,id).success(function(data) {
                if(data.validacion == 'ok')
                   {   
                        $ionicLoading.hide();                         
                          console.log(data);                                                 
                      


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


