// import AcmeLogo from '@/app/ui/acme-logo';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import MainTemplate from "./ui/component/module/main/MainTemplate";
import Layout from "./layout";

export default function Page({
  children,
}: //   params: { lang },
Readonly<{
  children: React.ReactNode;
  //   params: { lang: Locale };
}>) {
  //   const t = await getDictionary(lang);
  return (
    // These are Tailwind classes:
    // <main className="flex min-h-screen flex-col p-6">
    //   <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-100 p-4 md:h-52">
    // </div>
    // </main>
    <MainTemplate  t={"id"}>{children}</MainTemplate>
  );
}
