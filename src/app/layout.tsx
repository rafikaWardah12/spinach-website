import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/app/ui/global.css";
import Main from "./ui/main";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spinach Monitoring",
  description: "Admin Panel Spinach Monitoring",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Main params={{ className: plusJakartaSans.className }}>{children}</Main>
  );
}
