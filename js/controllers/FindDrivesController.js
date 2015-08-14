app.controller("FindDrivesController", function($scope, $state, DriveService) {
   $scope.find = function() {
      $state.go('main');
   }
   $scope.drives = DriveService.getDrives();
});
