import { QuestionMapType } from 'types'
import { QUESTION_URL } from 'API'
const getQuestionStats = (QuestionMap: QuestionMapType) => {
  const questionData = {
    QuestionsAttempted: 0,
    QuestionsSolved: 0,
    AverageAttempts: "",
    bestQuestionByRating: {
      rating: 0,
      id: "",
      url: "",
    },
    QuestionsUnsolved: 0,
  };

  let max = -Infinity;
  let totalSubmission = 0;
  for (const [, value] of Object.entries(QuestionMap)) {
    totalSubmission += value.solved ? value.incorrectSubmissions + 1 : value.incorrectSubmissions;
    questionData.QuestionsSolved += value.solved ? 1 : 0;
    if (value.rating > max && value.solved) {
      max = value.rating;
      questionData.bestQuestionByRating = {
        rating: value.rating,
        id: value.contestId + "-" + value.index,
        url: `${QUESTION_URL}/${value.contestId}/${value.index}`,
      };
    }
  }
  questionData.AverageAttempts = (totalSubmission / questionData.QuestionsSolved).toFixed(2);
  questionData.QuestionsAttempted = Object.entries(QuestionMap).length;
  questionData.QuestionsUnsolved = questionData.QuestionsAttempted - questionData.QuestionsSolved;
  return questionData;
};

export default getQuestionStats;