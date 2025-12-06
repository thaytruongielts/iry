export interface ReadingSection {
  id: number;
  title: string;
  content: string[]; // Array of paragraphs
}

export type QuestionType = 'TFNG' | 'SENTENCE_COMPLETION' | 'SUMMARY_COMPLETION';

export interface QuestionBase {
  id: number;
  type: QuestionType;
  answer: string;
}

export interface TFNGQuestion extends QuestionBase {
  type: 'TFNG';
  text: string;
}

export interface SentenceCompletionQuestion extends QuestionBase {
  type: 'SENTENCE_COMPLETION';
  textBefore: string;
  textAfter: string;
}

export interface SummaryQuestion extends QuestionBase {
  type: 'SUMMARY_COMPLETION';
  options: { label: string; value: string }[];
}

export type Question = TFNGQuestion | SentenceCompletionQuestion | SummaryQuestion;

export type Phase = 
  | 'intro'
  | 'read-1' | 'answer-1'
  | 'read-2' | 'answer-2'
  | 'read-3' | 'answer-3'
  | 'read-4' | 'answer-4'
  | 'review'
  | 'result';

export interface UserAnswers {
  [key: number]: string;
}