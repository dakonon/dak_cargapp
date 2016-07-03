angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
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
  .state('tab.cotizar_a', {
    url: '/transportador-cotizar-a',
        views: {
            'cotizar_a' :{
                templateUrl: 'templates/transportador/cotizar_a.html',
            }
        }
    
  })
  .state('tab.mis_cargas_a', {
    url: '/mis_cargas_a',
        views: {
            'mis_cargas_a' :{
                templateUrl: 'templates/transportador/mis_cargas_a.html',
        
            }
        }
    
  })

    .state('tab.mis_cargas_b', {
    url: '/mis_cargas_b',
        views: {
            'mis_cargas_b' :{
                templateUrl: 'templates/transportador/mis_cargas_b.html',
        
            }
        }
    
  })

  .state('tab.cotizar_cliente', {
    url: '/transportador-cotizar-cliente',
        views: {
            'cotizar_cliente' :{
                templateUrl: 'templates/transportador/cotizar_cliente.html',                
            }
        }
    
  })

  .state('tab.cotizar_empresa', {
    url: '/transportador-cotizar-empresa',
        views: {
            'cotizar_empresa' :{
                templateUrl: 'templates/transportador/cotizar_empresa.html'
                
            }
        }
    
  })

  .state('tab.editar_empresas', {
    url: '/transportador-editar-empresas',
        views: {
            'editar_empresas' :{
                templateUrl: 'templates/transportador/editar_empresas.html',                
            }
        }
    
  })
  .state('tab.mi_perfil', {
    url: '/transportador-mi-perfil',
        views: {
            'editar_empresas' :{
                templateUrl: 'templates/transportador/mi_perfil.html',
                controller : 'mi_perfil'
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

  .state('transportador-3-inicio', {
    url: '/transportador-3-inicio',
    templateUrl: 'templates/transportador/transportador_3_inicio.html',
  })

  .state('perfil', {
    url: '/perfil',
    templateUrl: 'templates/transportador/perfil.html',
  })

  .state('tab.editar_perfil', {
    url: '/editar_perfil',
    views: {
        'editar_perfil' :{
            templateUrl: 'templates/transportador/editarPerfil.html'          
        }
    }    
  })

    .state('tab.noticias', {
    url: '/noticias',
    views: {
        'tab-noticias' :{
            templateUrl: 'templates/transportador/noticias.html'          
        }
    }    
  })

  .state('tab.perfil_empresa', {
    url: '/perfil_empresa',
        views: {
            'perfil_empresa' :{
                templateUrl: 'templates/transportador/perfilEmpresa.html',
        
            }
        }
    
  })

    .state('tab.finalizadas', {
    url: '/finalizadas',
        views: {
            'finalizadas' :{
                templateUrl: 'templates/transportador/finalizadas.html'        
            }
        }
    
  })
      .state('tab.chat', {
    url: '/chat',
        views: {
            'chat' :{
                templateUrl: 'templates/transportador/chat.html',
        
            }
        }
    
  })
  
  .state('notfound', {
    url: '/notfound',
    templateUrl: 'templates/notfound.html',
  })
  
  $urlRouterProvider.otherwise('/home')
});