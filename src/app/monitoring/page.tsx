"use client";

import { useState, useEffect } from "react";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import MainTemplate from "../ui/component/module/main/MainTemplate"; // Import MainTemplate
import axios from "axios";

const data = [
  {
    timestamp: "4/02/2024, 10.10P.M",
    suhu: "40°C",
    kelembapan: "15%",
    phTanah: "7,6",
  },
  {
    timestamp: "4/02/2024, 10.15P.M",
    suhu: "35°C",
    kelembapan: "17%",
    phTanah: "7,2",
  },
  {
    timestamp: "4/02/2024, 10.20P.M",
    suhu: "28°C",
    kelembapan: "20%",
    phTanah: "6,5",
  },
  {
    timestamp: "4/02/2024, 10.25P.M",
    suhu: "25°C",
    kelembapan: "18%",
    phTanah: "6,7",
  },
  {
    timestamp: "4/02/2024, 10.30P.M",
    suhu: "27°C",
    kelembapan: "15%",
    phTanah: "6,8",
  },
  {
    timestamp: "4/02/2024, 10.35P.M",
    suhu: "23°C",
    kelembapan: "16%",
    phTanah: "7,0",
  },
  {
    timestamp: "4/02/2024, 10.40P.M",
    suhu: "30°C",
    kelembapan: "25%",
    phTanah: "5,8",
  },
  {
    timestamp: "4/02/2024, 10.45P.M",
    suhu: "31°C",
    kelembapan: "35%",
    phTanah: "6,2",
  },
  {
    timestamp: "4/02/2024, 10.50P.M",
    suhu: "32°C",
    kelembapan: "25%",
    phTanah: "6,6",
  },
];

const columns = [
  { accessorKey: "timestamp", header: "Timestamp" },
  { accessorKey: "suhu", header: "Temperatur" },
  { accessorKey: "kelembapan", header: "Kelembapan" },
  { accessorKey: "phTanah", header: "PH Tanah" },
];

interface MonitoringData {
  timeStamp: string;
  suhu: string;
  kelembapan: string;
  phTanah: string;
}

const Monitoring = () => {
  const [tableData, setTableData] = useState<MonitoringData[]>([]);

  const getData = () => {
    axios
      .get("http://localhost:3000/api/monitoring")
      .then((response) => {
        console.log(response.data);
        setTableData(response.data);

        // Format each timestamp in the response data
        const formattedData = response.data.map((item: MonitoringData) => {
          const formattedTimestamp = new Date(item.timeStamp).toLocaleString(
            "en-GB",
            {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            }
          );
          return { ...item, timestamp: formattedTimestamp };
        });
        setTableData(formattedData);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });
  };
  useEffect(() => {
    getData();
    setInterval(() => {
      getData();
    }, 5000);
  }, []);

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <MainTemplate>
      {" "}
      {/* Wrap the content with MainTemplate for sidebar */}
      <div className="p-4">
        <h1 className="text-xl font-bold">Data Monitoring</h1>
        <p className="text-gray-500">Inilah semua data monitoring</p>
        <div className="mt-4 overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  <th className="border border-gray-300 px-4 py-2">
                    <h2 className="text-start">No</h2>
                  </th>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="border border-gray-300 px-4 py-2 text-left text-gray-700"
                    >
                      {header.isPlaceholder
                        ? null
                        : typeof header.column.columnDef.header === "string"
                        ? header.column.columnDef.header
                        : null}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row, index) => (
                <tr key={row.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {index + 1}
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
    </MainTemplate>
  );
};

export default Monitoring;
