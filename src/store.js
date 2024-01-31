import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/login/userSlice";
import projectReducer from "./features/dashboard/projectsSlice";

const store = configureStore({
  reducer: {
    auth: userReducer,
    projects: projectReducer,
  },
});

export default store;
