import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import LoginApi from "../../utils/api/propertiesLogin";
import PropertiesApi from "../../utils/api/propertiesApi";
import { toast } from "react-toastify";

export const signIn = createAsyncThunk("admins/signIn", async (data) => {
  // Code
  try {
    const result = await LoginApi.post(
      "/admins/login",
      { name: data.name, password: data.password },
      {
        onUploadProgress: (progress) => {
          if (progress.loaded / progress.total === 1) {
          }
        },
      }
    );
    localStorage.setItem("admin", JSON.stringify(result.data.admin));
    localStorage.setItem("token", JSON.stringify(result.data.token));
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const localSignIn = createAsyncThunk("admins/localSignIn", async () => {
  // Code
  const token = localStorage.getItem("token");
  const admin = localStorage.getItem("admin");
  return { token, admin };
});

export const signOut = createAsyncThunk("admins/signOut", async () => {
  // Code
  localStorage.removeItem("admin");
  localStorage.removeItem("token");
  return null;
});

export const getAllAdmins = createAsyncThunk(
  "admins/getAllAdmins",
  async () => {
    // Code
    const result = await PropertiesApi.get("/admins");
    return result.data;
  }
);

export const addAdmin = createAsyncThunk("admins/addAdmin", async (data) => {
  // Code
  try {
    const result = await axios.post(
      "/Newregister",
      { name: data.name, password: data.password, isAdmin: data.isAdmin },
      {
        onUploadProgress: (progress) => {
          if (progress.loaded / progress.total === 1) {
          }
        },
      }
    );

    if (result.data.admin) {
    }
    return 1;
  } catch (error) {
    console.log(error);
    return error;
  }
});

const initialState = {
  admin: {},
  admins: [],
  token: null,
  noToken: null,
  loading: "idle",
  role: null,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signIn.rejected, (state, action) => {
      // Code
      toast.error("Try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(signIn.fulfilled, (state, action) => {
      // Code
      state.token = action.payload.token;
      state.admin = action.payload.admin;
      toast.success("Signed In successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(localSignIn.fulfilled, (state, action) => {
      // Code
      state.token = action.payload.token;
      state.admin = JSON.parse(action.payload.admin);
    });

    builder.addCase(getAllAdmins.fulfilled, (state, action) => {
      // Code
      state.admins = action.payload.admins;
    });

    builder.addCase(signOut.rejected, (state, action) => {
      // Code
      toast.error("Try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(signOut.fulfilled, (state, action) => {
      // Code
      state.token = action.payload;
      state.admin = {};
      toast.success("Signed Out successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addAdmin.fulfilled, (state, action) => {
      // Code
    });
  },
});

export default adminSlice.reducer;
