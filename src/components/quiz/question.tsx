'use client';

import { shuffleArray } from '@/app/libs/utils';
import { QuizQuestion } from '@/types/quiz';
import React, { useEffect, useState } from 'react';
import Answer from './answer';
import Hint from './hint';
import ConfirmationModal from '../ui/modal/confirmation-modal';
import NextModal from '../ui/modal/next-modal';

type Props = QuizQuestion & {
  currentQuestionIndex: number;
  changeQuestion: () => void;
  isLastQuestion: boolean;
};

const Question = ({
  question,
  options,
  answer,
  currentQuestionIndex,
  hint,
  changeQuestion,
  isLastQuestion,
}: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [isShowNext, setIsShowNext] = useState(false);

  useEffect(() => {
    setShuffledOptions(shuffleArray([...options, ...answer]));
  }, [options, answer]);

  const handleAnswerSelect = (option: string): void => {
    setSelectedAnswer((prev: string[]) => {
      if (
        prev.length === answer.length ||
        !answer.includes(prev[prev.length - 1])
      )
        return [option];
      if (prev.includes(option)) return [...prev];
      return [...prev, option];
    });
  };

  const handleNextQuestion = (): void => {
    changeQuestion();
    setSelectedAnswer([]);
    setShowHint(false);
  };

  useEffect(() => {
    if ([...selectedAnswer].sort().join('') === [...answer].sort().join('')) {
      setIsShowNext(true);
    } else {
      setIsShowNext(false);
    }
  }, [selectedAnswer, answer]);

  const handleHintToggle = (): void => {
    setShowHint(!showHint);
  };
  return (
    <div>
      <p className="font-semibold text-vani-purple">
        Q{currentQuestionIndex + 1}
      </p>
      <h3 className="text-lg font-semibold text-neutral-700">{question}</h3>
      <ul
        className={`flex flex-col gap-y-2 my-10 ${
          isShowNext && 'pointer-events-none'
        }`}
      >
        {shuffledOptions.map((option) => {
          return (
            <Answer
              key={option}
              handleAnswerClick={handleAnswerSelect}
              option={option}
              answer={answer}
              selectedAnswer={selectedAnswer}
            />
          );
        })}
      </ul>
      <hr className="my-5" />
      <Hint
        isShow={showHint && !isShowNext}
        handleHintToggle={handleHintToggle}
        hint={hint}
      />
      {isShowNext && (
        <ConfirmationModal isOpen={isShowNext} handleConfirm={handleNextQuestion}>
          <NextModal isLastQuestion={isLastQuestion}/>
        </ConfirmationModal>
      )}
    </div>
  );
};

export default Question;
