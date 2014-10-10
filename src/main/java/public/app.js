'use strict';

var bangular = angular.module('bangular',
    [
        'ngRoute',
        'bangularControllers',
        'bangularServices'
    ]);

//$locationProvider) {
//    $locationProvider.html5Mode(true);

bangular.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
            when('/events', {
                templateUrl: '/partials/events-list.html',
                controller: 'EventListCtrl'
            }).
            when('/events/:eventId', {
                templateUrl: '/partials/event-detail.html',
                controller: 'EventDetailCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
