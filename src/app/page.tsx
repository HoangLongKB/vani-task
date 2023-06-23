import VaniButton from '@/components/ui/vani-button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full flex px-4 flex-col justify-center items-center gap-y-5">
      <h1 className="text-center text-xl font-semibold">
        Take a Quiz of Vani Coins to get instantly 1,000 Coins
      </h1>
      <div className="w-[300px] h-[300px] rounded-full relative overflow-hidden border-[5px] border-white">
        <Image
          src="/images/quiz-coin.png"
          alt="Quiz coin image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover object-center"
        />
      </div>
      <VaniButton isLink text="Start Quiz" url="/quiz" />
    </main>
  );
}
