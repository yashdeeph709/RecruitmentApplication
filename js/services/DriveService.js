app.factory('DriveService', Drive);

function Drive($http) {
   return {
      Drives: [],
      createDrive: function(drive) {
         this.Drives.push(drive);
      },
      getDrive: function(driveid) {
         var drives = this.Drives;
         var drive;
         this.getDrives()
         angular.forEach(drives, function(d) {
            if (d.DriveID === driveid) {
               drive = d;
            }
         });
         return drive;
         throw "Couldn't find object with id: " + driveid;
      },
      getDrives: function() {
         var self = this;
         $http.get('api/drives').success(function(data) {
            console.log(data);
            angular.forEach(data, function(d) {
               self.Drives.push(d);
            });
         }).error(function(err) {
            console.log(err);
         });
         return this.Drives;
      }
   }
}
