import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import React from 'react';

type Props = {
  isShow: boolean;
  hint: string;
  handleHintToggle: () => void;
};

const Hint = ({ isShow, hint, handleHintToggle }: Props) => {
  return (
    <>
      <p className='cursor-pointer' onClick={handleHintToggle}>
        <span className='font-semibold text-neutral-800 select-none'>Hint</span>
        <span>
          {!isShow ? <ChevronDownIcon className='h-4 w-4 inline-block ml-1 stroke-[3px]' /> : <ChevronUpIcon className='h-4 w-4 inline-block ml-1 stroke-[3px]' />}
        </span>
      </p>
      {isShow && <p className='font-semibold text-sm text-neutral-500 mt-5'>{hint}</p>}
    </>
  );
};

export default Hint;
