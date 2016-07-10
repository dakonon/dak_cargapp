(function () {
    'use strict';
angular.module('app.Services')

.service('CompanyService', CompanyService);

CompanyService.$inject = ['$http', '$q', 'constants']

function CompanyService($http, $q,constants) {
	var self = this;
	self.list = onList
  
    function onList(token){
    	var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.company.getItems();

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

