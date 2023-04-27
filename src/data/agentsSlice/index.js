import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PropertiesApi from '../../utils/api/propertiesApi';

export const signIn = createAsyncThunk(
  'agent/signIn',
  async (data) => {
   // Code 
   try {
    const result = await PropertiesApi.post('/admins/login', {name: data.name, password: data.password}, {
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

export const localSignIn = createAsyncThunk('user/localSignIn', async () => {
 // Code 
 const token = localStorage.getItem('token')
 const admin = localStorage.getItem('admin')
 return {token, admin};
});

export const signOut = createAsyncThunk('user/signOut', async () => {
 // Code 
 localStorage.removeItem('admin')
 localStorage.removeItem('token')
 return null;
});

export const getAllAgents = createAsyncThunk(
  'agents/getAllAgents',
  async () => {
    // Code 
    try {
      const result = await PropertiesApi.get('/agents', {
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
export const getAgent = createAsyncThunk(
  'agents/getAgent',
  async (id) => {
    // Code 
    console.log(id)
    try {
      const result = await PropertiesApi.get(`agents/${id}`, {
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
export const addAgent = createAsyncThunk(
  'agents/addAgent',
  async ({name, hire_date, status, admin_id}) => {
    // Code 
    // console.log("data is ", data)
    try {
      const result = await PropertiesApi.post('/agents', {name: name, hire_date: hire_date, status: status, admin_id: admin_id * 1}, {
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
  agents: [],
  showAgent: {},
  token: null,
  noToken: null,
  loading: 'idle',
  role: null,
};

export const agentsSlice = createSlice({
  name: 'agents',
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
      state.agents = action.payload.agents;
    });
    builder.addCase(getAgent.fulfilled, (state, action) => {
      // Code
      state.showAgent = action.payload.agent;
    });

    builder.addCase(addAgent.fulfilled, (state, action) => {
      // Code
      state.agents = [...state.agents, action.payload.agent]
    });
  },
});

export default agentsSlice.reducer;