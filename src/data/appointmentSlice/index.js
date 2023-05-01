import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PropertiesApi from '../../utils/api/propertiesApi';



export const getAllAppointments = createAsyncThunk(
  'appointments/getAllAppointments',
  async () => {
    // Code 
    try {
      const result = await PropertiesApi.get('/appointments', {
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
export const getAppointment = createAsyncThunk(
  'appointments/getAppointment',
  async (id) => {
    // Code 
    console.log(id)
    try {
      const result = await PropertiesApi.get(`appointments/${id}`, {
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
export const addAppointment = createAsyncThunk(
  'appointments/addAppointment',
  async ({owner_name, property_id}) => {

    try {
      const result = await PropertiesApi.post('/appointments', {owner_name: owner_name, property_id: property_id * 1}, {
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
  appointments: [],
  showAppointment: {},
  token: null,
  noToken: null,
  loading: 'idle',
  role: null,
};

export const AppointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  extraReducers: (builder) => {

    builder.addCase(getAllAppointments.fulfilled, (state, action) => {
      // Code
      state.appointments = action.payload.appointments;
    });
    builder.addCase(getAppointment.fulfilled, (state, action) => {
      // Code
      state.showAppointment = action.payload.appointment;
    });

    builder.addCase(addAppointment.fulfilled, (state, action) => {
      // Code
      state.appointments = [...state.appointments, action.payload.appointment]
    });
  },
});

export default AppointmentsSlice.reducer;