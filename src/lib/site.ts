// Single source of truth for client details. Keep in sync with CLAUDE.md.
export const site = {
  name: "Sahasra Pure Veg",
  company: "ONEEAST FOODS",
  url: "https://sahasraveg.com",
  description:
    "Sahasra Pure Veg, Chittoor. A pure vegetarian restaurant serving South Indian breakfast, dosas all day, the signature Bangalore Benne Dosa, and South and North Indian meals. Self service, fine dining, a 75-seat AC function hall and catering.",
  phoneDisplay: "+91 94411 66722",
  phoneHref: "tel:+919441166722",
  whatsappHref:
    "https://wa.me/919441166722?text=" +
    encodeURIComponent("Hello Sahasra Pure Veg, I would like to enquire about "),
  email: "sahasraveg@gmail.com",
  address: {
    street: "Sy. No. 186-1 & 186-2, Near Commercial Tax Office, Kattamanchi, Tirupati Road",
    city: "Chittoor",
    state: "Andhra Pradesh",
    pin: "517001",
  },
  geo: { lat: 13.225468, lng: 79.107003 },
  mapsUrl: "https://maps.app.goo.gl/4JcqCk7UgbVTWZuY9",
  mapsEmbed: "https://www.google.com/maps?q=13.225468,79.107003&z=16&output=embed",
  instagram: "https://www.instagram.com/sahasraveg/",
  facebook: "https://www.facebook.com/profile.php?id=61594774348811",
  gstin: "37AAKFO0446Q1ZO",
  fssai: "10126010000089",
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.pin}`;

export const nav = [
  { href: "/#menu", label: "Menu" },
  { href: "/#story", label: "Our Story" },
  { href: "/#dining", label: "Dining" },
  { href: "/#hall", label: "Function Hall" },
  { href: "/#catering", label: "Catering" },
  { href: "/#visit", label: "Visit" },
] as const;
