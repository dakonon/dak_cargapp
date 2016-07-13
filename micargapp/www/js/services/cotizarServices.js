(function () {
    'use strict';
angular.module('app.Services')

.service('cotizarService', cotizarService);

cotizarService.$inject = ['$http', '$q', 'constants']

function cotizarService($http, $q,constants) {
	var self = this;
	self.list = onList
  self.list2 = onList2
  self.activos = onActivos
  self.finalizadas = onFinalizadas


    function onList(token){
    	var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.cotizar.getItems1();

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

    function onList2(token){
      var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.cotizar.getItems2();

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

    function onActivos(token){
      var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.activos.getItems();

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

    function onFinalizadas(token){
      var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.finalizadas.getItems();

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
  
}
})()


