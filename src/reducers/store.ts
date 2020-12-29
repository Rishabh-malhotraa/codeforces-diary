import { configureStore } from '@reduxjs/toolkit';
import FetchedDataReducer from 'reducers/slices/FetchedDataReducer';


const store = configureStore({
  reducer: {
    fetchDataOption: FetchedDataReducer,
  },
});

export default store;
