import {configureStore} from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice.jsx";
import boardSlice from "./slices/boardSlice.jsx";

export default configureStore({
  reducer: {
    "loginSlice": loginSlice,
    "boardSlice": boardSlice
  }
})