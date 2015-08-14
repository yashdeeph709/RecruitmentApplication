app.controller("findstudentcontroller", function ($scope, $state) {
  $scope.find = function () {
    $state.go('ImportQuestions');
  }

  $scope.collageCodes = ['svce', 'MIT', 'ACRO', 'CDGI'];
  $scope.students = [{
    name: "Minesh Choudhary",
    institute: "Swami Vivekanand Collage of Engineering",
    collageCode: "svce",
    stream: "CS",
    email: "mineshchoudhary@gmail.com",
    mobileno: 7697686486
    }, {
    name: "Yashdeep Hinge",
    institute: "Swami Vivekanand Collage of Engineering",
    collageCode: "svce",
    stream: "IT",
    email: "yashdeeph709@gmail.com",
    mobileno: 7697686486
    }, {
    name: "Rahul Bansal",
    institute: "Medicaps Collage of Engineering",
    collageCode: "MIT",
    stream: "IT",
    email: "bansalrahul@gmail.com",
    mobileno: 7697686486
    }, {
    name: "Pratik Klushreshtha",
    institute: "Acropolis Collage of Engineering",
    collageCode: "ACRO",
    stream: "CS",
    email: "pkulsh@gmail.com",
    mobileno: 7697686486
    }, {
    name: "Prakhar Panot",
    institute: "chameli devi Collage of Engineering",
    collageCode: "CDGI",
    stream: "IT",
    email: "ppanot@gmail.com",
    mobileno: 7697686486
    }, {
    name: "Jagpreet Kaur",
    institute: "Acropolis Collage of Engineering",
    collageCode: "ACRO",
    stream: "CS",
    email: "jaggu@gmail.com",
    mobileno: 7697686486
    }, {
    name: "Ankur Rathi",
    institute: "Medicaps Collage of Engineering",
    collageCode: "MIT",
    stream: "CS",
    email: "medicapsAnkur@gmail.com",
    mobileno: 7697686486
    }];
});