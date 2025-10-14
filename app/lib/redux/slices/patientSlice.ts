// store/slices/patientSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 
interface Patient {
  id: number;
  name: string;
  gender: string;
  age: number;
  phone: string;
  city: string;
  status: string;
}
interface PatientState {
  patients: Patient[];
  selectedPatient: Patient | null;
  activeTab: string;
}

const initialState: PatientState = {
  patients: [
    {
      id: 0,
      name: "Search Patient",
      gender: "Male",
      age: 35,
      phone: "055-123-4567",
      city: "Riyadh",
      status: "Active",
    },
    {
      id: 1,
      name: "Ahmed Khan",
      gender: "Male",
      age: 35,
      phone: "055-123-4567",
      city: "Riyadh",
      status: "Active",
    },
    {
      id: 2,
      name: "Fatima Ali",
      gender: "Female",
      age: 29,
      phone: "056-234-5678",
      city: "Jeddah",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Omar Hassan",
      gender: "Male",
      age: 42,
      phone: "057-345-6789",
      city: "Dammam",
      status: "Active",
    },
    {
      id: 4,
      name: "Sara Ahmed",
      gender: "Female",
      age: 31,
      phone: "058-456-7890",
      city: "Makkah",
      status: "Active",
    },
  ],
  selectedPatient: null,
  activeTab: "Demographic",
};

const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    setPatients: (state, action: PayloadAction<Patient[]>) => {
      state.patients = action.payload;
    },
    addPatient: (state, action: PayloadAction<Patient>) => {
      state.patients.push(action.payload);
    },
    selectPatient: (state, action: PayloadAction<number>) => {
      state.selectedPatient =
        state.patients.find((p) => p.id === action.payload) || null;
    },
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setPatients, addPatient, selectPatient, setActiveTab } =
  patientSlice.actions;
export default patientSlice.reducer;
