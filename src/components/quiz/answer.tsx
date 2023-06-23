import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

type Props = {
  handleAnswerClick: (option: string) => void;
  option: string;
  answer: string[];
  selectedAnswer: string[];
};

const Answer = ({
  handleAnswerClick,
  option,
  answer,
  selectedAnswer,
}: Props) => {
  const isAnswered = selectedAnswer.includes(option);
  const isCorrect = answer.includes(option);
  const getAnswerWrapperClass = () => {
    if (!isAnswered) return 'border-neutral-200';
    if (isCorrect) return 'border-vani-purple';
    return 'border-red-400';
  };
  const getAnswerClass = () => {
    if (!isAnswered) return '';
    if (isCorrect) return 'font-semibold text-vani-purple';
    return 'font-semibold text-neutral-900';
  };
  return (
    <li
      className={`text-left p-3 border-[2px] font-medium text-neutral-500 rounded-md select-none cursor-pointer ${getAnswerWrapperClass()}`}
      onClick={(e) => handleAnswerClick(option)}
    >
      <p className={`flex items-center ${getAnswerClass()}`}>
        {option}
        <span>
          {isCorrect && isAnswered && <CheckIcon className="inline-block h-4 w-4 ml-1 stroke-[3px]" />}
        </span>
      </p>
      {isAnswered && !isCorrect && (
        <p className="text-red-400 text-xs">Please try again</p>
      )}
    </li>
  );
};

export default Answer;
