(function () {
    'use strict';
angular.module('app.Services')

.service('PayService', PayService);

PayService.$inject = ['$http', '$q', 'constants']

function PayService($http, $q,constants) {
	var self = this;
	self.pay = onPay;


    function onPay(token,id){
    	var deferred = $q.defer();
            var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.pay.transporte();

            $http.get(url+"?access-token="+token+"&id_contract="+id)
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


