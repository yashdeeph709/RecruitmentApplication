app.controller('PersonalDetailsController', function ($state, $scope) {
  $scope.candidateNext1 = function () {
    $state.go('candidate3');
  };
});