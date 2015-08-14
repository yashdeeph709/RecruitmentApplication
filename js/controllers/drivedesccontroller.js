app.controller('drivedesccontroller', ['$scope', '$stateParams', 'DriveService',

   function($scope, $stateParams, DriveService) {
      $scope.drive = DriveService.getDrive($stateParams.DriveID);
   }
]);
