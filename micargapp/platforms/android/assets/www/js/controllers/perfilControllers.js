
(function () {
    'use strict'
angular.module('app.Controllers').controller('EditPerfilCtrl', EditPerfilCtrl);

    EditPerfilCtrl.$inject = ['$scope','$ionicLoading','localStorageService','EditPerfilService','$ionicPopup','$state']

    function EditPerfilCtrl($scope,$ionicLoading,localStorageService,EditPerfilService,$ionicPopup,$state) {
        $scope.update = onUpdate;
        var access_token = localStorageService.get("access_token");

        $scope.datos = {};
        $scope.loading = false;
         $scope.prueba = $scope.datos.user_avatar;
         $ionicLoading.show({});
          EditPerfilService.list(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    $ionicLoading.hide();
                    $scope.datos= data.perfil;
                    $scope.datos.user_avatar= "http://micargapp.com/web"+data.perfil.user_avatar;
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

        $scope.isString = function (data){
          console.log(typeof data);
          return  typeof data == "string" ? true : false;
        }
         function onUpdate(data){
            $ionicLoading.show({});
            var parametros = new FormData();
            parametros.append("user_name", data.user_name);
            parametros.append("user_phone", data.user_phone);
            parametros.append("email", data.email);
            parametros.append("user_avatar", data.avatar);
            EditPerfilService.update(access_token,parametros).success(function(data) {
            if(data.validacion == 'ok')
               {
                  EditPerfilService.list(access_token).success(function(data) {
                        if(data.validacion == 'ok')
                           {   
                                $ionicLoading.hide();
                                $scope.datos= data.perfil;
                                $scope.datos.user_avatar= "http://micargapp.com/web"+data.perfil.user_avatar;
                                var alertPopup = $ionicPopup.alert({
                                    title: 'Perfecto!',
                                    template: 'Datos almacenados con exito'
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
                            title: 'Error al enviar!',
                            template: 'Por favor verifica tu correo!'
                        });
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
