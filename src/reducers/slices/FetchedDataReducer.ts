import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import StateInterface from "reducers/types";
import { ContestDataType, QuestionMapType, UserInfoType } from 'types'

export const FetchedData = createSlice({
  name: "FetchDataReducer",
  initialState: {
    QuestionMap: {} as QuestionMapType,
    UserInfo: {} as UserInfoType,
    ContestData: [] as ContestDataType[],
  },
  reducers: {
    saveQuestionMap: (state, action: PayloadAction<QuestionMapType>) => {
      state.QuestionMap = action.payload;
    },
    saveUserInfo: (state, action: PayloadAction<UserInfoType>) => {
      state.UserInfo = action.payload;
    },
    saveContestInfo: (state, action: PayloadAction<ContestDataType[]>) => {
      state.ContestData = action.payload;
    },
  },
});

export const selectQuestionMap = (state: StateInterface): QuestionMapType => state.fetchedData.QuestionsMap;
export const selectUserInfo = (state: StateInterface): UserInfoType => state.fetchedData.userInfo;
export const selectContestData = (state: StateInterface): ContestDataType => state.fetchedData.contestData;


export const { saveQuestionMap, saveContestInfo, saveUserInfo } = FetchedData.actions;

export default FetchedData.reducer;
