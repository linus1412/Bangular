'use strict';

var bangularServices = angular.module('bangularServices', ['ngResource']);

bangularServices.factory('Event', ['$resource',
    function($resource){
        return $resource('/api/events/:eventId', {}, {
            query: {method:'GET', isArray:true},
            'update' : { method: 'POST' },
            'create' : { method: 'PUT' }
        });
    }]);
