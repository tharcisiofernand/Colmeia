angular
    .module('colmeia')
    .config(Config);

function Config($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.views.maxCache(0);

    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'modules/menu/menu.html',
            controller: 'AppController',
            controllerAs: 'vm'
        })

        .state('app.login', {
            url: '/login',
            views: {
                'menuContent': {
                    templateUrl: 'modules/login/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                }
            }
        })

        .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                    templateUrl: 'modules/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                }
            }
        })

        .state('app.cadeventos', {
            url: '/cadeventos',
            params: {
                        listConvidados : null,
                        cadeventosid : null
                    },
            views: {
                'menuContent': {
                    templateUrl: 'modules/cadeventos/cadeventos.html',
                    controller: 'CadeventosController',
                    controllerAs: 'vm'
                }
            }
        })

        .state('app.convidados', {
            url: '/convidados',
            params: {
                        cadeventosid : null
                    },
            views: {
                'menuContent': {
                    templateUrl: 'modules/convidados/convidados.html',
                    controller: 'ConvidadosController',
                    controllerAs: 'vm'
                    
                }
            },
        })

    $urlRouterProvider.otherwise('/app/login');
}
