"use client";

import MainTemplate from "@/app/ui/component/module/main/MainTemplate";
import CeremonyCard from "@/app/ui/component/card/CeremonyCard";
import Images from "@/constant/images";
import NotesCard from "@/app/ui/component/card/NotesCard";
import { useEffect, useMemo, useState } from "react";
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
    icon: Images.icIntensitasCahaya,
    title: "Intensitas Cahaya",
    label: "20 w",
    status: "Normal",
    bgIcon: Images.icBgIntensitasCahaya,
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

const notesData = [
  {
    notes: `
  1. Bayam harus disiram setiap hari (kelembapan tanah < 50%)
  2. Pemantauan Suhu dan Kelembapan Udara (suhu 18–24°C dengan kelembapan udara antara 60–80%)
  3. Pemupukan Otomatis (bayam idealnya tumbuh di tanah dengan pH 6-7)
      `,
  },
];

const dummyFunc = () => {
  // complicated proccess
  return "hehe";
};

export default function Dashboard() {
  const [data, setData] = useState<DashboardData[]>([]);

  const getData = () => {
    axios
      .get("/api/dashboard")
      .then((response) => {
        console.log(response.data);
        //indexs Terakhir di API
        const lastItem = response.data;

        // Format timestamp
        const formattedTimestamp = new Date(lastItem.timeStamp).toLocaleString(
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

        // Transform JSON ke dashboard
        const transformedData: DashboardData[] = [
          {
            icon: Images.icTimestamp,
            title: "Timestamp",
            label: formattedTimestamp || "Timestamp not found",
            status: "Normal",
            bgIcon: Images.icBgTimestamp,
          },
          {
            icon: Images.icTemperatur,
            title: "Temperatur",
            label: `${lastItem.suhu || "Temperatur not found"} C`,
            status: "Normal",
            bgIcon: Images.icBgTemperatur,
          },
          {
            icon: Images.icKelembapan,
            title: "Kelembapan",
            label: `${lastItem.kelembapan || "Kelembapan not found"} mmHg`,
            status: "Normal",
            bgIcon: Images.icBgKelembapan,
          },
          {
            icon: Images.icPhTanah,
            title: "PH Tanah",
            label: lastItem.phTanah || "PH Tanah not found",
            status: "Normal",
            bgIcon: Images.icBgPhTanah,
          },
        ];

        setData(transformedData);
      })
      .catch((error) => {
        console.error("Failed to fetch dashboard data:", error);
      });
  };

  useEffect(() => {
    getData();
    let interval = setInterval(() => {
      getData();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const memoData = useMemo(
    () => (data.length > 0 ? data : defaultData),
    [data]
  );

  return (
    <MainTemplate>
      <div>
        <h1 className="font-bold text-xl">
          Selamat Datang di Sistem Monitoring Bayam
        </h1>
        <p className="text-gray-500">Lihat statistik bayam disini</p>
      </div>

      <div className="flex flex-row space-x-6 overflow-x-scroll w-full no-scrollbar mt-4">
        {memoData.map((item, index) => (
          <CeremonyCard
            key={index}
            icon={item.icon}
            title={item.title}
            label={item.label}
            status={item.status}
            bgIcon={item.bgIcon}
          />
        ))}
      </div>
      <div>
        <NotesCard notes={notesData[0]?.notes || " "}></NotesCard>
      </div>
      <div>
      </div>
    </MainTemplate>
  );
}
