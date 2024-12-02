import MainTemplate from "../component/module/main/MainTemplate";
import { getDictionary, Locale } from "../dictionaries";

export default async function MainLayout({
  children,
//   params: { lang },
}: Readonly<{
  children: React.ReactNode;
//   params: { lang: Locale };
}>) {
//   const t = await getDictionary(lang);

  return <MainTemplate t={'id'}>{children}</MainTemplate>;
}
