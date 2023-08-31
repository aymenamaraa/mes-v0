
// this file will be used replacing the function simulateApiCall of login screen 

import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi } from '../simulatAuthAPI/authApi';

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials, thunkAPI) => {
  try {
    const response = await loginApi(credentials);
    
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
