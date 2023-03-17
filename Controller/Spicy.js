const app = angular.module("spicyApp1", []);

app.controller('SpicyController', ['$scope', function($scope) {
    $scope.customSpice = 'wasabi';
    $scope.spice = 'very';

    $scope.spicy = function(spice) {
        $scope.spice = spice;
    };
}]);
// app.controller("SpicyController", ["$scope", ($scope) => {
//     $scope.spice = 'very';
//
//     $scope.chiliSpicy = () => {
//         $scope.spice = 'chili';
//     };
//
//     $scope.jalapenoSpicy = () => {
//         $scope.spice = 'jalapeño';
//     };
// }])