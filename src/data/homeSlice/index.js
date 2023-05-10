import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PropertiesApi from "../../utils/api/propertiesApi";
import months from "../../utils/months";
import { toast } from "react-toastify";

export const getAllHomes = createAsyncThunk("homes/getAllHomes", async () => {
  // Code
  try {
    const result = await PropertiesApi.get("/homes", {
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
export const getHome = createAsyncThunk("homes/getHome", async (id) => {
  // Code
  try {
    const result = await PropertiesApi.get(`homes/${id}`, {
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

export const getHomeProperty = createAsyncThunk(
  "homes/getHomeProperty",
  async (id) => {
    // Code
    try {
      const result = await PropertiesApi.get(`properties/${id}`, {
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

export const addHome = createAsyncThunk(
  "homes/addHome",
  async ({
    owner_name,
    name,
    availability_status,
    property_manager_id,
    agent_id,
    description,
    province,
    city,
    district,
    deal_type,
    duration,
    price_per_duration,
    total_price,
    total_duration,
  }) => {
    try {
      const result = await PropertiesApi.post(
        "/homes",
        {
          owner_name: owner_name,
          name: name,
          availability_status: availability_status,
          property_manager_id: property_manager_id * 1,
          agent_id: agent_id * 1,
          description: description,
          province: province,
          city: city,
          district: district,
          deal_type: deal_type,
          duration: duration,
          price_per_duration: price_per_duration,
          total_price: total_price,
          total_duration: total_duration,
        },
        {
          onUploadProgress: (progress) => {
            if (progress.loaded / progress.total === 1) {
            }
          },
        }
      );
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);
export const addHomeRoom = createAsyncThunk(
  "homes/addHomeRoom",
  async ({ width, length, windows, cup_board, to_sun, color, home_id }) => {
    try {
      const result = await PropertiesApi.post(
        "/homes/room",
        {
          width: width * 1,
          length: length * 1,
          windows: windows * 1,
          cup_board: cup_board,
          to_sun: to_sun,
          color: color,
          home_id: home_id * 1,
        },
        {
          onUploadProgress: (progress) => {
            if (progress.loaded / progress.total === 1) {
            }
          },
        }
      );
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);
export const editHomeRoom = createAsyncThunk(
  "homes/editHomeRoom",
  async ({ id, width, length, windows, cup_board, to_sun, color, home_id }) => {
    try {
      const result = await PropertiesApi.post(
        `/homes/room/${home_id}`,
        {
          width: width * 1,
          length: length * 1,
          windows: windows * 1,
          cup_board: cup_board,
          to_sun: to_sun,
          color: color,
          home_id: home_id * 1,
        },
        {
          onUploadProgress: (progress) => {
            if (progress.loaded / progress.total === 1) {
            }
          },
        }
      );
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

const initialState = {
  homes: [],
  showHome: {},
  homeProperty: {},
  token: null,
  noToken: null,
  loading: "idle",
  role: null,
  chartMonths: [],
  chartData: [],
};

export const homesSlice = createSlice({
  name: "homes",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllHomes.fulfilled, (state, action) => {
      // Code
      state.homes = action.payload.homes;
      let count = 0;
      let index;
      action.payload.homes.forEach((home) => {
        const month = new Date(home.created_at.slice(0, -1)).getMonth();
        const monthText = months[month];

        if (state.chartMonths.indexOf(monthText) == -1) {
          count = 0;
          state.chartMonths.push(monthText);
          console.log("index to be : ", state.chartMonths.indexOf(monthText));
          count += 1;
          index = state.chartMonths.indexOf(monthText);

          state.chartData[index] = 1;
        } else {
          count += 1;
          console.log("index is : ", index);
          state.chartData[index] = count;
        }
      });
    });
    builder.addCase(getHome.fulfilled, (state, action) => {
      // Code
      state.showHome = action.payload.home;
    });
    builder.addCase(getHomeProperty.fulfilled, (state, action) => {
      // Code
      state.homeProperty = action.payload.property;
    });

    builder.addCase(addHomeRoom.rejected, (state, action) => {
      // Code
      toast.error("Try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addHomeRoom.fulfilled, (state, action) => {
      // Code
      state.showHome = action.payload.home;
      toast.success("Room added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addHome.rejected, (state, action) => {
      // Code
      toast.error("Try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addHome.fulfilled, (state, action) => {
      // Code
      state.homes = [...state.homes, action.payload.home];
      toast.success("Home added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
  },
});

export default homesSlice.reducer;
