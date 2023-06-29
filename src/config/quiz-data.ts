import { QuizQuestion } from '@/types/quiz';

export const QUIZ_DATA: QuizQuestion[] = [
  {
    id: 1,
    question: 'How can you accumulate and use membership points with vani?',
    options: ['Hand over membership card', 'Tell your Phone number'],
    answer: ['Show Vani Barcode on the Home screen'],
    hint: 'To earn/use membership points with vani benefits, scan the Vani Barcode',
  },
  {
    id: 2,
    question:
      'What is an additional reward when you earn membership points with vani?',
    options: ['Vani Point', 'Vani Money'],
    answer: ['Vani Coin'],
    hint: 'Earn/use membership points with vani. Open Ice Cream. Get Vani Coins',
  },
  {
    id: 3,
    question: 'There is another way to get Vani Coin. What is it?',
    options: ['Leave a 1:1 inquiry', 'Run the vani app every day'],
    answer: ['Play Shake'],
    hint: 'You can get additional Vani Coins when you play Shake once a day',
  },
  {
    id: 4,
    question: 'How can you use Vani Coin? Please choose 2 answers.',
    options: ['Buy a product at stores'],
    answer: ['Exchange to Voucher', 'Exchange to membership points'],
    hint: 'Your Vani Coins can be exchanged for other membership points or Vouchers',
  },
];

export const TEMP_URL_HASH = '#play';

