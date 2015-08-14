app.controller('LoginController', function ($state, $scope, $interval, $mdDialog) {
  $scope.mode = 'query';
  $scope.determinateValue = 0;
  $scope.login = function () {
    $scope.progress = true;
    $interval(function () {
      $scope.determinateValue += 1;
      if ($scope.determinateValue === 50) {
        $state.go('finddrives');
      }
    }, 50, 0, true);
  };
  $scope.forgot = function (ev) {
    $mdDialog.show({
      controller: 'dialogcontroller',
      templateUrl: 'partials/forgetpassword.html',
      parent: angular.element(document.body),
      targetEvent: ev
    })
      .then(function (answer) {
        $scope.alert = 'You said the information was "' + answer + '".';
      }, function () {
        $scope.alert = 'You cancelled the dialog.';
      });
  };

});