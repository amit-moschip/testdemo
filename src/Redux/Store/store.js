import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../Reducer/authSlice';
// import quizReducer from './features/quiz/quizSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    // quiz: quizReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export default store;
