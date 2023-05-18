import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PropertiesApi from "../../utils/api/propertiesApi";
import months from "../../utils/months";
import { toast } from "react-toastify";

export const signIn = createAsyncThunk("agent/signIn", async (data) => {
  // Code
  try {
    const result = await PropertiesApi.post(
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

export const localSignIn = createAsyncThunk("user/localSignIn", async () => {
  // Code
  const token = localStorage.getItem("token");
  const admin = localStorage.getItem("admin");
  return { token, admin };
});

export const signOut = createAsyncThunk("user/signOut", async () => {
  // Code
  localStorage.removeItem("admin");
  localStorage.removeItem("token");
  return null;
});

export const getAllAgents = createAsyncThunk(
  "agents/getAllAgents",
  async () => {
    // Code
    try {
      const result = await PropertiesApi.get("/agents", {
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
export const getAgent = createAsyncThunk("agents/getAgent", async (id) => {
  // Code
  console.log(id);
  try {
    const result = await PropertiesApi.get(`agents/${id}`, {
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
export const addAgent = createAsyncThunk(
  "agents/addAgent",
  async ({
    name,
    hire_date,
    status,
    admin_id,
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
      data.append("hire_data", hire_date);
      data.append("status", status);
      data.append("admin_id", admin_id);
      data.append("province", province);
      data.append("city", city);
      data.append("district", district);
      data.append("phone_number_one", phone_number_one);
      data.append("email_one", email_one);
      data.append("image", image);
      const result = await PropertiesApi.post("/agents", data, {
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
export const editAgent = createAsyncThunk(
  "agents/editAgent",
  async ({
    id,
    name,
    hire_date,
    status,
    admin_id,
    province,
    city,
    district,
    phone_number_one,
    email_one,
  }) => {
    try {
      const result = await PropertiesApi.patch(
        `/agents/${id}`,
        {
          name: name,
          hire_date: hire_date,
          status: status,
          admin_id: admin_id * 1,
          province,
          city,
          district,
          phone_number_one,
          email_one,
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

export const getProperties = createAsyncThunk(
  "agents/getProperties",
  async (id) => {
    // Code
    try {
      const result = await PropertiesApi.get(`agents/properties/${id}`, {
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
  agents: [],
  showAgent: {},
  token: null,
  noToken: null,
  loading: "idle",
  role: null,
  chartMonths: [],
  chartData: [],
  agentProperties: [],
};

export const agentsSlice = createSlice({
  name: "agents",
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

    builder.addCase(getAllAgents.fulfilled, (state, action) => {
      // Code
      state.agents = action.payload.agents;
      let count = 0;
      let index;
      action.payload.agents.forEach((agent) => {
        const month = new Date(agent.created_at.slice(0, -1)).getMonth();
        const monthText = months[month];

        if (state.chartMonths.indexOf(monthText) == -1) {
          count = 0;
          state.chartMonths.push(monthText);
          console.log("index to be : ", state.chartMonths.indexOf(monthText));
          count += 1;
          index = state.chartMonths.indexOf(monthText);

          state.chartData[index] = 1;
        } else {
          count += 1;
          console.log("index is : ", index);
          state.chartData[index] = count;
        }
      });
    });
    builder.addCase(getAgent.fulfilled, (state, action) => {
      // Code
      state.showAgent = action.payload.agent;
    });

    builder.addCase(editAgent.fulfilled, (state, action) => {
      // Code
      state.showAgent = action.payload.agent;
      state.agents = state.agents.map((agent) => {
        if (agent.id === action.payload.agent.id) {
          return action.payload.agent;
        }
        return agent;
      });
      toast.success("Agent updated successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addAgent.rejected, (state, action) => {
      // Code
      toast.error("Try again.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    });

    builder.addCase(addAgent.fulfilled, (state, action) => {
      // Code
      toast.success("Agent added successfully.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      console.log(action.payload);
      state.agents = [...state.agents, action.payload.agent];
    });

    builder.addCase(getProperties.fulfilled, (state, action) => {
      // Code
      state.agentProperties = action.payload;
    });
  },
});

export default agentsSlice.reducer;
