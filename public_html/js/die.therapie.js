var dieTherapieApp = angular.module('dieTherapie', [
    'ngRoute',
    'dtDirectives'
]).config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
//                .when('/intro', {
//                    templateUrl: './snippets/intro.html'
////                    controller: 'HomeCtrl'
//                })
                .when('/home', {
                    templateUrl: './snippets/home.html'
//                    controller: 'HomeCtrl'
                })
                .when('/proyecto', {
                    templateUrl: './snippets/proyecto.html'
//                    controller: 'HomeCtrl'
                })
                .when('/personajesehistoria', {
                    templateUrl: './snippets/personajesehistoria.html'
//                    controller: 'HomeCtrl'
                })
                .when('/fotosytextos', {
                    templateUrl: './snippets/fotosytextos.html'
//                    controller: 'HomeCtrl'
                })
                .when('/fichatecnica', {
                    templateUrl: './snippets/fichatecnica.html'
//                    controller: 'HomeCtrl'
                })
                .otherwise({
                    redirectTo: '/home'
                });
    }]);


