import React, { useState } from "react";
import Button from "@mui/material/Button";
import Question from "./components/question";
import {fetchQuestions} from "./API"
import {Difficulty} from "./API"

const TOTALQUESTIONS=10;

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const startquiz = async () => {};
  const checkanswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};
  
  console.log(fetchQuestions(TOTALQUESTIONS,Difficulty.EASY));
  

  return (
    <div className="App">
      <h1>Quizxx</h1>
      <Button variant="contained" size="large" onClick={startquiz}>
        Start Quiz
      </Button>
      <p>Score:</p>
      <p>
        Loading questions...
        {/* <Question
        questionr={number+1}
        totalquestions={TOTALQUESTIONS}
        question={questions[number].question}
        answer={questions[number].answer}
        userAnswer= {userAnswer ? userAnswers[number] : undefined}
        callback = {checkanswer}
        /> */}
      </p>
      <Button variant="outlined" onClick={nextQuestion}>
        Next
      </Button>
    </div>
  );
}

export default App;
