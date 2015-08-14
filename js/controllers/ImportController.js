app.controller("ImportController", function ($scope, $state) {
  $scope.find = function () {
    $state.go('createdrive');
  }
});