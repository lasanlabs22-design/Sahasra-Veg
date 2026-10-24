import type { Metadata } from "next";
import MenuBook from "@/components/home/MenuBook";
import SectionPager from "@/components/SectionPager";

export const metadata: Metadata = {
  title: "Menu",
  description: "Flip through the Sahasra menu: idly, dosa, pesarattu, pongal, the signature Bangalore benne dosa, and South and North Indian meals.",
  alternates: { canonical: "/menu" },
};

export default function Page() {
  return (
    <>
      <MenuBook />
      <SectionPager current="/menu" />
    </>
  );
}
