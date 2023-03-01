import { createSlice } from '@reduxjs/toolkit';

const COOKIE_NAME = 'auth';

// Get the cookie value or null
const getCookie = () => {
  const cookies = document.cookie.split(';');
  const cookie = cookies.find((cookie) => cookie.trim().startsWith(`${COOKIE_NAME}=`));
  if (cookie) {
    return cookie.trim().substring(`${COOKIE_NAME}=`.length, cookie.length);
  }
  return null;
};

export const authSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isLoggedIn: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
      const cookieValue = JSON.stringify(action.payload);
      document.cookie = `${COOKIE_NAME}=${cookieValue}; max-age=${60 * 60 * 24 * 7}`;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user");
      // Remove the cookie
      document.cookie = `${COOKIE_NAME}=; max-age=0`;
    },
    checkLogin: (state) => {
      const cookieValue = getCookie();
      if (cookieValue) {
        state.user = JSON.parse(cookieValue);
        state.isLoggedIn = true;
      }
    },
  },
});


export const { loginSuccess, logout, checkLogin } = authSlice.actions;

export const selectUser = (state) => state.user.user;

export const loggedIn = (state) => state.user.isLoggedIn;

export default authSlice.reducer;
