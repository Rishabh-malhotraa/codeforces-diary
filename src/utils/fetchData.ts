
import axios from 'axios';
import { USER_INFO, USER_CONTEST_DATA, USER_QUESTIONS_LIST } from 'API';
import { saveQuestionMap, saveContestInfo, saveUserInfo, saveSubmissionList, saveApiFetched } from 'reducers/slices/FetchedDataSlice'
import getQuestionMap from 'utils/getQuestionMap'


// const handle = 'rishgod';

const makeRequest = async (handle: string, dispatch: any, history: any) => {


  const QuestionsData = await axios
    .get(USER_QUESTIONS_LIST, {
      params: {
        handle: handle,
      },
    })
    .catch((error) => { return error.response.data });

  const ContestData = await axios
    .get(USER_CONTEST_DATA, {
      params: {
        handle: handle,
      },
    })
    .catch((error) => { return error.response.data });

  const UserInfo = await axios
    .get(USER_INFO, {
      params: {
        handles: handle,
      },
    })
    .catch((error) => { return error.response.data });


  if (UserInfo.status === "FAILED" || ContestData.status === "FAILED" || QuestionsData.status === "FAILED") {
    return ({ error: true, comment: UserInfo.comment })
  }


  dispatch(saveApiFetched(true));
  dispatch(saveSubmissionList(QuestionsData.data.result));
  dispatch(saveUserInfo({ ...UserInfo.data.result[0] }));
  dispatch(saveContestInfo(ContestData.data.result));
  dispatch(saveQuestionMap(getQuestionMap(QuestionsData.data.result)));



  history.push("/dashboard");
};


export default makeRequest;