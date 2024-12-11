"use client";

import PrimaryTable from "../ui/component/table/PrimaryTable";
import { useState, useEffect } from "react";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";

const data = [
  {
    timestamp: "4/02/2024, 10.10P.M",
    temperature: "40°C",
    light: "20W",
    humidity: "15%",
    ph: "7,6",
  },
  {
    timestamp: "4/02/2024, 10.15P.M",
    temperature: "35°C",
    light: "30W",
    humidity: "17%",
    ph: "7,2",
  },
  {
    timestamp: "4/02/2024, 10.20P.M",
    temperature: "28°C",
    light: "30W",
    humidity: "20%",
    ph: "6,5",
  },
  {
    timestamp: "4/02/2024, 10.25P.M",
    temperature: "25°C",
    light: "15W",
    humidity: "18%",
    ph: "6,7",
  },
  {
    timestamp: "4/02/2024, 10.30P.M",
    temperature: "27°C",
    light: "15W",
    humidity: "15%",
    ph: "6,8",
  },
  {
    timestamp: "4/02/2024, 10.35P.M",
    temperature: "23°C",
    light: "10W",
    humidity: "16%",
    ph: "7,0",
  },
  {
    timestamp: "4/02/2024, 10.40P.M",
    temperature: "30°C",
    light: "30W",
    humidity: "25%",
    ph: "5,8",
  },
  {
    timestamp: "4/02/2024, 10.45P.M",
    temperature: "31°C",
    light: "25W",
    humidity: "35%",
    ph: "6,2",
  },
  {
    timestamp: "4/02/2024, 10.50P.M",
    temperature: "32°C",
    light: "30W",
    humidity: "25%",
    ph: "6,6",
  },
];

const columns = [
  { accessorKey: "timestamp", header: "Timestamp" },
  { accessorKey: "temperature", header: "Temperatur" },
  { accessorKey: "light", header: "Intensitas Cahaya" },
  { accessorKey: "humidity", header: "Humidity" },
  { accessorKey: "ph", header: "PH Tanah" },
];

const Monitoring = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // State to trigger re-renders if necessary
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures hydration only after the client is ready
  }, []);

  // Render placeholder during hydration
  //  if (!isClient) {
  //    return <div>Loading...</div>;
  //  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Data Monitoring</h1>
      <p className="text-gray-500">Here is a list of all employees</p>
      <div className="mt-4 overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                <th className="border border-gray-300 px-4 py-2">
                  <input type="checkbox" />
                </th>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border border-gray-300 px-4 py-2 text-left text-gray-700"
                  >
                    {/* {header.isPlaceholder ? null : header.column.columnDef.header?} */}
                    {header.isPlaceholder
                      ? null
                      : typeof header.column.columnDef.header === "string"
                      ? header.column.columnDef.header
                      : null}{" "}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                <td className="border border-gray-300 px-4 py-2">
                  <input type="checkbox" />
                </td>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border border-gray-300 px-4 py-2"
                  >
                    {cell.getValue() as string}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Monitoring;
