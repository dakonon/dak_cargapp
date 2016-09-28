(function () {
    'use strict'
angular.module('app.Controllers').controller('entregaCtrl', entregaCtrl);

    entregaCtrl.$inject = ['$scope','$ionicLoading','contratoService','localStorageService','$ionicPopup','$state','$stateParams','$cordovaGeolocation','geoService','$cordovaCamera','$cordovaFileTransfer']

    function entregaCtrl($scope,$ionicLoading,contratoService,localStorageService,$ionicPopup,$state,$stateParams,$cordovaGeolocation,geoService,$cordovaCamera,$cordovaFileTransfer) {         
        var access_token = localStorageService.get("access_token");  
         
        $scope.finalizar = onFinalizar;
        $scope.datos = {};
        $scope.datos.id_contract = $stateParams.id;            

        $scope.choosePhoto = function () {

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
                        $scope.datos.sello1 = result.response;

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

        $scope.choosePhoto2 = function () {

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
                      fileKey: "sello2",
                      fileName: imageData,
                      chunkedMode: false,
                      mimeType: "image/jpeg"
                    };

                 $cordovaFileTransfer.upload("http://micargapp.com/rest/v1/account/uploadpicture",
                     imageData, options).then(function(result) {
                        $scope.datos.sello2 = result.response;

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





         function onFinalizar(){  
            $ionicLoading.show({});  
            var parametros = {
              "contract_id": $scope.datos.id_contract,
              "codigo": $scope.datos.codigo,
              "sello1": $scope.datos.sello1,
              "sello2": $scope.datos.sello2
            }; 
                    
                         contratoService.finalizar(access_token,parametros).success(function(data) {
                            if(data.validacion == 'ok')
                               {   

                                    $ionicLoading.hide();                                                                                                    
                                    var alertPopup = $ionicPopup.alert({
                                        title: 'Perfecto',
                                        template: data.mensaje
                                    });
                                    $state.go('tab.mis_cargas_a');
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
                                template: 'Por favor verifica tu datos!'
                            });
                        });

         } 

    }
       
})()
