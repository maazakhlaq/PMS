'use client'
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import CommonRadioButton from "../CommonComponents/Button";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// ✅ Patient data interface
interface Patient {
  id: string;
  name: string;
  age: number;
  gender: "Male" | "Female";
  department: string;
  diagnosis: string;
  year: number; // year of admission or registration
}

// ✅ Props interface
interface PatientBarChartProps {
  data: any;
}

const PatientBarChart: React.FC<PatientBarChartProps> = ({ data }) => {
  const [view, setView] = useState<"year" | "department" | "gender">("year");

  // --- Distinct years ---
  const years = [...new Set(data.map((p:any) => p.year))];

  // --- Patients per year ---
  const patientsPerYear = years.map(
    (year) => data.filter((p:any) => p.year === year).length
  );

  // --- Departments ---
  const departments = [...new Set(data.map((p:any) => p.department))];
  const patientsPerDepartment = departments.map(
    (dept) => data.filter((p:any) => p.department === dept).length
  );

  // --- Gender distribution ---
  const maleCount = data.filter((p:any) => p.gender === "Male").length;
  const femaleCount = data.filter((p:any) => p.gender === "Female").length;

  // --- Chart data ---
  const chartData: ChartData<"bar"> = {
    labels:
      view === "year"
        ? years
        : view === "department"
        ? departments
        : ["Male", "Female"],
    datasets: [
      {
        label:
          view === "year"
            ? "Patients per Year"
            : view === "department"
            ? "Patients per Department"
            : "Patients by Gender",
        data:
          view === "year"
            ? patientsPerYear
            : view === "department"
            ? patientsPerDepartment
            : [maleCount, femaleCount],
        backgroundColor:
          view === "gender"
            ? ["rgba(54,162,235,0.6)", "rgba(255,99,132,0.6)"]
            : "rgba(75,192,192,0.6)",
        borderColor:
          view === "gender"
            ? ["rgba(54,162,235,1)", "rgba(255,99,132,1)"]
            : "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  // --- Chart options ---
  const options: ChartOptions<"bar"> = {
    responsive: true,
    scales: {
      x: {
        title: { display: true, text: "Category" },
      },
      y: {
        title: { display: true, text: "Number of Patients" },
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        
        font: { size: 18, weight: "bold" },
      },
      legend: { display: false },
    },
  };

  return (
    <div>
      <div className="flex justify-between  items-center mb-4">
        <div className="flex gap-2">
          <CommonRadioButton
            label="By Year"
            checked={view === "year"}
            onClick={() => setView("year")}
          />
          <CommonRadioButton
            label="By Department"
            checked={view === "department"}
            onClick={() => setView("department")}
          />
          <CommonRadioButton
            label="By Gender"
            checked={view === "gender"}
            onClick={() => setView("gender")}
          />
        </div>
        <h3 className="text-center text-xl font-semibold">
          {options.plugins?.title?.text as string}
        </h3>
      </div>

      <Bar data={chartData} options={options} />
    </div>
  );
};

export default PatientBarChart;
