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
    controller: 'LoginCtrl',
  })
  .state('recover', {
    url: '/recover',
    templateUrl: 'templates/recover.html',
    controller: 'RecoverCtrl',
  })
  .state('register', {
    url: '/register',
    templateUrl: 'templates/userRegister.html',
    controller: 'UserRegisterCtrl'
  })
  .state('notfound', {
    url: '/notfound',
    templateUrl: 'templates/notfound.html',
  })
  .state('transportador_cotizar_a', {
    url: '/transportador-cotizar-a',
    templateUrl: 'templates/transportador/cotizar_a.html',
  })
  $urlRouterProvider.otherwise('/home')
});

