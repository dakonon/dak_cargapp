(function () {
    'use strict';
angular.module('app.Services')

.service('geoService', geoService);

geoService.$inject = ['$http', '$q', 'constants']

function geoService($http, $q,constants) {
	var self = this;
	self.send = onSend
  


    function onSend(token,params){
      var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.geo.send();
           
      
            $http.post(url+token,params, {headers: {"Content-type": undefined}, transformRequest: angular.indentity})
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


