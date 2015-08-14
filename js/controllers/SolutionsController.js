app.controller("SolutionsController", function ($scope, $state, $stateParams, QuestionService) {
  $scope.AddSolution = function () {
    QuestionService.addOptions($stateParams.qid, $scope.options, $scope.solution);
    $state.go('AddQuestion');
  };
});