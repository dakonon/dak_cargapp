
(function () {
    'use strict'
angular.module('app.Controllers').controller('EditPerfilCtrl', EditPerfilCtrl);

<<<<<<< HEAD
    EditPerfilCtrl.$inject = ['$scope','$ionicLoading','localStorageService','EditPerfilService','$ionicPopup','$state','$cordovaFileTransfer']

    function EditPerfilCtrl($scope,$ionicLoading,localStorageService,EditPerfilService,$ionicPopup,$state,$cordovaFileTransfer) {
=======
    EditPerfilCtrl.$inject = ['$scope','$ionicLoading','localStorageService','EditPerfilService','$ionicPopup','$state','$cordovaCamera','$cordovaFileTransfer']

    function EditPerfilCtrl($scope,$ionicLoading,localStorageService,EditPerfilService,$ionicPopup,$state,$cordovaCamera,$cordovaFileTransfer) {
>>>>>>> 2c009ea67d7db343e3a1d200fc8c807b0daafa5a
        $scope.update = onUpdate;
        var access_token = localStorageService.get("access_token");

        $scope.datos = {};
        $scope.loading = false;
         $ionicLoading.show({});
          EditPerfilService.list(access_token).success(function(data) {
            if(data.validacion == 'ok')
               {   
                    $ionicLoading.hide();
                    $scope.datos= data.perfil;
                    $scope.datos.user_avatar= "http://micargapp.com/web"+data.perfil.user_avatar;
                     var alertPopup = $ionicPopup.alert({
                              title: 'Prueba',
                              template: $scope.datos.user_avatar
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


        $scope.choosePhoto = function () {
<<<<<<< HEAD

=======
          $ionicLoading.show({});
>>>>>>> 2c009ea67d7db343e3a1d200fc8c807b0daafa5a
              var options = {
                  quality: 50,
                  destinationType: Camera.DestinationType.FILE_URI,
                  sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                  allowEdit: true,
                  encodingType: Camera.EncodingType.JPEG,
                  targetWidth: 100,
                  targetHeight: 100,
                  popoverOptions: CameraPopoverOptions,
                  saveToPhotoAlbum: false,
                correctOrientation:true
                };

                $cordovaCamera.getPicture(options).then(function (imageData) {                    

                    var options = {
                      fileKey: "image_file",
                      fileName: imageData,
                      chunkedMode: false,
                      mimeType: "image/jpeg"
                    };

                    $cordovaFileTransfer.upload("http://micargapp.com/rest/v1/account/uploadpicture",
<<<<<<< HEAD
                     imageData, options).then(function(result) {
                        $scope.datos.user_avatar= "http://micargapp.com/web"+result.response;
                        $scope.datos.imagen = result.response;

=======
                     imageData, options).then(function(result) {                                           
                        $scope.datos.user_avatar= result.response;
                        $scope.datos.imagen = result.response;
                        $ionicLoading.hide();
>>>>>>> 2c009ea67d7db343e3a1d200fc8c807b0daafa5a
                        var alertPopup = $ionicPopup.alert({
                            title: 'Perfercto',
                            template: 'Imagen cargada'
                        });              
                
                    }, function (error) {
<<<<<<< HEAD
=======
                      $ionicLoading.hide();
>>>>>>> 2c009ea67d7db343e3a1d200fc8c807b0daafa5a
                      var alertPopup = $ionicPopup.alert({
                              title: 'Error',
                              template: error
                          });
                    });

                })
            }



         function onUpdate(data){

            var parametros = {
                "user_name": $scope.datos.user_name,
                "user_phone": $scope.datos.user_phone,
                "email": $scope.datos.email,
                "user_avatar": $scope.datos.imagen
            };

            $ionicLoading.show({});
<<<<<<< HEAD
=======
            var parametros  = {
                "user_name": $scope.datos.user_name,
                "user_phone": $scope.datos.user_phone,
                "email": $scope.datos.email,
                "user_avatar": $scope.datos.imagen
            };

            
>>>>>>> 2c009ea67d7db343e3a1d200fc8c807b0daafa5a

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
                                title: 'Error listar',
                                template: data + '!'
                            });
                        }
                    }).error(function(data) {
                         $ionicLoading.hide();
                        var alertPopup = $ionicPopup.alert({
                            title: 'Error listar 2',
                            template: data
                        });
                    });



               }
            else{
                 $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                    title: 'Error al actualizar!',
                    template: JSON.stringify(data.error)
                });
                var alertPopup = $ionicPopup.alert({
                    title: 'Error al actualizar2 ',
                    template: JSON.stringify(data)
                });
                
            }
            }).error(function(data) {
                 $ionicLoading.hide();
                var alertPopup = $ionicPopup.alert({
                    title: 'Error al actualizar!',
                    template: data.error
                });
            });
          }


          
    }
})()
