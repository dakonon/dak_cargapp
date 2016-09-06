
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


        $scope.choosePhoto = function () {

          var options = {
            quality: 75,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

            $cordovaCamera.getPicture(options).then(function (imageData) {
                $scope.datos.user_avatar = "data:image/jpeg;base64," + imageData;
                $scope.datos.imagen = $scope.datos.user_avatar
                $scope.datos.imagen = base64toBlob(imageData, 'image/jpeg')
              }, function (error) {
                console.log(error);
              });

        }


        function base64toBlob(base64Data, contentType) {
              contentType = contentType || '';
              var sliceSize = 1024;
              var byteCharacters = atob(base64Data);
              var bytesLength = byteCharacters.length;
              var slicesCount = Math.ceil(bytesLength / sliceSize);
              var byteArrays = new Array(slicesCount);

            for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
                var begin = sliceIndex * sliceSize;
                var end = Math.min(begin + sliceSize, bytesLength);

                var bytes = new Array(end - begin);
                for (var offset = begin, i = 0 ; offset < end; ++i, ++offset) {
                    bytes[i] = byteCharacters[offset].charCodeAt(0);
                }
                byteArrays[sliceIndex] = new Uint8Array(bytes);
            }
            return new Blob(byteArrays, { type: contentType });
        }

         function onUpdate(data){
            $ionicLoading.show({});
            var parametros = new FormData();
            parametros.append("user_name", data.user_name);
            parametros.append("user_phone", data.user_phone);
            parametros.append("email", data.email);
            parametros.append("user_avatar", $scope.datos.imagen);
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
