angular.module('contact.controller.list', ['contact.service.contact'])
    .controller('ContactListController', [
    '$scope', 'Contact', function($scope, Contact) {
        $scope.contacts = Contact.query();

        $scope.supprimer = function(i) {
            var contact = $scope.contacts[i];

            contact.$delete(function() {
                $scope.contacts.splice(i, 1);
            });
        };
    }]);