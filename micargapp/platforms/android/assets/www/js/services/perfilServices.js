(function () {
    'use strict';
angular.module('app.Services')

.service('EditPerfilService', EditPerfilService);

EditPerfilService.$inject = ['$http', '$q', 'constants']

function EditPerfilService($http, $q,constants) {
	var self = this;
	self.list = onList
  self.update = onUpdate


    function onList(token){
    	var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.perfil.edit();

            $http.get(url+token)
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

     function onUpdate(token,params){      
      var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.perfil.update();

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


