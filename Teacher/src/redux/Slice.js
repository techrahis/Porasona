import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  user: null,
};

export const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    toogleSidebar: (state, action) => {
      state.open = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { toogleSidebar, setUser, logout } = teacherSlice.actions;
export default teacherSlice.reducer;
