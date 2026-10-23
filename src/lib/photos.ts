import type { StaticImageData } from "next/image";
import benneDosa from "@/assets/photos/benne-dosa.jpg";
import chandragiri from "@/assets/photos/chandragiri.jpg";
import dosa from "@/assets/photos/dosa.jpg";
import fineDining from "@/assets/photos/fine-dining.jpg";
import functionHall from "@/assets/photos/function-hall.jpg";
import hallDecor from "@/assets/photos/hall-decor.jpg";
import heroDosa from "@/assets/photos/hero-masala-dosa.jpg";
import idli from "@/assets/photos/idli.jpg";
import kalamkari from "@/assets/photos/kalamkari.jpg";
import northThali from "@/assets/photos/north-indian-thali.jpg";
import pesarattu from "@/assets/photos/pesarattu.jpg";
import pongal from "@/assets/photos/pongal.jpg";
import selfService from "@/assets/photos/self-service.jpg";
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

// Stock photos from Pexels and Wikimedia Commons under the licences listed, resized for the web.
// They stand in for the client's own photography. Credits are published on /photo-credits.
export const photos = {
  idli: {
    src: idli,
    alt: "Soft idlis topped with curry leaves on a banana leaf, with sambar and coconut chutney",
    usedFor: "Menu: Idly",
    title: "South Indian idli on banana leaves",
    author: "Nifty Highness",
    license: "Pexels License (free to use)",
    licenseUrl: "https://www.pexels.com/license/",
    source: "https://www.pexels.com/photo/31199041/",
  },
  dosa: {
    src: dosa,
    alt: "A crisp triangular dosa with sambar and three chutneys",
    usedFor: "Menu: Dosa",
    title: "Crispy triangular dosa with chutneys and sambar",
    author: "Jack Baghel",
    license: "Pexels License (free to use)",
    licenseUrl: "https://www.pexels.com/license/",
    source: "https://www.pexels.com/photo/20422133/",
  },
  benneDosa: {
    src: benneDosa,
    alt: "Crisp golden benne dosas topped with butter, with chutneys and potato palya",
    usedFor: "Menu: Bangalore Benne Dosa",
    title: "Crispy dosas with chutneys and spiced potatoes",
    author: "Smitha Nittur",
    license: "Pexels License (free to use)",
    licenseUrl: "https://www.pexels.com/license/",
    source: "https://www.pexels.com/photo/39104603/",
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
    alt: "A full vegetarian meal on a banana leaf with rice, papad, curries, pickles and payasam",
    usedFor: "Menu: South Indian Meals",
    title: "Traditional sadya on a banana leaf",
    author: "Saveurs Secretes",
    license: "Pexels License (free to use)",
    licenseUrl: "https://www.pexels.com/license/",
    source: "https://www.pexels.com/photo/5410418/",
  },
  northThali: {
    src: northThali,
    alt: "A vegetarian thali with chapati, rice, dal, bhindi and curd",
    usedFor: "Menu: North Indian Meals",
    title: "Indian vegetarian thali",
    author: "Rajani33",
    license: "Pexels License (free to use)",
    licenseUrl: "https://www.pexels.com/license/",
    source: "https://www.pexels.com/photo/35008222/",
  },
  fineDining: {
    src: fineDining,
    alt: "A calm restaurant interior with arched alcoves, brass pendant lamps and wooden chairs",
    usedFor: "Dining: Fine Dining (representative)",
    title: "Restaurant interior in Bengaluru",
    author: "Prajwal",
    license: "Pexels License (free to use)",
    licenseUrl: "https://www.pexels.com/license/",
    source: "https://www.pexels.com/photo/24499488/",
  },
  functionHall: {
    src: functionHall,
    alt: "An Indian banquet hall with a carved ceiling, chandeliers and rows of dressed chairs",
    usedFor: "Function Hall (representative)",
    title: "Elegant hotel banquet hall",
    author: "Lalit Jakhar",
    license: "Pexels License (free to use)",
    licenseUrl: "https://www.pexels.com/license/",
    source: "https://www.pexels.com/photo/40143061/",
  },
  heroDosa: {
    src: heroDosa,
    alt: "A crisp masala dosa folded over potato masala, with coconut chutney and sambar on a banana leaf",
    usedFor: "Home page hero",
    title: "Masala dosa with coconut chutney and sambar",
    author: "Saveurs Secretes",
    license: "Pexels License (free to use)",
    licenseUrl: "https://www.pexels.com/license/",
    source: "https://www.pexels.com/photo/12392915/",
  },
  hallDecor: {
    src: hallDecor,
    alt: "A marigold and banana leaf backdrop for a South Indian celebration",
    usedFor: "Function Hall decor (representative)",
    title: "Marigold and banana leaf decoration",
    author: "BANU FILM ADS",
    license: "Pexels License (free to use)",
    licenseUrl: "https://www.pexels.com/license/",
    source: "https://www.pexels.com/photo/12718058/",
  },
  selfService: {
    src: selfService,
    alt: "Idli, vada, sambar and chutney served on a steel tray with filter coffee",
    usedFor: "Dining: Self Service (representative)",
    title: "South Indian breakfast tray",
    author: "Preyansh patel",
    license: "Pexels License (free to use)",
    licenseUrl: "https://www.pexels.com/license/",
    source: "https://www.pexels.com/photo/37867687/",
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
