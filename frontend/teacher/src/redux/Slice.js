import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  theme:localStorage.getItem('theme')|| null,
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

    toogleTheme:(state, action)=>{
      localStorage.setItem('theme', action.payload);
      state.theme=action.payload;
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

export const { toogleSidebar,toogleTheme, setIsAuthenticated, logout } = teacherSlice.actions;
export default teacherSlice.reducer;
