import { configureStore } from '@reduxjs/toolkit';
import FetchedDataReducer from 'reducers/slices/FetchedDataReducer';


const store = configureStore({
  reducer: {
    fetchData: FetchedDataReducer,
  },
});

export default store;
