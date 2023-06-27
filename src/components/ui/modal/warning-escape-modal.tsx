import React from 'react';
import VaniButton from '../vani-button';
import { Modal } from '@/types/modal';


const WarningEscapeModal = ({
  isCloseAnimation = false,
  handleClose = () => {},
  handleConfirm = () => {},
}: Modal) => {
  return (
    <div className={`w-full max-w-[460px] h-[30%] bg-slate-400 text-black flex flex-col items-center mb-auto justify-center p-5 ${isCloseAnimation ? 'animate-slide-up-top' : 'animate-slide-down-top'}`}>
      <p className="text-2xl text-black/80 font-semibold">
        Do you want to end quiz?
      </p>
      <p>
        One you end this quiz, you will have to start from the first question
        again.
      </p>
      <div className="flex items-center justify-between w-full">
        <VaniButton text="Cancel" handleClick={handleClose} />
        <VaniButton text="End quiz" handleClick={handleConfirm} />
      </div>
    </div>
  );
};

export default WarningEscapeModal;
