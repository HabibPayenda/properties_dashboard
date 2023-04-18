import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import LoginApi from '../../utils/api/propertiesLogin';

export const signIn = createAsyncThunk(
  'admin/signIn',
  async (data) => {
   // Code 
   try {
    const result = await LoginApi.post('/admins/login', {name: data.name, password: data.password}, {
      onUploadProgress: (progress) => {
        if (progress.loaded / progress.total === 1) {
         
        }
      },
    });
    console.log(result.data)
    localStorage.setItem('admin', JSON.stringify(result.data.admin))
    localStorage.setItem('token', JSON.stringify(result.data.token))
    return result.data
  } catch (error) {
    console.log(error)
    return error;
  }
  },
);

export const localSignIn = createAsyncThunk('user/localSignIn', async () => {
 // Code 
 return {token, admin};
});

export const signOut = createAsyncThunk('user/signOut', async () => {
 // Code 
 return null;
});

export const addAdmin = createAsyncThunk(
  'admin/addAdmin',
  async (data) => {
    // Code 
    try {
      const result = await axios.post('/Newregister', {name: data.name, password: data.password, isAdmin: data.isAdmin}, {
        onUploadProgress: (progress) => {
          if (progress.loaded / progress.total === 1) {
          }
        },
      });
  
      if(result.data.admin) {
      }
      return 1;
    } catch (error) {
      console.log(error)
      return error;
    }
  }
);

const initialState = {
  admin: {},
  token: null,
  noToken: null,
  loading: 'idle',
  role: null,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
     // Code
     state.token = action.payload.token;
     state.admin = action.payload.admin;
    });

    builder.addCase(localSignIn.fulfilled, (state, action) => {
      // Code
      state.token = action.payload.token;
      state.admin = JSON.parse(action.payload.admin);
    });

    builder.addCase(signOut.fulfilled, (state, action) => {
      // Code
      state.token = action.payload;
      state.admin = {};
    });

    builder.addCase(addAdmin.fulfilled, (state, action) => {
      // Code
    });
  },
});

export default adminSlice.reducer;