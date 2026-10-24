import type { Metadata } from "next";
import Visit from "@/components/home/Visit";
import SectionPager from "@/components/SectionPager";

export const metadata: Metadata = {
  title: "Visit Us",
  description: "Find Sahasra Pure Veg on Tirupati Road, Kattamanchi, Chittoor. Open every day, 6 AM to 10 PM.",
  alternates: { canonical: "/visit" },
};

export default function Page() {
  return (
    <>
      <Visit />
      <SectionPager current="/visit" />
    </>
  );
}
