
(function () {
    'use strict'
angular.module('app.Controllers').controller('UserRegisterCtrl', UserRegisterCtrl);

    UserRegisterCtrl.$inject = ['$scope', '$ionicLoading', 'RegisterService','$ionicPopup','$state']

    function UserRegisterCtrl($scope, $ionicLoading, RegisterService,$ionicPopup,$state) {
         $scope.datos = {};

         $scope.register = onRegister;

          function onRegister(){
            var parametros = new FormData();
            parametros.append("name", $scope.datos.name);
            parametros.append("email", $scope.datos.email);
            parametros.append("phone", $scope.datos.phone);
            parametros.append("password", $scope.datos.password);
            parametros.append("password_repeat", $scope.datos.password_repeat);
            parametros.append("avatar", $scope.datos.avatar);
            parametros.append("vehicletype", $scope.datos.vehicletype);
            parametros.append("vehicle_bodywork", $scope.datos.vehicle_bodywork);
            parametros.append("vehicle_licenceplate", $scope.datos.vehicle_licenceplate);
            parametros.append("vehicle_model", $scope.datos.vehicle_model);
            parametros.append("vehicle_brand", $scope.datos.vehicle_brand);
            parametros.append("vehicle_color", $scope.datos.vehicle_color);
            parametros.append("reference_comertial_name", $scope.datos.reference_comertial_name);
            parametros.append("reference_comertial_address", $scope.datos.reference_comertial_address);
            parametros.append("reference_comertial_phone", $scope.datos.reference_comertial_phone);
            parametros.append("reference_personal1_name", $scope.datos.reference_personal1_name);
            parametros.append("reference_personal1_address", $scope.datos.reference_personal1_address);
            parametros.append("reference_personal1_phone", $scope.datos.reference_personal1_phone);
            parametros.append("reference_personal2_name", $scope.datos.reference_personal2_name);
            parametros.append("reference_personal2_address", $scope.datos.reference_personal2_address);
            parametros.append("reference_personal2_phone", $scope.datos.reference_personal2_phone);
            parametros.append("cedula1", $scope.datos.cedula1);
            parametros.append("cedula2", $scope.datos.cedula2);
            parametros.append("tarj_prop1", $scope.datos.tarj_prop1);
            parametros.append("tarj_prop2", $scope.datos.tarj_prop2);
            parametros.append("licencia1", $scope.datos.licencia1);
            parametros.append("licencia2", $scope.datos.licencia2);
            parametros.append("revision1", $scope.datos.revision1);
            parametros.append("revision2", $scope.datos.revision2);
            parametros.append("soat1", $scope.datos.soat1);
            parametros.append("soat2", $scope.datos.soat2);
            parametros.append("tarjetas1", $scope.datos.tarjetas1);
            parametros.append("tarjetas2", $scope.datos.tarjetas2);

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

