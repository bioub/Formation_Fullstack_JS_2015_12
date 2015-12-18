angular.module('contact.service.contact', ['ngResource'])
    .factory('Contact', ['$resource', function($resource) {
        return $resource('/api/v1/contacts/:contactId', {contactId:'@_id'});
    }]);