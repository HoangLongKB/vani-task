'use client';

import { QuizQuestion } from '@/types/quiz';
import React, { useEffect, useState } from 'react';
import Question from './question';
import Complete from './complete';

type Props = {
  quizQuestions: QuizQuestion[];
};

const Quiz = ({ quizQuestions }: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [showCompletionPage, setIsShowCompletePage] = useState(false);

  const handleChangeQuestion = (): void => {
    if (currentQuestionIndex === quizQuestions.length - 1) {
      // Last question, show completion page
      setIsShowCompletePage(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };
  useEffect(() => {
    if (currentQuestionIndex === quizQuestions.length - 1) {
      // Last question, show completion page
      setIsLastQuestion(true);
    }
  }, [currentQuestionIndex, quizQuestions]);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  if (showCompletionPage) {
    return (
      <Complete />
    );
  }

  return (
    <div className="w-full h-full p-5 bg-neutral-100 text-zinc-900">
      <Question
        {...currentQuestion}
        currentQuestionIndex={currentQuestionIndex}
        changeQuestion={handleChangeQuestion}
        isLastQuestion={isLastQuestion}
      />
    </div>
  );
};

export default Quiz;
