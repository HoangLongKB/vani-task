'use client';

import React from 'react';
import VaniButton from '../ui/vani-button';
import Image from 'next/image';

type Props = {};

const Complete = (props: Props) => {
  return (
    <div className="w-full h-full bg-vani-purple p-5 flex flex-col items-center">
      <h3 className="text-2xl text-center max-w-[350px] font-semibold mt-20">
        You solved <br /> all the quizzes correctly!
      </h3>
      <p className="text-center max-w-[220px] mt-3">
        1,000 Vani Coins Coupon has arrived
      </p>
      <Image
        src="/images/complete-coupon.png"
        alt="1000 Vani Coins coupon image"
        width={250}
        height={250}
      />
      <VaniButton text="Check Coupon" isLink url="/" />
      <p className="text-xs font-medium opacity-80 mt-3">
        Please check Inbox and use a coupon to earn Vani Coin.
      </p>
    </div>
  );
};

export default Complete;
