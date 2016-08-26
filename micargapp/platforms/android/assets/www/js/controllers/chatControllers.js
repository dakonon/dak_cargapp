(function () {
    'use strict'
angular.module('app.Controllers').controller('chatController', chatController);

    chatController.$inject = ['$scope','$stateParams','localStorageService', 'ChatService','$ionicPopup','$state', '$timeout']

    function chatController($scope,$stateParams,localStorageService,ChatService,$ionicPopup,$state, $timeout) {
        var access_token = localStorageService.get("access_token");
        console.log($stateParams.id)
        $scope.limit = 10;
        $scope.textMsj = "";
        $scope.yo = "";
        $scope.datos = {};
        $scope.datos.nombre = $stateParams.nombre; 
        $scope.datos.destino = $stateParams.destino;
        $scope.datos.origen = $stateParams.origen;
        $scope.datos.fecha = $stateParams.fecha;
        $scope.datos.peso = $stateParams.peso;
        $scope.datos.payment = $stateParams.payment;
        $scope.datos.avatar = $stateParams.avatar;               
        $scope.datos.id_contract = $stateParams.id;  


        $scope.send = function (){
          if (this.textMsj == "") return false;
          this.sendService();
        };

        $scope.getMsjsService = function getMsjsService(){
          // chatService.onList(access_token, $routeParams.contratcemp, $scope.limit);
          ChatService.list(access_token, 1, $scope.limit)
            .success(function(data) {
              $scope.mensajes = data.chat;
              console.log($scope.mensajes);
              for (var i = 0; i <= data.chat.length; i++) {
                if (data.chat[i][1] == true){
                  $scope.yo = data.chat[i][0];
                  break;
                }
              }
            });
        };
        $scope.getMsjsService();

        $scope.sendService = function(mensaje){
          ChatService.send(access_token, $stateParams.id, this.textMsj)
            .success(function(data) {
              console.log(data);
              $scope.getMsjsService();
              $scope.textMsj="";
          });
          // setTimeout($scope.getMsjsService(), 3000);
        };
          
    }
})()
