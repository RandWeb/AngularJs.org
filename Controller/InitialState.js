
const app = angular.module("myApp",[]);

app.controller("GreethingController",["$scope",($scope)=>{
    $scope.greeting = "hi";
}]);