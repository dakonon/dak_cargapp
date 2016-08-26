(function () {
    'use strict';
angular.module('app.Services')

.service('InvitacionService', InvitacionService);

InvitacionService.$inject = ['$http', '$q', 'constants']

function InvitacionService($http, $q,constants) {
	var self = this;
	self.invitacion = onInvitacion


    function onInvitacion(token){
    	var deferred = $q.defer();
            var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.invitacion.getInvitacion();

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


