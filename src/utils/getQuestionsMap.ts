import {
  QuestionListWrapper,
} from "response/user_questions";

import { SubmissionType } from 'types'

const questionList = QuestionListWrapper.result;
// Merging types of extacted problem from the response and the addition additonal features to it
const problem = questionList[0].problem;
export type QuestionMapType = Record<string, typeof problem & { solved: boolean; incorrectSubmissions: number }>
/**
 * Function to extract the list of questions solved from list of submission(which contains duplicates aswell)
 * @param ()
 * @returns hashmap - contain all the list of questions solved without duplicates
 * If the vertict is OK we add the attempt to our hashmap while also persisiting the incorrectSubmission info if any
 * If the verdit is false then two cases has it been solved before or it hasnt been solved before
 */
const getQuestionsMap = () => {
  let hashMap: QuestionMapType = {};
  questionList.forEach((attempt: SubmissionType, idx: number) => {
    const key = attempt.problem.contestId + "-" + attempt.problem.index;
    if (attempt.verdict === "OK") {
      let value = 0;
      if (hashMap[key] && hashMap[key].incorrectSubmissions)
        value = hashMap[key].incorrectSubmissions;
      hashMap[key] = {
        ...attempt.problem,
        solved: true,
        incorrectSubmissions: value,
      };
    } else {
      if (hashMap[key] === undefined)
        hashMap[key] = {
          ...attempt.problem,
          solved: false,
          incorrectSubmissions: 1,
        };
      else {
        // question has been solved before
        hashMap[key].incorrectSubmissions += 1;
      }
    }
  });

  return hashMap;
};

export default getQuestionsMap