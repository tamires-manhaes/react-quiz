import React, {  useState } from 'react';
import { fetchQuizQuestions } from './services/API';

import QuestionCard from './components/QuestionCard';

import { QuestionsState ,Difficulty } from './services/API';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading ] = useState(false);
  const [questions, setQuestion] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score,  setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions( TOTAL_QUESTIONS, Difficulty.EASY );

    setQuestion(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div>
      <h1>React Quiz</h1>
      <button className="start" onClick={startQuiz}>Start</button>

      <p className="score">Score:</p>
      <p>Loading questions...</p>
      {/* <QuestionCard 
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number]: undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>Next Questin</button>
    </div>
  );
}

export default App;
