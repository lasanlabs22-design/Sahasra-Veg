import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import logo from "@/assets/brand/logo.png";
import { Skyline, VegMark } from "@/components/art";
import { fullAddress, nav, site } from "@/lib/site";

const social = [
  { href: site.instagram, label: "Instagram", Icon: FaInstagram },
  { href: site.facebook, label: "Facebook", Icon: FaFacebookF },
  { href: site.whatsappHref, label: "WhatsApp", Icon: FaWhatsapp },
];

export default function Footer() {
  return (
    <footer className="relative bg-parchment">
      <Skyline className="block h-28 w-full text-teal-ink sm:h-40" />
      <div className="bg-teal-ink text-paper/75">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-14 pt-6 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.3fr_1fr] lg:px-8">
          <div>
            <div className="inline-block rounded-2xl bg-paper px-6 py-5">
              <Image src={logo} alt="Sahasra Pure Veg" className="h-auto w-40" />
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm">
              <VegMark /> Made with love, ghee and a little extra butter, in Chittoor.
            </p>
            <div className="mt-6 flex gap-3">
              {social.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Sahasra Pure Veg on ${label}`}
                  className="grid size-11 place-items-center rounded-full bg-paper/10 text-paper transition-colors hover:bg-turmeric hover:text-teal-ink"
                >
                  <Icon aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-hand text-xl text-turmeric">explore</h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-turmeric">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-hand text-xl text-turmeric">say hello</h2>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <FiMapPin className="mt-1 shrink-0 text-turmeric" aria-hidden />
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-turmeric">
                  {fullAddress}
                </a>
              </li>
              <li className="flex gap-3">
                <FiPhone className="mt-1 shrink-0 text-turmeric" aria-hidden />
                <a href={site.phoneHref} className="hover:text-turmeric">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <FiMail className="mt-1 shrink-0 text-turmeric" aria-hidden />
                <a href={`mailto:${site.email}`} className="break-all hover:text-turmeric">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-hand text-xl text-turmeric">the fine print</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/privacy-policy" className="hover:text-turmeric">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-turmeric">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/photo-credits" className="hover:text-turmeric">
                  Photo Credits
                </Link>
              </li>
            </ul>
            <dl className="mt-6 space-y-1 text-xs text-paper/55">
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

        <div className="border-t border-paper/10">
          <p className="mx-auto max-w-7xl px-4 py-6 pr-24 text-xs text-paper/50 sm:px-6 lg:px-8">
            © 2026 {site.name}. Operated by {site.company}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
