(function () {
    'use strict';
angular.module('app.Services')

.service('contratoService', contratoService);

contratoService.$inject = ['$http', '$q', 'constants']

function contratoService($http, $q,constants) {
	var self = this;
	self.send = onSend;
  self.destino = onDestino;
  self.finalizar = onFinalizar;
  


    function onSend(token,param){
    	var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.contrato.send();
            url = url +"?id_contract="+param+ "&access-token="+token;
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
  
        function onDestino(token,params){
           var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.contrato.destino();
            $http.post(url+token,params)
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

      function onFinalizar(token,params){
           var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.contrato.finalizar();
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


