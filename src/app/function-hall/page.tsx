import type { Metadata } from "next";
import FunctionHall from "@/components/home/FunctionHall";
import SectionPager from "@/components/SectionPager";

export const metadata: Metadata = {
  title: "Function Hall",
  description: "A 75-seat air-conditioned function hall in Chittoor for birthdays, engagements and family functions, with pure vegetarian menus.",
  alternates: { canonical: "/function-hall" },
};

export default function Page() {
  return (
    <>
      <FunctionHall />
      <SectionPager current="/function-hall" />
    </>
  );
}
