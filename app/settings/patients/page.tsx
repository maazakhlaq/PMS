"use client";

import { useState } from "react";
import CommonCard from "../../component/CommonCard";
import { SearchCheck } from "lucide-react";
import Button from "@/app/component/Button";
import CommonLink from "@/app/component/CommonLink";
 import { ColumnDef } from "@tanstack/react-table";
import CommonDataGrid from "@/app/component/DataGrid";

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
        <Button varient="primary" onClick={() => alert(`Edit ${row.original.name}`)}>
          Edit
        </Button>
        <Button varient="danger" onClick={() => alert(`Delete ${row.original.name}`)}>
          Delete
        </Button>
      </div>
    ),
  },
];

// Dummy patient data
const dummyPatients: Patient[] = [
  { id: 1, name: "Ahmed Khan", gender: "Male", age: 35, phone: "055-123-4567", city: "Riyadh", status: "Active" },
  { id: 2, name: "Fatima Ali", gender: "Female", age: 29, phone: "056-234-5678", city: "Jeddah", status: "Inactive" },
  { id: 3, name: "Omar Hassan", gender: "Male", age: 42, phone: "057-345-6789", city: "Dammam", status: "Active" },
  { id: 4, name: "Sara Ahmed", gender: "Female", age: 31, phone: "058-456-7890", city: "Makkah", status: "Active" },
];

export default function PatientGridPage() {
  const [data] = useState<Patient[]>(dummyPatients);

  return (
    <CommonCard
      icon={<SearchCheck />}
      button={
        <CommonLink
          varient="primary"
          href="/settings/patients/create"
          title="Create Patient"
        />
      }
      title="Search Patient"
    >
      <div className="">
        <CommonDataGrid columns={columns} data={data} initialPageSize={5} maxHeight="400px" />
      </div>
    </CommonCard>
  );
}
