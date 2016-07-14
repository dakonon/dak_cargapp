(function () {
    'use strict'
angular.module('app.Controllers').controller('chatController', chatController);

    chatController.$inject = ['$scope','localStorageService', 'ChatService','$ionicPopup','$state', '$timeout']

    function chatController($scope,localStorageService,ChatService,$ionicPopup,$state, $timeout) {
        var access_token = localStorageService.get("access_token");
        $scope.limit = 10;
        $scope.textMsj = "";
        $scope.yo = "";
        
        $scope.send = function (){
          if (this.textMsj == "") return false;
          var mensaje = [
            $scope.yo,
            true,
            this.textMsj,
            "12:10 1 de Agosto"
          ];
          this.textMsj="";
          $scope.mensajes.push(mensaje);

          this.sendService(mensaje);
        };

        $scope.getMsjsService = function getMsjsService(){
          // chatService.onList(access_token, $routeParams.contratcemp, $scope.limit);
          ChatService.list(access_token, 1, $scope.limit)
            .success(function(data) {
              $scope.mensajes = data.chat;
              for (var i = data.chat.length - 1; i >= 0; i--) {
                if (data.chat[i][1] == true){
                  $scope.yo = data.chat[i][0];
                  break;
                }
              }
            });
        };
        $scope.getMsjsService();

        $scope.sendService = function(mensaje){
          ChatService.list(access_token, 1, $scope.yo, this.textMsj)
            .success(function(data) {
              console.log(data);
          });
          setTimeout($scope.getMsjsService(), 3000);
        };
          
    }
})()
