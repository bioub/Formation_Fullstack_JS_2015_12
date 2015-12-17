angular.module('app', [])
    .controller('ContactController', ['$scope', function($scope) {
        $scope.prenoms = ['Steve', 'Mark', 'Bill'];

        $scope.ajouter = function() {
            $scope.prenoms.push($scope.prenom);
        };
    }]);