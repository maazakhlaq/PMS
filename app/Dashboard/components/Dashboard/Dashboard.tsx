'use client'
import React, { useEffect, useState } from "react";
import PieCharts from "../chart/PieCharts";
import SearchFilter from "./SearchFilter";
 
 
import BarChart from "../chart/BarCharts";
import { FaTachometerAlt } from "react-icons/fa";
import { MdOutlineFilterAltOff, MdOutlineFilterAlt } from "react-icons/md";
import PatientLeaderboard from "./Leaderboard";

import CommonCard from "@/app/component/CommonCard";
import Button from "@/app/component/Button";

const Dashboard = () => {
   const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(true)
  const patientData = [
  { id: "1", name: "John Smith", age: 28, gender: "Male", department: "Cardiology", diagnosis: "Arrhythmia", year: "2023" },
  { id: "2", name: "Jane Doe", age: 34, gender: "Female", department: "Oncology", diagnosis: "Breast Cancer", year: "2022" },
  { id: "3", name: "Michael Johnson", age: 45, gender: "Male", department: "Neurology", diagnosis: "Migraine", year: "2021" },
  { id: "4", name: "Emily Davis", age: 29, gender: "Female", department: "Dermatology", diagnosis: "Eczema", year: "2023" },
  { id: "5", name: "William Brown", age: 52, gender: "Male", department: "Orthopedics", diagnosis: "Fracture", year: "2020" },
  { id: "6", name: "Olivia Wilson", age: 40, gender: "Female", department: "Cardiology", diagnosis: "Hypertension", year: "2021" },
  { id: "7", name: "James Taylor", age: 37, gender: "Male", department: "Oncology", diagnosis: "Leukemia", year: "2022" },
  { id: "8", name: "Sophia Martinez", age: 26, gender: "Female", department: "Neurology", diagnosis: "Epilepsy", year: "2023" },
  { id: "9", name: "Alexander Anderson", age: 31, gender: "Male", department: "Dermatology", diagnosis: "Psoriasis", year: "2022" },
  { id: "10", name: "Isabella Thomas", age: 35, gender: "Female", department: "Orthopedics", diagnosis: "Arthritis", year: "2021" },
  { id: "11", name: "Daniel Jackson", age: 47, gender: "Male", department: "Cardiology", diagnosis: "Heart Attack", year: "2020" },
  { id: "12", name: "Mia White", age: 22, gender: "Female", department: "Oncology", diagnosis: "Skin Cancer", year: "2023" },
  { id: "13", name: "Ethan Harris", age: 39, gender: "Male", department: "Neurology", diagnosis: "Stroke", year: "2022" },
  { id: "14", name: "Ava Martin", age: 30, gender: "Female", department: "Dermatology", diagnosis: "Acne", year: "2021" },
  { id: "15", name: "Matthew Thompson", age: 41, gender: "Male", department: "Orthopedics", diagnosis: "Back Pain", year: "2023" },
  { id: "16", name: "Charlotte Garcia", age: 33, gender: "Female", department: "Cardiology", diagnosis: "Arrhythmia", year: "2022" },
  { id: "17", name: "Benjamin Martinez", age: 38, gender: "Male", department: "Oncology", diagnosis: "Lymphoma", year: "2021" },
  { id: "18", name: "Amelia Robinson", age: 27, gender: "Female", department: "Neurology", diagnosis: "Migraine", year: "2023" },
  { id: "19", name: "Lucas Clark", age: 50, gender: "Male", department: "Dermatology", diagnosis: "Skin Rash", year: "2020" },
  { id: "20", name: "Harper Lewis", age: 29, gender: "Female", department: "Orthopedics", diagnosis: "Fracture", year: "2022" },
];



const dummyPatients = [
  {
    id: "P001",
    name: "Ali Khan",
    age: 32,
    gender: "Male",
    department: "Cardiology",
    diagnosis: "Heart Disease",
    year: 2023,
  },
  {
    id: "P002",
    name: "Aisha Ahmed",
    age: 45,
    gender: "Female",
    department: "Neurology",
    diagnosis: "Migraine",
    year: 2024,
  },
  {
    id: "P003",
    name: "Usman Ali",
    age: 29,
    gender: "Male",
    department: "Orthopedics",
    diagnosis: "Fracture",
    year: 2023,
  },
  {
    id: "P004",
    name: "Fatima Noor",
    age: 51,
    gender: "Female",
    department: "Cardiology",
    diagnosis: "Arrhythmia",
    year: 2024,
  },
  {
    id: "P005",
    name: "Ahmed Raza",
    age: 38,
    gender: "Male",
    department: "Dermatology",
    diagnosis: "Psoriasis",
    year: 2025,
  },
  {
    id: "P006",
    name: "Sara Imran",
    age: 27,
    gender: "Female",
    department: "Orthopedics",
    diagnosis: "Back Pain",
    year: 2023,
  },
];
const [rankBy, setRankBy] = useState<"age" | "year">("age");


const patientData1 = [
  { encounterType: "Outpatient", demographicGroup: "Adult Male" },
  { encounterType: "Emergency", demographicGroup: "Adult Female" },
  { encounterType: "Inpatient", demographicGroup: "Child" },
  { encounterType: "Outpatient", demographicGroup: "Adult Male" },
];

  return (
   <CommonCard
          icon={<FaTachometerAlt />}
          title="Dashboard"
           
        >
   
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 w-full ">
        <div className="w-full">
          <CommonCard  title="Patient Statistics Overview"  >
            <BarChart data={patientData} />
          </CommonCard>
        </div>
 <div className="w-full">
          <CommonCard title="Encounter & Demographic Insights"  >
            <PieCharts data={patientData1} />
          </CommonCard>
        </div>
        <div  >
          <CommonCard className="" title="Patient Leaderboard"  >
              
      {/* Toggle Buttons */}
      <div className="flex gap-2 mb-4">
       <Button
    varient={rankBy === "age" ? "primary" : "secondary"}
    onClick={() => setRankBy("age")}
  >
    Rank by Age
  </Button>

  <Button
    varient={rankBy === "year" ? "primary" : "secondary"}
    onClick={() => setRankBy("year")}
  >
    Rank by Year
  </Button>
      </div>

      {/* Leaderboard Component */}
      <PatientLeaderboard data={patientData} rankBy={rankBy} />
     
          </CommonCard>
        </div>

        <div  >
          <CommonCard
            icon={
              <div className="flex items-center">
                <div
                  className="cursor-pointer border-b-2 border-b-borderInput"
                  onClick={() => setShowFilters(prev => !prev)}
                  title={showFilters ? "Hide Search & Filter" : "Show Search & Filter"}
                >
                  {showFilters ? (
                    <MdOutlineFilterAltOff className="mr-2 text-blue-400" />
                  ) : (
                    <MdOutlineFilterAlt className="mr-2 text-blue-400" />
                  )}
                </div>
                <span className="ml-2">Search & Filter Patients</span>
              </div>
            }
           
          >
            <SearchFilter data={patientData} showFilters={showFilters} />
          </CommonCard>
        </div>

       
      </div>
 </CommonCard>

  );
};

export default Dashboard;
