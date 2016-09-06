(function () {
    'use strict'
angular.module('app.Controllers').controller('entregaCtrl', entregaCtrl);

    entregaCtrl.$inject = ['$scope','$ionicLoading','contratoService','localStorageService','$ionicPopup','$state','$stateParams','$cordovaGeolocation','geoService']

    function entregaCtrl($scope,$ionicLoading,contratoService,localStorageService,$ionicPopup,$state,$stateParams,$cordovaGeolocation,geoService) {         
        var access_token = localStorageService.get("access_token");  
         
        $scope.finalizar = onFinalizar;
        $scope.datos = {};
        $scope.datos.id_contract = $stateParams.id;            

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
                $scope.datos.sello1 = base64toBlob(imageData, 'image/jpeg')
              }, function (error) {
                console.log(error);
              });

        }

        $scope.choosePhoto2 = function () {

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
                $scope.datos.sello2 = base64toBlob(imageData, 'image/jpeg')
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


         function onFinalizar(){  
            $ionicLoading.show({});   
            var parametros = new FormData();
            parametros.append("contract_id", $scope.datos.id_contract);
            parametros.append("codigo", $scope.datos.codigo);
            parametros.append("sello1", $scope.datos.sello1);
            parametros.append("sello2", $scope.datos.sello2);
            console.log($scope.datos.sello2)
            console.log($scope.datos.id_contract)
            console.log($scope.datos.sello1)
            console.log($scope.datos.codigo)
                    
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
