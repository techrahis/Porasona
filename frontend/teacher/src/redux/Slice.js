import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  isAuthenticated:localStorage.getItem('isAuthenticated')==='true',
  user: null,
};

export const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    toogleSidebar: (state, action) => {
      state.open = action.payload;
    },

    setIsAuthenticated: (state, action) => {
      localStorage.setItem('isAuthenticated', true);
      state.isAuthenticated = true;
    },
    logout: (state, action) => {
      localStorage.removeItem('isAuthenticated')
      state.isAuthenticated = false;
    },
  },
});

export const { toogleSidebar, setIsAuthenticated, logout } = teacherSlice.actions;
export default teacherSlice.reducer;
