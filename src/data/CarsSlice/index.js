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
export const addCar = createAsyncThunk(
  "cars/addCar",
  async ({
    name,
    description,
    availability_status,
    property_manager_id,
    agent_id,
    province,
    city,
    district,
    deal_type,
    duration,
    price_per_duration,
    total_price,
    total_duration,
    brand,
    model,
    year,
    mile_age,
    transmission,
    fuel_type,
    engine_size,
    body_style,
    identity_number,
    image,
  }) => {
    try {
      const data = new FormData();
      data.append("name", name);
      data.append("description", description);
      data.append("availability_status", availability_status);
      data.append("property_manager_id", property_manager_id);
      data.append("agent_id", agent_id);
      data.append("province", province);
      data.append("city", city);
      data.append("district", district);
      data.append("deal_type", deal_type);
      data.append("duration", duration);
      data.append("price_per_duration", price_per_duration);
      data.append("total_price", total_price);
      data.append("total_duration", total_duration);
      data.append("brand", brand);
      data.append("mile_age", mile_age);
      data.append("transmission", transmission);
      data.append("fuel_type", fuel_type);
      data.append("engine_size", engine_size);
      data.append("identity_number", identity_number);
      data.append("model", model);
      data.append("year", year);
      data.append("body_style", body_style);
      data.append("image", image);

      const result = await PropertiesApi.post("/cars", data, {
        headers: {
          "Content-Type": data.type,
        },
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
