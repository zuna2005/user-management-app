import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRandomUser } from "../api/userApi";

interface User {
  sex: string;
  address: string;
  name: string;
  email: string;
  birthday: string;
}

interface UsersState {
  list: {
    [key: string]: User;
  };
  status: string;
}
const initialState: UsersState = {
  list: {},
  status: "idle",
};

export const createUser = createAsyncThunk("users/createRandom", async () => {
  const res = await getRandomUser();
  return res.data;
});

export const userListSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    del: (state, action) => {
      delete state.list[action.payload];
    },
    updateAddress: (state, action) => {
      const { username, address } = action.payload;
      state.list[username].address = address;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "idle";
        const { username, ...data } = action.payload;
        state.list[username] = data;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "failed";
        console.error("Failed to create a user.", action.error.message);
      });
  },
});

export const { del, updateAddress } = userListSlice.actions;
export default userListSlice.reducer;
