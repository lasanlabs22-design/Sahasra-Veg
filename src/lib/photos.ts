import type { StaticImageData } from "next/image";
import bajji from "@/assets/photos/bajji.jpg";
import benneDosa from "@/assets/photos/benne-dosa.jpg";
import chaat from "@/assets/photos/chaat.jpg";
import chandragiri from "@/assets/photos/chandragiri.jpg";
import coffee from "@/assets/photos/coffee.jpg";
import dosa from "@/assets/photos/dosa.jpg";
import fineDining from "@/assets/photos/fine-dining.jpg";
import functionHall from "@/assets/photos/function-hall.jpg";
import hallDecor from "@/assets/photos/hall-decor.jpg";
import heroDosa from "@/assets/photos/hero-masala-dosa.jpg";
import iceCream from "@/assets/photos/ice-cream.jpg";
import idli from "@/assets/photos/idli.jpg";
import kalamkari from "@/assets/photos/kalamkari.jpg";
import northThali from "@/assets/photos/north-indian-thali.jpg";
import pesarattu from "@/assets/photos/pesarattu.jpg";
import pongal from "@/assets/photos/pongal.jpg";
import punugulu from "@/assets/photos/punugulu.jpg";
import savouries from "@/assets/photos/savouries.jpg";
import selfService from "@/assets/photos/self-service.jpg";
import southMeals from "@/assets/photos/south-indian-meals.jpg";
import sweets from "@/assets/photos/sweets.jpg";
import tea from "@/assets/photos/tea.jpg";

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
  chaat: {
    src: chaat,
    alt: "Crisp pani puri filled with potato, around a bowl of tangy pani",
    usedFor: "Menu: Chaats",
    title: "Crispy Pani Puri",
    author: "Teena Sometimes",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Crispy_Pani_Puri.jpg",
  },
  punugulu: {
    src: punugulu,
    alt: "A steel plate piled high with golden punugulu",
    usedFor: "Menu: Punugulu",
    title: "Punugulu1",
    author: "Balajijagadesh",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Punugulu1.JPG",
  },
  bajji: {
    src: bajji,
    alt: "A bowl of golden mirchi bajji",
    usedFor: "Menu: Bajji",
    title: "Andhra famous mirchi bajji",
    author: "Bhaskaranaidu",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Andhra_famous_mirchi_bajji.JPG",
  },
  tea: {
    src: tea,
    alt: "A cup of milky tea on a saucer with biscuits, cardamom, cloves and ginger",
    usedFor: "Menu: Tea",
    title: "Masala Chai",
    author: "Miansari66",
    license: "Public domain",
    licenseUrl: "https://creativecommons.org/publicdomain/mark/1.0/",
    source: "https://commons.wikimedia.org/wiki/File:Masala_Chai.JPG",
  },
  coffee: {
    src: coffee,
    alt: "Frothy South Indian filter coffee in a brass tumbler and davara",
    usedFor: "Menu: Coffee",
    title: "Filter-Coffee",
    author: "Triv.rao",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Filter-Coffee.jpg",
  },
  sweets: {
    src: sweets,
    alt: "A plate of assorted Indian sweets",
    usedFor: "Menu: Sweets",
    title: "(A) plate full of Indian sweets mithai desserts",
    author: "DDohler",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    source: "https://commons.wikimedia.org/wiki/File:(A)_plate_full_of_Indian_sweets_mithai_desserts.jpg",
  },
  savouries: {
    src: savouries,
    alt: "A bowl of crunchy spiral chakli",
    usedFor: "Menu: Savouries",
    title: "Chakli in a bowl",
    author: "PilotChicago",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Chakli_in_a_bowl.jpg",
  },
  iceCream: {
    src: iceCream,
    alt: "A scoop of tutti frutti ice cream in a cone",
    usedFor: "Menu: Ice Creams (cropped)",
    title: "Tutti fruitti cone ice cream",
    author: "Nikitha Jotheswari",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Tutti_fruitti_cone_ice_cream.jpg",
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
