import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans, Kalam } from "next/font/google";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

// Kalam is a handwriting face from the Indian Type Foundry.
const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sahasra Pure Veg | Pure Vegetarian Restaurant in Chittoor",
    template: "%s | Sahasra Pure Veg",
  },
  description: site.description,
  keywords: [
    "Sahasra Pure Veg",
    "pure veg restaurant Chittoor",
    "vegetarian restaurant Chittoor",
    "Bangalore benne dosa Chittoor",
    "South Indian meals Chittoor",
    "function hall Chittoor",
    "catering Chittoor",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Sahasra Pure Veg, Chittoor",
    description: site.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#fbf4e6",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  url: site.url,
  telephone: "+919441166722",
  email: site.email,
  servesCuisine: ["South Indian", "North Indian", "Vegetarian"],
  acceptsReservations: true,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.pin,
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  hasMap: site.mapsUrl,
  sameAs: [site.instagram, site.facebook],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrument.variable} ${kalam.variable} antialiased`}
    >
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
