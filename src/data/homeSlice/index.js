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

export const createHomeOffer = createAsyncThunk(
  "homes/createHomeOffer",
  async (
    property_id,
    start_date,
    end_date,
    title,
    description,
    deal_info_id,
    offer_price
  ) => {
    // Code
    try {
      const data = {
        property_id,
        start_date,
        end_date,
        title,
        description,
        deal_info_id,
        offer_price,
      };
      const result = await PropertiesApi.post(
        `homes/add_offer${property_id}`,
        data,
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
    image,
  }) => {
    console.log("image is: ", image);
    const data = new FormData();
    console.log(image, "image");
    data.append("image", image);
    data.append("owner_name", owner_name);
    data.append("name", name);
    data.append("availability_status", availability_status);
    data.append("agent_id", agent_id);
    data.append("property_manager_id", property_manager_id);
    data.append("description", description);
    data.append("province", province);
    data.append("city", city);
    data.append("district", district);
    data.append("deal_type", deal_type);
    data.append("duration", duration);
    data.append("total_price", total_price);
    data.append("price_per_duration", price_per_duration);
    data.append("total_duration", total_duration);

    console.log("dataImage is ", data);
    try {
      const result = await PropertiesApi.post("/homes", data, {
        headers: { "Content-Type": data.type },
        onUploadProgress: (progress) => {
          if (progress.loaded / progress.total === 1) {
          }
        },
      });
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const editHome = createAsyncThunk(
  "homes/editHome",
  async ({
    id,
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
    image,
  }) => {
    const data = new FormData();
    console.log(image, "image");
    data.append("image", image);
    data.append("home[owner_name]", owner_name);
    data.append("property[name]", name);
    data.append("property[availability_status]", availability_status);
    data.append("property[agent_id]", agent_id);
    data.append("property[property_manager_id]", property_manager_id);
    data.append("property[description]", description);
    data.append("property[province]", province);
    data.append("property[city]", city);
    data.append("property[district]", district);
    data.append("property[deal_type]", deal_type);
    data.append("property[duration]", duration);
    data.append("property[total_price]", total_price);
    data.append("property[price_per_duration]", price_per_duration);
    data.append("property[total_duration]", total_duration);
    try {
      const result = await PropertiesApi.patch(`/homes/${id}`, data, {
        onUploadProgress: (progress) => {
          if (progress.loaded / progress.total === 1) {
          }
        },
      });
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);
export const deleteHome = createAsyncThunk("homes/deleteHome", async (id) => {
  try {
    const result = await PropertiesApi.delete(`/homes/${id}`, {
      onUploadProgress: (progress) => {
        if (progress.loaded / progress.total === 1) {
        }
      },
    });
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});
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
      const result = await PropertiesApi.patch(
        `/homes/room/${home_id}`,
        {
          room_id: id,
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
export const deleteHomeRoom = createAsyncThunk(
  "homes/deleteHomeRoom",
  async ({ id, home_id }) => {
    try {
      const result = await PropertiesApi.delete(
        `/homes/room/${id}`,

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

export const addHomeAmenity = createAsyncThunk(
  "homes/addHomeAmenity",
  async ({ name, description, fee, fee_duration, property_id }) => {
    try {
      const result = await PropertiesApi.post(
        "/homes/amenity",
        {
          name: name,
          description: description,
          fee: fee,
          fee_duration: fee_duration,
          property_id: property_id,
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
export const addHomeRestriction = createAsyncThunk(
  "homes/addHomeRestriction",
  async ({ name, description, property_id }) => {
    try {
      const result = await PropertiesApi.post(
        "/homes/restriction",
        {
          name: name,
          description: description,
          property_id: property_id,
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

    builder.addCase(editHomeRoom.fulfilled, (state, action) => {
      // Code
      toast.success("Room updated successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      state.showHome = action.payload.home;
    });
    builder.addCase(deleteHomeRoom.fulfilled, (state, action) => {
      // Code
      toast.info("Room deleted successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
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
    builder.addCase(addHomeAmenity.fulfilled, (state, action) => {
      // Code
      state.homeProperty = action.payload.property;
      toast.success("Amenity added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addHomeRestriction.fulfilled, (state, action) => {
      // Code
      state.homeProperty = action.payload.property;
      toast.success("Restriction added successfully.", {
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

    builder.addCase(editHome.fulfilled, (state, action) => {
      // Code
      state.showHome = action.payload.home;
      state.homeProperty = action.payload.property;
      toast.success("Home edited successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(deleteHome.fulfilled, (state, action) => {
      // Code
      state.showHome = {};
      state.homeProperty = {};
      state.homes = state.homes.filter(
        (home) => home.id !== action.payload.home.id
      );
      toast.info("Home deleted successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
  },
});

export default homesSlice.reducer;
