import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PropertiesApi from "../../utils/api/propertiesApi";
import { toast } from "react-toastify";

export const getAllAppointments = createAsyncThunk(
  "appointments/getAllAppointments",
  async () => {
    // Code
    try {
      const result = await PropertiesApi.get("/appointments", {
        onUploadProgress: (progress) => {
          if (progress.loaded / progress.total === 1) {
          }
        },
      });
      return result.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);
export const getAppointment = createAsyncThunk(
  "appointments/getAppointment",
  async (id) => {
    // Code
    console.log(id);
    try {
      const result = await PropertiesApi.get(`appointments/${id}`, {
        onUploadProgress: (progress) => {
          if (progress.loaded / progress.total === 1) {
          }
        },
      });
      return result.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

// status: "",
// notes: "",
// user_id: "",
// property_id: "",
// agent_id: "",
// start: "",
// end: "",
export const addAppointment = createAsyncThunk(
  "appointments/addAppointment",
  async ({ status, notes, user_id, property_id, agent_id, start, end }) => {
    try {
      const result = await PropertiesApi.post(
        "/appointments",
        {
          status: status,
          notes: notes,
          user_id: user_id * 1,
          property_id: property_id * 1,
          agent_id: agent_id * 1,
          start: start,
          end: end,
        },
        {
          onUploadProgress: (progress) => {
            if (progress.loaded / progress.total === 1) {
            }
          },
        }
      );
      return result.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

const initialState = {
  appointments: [],
  showAppointment: {},
  token: null,
  noToken: null,
  loading: "idle",
  role: null,
  added: "idle",
};

export const AppointmentsSlice = createSlice({
  name: "appointments",
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

    builder.addCase(addAppointment.pending, (state, action) => {
      // Code
      state.added = "pending";
    });

    builder.addCase(addAppointment.rejected, (state, action) => {
      // Code
      state.added = "idle";
      toast.error("There was an error, try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addAppointment.fulfilled, (state, action) => {
      // Code
      state.added = "idle";
      state.appointments = [...state.appointments, action.payload.appointment];
      toast.success("Appointment added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
  },
});

export default AppointmentsSlice.reducer;
