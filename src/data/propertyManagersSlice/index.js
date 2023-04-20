import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PropertiesApi from '../../utils/api/propertiesApi';

export const signIn = createAsyncThunk(
  'propertyManagers/signIn',
  async (data) => {
   // Code 
   try {
    const result = await PropertiesApi.post('/property_managers/login', {name: data.name, password: data.password}, {
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

export const localSignIn = createAsyncThunk('propertyManagers/localSignIn', async () => {
 // Code 
 const token = localStorage.getItem('token')
 const admin = localStorage.getItem('admin')
 return {token, admin};
});

export const signOut = createAsyncThunk('propertyManagers/signOut', async () => {
 // Code 
 localStorage.removeItem('admin')
 localStorage.removeItem('token')
 return null;
});

export const getAllPropertyManagers = createAsyncThunk(
  'propertyManagers/getAllPropertyManagers',
  async (data) => {
    // Code 
    try {
      const result = await PropertiesApi.get('/property_managers', {
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
export const addPropertyManager = createAsyncThunk(
  'propertyManagers/addAgent',
  async ({name, company_name, status, agent_id}) => {
    // Code 
    // console.log("data is ", data)
    try {
      const result = await PropertiesApi.post('/property_managers', {name: name, company_name: company_name, status: status, agent_id: agent_id * 1}, {
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
  propertyManagers: {},
  token: null,
  noToken: null,
  loading: 'idle',
  role: null,
};

export const propertyManagersSlice = createSlice({
  name: 'propertyManagers',
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

    builder.addCase(getAllAgents.fulfilled, (state, action) => {
      // Code
      state.agents = action.payload.property_managers;
    });

    builder.addCase(addAgent.fulfilled, (state, action) => {
      // Code
      state.agents = [...state.agents, action.payload.property_manager]
    });
  },
});

export default propertyManagersSlice.reducer;