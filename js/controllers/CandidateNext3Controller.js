app.controller('CandidateNext3Controller', function ($state, $scope) {
  $scope.candidateNext3 = function () {
    $state.go('candidate5');
  }
});