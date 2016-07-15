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
