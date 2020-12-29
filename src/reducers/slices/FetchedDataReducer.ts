import { createSlice } from "@reduxjs/toolkit";
import StateInterface from "reducers/types";

export const uuidSlice = createSlice({
  name: "FetchDataReducer",
  initialState: {
    value: {},
  },
  reducers: {
    onuuidType: (state, action) => {
      state.value = action.payload;
    },
  },
});

// export const selectuuid = (state: StateInterface): string => state.uuidOption.value;
// export const { onuuidType } = uuidSlice.actions;

export default uuidSlice.reducer;
