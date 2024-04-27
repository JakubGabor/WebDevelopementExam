import React, { useContext, useState, useEffect } from "react";
import { DriversContext } from "../../contexts/DriversContext";
import { TeamsContext } from "../../contexts/TeamsContext.jsx";
import {
  driverAgeQuestion,
  driverNationalityQuestion,
  driverImageQuestion,
  driverTeamQuestion,
} from "../../modules/QuestionsModule.js";

const QuizGame = () => {
  const { drivers } = useContext(DriversContext);
  const { teams } = useContext(TeamsContext);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    askNewQuestion();
  }, [drivers, teams]);

  const allQuestions = [
    () => driverAgeQuestion(drivers),
    () => driverNationalityQuestion(drivers),
    () => driverImageQuestion(drivers),
    () => driverTeamQuestion(teams),
  ];

  const askNewQuestion = () => {
    const newQuestion =
      allQuestions[Math.floor(Math.random() * allQuestions.length)];

    setCurrentQuestion(newQuestion);
  };

  const handleAnswer = (answer) => {
    if (answer == currentQuestion.correctAnswer) {
      setScore(score + 1);
      askNewQuestion();
    } else {
      setGameOver(true);
    }
  };

  const playAgain = () => {
    setScore(0);
    setGameOver(false);
    askNewQuestion();
  };

  if (!currentQuestion) {
    return null;
  }

  if (gameOver) {
    const highscore =
      parseInt(localStorage.getItem("highscore")) ||
      localStorage.setItem("highscore", score);

    if (highscore < score) {
      localStorage.setItem("highscore", score);
    }

    return (
      <div className="mx-auto d-flex flex-column">
        <h3 className="my-5">Your score is {score}.</h3>
        <button
          className="my-5 w-100 p-3 mx-auto button"
          onClick={() => playAgain()}
        >
          Play Again!
        </button>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column mb-4">
      <div className="d-flex flex-column ms-auto">
        <p>Highscore: {localStorage.getItem("highscore")}</p>
        <p>Your current score: {score}</p>
      </div>
      <img
        src={currentQuestion.image}
        alt="Quiz image"
        className="img-fluid mx-auto mb-3"
        width={300}
      />
      <h3 className="text-center mb-5">{currentQuestion.question}</h3>
      <div className="row g-4">
        {currentQuestion.choices
          .sort(() => 0.5 - Math.random())
          .map((choice, i) => (
            <div key={i} className="col-6">
              <button
                className="w-100 h-100 p-3 button"
                onClick={() => handleAnswer(choice)}
              >
                {choice}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default QuizGame;
