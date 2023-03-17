const app = angular.module("spicyApp1", []);

app.controller("SpicyController", ["$scope", ($scope) => {
    $scope.spice = 'very';

    $scope.chiliSpicy = () => {
        $scope.spice = 'chili';
    };

    $scope.jalapenoSpicy = () => {
        $scope.spice = 'jalapeño';
    };
}])