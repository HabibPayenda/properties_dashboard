import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PropertiesApi from "../../utils/api/propertiesApi";

export const getAllPropertyManagerReviews = createAsyncThunk(
  "propertyManagerReviews/getAllPropertyManagerReviews",
  async () => {
    // Code
    try {
      const result = await PropertiesApi.get("/property_manager_reviews", {
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
export const getPropertyManagerReview = createAsyncThunk(
  "propertyManagerReviews/getPropertyManagerReview",
  async (id) => {
    // Code
    console.log(id);
    try {
      const result = await PropertiesApi.get(`property_manager_reviews/${id}`, {
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
export const addPropertyManagerReview = createAsyncThunk(
  "propertyManagerReviews/addPropertyManagerReview",
  async ({ owner_name, property_id }) => {
    try {
      const result = await PropertiesApi.post(
        "/property_manager_reviews",
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
  propertyManagerReviews: [],
  showPropertyManagerReview: {},
  token: null,
  noToken: null,
  loading: "idle",
  role: null,
};

export const PropertyManagerReviewsReviewsSlice = createSlice({
  name: "propertyManagerReviews",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllPropertyManagerReviews.fulfilled, (state, action) => {
      // Code
      state.propertyManagerReviews = action.payload.property_manager_reviews;
    });
    builder.addCase(getPropertyManagerReview.fulfilled, (state, action) => {
      // Code
      state.showPropertyManagerReview = action.payload.property_manager_review;
    });

    builder.addCase(addPropertyManagerReview.rejected, (state, action) => {
      // Code
      toast.error("Try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addPropertyManagerReview.fulfilled, (state, action) => {
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

export default PropertyManagerReviewsReviewsSlice.reducer;
