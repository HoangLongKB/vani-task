'use client';

import { QuizQuestion } from '@/types/quiz';
import React, { useEffect, useState } from 'react';
import Question from './question';
import Complete from './complete';
import { usePathname, useRouter } from 'next/navigation';
import { useWarningEscapePage } from '@/hooks/useWarningEscapePage';
import ConfirmationModal from '../ui/modal/confirmation-modal';
import WarningEscapeModal from '../ui/modal/warning-escape-modal';

type Props = {
  quizQuestions: QuizQuestion[];
};

const Quiz = ({ quizQuestions }: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [showCompletionPage, setIsShowCompletePage] = useState(false);
  const [isShowEscapeModal, setIsShowEscapeModal] = useState(false);
  const pathname = usePathname();


  const openEscapeModal = (): void => {
    console.log('openEscapeModal');
    console.log('showCompletionPage', showCompletionPage);
    setIsShowEscapeModal(true);
  };

  const handleEscapeModalCancel = (): void => {
    setIsShowEscapeModal(false);
    window.history.pushState(null, '', pathname);
  };

  const handleEscapeModalConfirm = (): void => {
    setIsShowEscapeModal(false);
    window.history.back();
  };

  useWarningEscapePage(!showCompletionPage, pathname, openEscapeModal);

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
    <>
      <div className="w-full h-full p-5 bg-neutral-100 text-zinc-900">
        <Question
          {...currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          changeQuestion={handleChangeQuestion}
          isLastQuestion={isLastQuestion}
        />
      </div>
      <ConfirmationModal
        isOpen={isShowEscapeModal}
        handleClose={handleEscapeModalCancel}
        handleConfirm={handleEscapeModalConfirm}
      >
        <WarningEscapeModal />
      </ConfirmationModal>
    </>
  );
};

export default Quiz;
