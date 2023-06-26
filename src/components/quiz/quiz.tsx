'use client';

import { QuizQuestion } from '@/types/quiz';
import React, { useEffect, useState } from 'react';
import Question from './question';
import Complete from './complete';
import { usePathname } from 'next/navigation';

type Props = {
  quizQuestions: QuizQuestion[];
};

const Quiz = ({ quizQuestions }: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [showCompletionPage, setIsShowCompletePage] = useState(false);

  const pathName = usePathname();


  useEffect(() => {
    window.history.pushState(null, '', '/quiz');
    const warningText =
      'You have unsaved changes - are you sure you wish to leave this page?';
    const handleWindowClose = (e: BeforeUnloadEvent) => {
      return (e.returnValue = warningText);
    };
    const handleBackButton = (e: PopStateEvent) => {

      var r = confirm('You pressed a Back button! Are you sure?!');

      if (r == true) {
        window.history.back();
      } else {
        window.history.pushState(null, '', '/quiz');

      }
    };
    window.addEventListener('beforeunload', handleWindowClose);
    window.addEventListener('popstate', handleBackButton);
    return () => {
      console.log('removeEventListener');
      window.removeEventListener('beforeunload', handleWindowClose);
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

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
    return <Complete />;
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
