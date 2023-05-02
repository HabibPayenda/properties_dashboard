import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PropertiesApi from "../../utils/api/propertiesApi";
import { toast } from "react-toastify";

export const getAllUserReviews = createAsyncThunk(
  "userReviews/getAllUserReviews",
  async () => {
    // Code
    try {
      const result = await PropertiesApi.get("/user_reviews", {
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
export const getUserReview = createAsyncThunk(
  "userReviews/getUserReview",
  async (id) => {
    // Code
    console.log(id);
    try {
      const result = await PropertiesApi.get(`user_reviews/${id}`, {
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
export const addUserReview = createAsyncThunk(
  "userReviews/addUserReview",
  async ({ owner_name, property_id }) => {
    try {
      const result = await PropertiesApi.post(
        "/user_reviews",
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
  userReviews: [],
  showUserReview: {},
  token: null,
  noToken: null,
  loading: "idle",
  role: null,
};

export const UserReviewsSlice = createSlice({
  name: "userReviews",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllUserReviews.fulfilled, (state, action) => {
      // Code
      state.userReviews = action.payload.user_reviews;
    });
    builder.addCase(getUserReview.fulfilled, (state, action) => {
      // Code
      state.showUserReview = action.payload.user_review;
    });

    builder.addCase(addUserReview.rejected, (state, action) => {
      // Code
      toast.error("Try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addUserReview.fulfilled, (state, action) => {
      // Code
      state.userReviews = [...state.userReviews, action.payload.user_review];
      toast.success("Review added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
  },
});

export default UserReviewsSlice.reducer;
