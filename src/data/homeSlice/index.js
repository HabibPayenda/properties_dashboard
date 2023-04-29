import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PropertiesApi from '../../utils/api/propertiesApi';
import months from '../../utils/months';



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
  chartMonths: [],
  chartData: []
};

export const homesSlice = createSlice({
  name: 'homes',
  initialState,
  extraReducers: (builder) => {

    builder.addCase(getAllHomes.fulfilled, (state, action) => {
      // Code
      state.homes = action.payload.homes;
      let count = 0;
      let index;
      action.payload.homes.forEach(home => {
        const month = new Date(home.created_at.slice(0, -1)).getMonth()
        const monthText = months[month]
        

        if(state.chartMonths.indexOf(monthText) == -1) {
          count = 0;
          state.chartMonths.push(monthText);
          console.log('index to be : ', state.chartMonths.indexOf(monthText))
          count += 1;
          index = state.chartMonths.indexOf(monthText);
          
          state.chartData[index] = 1;
        } else {
          count += 1;
          console.log("index is : ", index)
            state.chartData[index] = count ;
        }
      }); 
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