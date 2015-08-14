app.controller("AddQuestionController", function ($scope, $state, QuestionService) {
  $scope.addQuestion = function () {
    $scope.qid = QuestionService.addQuestion($scope.question);
    $state.go('Solution', {
      "qid": $scope.qid
    });
  }
  $scope.import = function () {
    $state.go('ImportQuestions');
  }

});