import type { StaticImageData } from "next/image";
import benneDosa from "@/assets/photos/benne-dosa.jpg";
import chandragiri from "@/assets/photos/chandragiri.jpg";
import dosa from "@/assets/photos/dosa.jpg";
import fineDining from "@/assets/photos/fine-dining.jpg";
import functionHall from "@/assets/photos/function-hall.jpg";
import heroThali from "@/assets/photos/hero-andhra-thali.jpg";
import idli from "@/assets/photos/idli.jpg";
import kalamkari from "@/assets/photos/kalamkari.jpg";
import northThali from "@/assets/photos/north-indian-thali.jpg";
import pesarattu from "@/assets/photos/pesarattu.jpg";
import pongal from "@/assets/photos/pongal.jpg";
import southMeals from "@/assets/photos/south-indian-meals.jpg";

type Photo = {
  src: StaticImageData;
  alt: string;
  usedFor: string;
  title: string;
  author: string;
  license: string;
  licenseUrl: string;
  source: string;
};

// All photos are from Wikimedia Commons under the licences listed, resized for the web.
// Credits are published on /photo-credits as the licences require.
export const photos = {
  heroThali: {
    src: heroThali,
    alt: "A vegetarian Andhra meal served in a brass thali with rice, curries, chutneys and sweets",
    usedFor: "Home page hero",
    title: "Vegetarian Andhra Meal",
    author: "PriyaBooks",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    source: "https://commons.wikimedia.org/wiki/File:Vegetarian_Andhra_Meal.jpg",
  },
  idli: {
    src: idli,
    alt: "Soft idly and medu vada on a banana leaf with sambar and coconut chutney",
    usedFor: "Breakfast: Idly",
    title: "Idli and Medu Vada",
    author: "OdetomyLife",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Idli_and_Medu_Vada.JPG",
  },
  dosa: {
    src: dosa,
    alt: "A golden masala dosa on a banana leaf with sambar and coconut chutney",
    usedFor: "Breakfast: Dosa",
    title: "Mangalore Masal Dosa",
    author: "Yakshitha",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Mangalore_Masal_Dosa.jpg",
  },
  benneDosa: {
    src: benneDosa,
    alt: "A crisp benne dosa topped with white butter, served with chutney and sambar",
    usedFor: "Signature: Bangalore Benne Dosa",
    title: "Butter Dosa",
    author: "Srutiagarwal123",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Butter_Dosa.JPG",
  },
  pesarattu: {
    src: pesarattu,
    alt: "Green moong dal pesarattu with ginger chutney",
    usedFor: "Breakfast: Pesarattu",
    title: "More pesarattu and ginger chutney",
    author: "Upendra Kanda",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:More_pesarattu_and_ginger_chutney_(1861384397).jpg",
  },
  pongal: {
    src: pongal,
    alt: "Ven pongal with cashew and curry leaves, served with sambar and coconut chutney",
    usedFor: "Breakfast: Pongal",
    title: "Ven pongal",
    author: "Raksanand",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Ven_pongal.jpg",
  },
  southMeals: {
    src: southMeals,
    alt: "A South Indian meal on a banana leaf with rice, papad, curries and sweets",
    usedFor: "Lunch: South Indian Meals",
    title: "South indian meals 24",
    author: "Swathi sri srinivasa raghavan",
    license: "CC0 (public domain)",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    source: "https://commons.wikimedia.org/wiki/File:South_indian_meals_24.jpg",
  },
  northThali: {
    src: northThali,
    alt: "A North Indian vegetarian thali with puri, roti, dal, curries and sweets",
    usedFor: "Lunch: North Indian Meals",
    title: "Traditional North Indian Thali",
    author: "Shashank shk",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Traditional_North_Indian_Thali.jpg",
  },
  fineDining: {
    src: fineDining,
    alt: "An elegant dining room with round tables laid in white linen",
    usedFor: "Dining: Fine Dining (representative)",
    title: "Restaurant room of Amantaka luxury Resort & Hotel in Luang Prabang Laos",
    author: "Basile Morin",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Restaurant_room_of_Amantaka_luxury_Resort_%26_Hotel_in_Luang_Prabang_Laos.jpg",
  },
  functionHall: {
    src: functionHall,
    alt: "A banquet table laid for guests under a crystal chandelier",
    usedFor: "Function Hall (representative)",
    title: "Banquet Hall Nadiya hotel",
    author: "Nadiaweb83",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Banquet_Hall_Nadiya_hotel.jpg",
  },
  kalamkari: {
    src: kalamkari,
    alt: "Hand-painted Srikalahasti kalamkari cloth with a peacock and lotus flowers",
    usedFor: "Our Story",
    title: "Kalamkari hand painted cloth, Srikalahasti AP",
    author: "rajaraman sundaram",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    source:
      "https://commons.wikimedia.org/wiki/File:KALAMKARI_HAND_PAINTED_CLOTH_SRIKALAHASTI_AP_-_panoramio.jpg",
  },
  chandragiri: {
    src: chandragiri,
    alt: "The Raja Mahal palace at Chandragiri Fort glowing in evening light",
    usedFor: "Chittoor heritage band",
    title: "Chandragiri Fort - Raja Mahal (2)",
    author: "SnapMeUp",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Chandragiri_Fort_-_Raja_Mahal_(2).jpg",
  },
} satisfies Record<string, Photo>;
