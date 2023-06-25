'use client';
import VaniButton from '@/components/ui/vani-button';
import React from 'react';

type Props = {
  error: Error;
  reset: () => void;
};

const ErrorPage = ({ error, reset }: Props) => {
  return (
    <div className="w-full flex-col justify-center">
      <p className="text-center text-xl">
        {error.message || 'Something when wrong'}
      </p>
      <div className='flex mt-10'>
        <VaniButton text="Try Again" handleClick={reset} />
        <VaniButton isLink text="Home Page" url="/" />
      </div>
    </div>
  );
};

export default ErrorPage;
