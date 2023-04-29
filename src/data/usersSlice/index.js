import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import LoginApi from '../../utils/api/propertiesLogin';
import PropertiesApi from '../../utils/api/propertiesApi';

export const signIn = createAsyncThunk(
  'users/signIn',
  async (data) => {
   // Code 
   try {
    const result = await LoginApi.post('/users/login', {name: data.name, password: data.password}, {
      onUploadProgress: (progress) => {
        if (progress.loaded / progress.total === 1) {
         
        }
      },
    });
    localStorage.setItem('admin', JSON.stringify(result.data.admin))
    localStorage.setItem('token', JSON.stringify(result.data.token))
    return result.data
  } catch (error) {
    console.log(error)
    return error;
  }
  },
);

export const localSignIn = createAsyncThunk('users/localSignIn', async () => {
 // Code 
 const token = localStorage.getItem('token')
 const admin = localStorage.getItem('admin')
 return {token, admin};
});

export const signOut = createAsyncThunk('users/signOut', async () => {
 // Code 
 localStorage.removeItem('admin')
 localStorage.removeItem('token')
 return null;
});

export const getAllUsers = createAsyncThunk('users/getAllUsers', async () => {
 // Code 
 const result = await PropertiesApi.get('/users')
 return result.data;
});

export const getUser = createAsyncThunk('users/getAllUsers', async (id) => {
 // Code 
 const result = await PropertiesApi.get(`/users/${id}`)
 return result.data;
});

export const addUser = createAsyncThunk(
  'users/addUser',
  async (data) => {
    // Code 
    try {
      const result = await axios.post('/users', {name: data.name, password: data.password, isAdmin: data.isAdmin}, {
        onUploadProgress: (progress) => {
          if (progress.loaded / progress.total === 1) {
          }
        },
      });
  

      return result.data;
    } catch (error) {
      console.log(error)
      return error;
    }
  }
);

const initialState = {
  user: {},
  users: [],
  showUser: {},
  token: null,
  noToken: null,
  loading: 'idle',
  role: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
     // Code
     state.token = action.payload.token;
     state.user = action.payload.user;
    });

    builder.addCase(localSignIn.fulfilled, (state, action) => {
      // Code
      state.token = action.payload.token;
      state.user = JSON.parse(action.payload.user);
    });

    builder.addCase(signOut.fulfilled, (state, action) => {
      // Code
      state.token = action.payload;
      state.admin = {};
    });

    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      // Code
      state.users = action.payload.users;
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      // Code
      state.showUser = action.payload.user
    });

    builder.addCase(addUser.fulfilled, (state, action) => {
      // Code

      state.users = [...state.users, action.payload.user]
    });
  },
});

export default usersSlice.reducer;