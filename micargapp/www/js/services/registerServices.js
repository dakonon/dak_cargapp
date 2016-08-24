(function () {
    'use strict';
angular.module('app.Services')

.service('RegisterService', RegisterService);

RegisterService.$inject = ['$http', '$q', 'constants']

function RegisterService($http, $q,constants) {
	var self = this;
	self.registerUser = onRegisterUser;
  

    function onRegisterUser(parametros){

    	var deferred = $q.defer();
            var deferred = $q.defer();
            var promise = deferred.promise;
          
         
            var url= constants.register.register();
            $http.post(url, parametros, {headers: {"Content-type": undefined}, transformRequest: angular.indentity}).success(function(data){
              if(data) {
                console.log("nada")                
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


