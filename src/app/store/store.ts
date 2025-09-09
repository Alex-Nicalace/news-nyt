import { configureStore } from '@reduxjs/toolkit';
import { newsSliceReducer } from 'entities/news';

export const store = configureStore({
  reducer: {
    news: newsSliceReducer,
  },
});
