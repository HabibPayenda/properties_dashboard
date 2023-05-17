import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PropertiesApi from "../../utils/api/propertiesApi";
import { toast } from "react-toastify";

export const getAllCars = createAsyncThunk("cars/getAllCars", async () => {
  // Code
  try {
    const result = await PropertiesApi.get("/cars", {
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
});
export const getCar = createAsyncThunk("cars/getCar", async (id) => {
  // Code
  console.log(id);
  try {
    const result = await PropertiesApi.get(`cars/${id}`, {
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
});
export const addCar = createAsyncThunk("cars/addCar", async (data) => {
  try {
    const result = await PropertiesApi.post("/cars", data, {
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
});

const initialState = {
  cars: [],
  showCar: {},
  token: null,
  noToken: null,
  loading: "idle",
  role: null,
};

export const CarsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllCars.fulfilled, (state, action) => {
      // Code
      state.cars = action.payload.cars;
    });
    builder.addCase(getCar.fulfilled, (state, action) => {
      // Code
      state.showCar = action.payload.car;
    });

    builder.addCase(addCar.rejected, (state, action) => {
      // Code
      toast.error("Try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addCar.fulfilled, (state, action) => {
      // Code
      state.cars = [...state.cars, action.payload.car];
      toast.success("Car added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
  },
});

export default CarsSlice.reducer;
