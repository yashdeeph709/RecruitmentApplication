app.controller('dialogcontroller', ['$scope', '$mdDialog', '$mdToast',
  function ($scope, $mdDialog, $mdToast) {
    $scope.cancel = function () {
      $mdDialog.cancel();
    };
    $scope.toastPosition = {
      bottom: true,
      top: true,
      left: true,
      right: true
    };
    $scope.getToastPosition = function () {
      return Object.keys($scope.toastPosition)
        .filter(function (pos) {
          return $scope.toastPosition[pos];
        })
        .join(' ');
    };
    var toast = $mdToast.simple()
      .content('Password reset E-mail is sent to your E-mail ID !')
      .action('OK')
      .position($scope.getToastPosition());
    $scope.forget = function (email) {
      console.log(email);
      $mdToast.show(toast).then(function () {
        $mdDialog.cancel();
      });
    };
  }
  ]);