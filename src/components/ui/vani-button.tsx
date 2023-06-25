import Link from 'next/link';
import React from 'react';

type Props = {
  text: string;
  handleClick?: () => void;
  isLink?: boolean;
  url?: string;
};

const VaniButton = ({
  text,
  isLink = false,
  url = '',
  handleClick = () => {},
}: Props) => {
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
          className="p-5 bg-vani-purple text-white text-xl font-semibold w-full rounded-sm shadow-xl border-[2px] border-vani-purple hover:bg-white hover:text-vani-purple transition-all duration-200 ease-in-out"
          onClick={handleClick}
        >
          <span className="select-none">{text}</span>
        </button>
      )}
    </>
  );
};

export default VaniButton;
