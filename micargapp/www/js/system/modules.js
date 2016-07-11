(function () {
    'use strict'
    var dependencies = [
        'ui.router'
        , 'app.Controllers'
        , 'app.Services'
        , 'app.Directives'
        ,'ionic'
        , 'LocalStorageModule'
        ,'irontec.simpleChat'
   ]

    angular.module('app', dependencies);
    angular.module('app.Controllers', []);
    angular.module('app.Services', []);
    angular.module('app.Directives', []);


})()