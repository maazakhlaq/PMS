"use client";

import Button from "@/app/component/Button";

import CommonSearch from "@/app/component/CommonSearch";
import CommonDataGrid from "@/app/component/DataGrid";

import { ColumnDef } from "@tanstack/react-table";
import { SearchCheck } from "lucide-react";
import { useState } from "react";

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
const dummyPatients: Patient[] = [
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
];

function SearchPatient({ setData }: any) {
  const columns: ColumnDef<Patient>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "gender", header: "Gender" },
    { accessorKey: "age", header: "Age" },
    { accessorKey: "phone", header: "Phone" },
    { accessorKey: "city", header: "City" },
    { accessorKey: "status", header: "Status" },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Button
            varient="primary"
            onClick={() =>
              setData((data: any) => [...data,  row.original ])
            }
          >
            Edit
          </Button>
          <Button
            varient="danger"
            onClick={() => alert(`Delete ${row.original.name}`)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="flex flex-col mt-1 rounded-md border border-border mx-2 shadow-md  ">
        {/* Header */}
        <div
          className={`flex flex-col sm:flex-row bg-primary items-center border-purple-600
    border-b-2 text-sm mb-1 text-white font-semibold p-[0.7px] gap-2 sm:gap-4`}
        >
          <div className="flex items-center w-full sm:w-auto">
            <SearchCheck />
            <div className="ml-1 whitespace-nowrap">Search Patient</div>
          </div>

          <CommonSearch placeholder="Search Patient Here..." />
        </div>

        <CommonDataGrid
          columns={columns}
          data={dummyPatients}
          initialPageSize={5}
          maxHeight="400px"
        />
      </div>
    </>
  );
}

export default SearchPatient;
