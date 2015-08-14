app.controller("CreateDriveController", function ($scope, $state, DriveService) {
  $scope.find = function () {
    $state.go('AddQuestion');
  }
  $scope.create = function () {
    DriveService.createDrive($scope.drive);
  }
});