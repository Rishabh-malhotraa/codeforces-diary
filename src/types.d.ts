import { QuestionListWrapper } from 'response/user_questions';

export type QuestionListType = typeof QuestionListWrapper.result[0];

export interface yearListType {
  value: number;
  label: string;
}
export interface QuestionMapType {
  date: Date;
  questions: QuestionListType[];
}