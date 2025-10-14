"use client";

import { useState } from "react";
import { SearchCheck } from "lucide-react";
 
import PatientTabs from "./patientTabs/PatientTabs";
import SearchPatient from "./Search/SearchPatient";
import PatientDetail from "./patientDetails/PatientMain";
 
 

// Define patient type
interface Patient {
  id: number;
  name: string;
  gender: string;
  age: number;
  phone: string;
  city: string;
  status: string;
}

// Define columns

// Dummy patient data


export default function PatientGridPage() {
  const [data, setData] = useState<Patient[]>([]);
 

  return (
    <>
      <PatientTabs
        icon={<SearchCheck />}
        tabData={data.map((item) => ({
          ...item,
          icon: <SearchCheck />,
        }))}
      />
      <PatientDetail/>
      <SearchPatient setData={setData}/>

    </>
  );
}
