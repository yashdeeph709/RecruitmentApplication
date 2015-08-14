app.factory('RegistrationService', RegistrationService);

function RegistrationService() {
   /*Callable Interface of the Service */
   var service = {
      addPersonalDetails: addPersonal,
      addContactDetails: addContact,
      addAcadamicDetails: addAcadamic,
      addExtraDetails: addExtras
   }
   return service;
   /* Primary Data Model of the Service */
   var data = {
      firstname: '',
      lastname: '',
      birthdate: '',
      nationality: '',
      maritial: '',
      gender: '',
      mobile: '',
      landline: '',
      email: '',
      address: [{
         lines: '',
         zipcode: '',
         city: '',
         state: ''
      }],
      acadamics: {
         graduation: {
            course: '',
            stream: '',
            year: '',
            institute: '',
            university: '',
            aggregate: '',
            projects: '',
            achievements: ''
         },
         highersecondry: {
            institute: '',
            board: '',
            percentage: '',
            passing: ''
         },
         highschool: {
            institute: '',
            board: '',
            percentage: '',
            passing: ''
         }
      },
      hobbies: [],
      languages: [],
      extras: [],
      certificates: []
   };

   function addPersonal() {

   }

   function addContact() {

   }

   function addAcadamic() {

   }

   function addExtras() {

   }
}
