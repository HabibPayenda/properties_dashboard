import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PropertiesApi from "../../utils/api/propertiesApi";
import { toast } from "react-toastify";

export const getAllLands = createAsyncThunk("lands/getAllLands", async () => {
  // Code
  try {
    const result = await PropertiesApi.get("/lands", {
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
export const getLand = createAsyncThunk("lands/getLand", async (id) => {
  // Code
  console.log(id);
  try {
    const result = await PropertiesApi.get(`lands/${id}`, {
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
export const addLand = createAsyncThunk(
  "lands/addLand",
  async ({
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
    zone,
    current_use,
    area,
  }) => {
    try {
      const data = new FormData();
      console.log(image, "image");
      data.append("image", image);
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
      data.append("zone", zone);
      data.append("current_use", current_use);
      data.append("area", area);
      const result = await PropertiesApi.post("/lands", data, {
        headers: { "Content-Type": data.type },
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
  lands: [],
  showLand: {},
  token: null,
  noToken: null,
  loading: "idle",
  role: null,
};

export const LandsSlice = createSlice({
  name: "lands",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllLands.fulfilled, (state, action) => {
      // Code
      state.lands = action.payload.lands;
    });
    builder.addCase(getLand.fulfilled, (state, action) => {
      // Code
      state.showLand = action.payload.land;
    });

    builder.addCase(addLand.rejected, (state, action) => {
      // Code
      toast.error("Try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addLand.fulfilled, (state, action) => {
      // Code
      state.lands = [...state.lands, action.payload.land];
      toast.success("Land added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
  },
});

export default LandsSlice.reducer;
