import Link from 'next/link';
import React from 'react';

type Props = {
  text: string;
  handleClick?: () => void;
  isLink?: boolean;
  url?: string;
  isPrimary?: boolean;
};

const VaniButton = ({
  text,
  isLink = false,
  url = '',
  handleClick = () => {},
  isPrimary = true,
}: Props) => {
  const buttonClass = (): string => {
    if (isPrimary) {
      return 'bg-vani-purple text-white border-vani-purple hover:bg-white hover:text-vani-purple';
    }
    return 'bg-slate-100 text-black/70 border-slate-400 hover:border-vani-purple';
  };
  return (
    <>
      {isLink ? (
        <Link
          href={url}
          className="transition-all duration-200 ease-in-out text-center border border-white text-xl font-medium text-white bg-vani-purple w-full p-4 rounded-md hover:text-vani-purple hover:bg-white hover:border-vani-purple shadow-xl"
        >
          <span className="select-none">{text}</span>
        </Link>
      ) : (
        <button
          type="button"
          className={`p-5 text-xl font-semibold w-full rounded-md shadow-xl border-[2px] transition-all duration-200 ease-in-out ${buttonClass()}`}
          onClick={handleClick}
        >
          <span className="select-none">{text}</span>
        </button>
      )}
    </>
  );
};

export default VaniButton;
