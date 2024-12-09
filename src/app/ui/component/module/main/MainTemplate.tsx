"use client";

import React, { useState } from "react";
import {
  CalendarDaysIcon,
  HomeIcon,
  BanknotesIcon,
  ChatBubbleLeftRightIcon,
  NewspaperIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { getInitials } from "@/utils";
import Header from "./Header";
import MobileBarDialog from "./MobileBarDialog";
import SideBar from "./Sidebar";

interface MainTemplateProps {
  t: any;
  children: React.ReactNode;
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    {
      name: "dashboard",
      href: `/dashboard`,
      icon: HomeIcon,
      current: true,
    },
    {
      name: "monitoring",
      href: `/monitoring`,
      icon: ChatBubbleLeftRightIcon,
      current: false,
    },
  ];
  const teams = [
    {
      id: 1,
      name: "manager",
      href: `/manager`,
      initial: getInitials("mg"),
      current: false,
    },

  ];
  const userNavigation = [{ name: "Keluar", href: "#" }];

  return (
    <div>
      {/* Mobile mode */}
      <MobileBarDialog
        navigationAdmin={teams}
        navigations={navigation}
        onClose={setSidebarOpen}
        open={sidebarOpen}
      />

      {/* Static sidebar for desktop */}
      <SideBar navigationAdmin={teams} navigations={navigation} t={" "} />
      {/* <SideBar /> */}

      <div className="lg:pl-72 bg-gray-50 h-screen">
        <Header navigations={userNavigation} onClose={setSidebarOpen} t={" "} />

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default MainTemplate;
