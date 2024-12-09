import Images from "@/constant/images";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

interface CeremonyCardProps{
  icon: string;
  title: string;
  label: string;
  status: string;
  bgIcon: string
}

const CeremonyCard: React.FC<CeremonyCardProps> = ({
  icon,
  title,
  label,
  status,
  bgIcon
}) => {
  return (
    <div className="bg-white rounded-xl mx-auto my-4 hover:bg-yellow-50 hover:cursor-pointer flex-shrink-0 shadow-md">
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm text-yellow-500 bg-yellow-100 py-4 px-6 rounded-3xl  font-bold flex flex-row items-center py-50">
            <Image
              src={icon}
              alt=""
              className="w-8"
              width={300}
              height={300}
            />
          </div>
          <h4 className="text-xl font-semibold text-gray-700">{title}</h4>
        </div>
        <div className="mb-2 pt-4">
          <h2 className="text-lg font-semibold text-gray-700">
            {label}
          </h2>
        </div>
        <div className="flex justify-items-center mb-2">
          <div className="bg-yellow-100 px-5 pt-5 rounded-xl text-justify">
            <p className="text-lg font-semibold text-gray-700 flex items-center">{status}</p>
          </div>
        </div>
        <div className="flex items-start">
          <Image
          src={bgIcon}
          alt=""
          className="w-15"
          width={250}
          height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default CeremonyCard;
