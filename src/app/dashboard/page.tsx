"use client";

import MainTemplate from "../ui/component/module/main/MainTemplate";
import CeremonyCard from "../ui/component/card/CeremonyCard";
import Images from "@/constant/images";
import NotesCard from "../ui/component/card/NotesCard";
import { useEffect, useState } from "react";
import axios from "axios";

//Dummy Data
export const defaultData = [
  {
    icon: Images.icTimestamp,
    title: "Timestamp",
    label: "4/02/2024,10.00P.M",
    status: "Normal",
    bgIcon: Images.icBgTimestamp,
  },
  {
    icon: Images.icTemperatur,
    title: "Temperatur",
    label: "23 C",
    status: "Normal",
    bgIcon: Images.icBgTemperatur,
  },
  {
    icon: Images.icKelembapan,
    title: "Kelembapan",
    label: "15/72 mmhg",
    status: "Normal",
    bgIcon: Images.icBgKelembapan,
  },
  {
    icon: Images.icPhTanah,
    title: "PH Tanah",
    label: "7,6",
    status: "Normal",
    bgIcon: Images.icBgPhTanah,
  },
];

interface DashboardData {
  icon: string;
  title: string;
  label: string;
  status: string;
  bgIcon: string;
}

interface NotesData {
  notes: string;
}

const notesData = [
  {
    notes: `
  1. Bayam harus disiram setiap hari (kelembapan tanah < 50%)
  2. Pemantauan Suhu dan Kelembapan Udara (suhu 18–24°C dengan kelembapan udara antara 60–80%)
  3. Pemupukan Otomatis (bayam idealnya tumbuh di tanah dengan pH 6-7)
      `,
  },
];

export default function Dashboard() {
  // const [defaultData] = useState<>
  const [data, setData] = useState<DashboardData[]>([]);
  const [notesData, setNotesData] = useState<NotesData[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/dashboard")
      .then((response) => {
        setData(response.data);
        setNotesData([]);
      })
      .catch((error) => {
        console.error("Failed to fetch dashboard data:", error);
      });
  }, []);

  return (
    <MainTemplate>
      <div>
        <h1 className="font-bold text-xl">
          Selamat Datang di Sistem Monitoring Bayam
        </h1>
        <p className="text-gray-500">Lihat statistik bayam disini</p>
      </div>

      <div className="flex flex-row space-x-6 overflow-x-scroll w-full no-scrollbar mt-4">
        {data.length === 0 && (
          <>
            {defaultData.map((item, index) => (
              <CeremonyCard
                key={index}
                icon={item.icon}
                title={item.title}
                label={item.label}
                status={item.status}
                bgIcon={item.bgIcon}
              />
            ))}
          </>
        )}
        {data.map((item, index) => (
          <CeremonyCard
            key={index}
            icon={item.icon || ""}
            title={item.title || "Judul"}
            label={item.label || "Label"}
            status={item.status || "Normal"}
            bgIcon={item.bgIcon}
          />
        ))}
        {/* <CeremonyCard >

        </CeremonyCard> */}
      </div>
      <div>
        <NotesCard notes={notesData[0]?.notes || " "}></NotesCard>
      </div>
    </MainTemplate>
  );
}
