
(function () {
    'use strict'
angular.module('app.Controllers').controller('UserRegisterCtrl', UserRegisterCtrl);

    UserRegisterCtrl.$inject = ['$scope', '$ionicLoading', 'RegisterService','$ionicPopup','$state','$cordovaCamera','$cordovaFileTransfer']

    function UserRegisterCtrl($scope, $ionicLoading, RegisterService,$ionicPopup,$state,$cordovaCamera,$cordovaFileTransfer) {
         $scope.datos = {};

         $scope.register = onRegister;

         $scope.choosePhoto = function (id) {
<<<<<<< HEAD
=======
          $ionicLoading.show();
>>>>>>> 2c009ea67d7db343e3a1d200fc8c807b0daafa5a
          console.log(id);
            var options = {
                quality: 75,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                allowEdit: true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 300,
                targetHeight: 300,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            };

            $cordovaCamera.getPicture(options).then(function (imageData) {            
                var options = {
<<<<<<< HEAD
                      fileKey: "sello1",
=======
                      fileKey: "image_file",
>>>>>>> 2c009ea67d7db343e3a1d200fc8c807b0daafa5a
                      fileName: imageData,
                      chunkedMode: false,
                      mimeType: "image/jpeg"
                    };

                    $cordovaFileTransfer.upload("http://micargapp.com/rest/v1/account/uploadpicture",
                     imageData, options).then(function(result) {
                        if(id==1)
<<<<<<< HEAD
                          $scope.datos.avatar = result.response;
                        if(id==2)
                          $scope.datos.cedula1 = result.response;
                        if(id==3)
                          $scope.datos.cedula2 = result.response;
                        if(id==4)
                          $scope.datos.tarj_prop1 = result.response;
                        if(id==5)
                          $scope.datos.tarj_prop2 = result.response;
                        if(id==6)
                          $scope.datos.licencia1 = result.response;
                        if(id==7)
                          $scope.datos.licencia2 = result.response;
                        if(id==8)
                          $scope.datos.revision1 = result.response;
                        if(id==9)
                          $scope.datos.revision2 = result.response;
                        if(id==10)
                          $scope.datos.soat1 = result.response;
                        if(id==11)
                          $scope.datos.soat2 = result.response;
                        if(id==12)
                          $scope.datos.tarjetas1 = result.response;
                        if(id==13)
                          $scope.datos.tarjetas2 = result.response;
=======
                        $scope.datos.avatar = JSON.stringify(result.response);
                        if(id==2)
                          $scope.datos.cedula1 = JSON.stringify(result.response);
                        if(id==3)
                          $scope.datos.cedula2 = JSON.stringify(result.response);
                        if(id==4)
                          $scope.datos.tarj_prop1 = JSON.stringify(result.response);
                        if(id==5)
                          $scope.datos.tarj_prop2 = JSON.stringify(result.response);
                        if(id==6)
                          $scope.datos.licencia1 = JSON.stringify(result.response);
                        if(id==7)
                          $scope.datos.licencia2 = JSON.stringify(result.response);
                        if(id==8)
                          $scope.datos.revision1 = JSON.stringify(result.response);
                        if(id==9)
                          $scope.datos.revision2 = JSON.stringify(result.response);
                        if(id==10)
                          $scope.datos.soat1 = JSON.stringify(result.response);
                        if(id==11)
                          $scope.datos.soat2 = JSON.stringify(result.response);
                        if(id==12)
                          $scope.datos.tarjetas1 = JSON.stringify(result.response);
                        if(id==13)
                          $scope.datos.tarjetas2 = JSON.stringify(result.response);
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


              }, function (error) {
                console.log(error);
              });

        }


          function onRegister(){
<<<<<<< HEAD

            var parametros = {
                "name": $scope.datos.name,
                "email": $scope.datos.email,
                "phone": $scope.datos.phone,
                "password": $scope.datos.password,
                "password_repeat": $scope.datos.password_repeat,
                "avatar": $scope.datos.avatar,
                "vehicletype": $scope.datos.vehicletype,
                "vehicle_bodywork": $scope.datos.vehicle_bodywork,
                "vehicle_licenceplate": $scope.datos.vehicle_licenceplate,
                "vehicle_model": $scope.datos.vehicle_model,
                "vehicle_brand": $scope.datos.vehicle_brand,
                "vehicle_color": $scope.datos.vehicle_color,
                "reference_comertial_name": $scope.datos.reference_comertial_name,
                "reference_comertial_address": $scope.datos.reference_comertial_address,
                "reference_comertial_phone": $scope.datos.reference_comertial_phone,
                "reference_personal1_name": $scope.datos.reference_personal1_name,
                "reference_personal1_address": $scope.datos.reference_personal1_address,
                "reference_personal1_phone": $scope.datos.reference_personal1_phone,
                "reference_personal2_name": $scope.datos.reference_personal2_name,
                "reference_personal2_address": $scope.datos.reference_personal2_address,
                "reference_personal2_phone": $scope.datos.reference_personal2_phone,
                "cedula1": $scope.datos.cedula1,
                "cedula2": $scope.datos.cedula2,
                "tarj_prop1": $scope.datos.tarj_prop1,
                "tarj_prop2": $scope.datos.tarj_prop2,
                "licencia1": $scope.datos.licencia1,
                "licencia2": $scope.datos.licencia2,
                "revision1": $scope.datos.revision1,
                "revision2": $scope.datos.revision2,
                "soat1": $scope.datos.soat1,
                "soat2": $scope.datos.soat2,
                "tarjetas1": $scope.datos.tarjetas1,
                "tarjetas2": $scope.datos.tarjetas2
              };
              console.log(parametros)
=======
            $ionicLoading.show();
            var parametros = {
                "name": $scope.datos.name,
                "email": $scope.datos.email,
                "phone": $scope.datos.phone,
                "password": $scope.datos.password,
                "password_repeat": $scope.datos.password_repeat,
                "avatar": $scope.datos.avatar,
                "vehicletype": $scope.datos.vehicletype,
                "vehicle_bodywork": $scope.datos.vehicle_bodywork,
                "vehicle_licenceplate": $scope.datos.vehicle_licenceplate,
                "vehicle_model": $scope.datos.vehicle_model,
                "vehicle_brand": $scope.datos.vehicle_brand,
                "vehicle_color": $scope.datos.vehicle_color,
                "reference_comertial_name": $scope.datos.reference_comertial_name,
                "reference_comertial_address": $scope.datos.reference_comertial_address,
                "reference_comertial_phone": $scope.datos.reference_comertial_phone,
                "reference_personal1_name": $scope.datos.reference_personal1_name,
                "reference_personal1_address": $scope.datos.reference_personal1_address,
                "reference_personal1_phone": $scope.datos.reference_personal1_phone,
                "reference_personal2_name": $scope.datos.reference_personal2_name,
                "reference_personal2_address": $scope.datos.reference_personal2_address,
                "reference_personal2_phone": $scope.datos.reference_personal2_phone,
                "cedula1": $scope.datos.cedula1,
                "cedula2": $scope.datos.cedula2,
                "tarj_prop1": $scope.datos.tarj_prop1,
                "tarj_prop2": $scope.datos.tarj_prop2,
                "licencia1": $scope.datos.licencia1,
                "licencia2": $scope.datos.licencia2,
                "revision1": $scope.datos.revision1,
                "revision2": $scope.datos.revision2,
                "soat1": $scope.datos.soat1,
                "soat2": $scope.datos.soat2,
                "tarjetas1": $scope.datos.tarjetas1,
                "tarjetas2": $scope.datos.tarjetas2
              };


>>>>>>> 2c009ea67d7db343e3a1d200fc8c807b0daafa5a
           RegisterService.registerUser(parametros).success(function(data){
                  if(data.validacion == 'ok')
                         {   
                            $ionicLoading.hide();
                              var alertPopup = $ionicPopup.alert({
                                  title: 'Perfecto',
                                  template: JSON.stringify(data.mensaje),
                              });
                              $state.go('home');
                         }
                      else{   
                          $ionicLoading.hide();                     
                          var alertPopup = $ionicPopup.alert({
                              title: 'Error',
                              template: 'Agregue todos los campos'
                          });
                      }
                  }).error(function(data){
                    $ionicLoading.hide();
                  var alertPopup = $ionicPopup.alert({
                      title: 'Error',
                      template: JSON.stringify(data)
                  });
               });
          }
    }
})()

