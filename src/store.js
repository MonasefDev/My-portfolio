import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/login/userSlice";
import projectReducer from "./features/dashboard/projectsSlice";
import techsReducer from "./features/dashboard/techs/addTechSlice";

const store = configureStore({
  reducer: {
    auth: userReducer,
    projects: projectReducer,
    techs: techsReducer,
  },
});

export default store;
