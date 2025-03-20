import express from "express";
import bodyParser from "body-parser";

import {Quiz} from "./Quiz.js"; // ✅ Import Quiz & Question



const app = express();
const port = 3000;
let currentQuestion = "";
let currentQuestionChoices = [];
const quiz = new Quiz();


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


function restartQuiz(req, res, next) {
    quiz.currentQuestionIndex = 0;
    quiz.setCurrentScoreToZero();
    quiz.setNumOfLifeToFull();
    StartGame(req, res, next);
    
}

function StartGame(req, res, next) {
    if(quiz.currentQuestionIndex == 0){
        currentQuestion = quiz.getCurrentDiscription();
        currentQuestionChoices = quiz.getCurrentQuestionChoices();
    }
 
    next();
}

app.post("/restart",restartQuiz, (req, res) => {
    res.redirect("/");
});

function getNextQuestion(req, res) {

    currentQuestion = quiz.getCurrentDiscription();
    currentQuestionChoices = quiz.getCurrentQuestionChoices();
    
}

app.post("/answer", (req, res) => {
    const selectedAnswer = req.body.selectedAnswer; // ✅ Get the selected answer value
    const isCorrect = quiz.getCorrectAnswer(selectedAnswer); // ✅ Now returns true or false
    getNextQuestion(req, res);
    res.json({
            correct: isCorrect ,
            endGame: quiz.IsEndOfGame() ,
            life : quiz.getLife(),
            currentQuestion,
            currentQuestionChoices,
     });

});

app.get("/EndGame", (req, res) => {
    res.render("endGame.ejs", {
        score: quiz.getScore() ,
      });
  });

app.get("/", StartGame, (req, res) => {
    res.render("index.ejs", {
        currentQuestion,
        currentQuestionChoices,
      });
  });
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  