(function () {
    'use strict';
angular.module('app.Services')

.service('vehiclesService', vehiclesService);

vehiclesService.$inject = ['$http', '$q', 'constants']

function vehiclesService($http, $q,constants) {
	var self = this;
	self.list = onList
  
    function onList(){
    	var deferred = $q.defer();
            var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.vehicles.get();

            $http.get(url)
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

