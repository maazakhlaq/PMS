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
  const { activeTab } = useSelector(
    (state: RootState) => state.patients
  );

  return (
    <div>
      <div className="flex gap-2 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => dispatch(setActiveTab(tab))}
            className={`px-3 text-sm  font-medium  ml-2 py-1 shadow mt-2 rounded ${
              activeTab === tab ? 'bg-slate-100':'bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <h3 className="text-base font-semibold">{activeTab} Info</h3>
         
      </div>
    </div>  
  );
}
