var dieTherapieApp = angular.module('dieTherapie', [
    'ngRoute',
    'dtDirectives'
]).config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
                .when('/intro', {
                    templateUrl: './snippets/intro.html'
//                    controller: 'HomeCtrl'
                })
                .when('/home', {
                    templateUrl: './snippets/home.html'
//                    controller: 'HomeCtrl'
                })
                .when('/proyecto', {
                    templateUrl: './snippets/proyecto.html'
//                    controller: 'HomeCtrl'
                })
                .when('/instalacion', {
                    templateUrl: './snippets/instalacion.html'
//                    controller: 'HomeCtrl'
                })
                .when('/equipo', {
                    templateUrl: './snippets/equipo.html'
//                    controller: 'HomeCtrl'
                })
                .otherwise({
                    redirectTo: '/intro'
                });
    }]);


