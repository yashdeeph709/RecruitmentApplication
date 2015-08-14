(function() {
   var app = angular.module('RtmaApp.Sidebar', []);
   app.controller('SidebarCtrl', ['$scope', '$mdSidenav', '$http',
      function($scope, $mdSidenav, $http) {
         $scope.toggle = function() {
            $mdSidenav('left').toggle();
         };
         $scope.close = function() {
            $mdSidenav('left').toggle();
         };
      }
   ]);
})();
