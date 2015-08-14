var app = angular.module("mocker", ["ngMockE2E"]);
app.run(mocker);

function mocker($httpBackend) {
   var Drives = [{
      DriveID: 'HWM-LNCTBPL-1504',
      Venue: 'Lakshmi Narayan Collage of Technology',
      DateTime: '15/04/2015,12:00',
      City: 'Bhopal',
      State: 'Madhya Pradesh',
      Comments: 'Only for CS/IT',
      Participants: '68',
      Duration: '120',
      QueTechCount: '600',
      QueAptiCount: '450',
      ServedTechCount: '100',
      ServedAptiCount: '50',
      Questions: {
         Technical: [],
         Aptitude: []
      }
   }, {
      DriveID: 'HWM-LNCTIND-1504',
      Venue: 'Lakshmi Narayan Collage of Technology',
      DateTime: '15/04/2015,12:00',
      City: 'Indore',
      State: 'Madhya Pradesh',
      Comments: 'Only for CS/IT',
      Participants: '68',
      Duration: '120',
      QueTechCount: '600',
      QueAptiCount: '450',
      ServedTechCount: '100',
      ServedAptiCount: '50',
      Questions: {
         Technical: [],
         Aptitude: []
      }
   }, {
      DriveID: 'HWM-CDGIIND-1504',
      Venue: 'Chameli Devi Group of Institutes',
      DateTime: '15/04/2015,12:00',
      City: 'Indore',
      State: 'Madhya Pradesh',
      Comments: 'Only for CS/IT',
      Participants: '68',
      Duration: '120',
      QueTechCount: '600',
      QueAptiCount: '450',
      ServedTechCount: '100',
      ServedAptiCount: '50',
      Questions: {
         Technical: [],
         Aptitude: []
      }
   }];
   var api = "api/drives";
   $httpBackend.whenGET(/partials/).passThrough();
   $httpBackend.whenGET(api).respond(Drives);
}
