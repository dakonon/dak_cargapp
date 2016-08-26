
(function () {
    'use strict'
angular.module('app.Controllers').controller('buscarCompanyCtrl', buscarCompanyCtrl);

    buscarCompanyCtrl.$inject = ['$scope','$ionicLoading','localStorageService','CompanyService','$ionicPopup','$state']

    function buscarCompanyCtrl($scope,$ionicLoading,localStorageService,CompanyService,$ionicPopup,$state) {
        var access_token = localStorageService.get("access_token");
        $scope.perfil = onPerfil;
        $scope.agregar = onAgregar;
        $scope.datos = {};
        $ionicLoading.show({});
        var params= 0
        var params2= 2  
          CompanyService.list(access_token).success(function(data) {
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
                template: 'Por favor verifica tu correo!'
            });
        });


        CompanyService.friend(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                   
                    for (var j = 0; j < data.empresas.length; j++) { 
                        for (var i = 0; i < $scope.datos.length; i++) {
                            if(data.empresas[j][0].pkcompany==$scope.datos[i][0].pkcompany){                      
                               
                                $scope.datos.splice(i,1);
                                
                            }                    
                        }
                   
                    }

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

        CompanyService.invitacion(access_token,params).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    for (var j = 0; j < data.solicitudes.length; j++) { 
                        for (var i = 0; i < $scope.datos.length; i++) {
                            if(data.solicitudes[j].pkcompany==$scope.datos[i][0].pkcompany){                      
                                $scope.datos.splice(i,1);
                                
                            }                    
                        }
                   
                    }
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

        CompanyService.invitacion(access_token,params2).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    $ionicLoading.hide();
                    
                    for (var j = 0; j < data.solicitudes.length; j++) { 
                        for (var i = 0; i < $scope.datos.length; i++) {
                            if(data.solicitudes[j].pkcompany==$scope.datos[i][0].pkcompany){                      
                                $scope.datos.splice(i,1);
                                
                            }                    
                        }
                   
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

 

          function onAgregar(id){
            $ionicLoading.show({});
                CompanyService.sendsolicitude(access_token,id).success(function(data) {
                if(data.validacion == 'ok')
                   {   
                        $ionicLoading.hide();  
                        var alertPopup = $ionicPopup.alert({
                            title: 'Solicitud enviada!',
                            template: data.mensaje + '!'
                        });                       
                        $state.go('tab.editar_empresas'); 
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


