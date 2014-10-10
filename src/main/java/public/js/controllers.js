'use strict';

var bangularControllers = angular.module('bangularControllers', []);

bangularControllers.controller('EventListCtrl', ['$scope', 'Event',
    function($scope, Event) {

        $scope.newDescription = "";

        $scope.events = Event.query();
//        $scope.orderProp = 'age';

        $scope.add = function() {
            Event.create(
                {},
                { description : $scope.newDescription},
                function(success) {
                    console.log("CREATE SUCCESS : " + success.toJSON);
                    $scope.events = Event.query();
                }, function(error) {
                    console.log("CREATE ERROR : " + error.toJSON);
                });

        };

        $scope.delete = function(id) {
            Event.delete(
                {eventId:id},
                function(success) {
                    console.log("DELETE SUCCESS : " + success.toJSON);
                    $scope.events = Event.query();
                }, function(error) {
                    console.log("DELETE ERROR : " + error.toJSON);
                });
        }
    }]);

bangularControllers.controller('EventDetailCtrl', ['$scope', '$routeParams', 'Event',
    function($scope, $routeParams, Event) {
        $scope.event = Event.get({eventId: $routeParams.eventId}, function(event) {
            $scope.id = event.id[0];
            $scope.description = event.description[0];
        });

//        $scope.setImage = function(imageUrl) {
//            $scope.mainImageUrl = imageUrl;
//        }
    }]);
