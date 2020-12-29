import { createSlice } from "@reduxjs/toolkit";
import StateInterface from "reducers/types";
import { ContestDataType, QuestionMapType, UserInfoType } from 'types'

export const uuidSlice = createSlice({
  name: "FetchDataReducer",
  initialState: {
    QuestionMap: {} as QuestionMapType,
    UserInfo: {} as UserInfoType,
    ContestData: {} as ContestDataType,
  },
  reducers: {
    saveQuestionMap: (state, action) => {
      state.QuestionMap = action.payload;
    },
    saveUserInfo: (state, action) => {
      state.UserInfo = action.payload;
    },
    saveContestInfo: (state, action) => {
      state.ContestData = action.payload;
    },
  },
});

export const selectQuestionMap = (state: StateInterface): QuestionMapType => state.fetchedData.QuestionsMap;
export const selectUserInfo = (state: StateInterface): UserInfoType => state.fetchedData.userInfo;
export const selectContestData = (state: StateInterface): ContestDataType => state.fetchedData.contestData;
// export const { onuuidType } = uuidSlice.actions;

export default uuidSlice.reducer;
