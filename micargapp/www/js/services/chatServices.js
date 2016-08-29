(function () {
    'use strict';
angular.module('app.Services')

.service('ChatService', ChatService);

ChatService.$inject = ['$http', '$q', 'constants']

function ChatService($http, $q,constants) {
	var self = this;
	self.list = onList;
    self.send = sendMsj;

    function onList(token, contratcemp, limit){
      limit = typeof limit !== 'undefined' ? limit : 10;
    	var deferred = $q.defer();
        var promise = deferred.promise;
        var url= constants.chat.getMsjs();
        var parametros = {
        	"contratcemp": contratcemp,
        	"limit": limit
        }
        $http.post(url+token, parametros)
          .success(function(data) {
            if(data) {
              deferred.resolve(data);
            }
            else {
              deferred.reject(data);
            }
          }).error(function(data) {
              deferred.reject(data);
          });

        promise.success = function(fn) {
          promise.then(fn);
          return promise;
        }
        promise.error = function(fn) {
          promise.then(null, fn);
          return promise;
        }
        return promise;
    }

    function sendMsj(token, contratcemp, mensaje){
    	var deferred = $q.defer();
        var promise = deferred.promise;
        var url= constants.chat.sendMsjs();
        var parametros = {
        	"contratcemp": contratcemp,
        	"message": mensaje
        }
        $http.post(url+token, parametros)
          .success(function(data) {
            if(data) {
              deferred.resolve(data);
            }
            else {
              deferred.reject(data);
            }
          }).error(function(data) {
              deferred.reject(data);
          });

        promise.success = function(fn) {
          promise.then(fn);
          return promise;
        }
        promise.error = function(fn) {
          promise.then(null, fn);
          return promise;
        }
        return promise;
    }
  
}
})()

