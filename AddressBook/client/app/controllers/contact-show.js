angular.module('contact.controller.show', ['contact.service.contact'])
    .controller('ContactShowController', [
    '$scope', 'Contact', '$routeParams', function($scope, Contact, $routeParams) {
        $scope.contact = Contact.get({contactId: $routeParams.id})
    }]);