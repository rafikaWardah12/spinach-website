import Images from "@/constant/images";
import Image from "next/image";
import React from "react";

interface CeremonyCardProps {
  icon: string;
  title: string;
  label: string;
  status: string;
  bgIcon: string;
}

const CeremonyCard: React.FC<CeremonyCardProps> = ({
  icon,
  title,
  label,
  status,
  bgIcon,
}) => {
  return (
    <div className="bg-white rounded-xl mx-auto my-4 hover:bg-yellow-50 hover:cursor-pointer flex-shrink-0 shadow-md">
      <div className="px-4 pt-4">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-yellow-500 bg-yellow-100 p-4 rounded-3xl font-bold flex items-center">
            <Image src={icon} alt="Icon" className="w-10 h-10" width={300} height={300} />
          </div>
          <h4 className="text-xl font-semibold text-gray-700">{title}</h4>
        </div>

        {/* Label Section */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-700">{label}</h2>
        </div>

        {/* Status Section */}
        <div className="flex justify-start mb-4">
          <div className="bg-yellow-100 w-32 h-12 rounded-xl flex items-center pl-4">
            <p className="text-lg font-semibold text-gray-700">{status}</p>
          </div>
        </div>

        {/* Grafik / Background Icon Section */}
        <div className="flex items-center justify-center mb-4">
          <Image src={bgIcon} alt="Background Icon" className="w-15 h-15 object-contain" width={250} height={250} />
        </div>
      </div>
    </div>
  );
};

export default CeremonyCard;
