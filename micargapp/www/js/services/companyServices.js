(function () {
    'use strict';
angular.module('app.Services')

.service('CompanyService', CompanyService);

CompanyService.$inject = ['$http', '$q', 'constants']

function CompanyService($http, $q,constants) {
	var self = this;
	self.list = onList;
  self.friend = onFriend;
  self.see = onSee;
  self.invitacion = onInvitacion;
  self.aceptsolicitude = onAceptsolicitude;
  self.deletesolicitude = onDeletesolicitude;
  self.sendsolicitude = onSendsolicitude;
  
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

    function onFriend(token){
      var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.company.friend();

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

    function onSee(token,params){
      var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.company.see();
            url = url +"?id="+params+ "&access-token="+token;           
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

    function onInvitacion(token,param){
      var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.company.invitacion();
            url = url +"?status="+param+ "&access-token="+token;           
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

    function onSendsolicitude(token,param){

      var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.company.sendsolicitude();
            url = url +"?id="+param+ "&access-token="+token;           
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

    function onAceptsolicitude(token,param){
      var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.company.aceptsolicitude();
            url = url +"?id="+param+ "&access-token="+token;           
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

    function onDeletesolicitude(token,param){
      var deferred = $q.defer();
            var promise = deferred.promise;
            var url= constants.company.deletesolicitude();
            url = url +"?id="+param+ "&access-token="+token; 
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

  
}
})()

