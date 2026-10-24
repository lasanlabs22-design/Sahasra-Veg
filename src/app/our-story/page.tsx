import type { Metadata } from "next";
import Story from "@/components/home/Story";
import SectionPager from "@/components/SectionPager";

export const metadata: Metadata = {
  title: "Our Story",
  description: "How a pure vegetarian kitchen in Chittoor brings together the food of Andhra Pradesh, Tamil Nadu and Karnataka.",
  alternates: { canonical: "/our-story" },
};

export default function Page() {
  return (
    <>
      <Story />
      <SectionPager current="/our-story" />
    </>
  );
}
