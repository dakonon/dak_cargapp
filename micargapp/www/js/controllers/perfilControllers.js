
(function () {
    'use strict'
angular.module('app.Controllers').controller('EditPerfilCtrl', EditPerfilCtrl);

    EditPerfilCtrl.$inject = ['$scope','localStorageService','EditPerfilService','$ionicPopup','$state']

    function EditPerfilCtrl($scope,localStorageService,EditPerfilService,$ionicPopup,$state) {
        $scope.update = onUpdate;
        var access_token = localStorageService.get("access_token");

        $scope.datos = {};

      
          EditPerfilService.list(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    
                    $scope.datos= data.perfil;
                    console.log(data.perfil)
                   
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

         function onUpdate(data){
            var parametros = {                   
                   
                            "user_name": data.user_name,
                            "user_phone": data.user_phone,
                            "email": data.email,
                            "user_avatar": data.user_avatar,                            
                                          
                };
                
                EditPerfilService.update(access_token,parametros).success(function(data) {
                if(data.validacion == 'ok')
                   {
                      
                      $state.go('tab.editar_perfil');
                       


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
