import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  user:null,
};

export const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    toogleSidebar: (state, action) => {
      state.open = action.payload;
    },

    setUser: (state, action)=>{
      state.user=action.payload;
    }
  },
});

export const { toogleSidebar, setUser } = teacherSlice.actions;
export default teacherSlice.reducer;
