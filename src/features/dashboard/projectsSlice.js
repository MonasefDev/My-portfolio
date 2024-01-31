// projectSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProjects as getProjectsApi } from "../../services/apiProjects";

const getProjectsAsync = createAsyncThunk(
  "projects/getProjects",
  async (token) => {
    try {
      const projects = await getProjectsApi(token);
      return projects;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }
);

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjectsAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProjectsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects = action.payload;
      })
      .addCase(getProjectsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const getProjects = getProjectsAsync;

export default projectSlice.reducer;
