import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IsAdminState {
  value: {
    isAdmin: boolean;
    isLogin: boolean;
  };
}

const initialState: IsAdminState = {
  value: {
    isAdmin: false,
    isLogin: false,
  },
};

const isAdmin = createSlice({
  name: 'isadmin',
  initialState,
  reducers: {
    setIsAdmin: (state, action: PayloadAction<boolean>) => {
      state.value.isAdmin = action.payload;
      state.value.isLogin = true;
    },
  },
});

export const { setIsAdmin } = isAdmin.actions;

const isAdminReducer = isAdmin.reducer;
export default isAdminReducer;
