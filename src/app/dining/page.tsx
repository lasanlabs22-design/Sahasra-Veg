import type { Metadata } from "next";
import Dining from "@/components/home/Dining";
import SectionPager from "@/components/SectionPager";

export const metadata: Metadata = {
  title: "Dining",
  description: "Self service for a quick bite or fine dining for a long, relaxed meal at Sahasra Pure Veg, Chittoor.",
  alternates: { canonical: "/dining" },
};

export default function Page() {
  return (
    <>
      <Dining />
      <SectionPager current="/dining" />
    </>
  );
}
