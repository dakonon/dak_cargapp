
(function () {
    'use strict'
angular.module('app.Controllers').controller('UserRegisterCtrl', UserRegisterCtrl);

    UserRegisterCtrl.$inject = ['$scope','RegisterService','$ionicPopup','$state']

    function UserRegisterCtrl($scope,RegisterService,$ionicPopup,$state) {
         $scope.datos = {};

         $scope.register = onRegister;

          function onRegister(){


              $scope.datos.type = 4;
              $scope.datos.reference_comertial_type = 1;
              $scope.datos.reference_personal1_type =1;
              
              console.log($scope.datos)
            var parametros = JSON.stringify({"name": $scope.datos.name
                                            , "email": $scope.datos.email
                                            , "phone": $scope.datos.phone
                                            , "password": $scope.datos.password
                                            , "password_repeat": $scope.datos.password_repeat
                                            , "type": $scope.datos.type
                                            , "avatar": $scope.datos.avatar
                                            , "vehicletype": $scope.datos.vehicletype
                                            , "vehicle_bodywork": $scope.datos.vehicle_bodywork
                                            , "vehicle_licenceplate": $scope.datos.vehicle_licenceplate
                                            , "vehicle_model": $scope.datos.vehicle_model
                                            , "vehicle_brand": $scope.datos.vehicle_brand 
                                            , "vehicle_color": $scope.datos.vehicle_color
                                            , "reference_comertial_name": $scope.datos.reference_comertial_name
                                            , "reference_comertial_address": $scope.datos.reference_comertial_address
                                            , "reference_comertial_phone": $scope.datos.reference_comertial_phone
                                            , "reference_comertial_type": $scope.datos.reference_comertial_type
                                            , "reference_personal1_name": $scope.datos.reference_personal1_name
                                            , "reference_personal1_address": $scope.datos.reference_personal1_address
                                            , "reference_personal1_phone": $scope.datos.reference_personal1_phone
                                            , "reference_personal1_type": $scope.datos.reference_personal1_type
                                            , "reference_personal2_name": $scope.datos.reference_personal2_name
                                            , "reference_personal2_address": $scope.datos.reference_personal2_address
                                            , "reference_personal2_phone": $scope.datos.reference_personal2_phone
                                            , "reference_personal2_type": $scope.datos.reference_personal2_type
                                            , "cedula1": $scope.datos.cedula1
                                            , "cedula2": $scope.datos.cedula2
                                            , "tarj_prop1": $scope.datos.tarj_prop1
                                            , "tarj_prop2": $scope.datos.tarj_prop2
                                            , "licencia1": $scope.datos.licencia1
                                            , "licencia2": $scope.datos.licencia2
                                            , "revision1": $scope.datos.revision1
                                            , "revision2": $scope.datos.revision2
                                            , "soat1": $scope.datos.soat1
                                            , "soat2": $scope.datos.soat2
                                            , "tarjetas1": $scope.datos.tarjetas1
                                            , "tarjetas2": $scope.datos.tarjetas2



                                          })


           RegisterService.registerUser(parametros).success(function(data){
                  if(data.validacion == 'ok')
                         {   
                              var alertPopup = $ionicPopup.alert({
                                  title: 'Mensaje Enviado!',
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

