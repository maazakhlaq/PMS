// store/slices/index.ts
import { createSlice } from "@reduxjs/toolkit";

interface PatientState {
  user: any;
}

 const initialState: PatientState = {
    user:[]
}
const userInfo = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state,action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user=[];
    },
  },
});

export const { setUser, clearUser } = userInfo.actions;
export default userInfo.reducer;
