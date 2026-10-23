import Breakfast from "@/components/home/Breakfast";
import Catering from "@/components/home/Catering";
import Dining from "@/components/home/Dining";
import FunctionHall from "@/components/home/FunctionHall";
import Hero from "@/components/home/Hero";
import Lunch from "@/components/home/Lunch";
import Signature from "@/components/home/Signature";
import Story from "@/components/home/Story";
import Visit from "@/components/home/Visit";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Breakfast />
      <Signature />
      <Lunch />
      <Dining />
      <FunctionHall />
      <Catering />
      <Visit />
    </>
  );
}
