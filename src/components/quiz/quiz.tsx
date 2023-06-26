'use client';

import { QuizQuestion } from '@/types/quiz';
import React, { useEffect, useState } from 'react';
import Question from './question';
import Complete from './complete';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
  quizQuestions: QuizQuestion[];
};

const Quiz = ({ quizQuestions }: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [showCompletionPage, setIsShowCompletePage] = useState(false);
  const [unsavedChanges, setUnSavedChanges] = useState(true);

  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    window.history.pushState({curIndex: currentQuestionIndex}, '', '/quiz');
  }, []);

  useEffect(() => {
    console.log('useEffect');
    const controller = new AbortController();
    const warningText =
      'You have unsaved changes - are you sure you wish to leave this page?';
    const handleWindowClose = (e: BeforeUnloadEvent) => {
      console.log('handleWindowClose');
      if (!unsavedChanges) return;
      e.preventDefault();
      return (e.returnValue = warningText);
    };
    const handleBackButton = (e: PopStateEvent) => {
      console.log('handleBackButton e.state::::', e.state);
      console.log('handleBackButton window.state::::', window.history);

      var r = confirm('You pressed a Back button! Are you sure?!');

      if (r == true) {
        console.log('true');
        window.history.back();
        controller.abort();

      } else {
        console.log('false pathName::::', pathName);
        console.log('false window.history::::', window.history);
        window.history.pushState({curIndex: currentQuestionIndex}, '', '/quiz');

        console.log('Stay on the current page.');
      }
    };
    window.addEventListener('beforeunload', handleWindowClose);
    window.addEventListener('popstate', handleBackButton, {
      signal: controller.signal,
    });
    return () => {
      console.log('removeEventListener');
      window.removeEventListener('beforeunload', handleWindowClose);
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [unsavedChanges]);

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
