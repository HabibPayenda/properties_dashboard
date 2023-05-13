import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PropertiesApi from "../../utils/api/propertiesApi";
import { toast } from "react-toastify";

export const signIn = createAsyncThunk(
  "propertyManagers/signIn",
  async (data) => {
    // Code
    try {
      const result = await PropertiesApi.post(
        "/property_managers/login",
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
  }
);

export const localSignIn = createAsyncThunk(
  "propertyManagers/localSignIn",
  async () => {
    // Code
    const token = localStorage.getItem("token");
    const admin = localStorage.getItem("admin");
    return { token, admin };
  }
);

export const signOut = createAsyncThunk(
  "propertyManagers/signOut",
  async () => {
    // Code
    localStorage.removeItem("admin");
    localStorage.removeItem("token");
    return null;
  }
);

export const getAllPropertyManagers = createAsyncThunk(
  "propertyManagers/getAllPropertyManagers",
  async (data) => {
    // Code
    try {
      const result = await PropertiesApi.get("/property_managers", {
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

export const getPropertyManager = createAsyncThunk(
  "propertyManagers/getPropertyManager",
  async (id) => {
    // Code
    try {
      const result = await PropertiesApi.get(`/property_managers/${id}`, {
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
export const addPropertyManager = createAsyncThunk(
  "propertyManagers/addPropertyManager",
  async ({
    name,
    company_name,
    status,
    agent_id,
    province,
    city,
    district,
    phone_number_one,
    email_one,
  }) => {
    try {
      const result = await PropertiesApi.post(
        "/property_managers",
        {
          name: name,
          company_name: company_name,
          status: status,
          agent_id: agent_id * 1,
          province: province,
          city: city,
          district: district,
          phone_number_one: phone_number_one,
          email_one: email_one,
        },
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
export const getPropertyManagerProperties = createAsyncThunk(
  "propertyManagers/getPropertyManagerProperties",
  async (id) => {
    try {
      const result = await PropertiesApi.get(
        `/property_managers/properties/${id}`,
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
  propertyManagers: [],
  showPropertyManager: {},
  token: null,
  noToken: null,
  loading: "idle",
  role: null,
  propertyManagerProperties: [],
};

export const propertyManagersSlice = createSlice({
  name: "propertyManagers",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      // Code
      state.token = action.payload.token;
      state.admin = action.payload.admin;
    });

    builder.addCase(localSignIn.fulfilled, (state, action) => {
      // Code
      state.token = action.payload.token;
      state.admin = JSON.parse(action.payload.admin);
    });

    builder.addCase(signOut.fulfilled, (state, action) => {
      // Code
      state.token = action.payload;
      state.admin = {};
    });

    builder.addCase(getAllPropertyManagers.fulfilled, (state, action) => {
      // Code
      state.propertyManagers = action.payload.property_managers;
    });

    builder.addCase(getPropertyManager.fulfilled, (state, action) => {
      // Code
      state.showPropertyManager = action.payload.property_manager;
    });

    builder.addCase(addPropertyManager.rejected, (state, action) => {
      // Code
      toast.error("Try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addPropertyManager.fulfilled, (state, action) => {
      // Code
      console.log(action.payload);
      state.propertyManagers = [
        ...state.propertyManagers,
        action.payload.property_manager,
      ];
      toast.success("Property Manager added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(getPropertyManagerProperties.fulfilled, (state, action) => {
      // Code
      state.propertyManagerProperties = action.payload;
    });
  },
});

export default propertyManagersSlice.reducer;
