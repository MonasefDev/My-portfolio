import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTechs } from "../../../services/apiTechs";

export const fetchTechs = createAsyncThunk("techs/fetchTechs", getTechs);

const techsSlice = createSlice({
  name: "techs",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTechs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTechs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchTechs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default techsSlice.reducer;
