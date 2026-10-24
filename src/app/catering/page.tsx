import type { Metadata } from "next";
import Catering from "@/components/home/Catering";
import SectionPager from "@/components/SectionPager";

export const metadata: Metadata = {
  title: "Catering",
  description: "Pure vegetarian catering in and around Chittoor for weddings, housewarmings, poojas and events. Call or WhatsApp to book.",
  alternates: { canonical: "/catering" },
};

export default function Page() {
  return (
    <>
      <Catering />
      <SectionPager current="/catering" />
    </>
  );
}
