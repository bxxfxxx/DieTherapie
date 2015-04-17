(function () {
    var directives = angular.module('dtDirectives', []);
    directives.directive('dtHeader', function () {
        return {
            restrict: 'E',
            templateUrl: './snippets/header.html'
        };
    });
    directives.directive('dtFooter', function () {
        return {
            restrict: 'E',
            templateUrl: './snippets/footer.html'
        };
    });
})();