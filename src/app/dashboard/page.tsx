import Link from "next/link";
import { getDictionary, Locale } from "../ui/dictionaries";
import SideBar from "../ui/component/module/main/Sidebar";
import CeremonyCard from "../ui/component/card/CeremonyCard";
import Images from "@/constant/images";
import NotesCard from "../ui/component/card/NotesCard";
// import TransactionChart from "@/components/chart/TransactionChart";

// const data = [{}, {}, {}, {}, {}];
// const data = [{}, {}, {}, {}, {}];

const data = [
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
    icon: Images.icIntensitasCahaya,
    title: "Intensitas Cahaya",
    label: "20 w",
    status: "Normal",
    bgIcon: Images.icBgIntensitasCahaya,
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

const notesData = [
  {
    notes: `
  1. Bayam harus disiram setiap hari (kelembapan tanah < 50%)
  2. Pemantauan Suhu dan Kelembapan Udara (suhu 18–24°C dengan kelembapan udara antara 60–80%)
  3. Penerangan (cahaya matahari langsung sekitar 6 jam sehari)
  4. Pemupukan Otomatis (bayam idealnya tumbuh di tanah dengan pH 6-7)
      `,
  },
];

export default function Dashboard({}: {}) {
  return (
    <div>
      {/* <SideBar navigationAdmin={[]} navigations={[]} t={" "} /> */}
      <div>
        <h1 className="font-bold text-xl">
          Selamat Datang di Sisten Monitoring Bayam
        </h1>
        <p className="text-gray-500">Lihat statistik bayam disini</p>
      </div>

      <div className="flex flex-row space-x-6 overflow-x-scroll w-full no-scrollbar mt-4">
        {data.map((item, index) => (
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
        <NotesCard notes={notesData[0].notes}></NotesCard>
      </div>
    </div>
  );
}
