import React from 'react';
import VaniButton from '../vani-button';
import { Modal } from '@/types/modal';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';

const NextModal = ({
  isCloseAnimation = false,
  handleConfirm = () => {},
  isLastQuestion = false,
}: Modal) => {
  return (
    <div
      className={`w-full max-w-[460px] h-[30%] bg-neutral-100 rounded-t-2xl text-black flex flex-col items-center mt-auto p-5 ${
        isCloseAnimation
          ? 'animate-slide-down-bottom'
          : 'animate-slide-up-bottom'
      }`}
    >
      <div>

      <span className='w-4 h-4'>
        <CheckBadgeIcon className='stroke-vani-purple' />
      </span>
      <p className='text-vani-purple font-semibold'>Correct!</p>
      </div>
      <p className="text-lg font-semibold text-center">
        You can use Vani Barcode to earn or redeem membership points.
      </p>
      <div className="flex items-center justify-between w-full mt-5">
        <VaniButton text={isLastQuestion ? 'Complete' : 'Next'} handleClick={handleConfirm} />
      </div>
    </div>
  );
};

export default NextModal;
