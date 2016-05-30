angular.module('app.services', [])

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
})

.factory('RecoverService', function($q, $http, ApiRecover) {
    return {
        recoverAccount: function(email) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var parametros = JSON.stringify({"email": email})
            //ApiRecover.url   : es la constante del rest services
            $http.post(ApiRecover.url, parametros).success(function(data) {
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
})

.factory('RegisterService', function($q, $http, ApiRegister) {
    return {
        registerUser: function(name, email, phone, password, password_repeat, avatar, type) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            type = 4;
            var parametros = JSON.stringify({"name": name, "email": email, "phone": phone,
                                             "password": password, "password_repeat": password_repeat,
                                             "avatar": avatar, "type": type})
            console.log(parametros)
            //ApiRegister.url   : es la constante del rest services
            $http.post(ApiRegister.url, parametros).success(function(data){
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
})
