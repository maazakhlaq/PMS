// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/slices";
import userInfo from "./slices/userSlice";
import patientReducer from "./slices/patientSlice";




export const store = configureStore({
  reducer: {
    loginInfo: counterSlice,
    patientScreens:userInfo,
    patients: patientReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
