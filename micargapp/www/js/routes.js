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
  .state('tab', {
    url: '/tab',
    abstract: true,    
    templateUrl: 'templates/tab.html',
  })
  .state('tab.cotizar', {
    url: '/cotizar',
    views: {
        'cotizar' :{
           templateUrl: 'templates/cotizar.html',
           controller : 'cotizar'
            }
    }    
  })
  .state('tab.cotizar_a', {
    url: '/transportador-cotizar-a',
        views: {
            'cotizar_a' :{
                templateUrl: 'templates/transportador/cotizar_a.html',
                controller : 'cotizar_a'
            }
        }
    
  })
  .state('tab.cotizar_cliente', {
    url: '/transportador-cotizar-cliente',
        views: {
            'cotizar_cliente' :{
                templateUrl: 'templates/transportador/cotizar_cliente.html',
                controller : 'cotizar_cliente'
            }
        }
    
  })
  .state('tab.editar_empresas', {
    url: '/transportador-editar-empresas',
        views: {
            'editar_empresas' :{
                templateUrl: 'templates/transportador/editar_empresas.html',
                controller : 'editar_empresas'
            }
        }
    
  })
  .state('tab.activa', {
    url: '/activa',
    views: {
        'tab-activa' :{
           templateUrl: 'templates/activa.html',
           controller : 'activa'
            }
    }    
  })
  .state('tab.transportador_cotizar_b', {
    url: '/transportador-cotizar-b',
    views: {
        'cotizar_b' :{
           templateUrl: 'templates/transportador/cotizar_b.html',
           controller : 'cotizar_b'
            }
    }    
  })
  
  .state('notfound', {
    url: '/notfound',
    templateUrl: 'templates/notfound.html',
  })
  
  $urlRouterProvider.otherwise('/home')
});

