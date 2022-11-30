import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Enter Name",
    gender: "Enter Gender",
    pw: "",
    college: "Enter College",
    subjects: [],
    phone: "",
  },
  reducers: {
    update: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { update } = userSlice.actions;
export default userSlice.reducer;
