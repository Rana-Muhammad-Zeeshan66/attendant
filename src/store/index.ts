import { configureStore } from '@reduxjs/toolkit';
import allUsersReducer from './slices/allUsersSlice';
import isAdminReducer from './slices/isAdminSlice';

const store = configureStore({
  reducer: {
    allUsers: allUsersReducer,
    isAdminReducer: isAdminReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
