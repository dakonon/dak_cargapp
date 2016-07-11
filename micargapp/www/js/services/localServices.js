(function () {
    'use strict';
angular.module('app.Services')

.service('StorageService', StorageService);

StorageService.$inject = ['$localStorage']

function StorageService($localStorage) {
  
    var _getAll = function () {
    return $localStorage;
  };
  var _add = function (thing) {
    $localStorage.things.push(thing);
  }
  var _remove = function (thing) {
    $localStorage.things.splice($localStorage.things.indexOf(thing), 1);
  }
  return {
      getAll: _getAll,
      add: _add,
      remove: _remove
    };
  
}
})()


