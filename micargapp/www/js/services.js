angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory('LoginService', function($q, $http, ApiLogin) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var parametros = JSON.stringify({"username": name, "password": pw})
      //ApiLogin.url   : es la constante del rest services
      $http.post(ApiLogin.url, parametros).success(function(data) {
      if(data) {
        console.log(data)
          deferred.resolve(data);
          deferred.resolve('Welcome ' + name + '!');
      } else {
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
})
