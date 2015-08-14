app.controller('CandidateLoginController', function ($state, $scope) {
  $scope.candidateLogin = function () {
    $state.go('candidate2');
  }
});