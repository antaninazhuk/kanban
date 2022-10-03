import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./features/boardSlice";

export default configureStore({
  reducer: {
    boards: boardSlice
  }
})