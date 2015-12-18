angular.module('app', [
    'contact.controller.list',
    'contact.controller.add',
    'contact.controller.show',
    'ngRoute'
])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/views/contact-list.html',
                controller: 'ContactListController',
            })
            .when('/contact/ajouter', {
                templateUrl: '/app/views/contact-add.html',
                controller: 'ContactAddController'
            })
            .when('/contact/:id', {
                templateUrl: '/app/views/contact-show.html',
                controller: 'ContactShowController'
            });

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    });