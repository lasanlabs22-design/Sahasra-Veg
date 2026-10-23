import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import logoLight from "@/assets/brand/logo-light.png";
import { fullAddress, nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="kolam-dark bg-ink text-cream/75">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Image src={logoLight} alt="Sahasra Pure Veg" className="h-auto w-44" />
          <p className="mt-6 text-sm leading-relaxed">
            A pure vegetarian restaurant in Chittoor, Andhra Pradesh.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sahasra Pure Veg on Instagram"
              className="grid size-10 place-items-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              <FaInstagram aria-hidden />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sahasra Pure Veg on Facebook"
              className="grid size-10 place-items-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              <FaFacebookF aria-hidden />
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sahasra Pure Veg on WhatsApp"
              className="grid size-10 place-items-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              <FaWhatsapp aria-hidden />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-caps text-xs tracking-[0.35em] text-gold">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-caps text-xs tracking-[0.35em] text-gold">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <FiMapPin className="mt-1 shrink-0 text-gold" aria-hidden />
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                {fullAddress}
              </a>
            </li>
            <li className="flex gap-3">
              <FiPhone className="mt-1 shrink-0 text-gold" aria-hidden />
              <a href={site.phoneHref} className="hover:text-gold">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <FiMail className="mt-1 shrink-0 text-gold" aria-hidden />
              <a href={`mailto:${site.email}`} className="break-all hover:text-gold">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-caps text-xs tracking-[0.35em] text-gold">Information</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/privacy-policy" className="hover:text-gold">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-gold">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/photo-credits" className="hover:text-gold">
                Photo Credits
              </Link>
            </li>
          </ul>
          <dl className="mt-6 space-y-1 text-xs text-cream/55">
            <div>
              <dt className="inline">FSSAI Lic. No: </dt>
              <dd className="inline">{site.fssai}</dd>
            </div>
            <div>
              <dt className="inline">GSTIN: </dt>
              <dd className="inline">{site.gstin}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <p className="mx-auto max-w-7xl px-4 py-6 pr-24 text-xs text-cream/50 sm:px-6 lg:px-8">
          © 2026 {site.name}. Operated by {site.company}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
