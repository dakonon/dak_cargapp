angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
  })
  .state('recover', {
    url: '/recover',
    templateUrl: 'templates/recover.html',
  })
  .state('register', {
    url: '/register',
    templateUrl: 'templates/userRegister.html',
    controller: 'userRegisterCtrl'
  })
  .state('notfound', {
    url: '/notfound',
    templateUrl: 'templates/notfound.html',
  })
  $urlRouterProvider.otherwise('/home')
});

