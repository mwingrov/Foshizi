import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'user',
  email: 'email',
  password: 'password',
  number: 'number',
  initialState: {
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export const selectUser = (state) => state.user.user;

export default authSlice.reducer;
