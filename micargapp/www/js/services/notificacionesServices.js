(function () {
    'use strict';
angular.module('app.Services')

.service('notificacionService', notificacionService);

notificacionService.$inject = ['$http', '$q', 'constants']

function notificacionService($http, $q,constants) {
	var self = this;
	self.get = onGet;
  self.get2 = onGet2;


    function onGet(token,id){
    	var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.notificaciones.get();

            $http.get(url+"?type="+id+"&access-token="+token)
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

     function onGet2(token){
      var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.notificaciones.cotization();

            $http.get(url+"?access-token="+token)
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


