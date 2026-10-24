import Catering from "@/components/home/Catering";
import Dining from "@/components/home/Dining";
import FunctionHall from "@/components/home/FunctionHall";
import Hero from "@/components/home/Hero";
import MenuBook from "@/components/home/MenuBook";
import Story from "@/components/home/Story";
import Visit from "@/components/home/Visit";
import SectionDots from "@/components/SectionDots";

// Everything lives on the home page: each section is one screen and scrolling snaps between them.
export default function Home() {
  return (
    <>
      <Hero />
      <MenuBook />
      <Dining />
      <Story />
      <FunctionHall />
      <Catering />
      <Visit />
      <SectionDots />
    </>
  );
}
