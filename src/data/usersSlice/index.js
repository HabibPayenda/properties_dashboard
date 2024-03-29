import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import LoginApi from "../../utils/api/propertiesLogin";
import PropertiesApi from "../../utils/api/propertiesApi";
import { toast } from "react-toastify";

export const signIn = createAsyncThunk("users/signIn", async (data) => {
  // Code
  try {
    const result = await LoginApi.post(
      "/users/login",
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

export const localSignIn = createAsyncThunk("users/localSignIn", async () => {
  // Code
  const token = localStorage.getItem("token");
  const admin = localStorage.getItem("admin");
  return { token, admin };
});

export const signOut = createAsyncThunk("users/signOut", async () => {
  // Code
  localStorage.removeItem("admin");
  localStorage.removeItem("token");
  return null;
});

export const sendNotification = createAsyncThunk(
  "users/sendNotification",
  async ({ id, title, body }) => {
    // Code
    const result = await PropertiesApi.post(`/user_notify/${id}`, {
      title: title,
      body: body,
    });
    console.log(result);
    return result.data;
  }
);

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  // Code
  const result = await PropertiesApi.get("/users");
  return result.data;
});

export const getRecentUsers = createAsyncThunk(
  "users/getRecentUsers",
  async () => {
    // Code
    const result = await PropertiesApi.get("/users/recent/users");
    return result.data;
  }
);

export const getUser = createAsyncThunk("users/getUser", async (id) => {
  // Code
  const result = await PropertiesApi.get(`/users/${id}`);
  console.log(result.data);
  return result.data;
});

export const addUser = createAsyncThunk(
  "users/addUser",
  async ({
    name,
    password,
    date_of_birth,
    gender,
    province,
    city,
    district,
    phone_number_one,
    email_one,
    image,
  }) => {
    try {
      const data = new FormData();
      data.append("name", name);
      data.append("password", password);
      data.append("date_of_birth", date_of_birth);
      data.append("gender", gender);
      data.append("province", province);
      data.append("city", city);
      data.append("district", district);
      data.append("phone_number_one", phone_number_one);
      data.append("email_one", email_one);
      data.append("image", image);
      const result = await PropertiesApi.post("/users", data, {
        headers: {
          "Content-Type": data.type,
        },
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

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({
    user_id,
    name,
    password,
    date_of_birth,
    gender,
    province,
    city,
    district,
    phone_number_one,
    email_one,
    image,
  }) => {
    try {
      const data = new FormData();
      data.append("name", name);
      data.append("password", password);
      data.append("date_of_birth", date_of_birth);
      data.append("gender", gender);
      data.append("province", province);
      data.append("city", city);
      data.append("district", district);
      data.append("phone_number_one", phone_number_one);
      data.append("email_one", email_one);
      data.append("image", image);
      const result = await PropertiesApi.patch(`/users/${user_id}`, data, {
        headers: {
          "Content-Type": data.type,
        },
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
  user: {},
  users: [],
  showUser: {},
  recentUsers: [],
  token: null,
  noToken: null,
  loading: "idle",
  role: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      // Code
      state.token = action.payload.token;
      state.user = action.payload.user;
    });

    builder.addCase(localSignIn.fulfilled, (state, action) => {
      // Code
      state.token = action.payload.token;
      state.user = JSON.parse(action.payload.user);
    });

    builder.addCase(signOut.fulfilled, (state, action) => {
      // Code
      state.token = action.payload;
      state.admin = {};
    });

    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      // Code
      state.users = action.payload.users;
    });

    builder.addCase(getRecentUsers.fulfilled, (state, action) => {
      // Code
      console.log("In recent users ", action.payload);
      state.recentUsers = action.payload.users;
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      // Code
      state.showUser = action.payload.user;
    });

    builder.addCase(addUser.rejected, (state, action) => {
      // Code
      toast.error("Try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addUser.fulfilled, (state, action) => {
      // Code

      state.users = [...state.users, action.payload.user];
      toast.success("User added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      // Code

      state.showUser = action.payload.user;
      toast.success("User added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });
  },
});

export default usersSlice.reducer;
