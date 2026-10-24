import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms for dining, function hall bookings, catering and use of the Sahasra Pure Veg website.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function Terms() {
  return (
    <LegalPage title="Terms and Conditions" updated="23 October 2026">
      <p>
        These Terms and Conditions apply to your visit to {site.name}, your use of our function hall and
        catering services, and your use of this website. {site.name} is operated by {site.company} (GSTIN{" "}
        {site.gstin}, FSSAI Licence No. {site.fssai}). By dining with us, booking with us or using this
        website, you agree to these terms.
      </p>

      <h2>1. A pure vegetarian kitchen</h2>
      <p>
        We serve only vegetarian food. We do not serve meat, poultry, seafood or eggs.
      </p>

      <h2>2. Menu, prices and availability</h2>
      <ul>
        <li>Menu items, prices and timings may change without notice.</li>
        <li>Dishes are subject to availability on the day.</li>
        <li>Prices are subject to applicable taxes, including GST, as per law.</li>
        <li>
          Photographs on this website are for representation only. Actual dishes, portions, presentation and
          interiors may differ.
        </li>
      </ul>

      <h2>3. Customisations, allergies and dietary needs</h2>
      <ul>
        <li>
          We try to accommodate requests to change a dish, such as spice level or leaving out an ingredient,
          wherever practical.
        </li>
        <li>
          Any customisation requested by a guest, whether to a dish, a catering menu or a function hall
          arrangement, is prepared and provided at the guest&apos;s own risk.
        </li>
        <li>
          Our kitchen handles milk, ghee, butter, nuts, wheat, sesame and other common allergens. While we take
          care, we cannot guarantee that any dish is free from allergens or traces of them. Please tell our
          staff about any allergy or dietary requirement before ordering.
        </li>
      </ul>

      <h2>4. Dining at the restaurant</h2>
      <ul>
        <li>We offer both self service and fine dining. Seating is subject to availability.</li>
        <li>
          Please treat our staff, other guests and the premises with respect. We may refuse service to anyone
          who behaves in an unsafe or disorderly way.
        </li>
        <li>Guests are responsible for their personal belongings while on the premises.</li>
      </ul>

      <h2>5. Function hall bookings</h2>
      <ul>
        <li>The air-conditioned function hall seats up to 75 guests. This limit must not be exceeded.</li>
        <li>
          A booking is confirmed only when we confirm it to you directly. Advance payment, timings,
          cancellation terms and menu details will be shared with you at the time of booking.
        </li>
        <li>
          Decor, setup and menu customisations are arranged on request and at the host&apos;s own risk.
          Decorations must not damage the property, and the host is responsible for any damage caused by the
          host, their guests or their vendors.
        </li>
        <li>The hall must be vacated at the agreed time.</li>
      </ul>

      <h2>6. Catering</h2>
      <ul>
        <li>
          Catering orders are taken by phone or WhatsApp. Menu, quantities, price, delivery and payment terms
          are agreed with you before the event.
        </li>
        <li>Changes to a confirmed order depend on availability and may change the price.</li>
        <li>
          Customised catering menus are prepared at the customer&apos;s own risk. Once food is delivered,
          its storage, handling and serving time are the customer&apos;s responsibility. We recommend that
          cooked food is consumed promptly.
        </li>
      </ul>

      <h2>7. Use of this website</h2>
      <ul>
        <li>
          This website is for general information. We try to keep it accurate, but we do not guarantee that
          all information is complete or current.
        </li>
        <li>
          The Sahasra name, logo and original website content belong to {site.company}. You may not copy or
          reuse them without our written permission. Third-party photographs are used under their own
          licences, listed on our <Link href="/photo-credits">Photo Credits</Link> page.
        </li>
        <li>
          Links to Google Maps, WhatsApp, Instagram and Facebook take you to services we do not control. Their
          own terms and privacy policies apply.
        </li>
      </ul>

      <h2>8. Limitation of liability</h2>
      <p>
        To the extent permitted by law, {site.company} is not liable for any indirect or consequential loss
        arising from your use of this website or our services. Our total liability for any claim relating to
        a service is limited to the amount you paid for that service.
      </p>

      <h2>9. Governing law</h2>
      <p>
        These terms are governed by the laws of India. Any dispute is subject to the exclusive jurisdiction of
        the courts at Chittoor, Andhra Pradesh.
      </p>

      <h2>10. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The latest version will always be on this page, with the
        date it was last updated.
      </p>

      <h2>11. Contact us</h2>
      <p>
        {site.name} ({site.company})
        <br />
        {fullAddress}
        <br />
        Phone: <a href={site.phoneHref}>{site.phoneDisplay}</a>
        <br />
        Email: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </LegalPage>
  );
}
