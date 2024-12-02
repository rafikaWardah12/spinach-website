import Images from "@/constant/images";
import React from "react";
import Image from "next/image";

interface LoginFormProps {
  t: any;
}

const LogoWithTitle = ({ }: LoginFormProps) => {
  return (
    <div className="flex h-20 shrink-0 items-center space-x-4">
      <Image src={Images.ic} alt={" Dashboard "} width={80} height={80} />
      <p className="font-bold">{" Dashboard "}</p>
    </div>
  );
};

export default LogoWithTitle;
