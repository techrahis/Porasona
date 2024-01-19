import { configureStore } from "@reduxjs/toolkit";
import teacherSlice from "./Slice";

export const store = configureStore({
  reducer: {
    teacher: teacherSlice,
  },
});
