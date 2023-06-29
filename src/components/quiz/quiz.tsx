'use client';

import { QuizQuestion } from '@/types/quiz';
import React, { useEffect, useState } from 'react';
import Question from './question';
import Complete from './complete';
import { useRouter } from 'next/navigation';
import { useWarningEscapePage } from '@/hooks/useWarningEscapePage';
import ConfirmationModal from '../ui/modal/confirmation-modal';
import WarningEscapeModal from '../ui/modal/warning-escape-modal';
import { TEMP_URL_HASH } from '@/config/quiz-data';

type Props = {
  quizQuestions: QuizQuestion[];
};

const Quiz = ({ quizQuestions }: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [showCompletionPage, setIsShowCompletePage] = useState(false);
  const [isShowEscapeModal, setIsShowEscapeModal] = useState(false);
  const router = useRouter();
  const openEscapeModal = (): void => {
    setIsShowEscapeModal(true);
  };

  const handleEscapeModalCancel = (): void => {
    setIsShowEscapeModal(false);
    window.history.pushState(null, '', TEMP_URL_HASH);
    if (window.location.hash !== TEMP_URL_HASH) {
      window.history.pushState(null, '', TEMP_URL_HASH);
    }
  };

  const handleEscapeModalConfirm = (): void => {
    setIsShowEscapeModal(false);
    router.back();
  };

  useWarningEscapePage(!showCompletionPage, openEscapeModal);

  const handleChangeQuestion = (): void => {
    if (currentQuestionIndex === quizQuestions.length - 1) {
      setIsShowCompletePage(true);
      router.back();
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
      {isShowEscapeModal && (
        <ConfirmationModal
          isOpen={isShowEscapeModal}
          handleClose={handleEscapeModalCancel}
          handleConfirm={handleEscapeModalConfirm}
        >
          <WarningEscapeModal />
        </ConfirmationModal>
      )}
    </>
  );
};

export default Quiz;
