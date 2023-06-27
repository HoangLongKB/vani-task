import React from 'react';
import VaniButton from '../vani-button';
import { Modal } from '@/types/modal';

const NextModal = ({
  isCloseAnimation = false,
  handleClose = () => {},
  handleConfirm = () => {},
}: Modal) => {
  return (
    <div
      className={`w-full max-w-[460px] h-[30%] bg-slate-400 text-black flex flex-col items-center mt-auto justify-center p-5 ${
        isCloseAnimation ? 'animate-slide-down-bottom' : 'animate-slide-up-bottom'
      }`}
    >
      <p>You can use Vani Barcode to earn or redeem membership points.</p>
      <div className="flex items-center justify-between w-full">
        <VaniButton text="Next" handleClick={handleConfirm} />
      </div>
    </div>
  );
};

export default NextModal;
