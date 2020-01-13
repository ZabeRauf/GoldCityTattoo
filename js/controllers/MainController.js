app.controller('MainController', ['$scope', 'shots', 'cases', function($scope, shots, cases) {
  $scope.shots = shots;
  $scope.cases = cases;
  console.log(cases);
}]);