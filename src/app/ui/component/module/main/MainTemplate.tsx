"use client";

import React, { useEffect, useState } from "react";
import { HomeIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { getInitials } from "@/utils";
import Header from "./Header";
import MobileBarDialog from "./MobileBarDialog";
import SideBar from "./Sidebar";
import axios from "axios";
import { log } from "console";

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [onPump, setPump] = useState(false);

  const navigation = [
    {
      name: "Dashboard",
      href: `/`,
      icon: HomeIcon,
      current: true,
    },
    {
      name: "Monitoring",
      href: `/monitoring`,
      icon: ChatBubbleLeftRightIcon,
      current: false,
    },
  ];
  const teams = [
    {
      id: 1,
      name: "Manager",
      href: `/manager`,
      initial: getInitials("mg"),
      current: false,
    },
  ];
  const userNavigation = [{ name: "Keluar", href: "#" }];

  return (
    <div className="h-screen flex">
      {/* Mobile mode */}
      <MobileBarDialog
        navigationAdmin={teams}
        navigations={navigation}
        onClose={setSidebarOpen}
        open={sidebarOpen}
        onPump={setPump}
      />

      {/* Static sidebar for desktop */}
      <SideBar navigationAdmin={teams} navigations={navigation} t={" "} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col bg-gray-50 lg:pl-72">
        <Header
          navigations={userNavigation}
          onClose={setSidebarOpen}
          t={" "}
          onPump={setPump}
        />
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default MainTemplate;
