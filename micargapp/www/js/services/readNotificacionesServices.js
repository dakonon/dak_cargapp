(function () {
    'use strict';
angular.module('app.Services')

.service('readNotificacionService', readNotificacionService);

readNotificacionService.$inject = ['$http', '$q', 'constants']

function readNotificacionService($http, $q,constants) {
	var self = this;
	self.read = onRead;


    function onRead(token,id){
    	var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.notificaciones.read();

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
  
}
})()


