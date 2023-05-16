import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PropertiesApi from "../../utils/api/propertiesApi";
import { toast } from "react-toastify";

export const getAllOffers = createAsyncThunk("offers/getAllLands", async () => {
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
});
export const getLand = createAsyncThunk("offers/getLand", async (id) => {
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
export const addLand = createAsyncThunk(
  "offers/addLand",
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

export const LandsSlice = createSlice({
  name: "offers",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllOffers.fulfilled, (state, action) => {
      // Code
      state.offers = action.payload.offers;
    });
    builder.addCase(getLand.fulfilled, (state, action) => {
      // Code
      state.showOffer = action.payload.offer;
    });

    builder.addCase(addLand.rejected, (state, action) => {
      // Code
      toast.error("Try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addLand.fulfilled, (state, action) => {
      // Code
      state.offers = [...state.offers, action.payload.offer];
      toast.success("Land added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
  },
});

export default LandsSlice.reducer;
