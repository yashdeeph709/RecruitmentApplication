app.controller('CandidateNext2Controller', function ($state, $scope) {
  $scope.candidateNext2 = function () {
    $state.go('candidate4');
  }
});