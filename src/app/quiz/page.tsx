import Quiz from '@/components/quiz/quiz';
import { QuizQuestion } from '@/types/quiz';

const getQuestion = async () => {
  const response = await fetch('http://localhost:3000/api/quiz', {
    cache: 'force-cache',
  });
  if (!response.ok) throw new Error('Can not fetch question');
  const data = await response.json();
  return data.questions;
};

const QuizPage = async () => {
  const questions = (await getQuestion()) as QuizQuestion[];
  return (
    <div className="h-full w-full">
      <Quiz quizQuestions={questions} />
    </div>
  );
};

export default QuizPage;
