import { QUIZ_DATA } from '@/config/quiz-data';
import { NextResponse } from 'next/server';

export async function GET() {
  const questions = QUIZ_DATA;
  if (!questions) {
    return NextResponse.json({ error: 'No question found' }, { status: 500 });
  }
  return NextResponse.json({ questions }, { status: 200 });
}
