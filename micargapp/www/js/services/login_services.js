(function () {
    'use strict';
angular.module('app.Services')

.service('LoginService', LoginService);

LoginService.$inject = ['$http', '$q', 'constants']

function LoginService($http, $q,constants) {
	var self = this;
	self.token = onToken
  

  
    function onToken(name, pw){
    	var deferred = $q.defer();
            var promise = deferred.promise;
            var parametros = JSON.stringify({"username": name, "password": pw})
            
            var url= constants.login.getToken();
  
            
            $http.post(url, parametros).success(function(data) {
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

