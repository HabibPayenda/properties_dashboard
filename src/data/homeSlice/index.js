import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PropertiesApi from '../../utils/api/propertiesApi';



export const getAllHomes = createAsyncThunk(
  'homes/getAllHomes',
  async () => {
    // Code 
    try {
      const result = await PropertiesApi.get('/homes', {
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
export const getHome = createAsyncThunk(
  'homes/getHome',
  async (id) => {
    // Code 
    console.log(id)
    try {
      const result = await PropertiesApi.get(`homes/${id}`, {
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
export const addHome = createAsyncThunk(
  'homes/addHome',
  async ({owner_name, name, status, property_manager_id, agent_id, description }) => {

    console.log(owner_name, name, status, property_manager_id, agent_id, description)

    try {
      const result = await PropertiesApi.post('/homes', {owner_name: owner_name, name: name, availability_status: status, property_manager_id: property_manager_id * 1, agent_id: agent_id * 1, description: description }, {
        onUploadProgress: (progress) => {
          if (progress.loaded / progress.total === 1) {
          }
        },
      });
      console.log(result.data)
      return result.data;
    } catch (error) {
      console.log(error)
      return error;
    }
  }
);

const initialState = {
  homes: [],
  showHome: {},
  token: null,
  noToken: null,
  loading: 'idle',
  role: null,
};

export const homesSlice = createSlice({
  name: 'homes',
  initialState,
  extraReducers: (builder) => {

    builder.addCase(getAllHomes.fulfilled, (state, action) => {
      // Code
      state.homes = action.payload.homes;
    });
    builder.addCase(getHome.fulfilled, (state, action) => {
      // Code
      state.showHome = action.payload.home;
    });

    builder.addCase(addHome.fulfilled, (state, action) => {
      // Code
      state.homes = [...state.homes, action.payload.home]
    });
  },
});

export default homesSlice.reducer;