app.controller('AcadDetailsController', function ($state, $scope) {
  $scope.candidateNext3 = function () {
    $state.go('candidate5');
  }
});