"use client";
import { setActiveTab } from "@/app/lib/redux/slices/patientSlice";
import { RootState } from "@/app/lib/redux/store";
import { useSelector, useDispatch } from "react-redux";
 
const tabs = [
  "Demographic",
  "Encounter",
  "Vitals",
  "Allergies",
  "Medications",
  "Diagnosis",
  "Labs",
  "Imaging",
  "Notes",
  "Billing",
  "Summary",
];

export default function PatientDetail() {
  const dispatch = useDispatch();
  const { activeTab, patients, selectedPatient } = useSelector(
    (state: RootState) => state.patients
  );

  return (
    <div>
      <div className="flex gap-2 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => dispatch(setActiveTab(tab))}
            className={`px-3 py-1 rounded ${
              activeTab === tab ? "bg-purple-600 text-white" : "bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">{activeTab} Info</h3>
         
      </div>
    </div>
  );
}
