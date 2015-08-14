app.controller("StudentDetailsController", function ($scope, $state) {
  $scope.find = function () {
    $state.go('AddQuestion');
  }
});