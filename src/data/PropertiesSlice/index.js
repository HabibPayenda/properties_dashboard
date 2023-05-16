import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PropertiesApi from "../../utils/api/propertiesApi";
import { toast } from "react-toastify";

export const getAllProperties = createAsyncThunk(
  "properties/getAllProperties",
  async () => {
    // Code
    try {
      const result = await PropertiesApi.get("/properties", {
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
export const getProperty = createAsyncThunk(
  "properties/getProperty",
  async (id) => {
    // Code
    console.log(id);
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
export const addProperty = createAsyncThunk(
  "properties/addProperty",
  async ({ owner_name, property_id }) => {
    try {
      const result = await PropertiesApi.post(
        "/properties",
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
  properties: [],
  showProperty: {},
  token: null,
  noToken: null,
  loading: "idle",
  role: null,
};

export const PropertiesSlice = createSlice({
  name: "properties",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllProperties.fulfilled, (state, action) => {
      // Code
      state.propertyManagerReviews = action.payload.property_manager_reviews;
    });
    builder.addCase(getProperty.fulfilled, (state, action) => {
      // Code
      state.showPropertyManagerReview = action.payload.property_manager_review;
    });

    builder.addCase(addProperty.rejected, (state, action) => {
      // Code
      toast.error("Try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addProperty.fulfilled, (state, action) => {
      // Code
      state.propertyManagerReviews = [
        ...state.propertyManagerReviews,
        action.payload.property_manager_review,
      ];
      toast.success("Review added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
  },
});

export default PropertiesSlice.reducer;
