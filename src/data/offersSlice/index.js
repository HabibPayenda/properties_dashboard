import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PropertiesApi from "../../utils/api/propertiesApi";
import { toast } from "react-toastify";

export const getAllOffers = createAsyncThunk(
  "offers/getAllOffers",
  async () => {
    // Code
    try {
      const result = await PropertiesApi.get("/offers", {
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
export const getOffer = createAsyncThunk("offers/getOffer", async (id) => {
  // Code
  console.log(id);
  try {
    const result = await PropertiesApi.get(`offers/${id}`, {
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
export const createOffer = createAsyncThunk(
  "offers/createOffer",
  async ({ owner_name, property_id }) => {
    try {
      const result = await PropertiesApi.post(
        "/offers",
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
  offers: [],
  showOffer: {},
  token: null,
  noToken: null,
  loading: "idle",
  role: null,
};

export const offersSlice = createSlice({
  name: "offers",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllOffers.fulfilled, (state, action) => {
      // Code
      state.offers = action.payload;
    });
    builder.addCase(getOffer.fulfilled, (state, action) => {
      // Code
      state.showOffer = action.payload.offer;
    });

    builder.addCase(createOffer.rejected, (state, action) => {
      // Code
      toast.error("Try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(createOffer.fulfilled, (state, action) => {
      // Code
      state.offers = [...state.offers, action.payload.offer];
      toast.success("Land added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
  },
});

export default offersSlice.reducer;
