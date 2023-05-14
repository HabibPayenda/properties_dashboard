import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PropertiesApi from "../../utils/api/propertiesApi";
import { toast } from "react-toastify";

export const getAllAgentReviews = createAsyncThunk(
  "agentReviews/getAllAgentReviews",
  async () => {
    // Code
    try {
      const result = await PropertiesApi.get("/agent_reviews", {
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
export const getAgentReview = createAsyncThunk(
  "agentReviews/getAgentReview",
  async (id) => {
    // Code
    console.log(id);
    try {
      const result = await PropertiesApi.get(`agent_reviews/${id}`, {
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
export const addAgentReview = createAsyncThunk(
  "agentReviews/addAgentReview",
  async ({ owner_name, property_id }) => {
    try {
      const result = await PropertiesApi.post(
        "/agent_reviews",
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
  agentReviews: [],
  showAgentReview: {},
  token: null,
  noToken: null,
  loading: "idle",
  role: null,
};

export const AgentReviewsSlice = createSlice({
  name: "agentReviews",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllAgentReviews.fulfilled, (state, action) => {
      // Code
      state.agentReviews = action.payload.agent_reviews;
    });
    builder.addCase(getAgentReview.fulfilled, (state, action) => {
      // Code
      state.showAgentReview = action.payload.agent_review;
    });

    builder.addCase(addAgentReview.rejected, (state, action) => {
      // Code
      toast.error("Try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
    builder.addCase(addAgentReview.fulfilled, (state, action) => {
      // Code
      state.agentReviews = [...state.agentReviews, action.payload.agent_review];
      toast.success("Review added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
  },
});

export default AgentReviewsSlice.reducer;
