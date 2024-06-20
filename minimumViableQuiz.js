const input = require('readline-sync');


let candidateName = input.question("Enter your first name. ");
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = input.question("Enter your response. ");



let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
let candidateName = input.question("Enter your first name. ");
}

function askQuestion() {
console.log(question);
let candidateAnswer = input.question("Enter your response. ");

}

function gradeQuiz(candidateAnswers) {

if (candidateAnswer = "Sally Ride"){
  console.log("Great job! Sally Ride was indeed the first American woman in space.");
} else {
  console.log("Nice try. Feel free to look up the answer and try again.");
}

  let grade;


  return grade;
}

function runProgram() {
  askForName();
   console.log(`Greetings, ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};