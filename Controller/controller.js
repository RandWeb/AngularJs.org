
const app = angular.module("myApp",[]);

app.controller("GreethingController",["$scope",($scope)=>{
    $scope.greeting = "hi";
}]);

/*********************************************************************/

app.controller("DoubleController",["$scope",($scope)=>{
    $scope.double =  (value)=> value * 2;
}]);