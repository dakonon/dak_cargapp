(function () {
    'use strict';
angular.module('app.Services')

.service('RegisterService', RegisterService);

RegisterService.$inject = ['$http', '$q', 'constants']

function RegisterService($http, $q,constants) {
	var self = this;
	self.registerUser = onRegisterUser
  

    function onRegisterUser(name, email, phone, password, password_repeat, avatar, type){
    	var deferred = $q.defer();
            var deferred = $q.defer();
            var promise = deferred.promise;
            type = 4;
            var parametros = JSON.stringify({"name": name, "email": email, "phone": phone,
                                             "password": password, "password_repeat": password_repeat,
                                             "avatar": avatar, "type": type})
            console.log(parametros)
            var url= constants.register.register();
            $http.post(url, parametros).success(function(data){
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


