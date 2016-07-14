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
  self.aceptar1 = onAceptar1
  self.aceptar2 = onAceptar2
  self.aceptar3 = onAceptar3


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

    function onAceptar1(token,params){
      var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.cotizar.aceptar1();
            url = url +"?id_cot="+params+ "&access-token="+token;           
            console.log(url);
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

    function onAceptar2(token,params){
      var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.cotizar.aceptar2();           
            url = url +"?id_contract="+params+ "&access-token="+token;         
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

    function onAceptar3(token,params){
      var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.cotizar.aceptar3();
              url = url +"?id_cot="+params+ "&access-token="+token;     
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


