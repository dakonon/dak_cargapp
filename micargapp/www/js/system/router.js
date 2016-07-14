// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
(function () {
    'use strict';

angular.module('app')

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(config);

 config.$inject = ['$stateProvider', '$urlRouterProvider','$ionicConfigProvider'];

    function config($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
      $ionicConfigProvider.tabs.position("bottom");
      $ionicConfigProvider.navBar.alignTitle("center");

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
        templateUrl: 'templates/userRegister.html'
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
                    controller: 'cotizarCtrl'
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
        url: '/mis_cargas_b/?name&origen&destino&fecha&peso&payment&company_avatar&pkcotizaremp&company_mail&id_contract',
            views: {
                'mis_cargas_b' :{
                    templateUrl: 'templates/transportador/mis_cargas_b.html',
            
                }
            }
        
      })

         .state('tab.entrega', {
        url: '/entrega',
            views: {
                'entrega' :{
                    templateUrl: 'templates/transportador/entrega.html',
            
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
        url: '/transportador-cotizar-empresa/?type&name&origen&destino&fecha&peso&payment&comment&company_avatar&pkcotizaremp&pk_contract',
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
                    templateUrl: 'templates/transportador/mi_perfil.html'
                    
                }
            }
        
      })
      .state('tab.activa', {
        url: '/activa',
        views: {
            'tab-activa' :{
               templateUrl: 'templates/activa.html'
              
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
  }
})()