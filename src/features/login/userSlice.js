// authSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

const loginAsync = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    const response = await loginApi({ username, password });
    return response;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        sessionStorage.setItem(
          "authToken",
          JSON.stringify(action.payload.token)
        );
      })
      .addCase(loginAsync.rejected, (state) => {
        toast.error("Login failed, please try again");
        state.isLoading = false;
      });
  },
});

export const login = loginAsync;

export default authSlice.reducer;
