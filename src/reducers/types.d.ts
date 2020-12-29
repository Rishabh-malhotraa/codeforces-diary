// follow CamelCASE strictly
import { QuestionMapType, UserInfoType, ContestDataType } from 'types';
export default interface StateInterface {
  fetchedData: {
    QuestionsMap: QuestionMapType;
    contestData: ContestDataType;
    userInfo: UserInfoType;
  }
}
