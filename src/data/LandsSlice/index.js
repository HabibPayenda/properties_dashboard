import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PropertiesApi from "../../utils/api/propertiesApi";

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
  async ({ owner_name, property_id }) => {
    try {
      const result = await PropertiesApi.post(
        "/lands",
        { owner_name: owner_name, property_id: property_id * 1 },
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
