'use client'
import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import CommonRadioButton from "../CommonComponents/Button";

interface PatientData {
  encounterType: string;
  demographicGroup: string;
}

interface PatientPieChartProps {
  data: PatientData[];
}

const PatientPieChart: React.FC<PatientPieChartProps> = ({ data }) => {
  const [view, setView] = useState<"encounter" | "demographic">("encounter");

  // Count occurrences of each category
  const countOccurrences = (items: string[]) => {
    const counts: Record<string, number> = {};
    items.forEach((item) => {
      counts[item] = (counts[item] || 0) + 1;
    });
    return counts;
  };

  // Extract data
  const allEncounters = data.map((p) => p.encounterType);
  const allDemographics = data.map((p) => p.demographicGroup);

  // Count
  const encounterCounts = countOccurrences(allEncounters);
  const demographicCounts = countOccurrences(allDemographics);

  const colors = [
    "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0",
    "#9966FF", "#FF9F40", "#8A2BE2", "#00FF7F", "#E7E9ED"
  ];

  // Chart Data
  const encounterData = {
    labels: Object.keys(encounterCounts),
    datasets: [
      {
        data: Object.values(encounterCounts),
        backgroundColor: colors,
      },
    ],
  };

  const demographicData = {
    labels: Object.keys(demographicCounts),
    datasets: [
      {
        data: Object.values(demographicCounts),
        backgroundColor: colors,
      },
    ],
  };

  const options = {
    layout: {
      padding: {
        top: 20,
        bottom: 45,
        left: -10,
        right: 15,
      },
    },
    plugins: {
      title: {
        display: true,
        text:
          view === "encounter"
            ? "Encounter Insights"
            : "Demographic Insights",
        font: {
          size: 18,
          weight: "bold" as const,
          family: "Arial",
        },
        padding: { top: 15, bottom: 15 },
      },
      legend: {
        position: "left" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 25,
          color: "rgba(0, 0, 0, 0.87)",
          font: {
            size: 14,
            family: "Arial",
            weight: "normal" as const,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          <CommonRadioButton
            label="Encounter  "
            checked={view === "encounter"}
            onClick={() => setView("encounter")}
          />
          <CommonRadioButton
            label="Demographic  "
            checked={view === "demographic"}
            onClick={() => setView("demographic")}
          />
        </div>
         
      </div>

      <div className="h-[275px]">
        <Pie
          data={view === "encounter" ? encounterData : demographicData}
          options={options}
        />
      </div>
    </div>
  );
};

export default PatientPieChart;
