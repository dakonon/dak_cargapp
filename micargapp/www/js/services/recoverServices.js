(function () {
    'use strict';
angular.module('app.Services')

.service('RecoverService', RecoverService);

RecoverService.$inject = ['$http', '$q', 'constants']

function RecoverService($http, $q,constants) {
	var self = this;
	self.recoverAccount = onRecoverAccount
  

  
    function onRecoverAccount(email){
    	var deferred = $q.defer();
            var promise = deferred.promise;
            var parametros = JSON.stringify({"email": email})
             var url= constants.recover.recover();
            $http.post(url, parametros).success(function(data) {
              if(data) {
                console.log(data)
                deferred.resolve(data);
                deferred.resolve('Welcome ' + name + '!');
            } 
              else {
                deferred.reject(data);
                deferred.reject('Wrong credentials.');
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
