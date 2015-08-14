app.factory('QuestionService', question);

function question() {
  return {
    questions: [{
      qid: 1,
      catagory: "apti",
      subcatagory: "tech",
      question: "What is the capital of india?",
      options: ["bhopal", "agra", "indore", "duniya"],
      solution: 2,
      comments: "only for cs it",
  }, {
      qid: 2,
      catagory: "apti",
      subcatagory: "tech",
      question: "What is the capital of india?",
      options: ["bhopal", "agra", "indore", "duniya"],
      solution: 2,
      comments: "only for cs it",
  }, {
      qid: 3,
      catagory: "apti",
      subcatagory: "tech",
      question: "What is the capital of india?",
      options: ["bhopal", "agra", "indore", "duniya"],
      solution: 2,
      comments: "only for cs it",
  }],
    addQuestion: function (question) {
      question.qid = this.questions.length;
      this.questions.push(question);
      console.log(this.questions)
      return this.questions.length - 1;
    },
    addOptions: function (id, options, solution) {
      console.log(this.questions);
      this.questions[id].solution = solution;
      this.questions[id].options = [];
      this.questions[id].options.push(options.one);
      this.questions[id].options.push(options.two);
      this.questions[id].options.push(options.three);
      this.questions[id].options.push(options.four);
    },
    getQuestion: function (id) {
      return this.questions[id];
    }
  }
}