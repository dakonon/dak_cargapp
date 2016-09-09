
(function () {
    'use strict'
angular.module('app.Controllers').controller('UserRegisterCtrl', UserRegisterCtrl);

    UserRegisterCtrl.$inject = ['$scope', '$ionicLoading', 'RegisterService','$ionicPopup','$state','$cordovaCamera','$cordovaFileTransfer']

    function UserRegisterCtrl($scope, $ionicLoading, RegisterService,$ionicPopup,$state,$cordovaCamera,$cordovaFileTransfer) {
         $scope.datos = {};

         $scope.register = onRegister;

         $scope.choosePhoto = function (id) {
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
                      fileKey: "sello1",
                      fileName: imageData,
                      chunkedMode: false,
                      mimeType: "image/jpeg"
                    };

                    $cordovaFileTransfer.upload("http://micargapp.com/rest/v1/account/uploadpicture",
                     imageData, options).then(function(result) {
                        if(id==1)
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
                        var alertPopup = $ionicPopup.alert({
                            title: 'Perfercto',
                            template: 'Imagen cargada'
                        });              
                
                    }, function (error) {
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
           RegisterService.registerUser(parametros).success(function(data){
                  if(data.validacion == 'ok')
                         {   

                              var alertPopup = $ionicPopup.alert({
                                  title: 'Datos enviados!',
                                  template: data.mensaje + '!',
                              });
                              $state.go('home');
                         }
                      else{                        
                          var alertPopup = $ionicPopup.alert({
                              title: 'Error al entrar!',
                              template: data.mensaje + '!'
                          });
                      }
                  }).error(function(data){
                  var alertPopup = $ionicPopup.alert({
                      title: 'Error',
                      template: ''
                  });
               });
          }
    }
})()

