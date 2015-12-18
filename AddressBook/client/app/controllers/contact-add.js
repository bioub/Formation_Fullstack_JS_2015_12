angular.module('contact.controller.add', ['contact.service.contact'])
    .controller('ContactAddController', [
    '$scope', 'Contact', '$location', function($scope, Contact, $location) {
        $scope.ajouter = function() {
            var contact = new Contact($scope.contact);
            contact.$save(function() {
                $location.url('/');
            });
        };
    }]);