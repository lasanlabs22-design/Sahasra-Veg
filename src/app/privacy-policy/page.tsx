import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Sahasra Pure Veg collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="23 October 2026">
      <p>
        This Privacy Policy explains how {site.name}, operated by {site.company} (&quot;we&quot;,
        &quot;us&quot;, &quot;our&quot;), handles personal information when you visit {site.url.replace("https://", "")}{" "}
        or contact us. We respect your privacy and handle your information in line with the Digital Personal
        Data Protection Act, 2023 and other applicable Indian law.
      </p>

      <h2>1. Information we collect</h2>
      <p>
        This website does not have accounts, online ordering or contact forms, and we do not use analytics or
        advertising cookies. We only receive personal information when you choose to contact us, for example
        by phone, WhatsApp, email, Instagram or Facebook. This may include:
      </p>
      <ul>
        <li>your name, phone number and email address;</li>
        <li>the content of your messages;</li>
        <li>
          booking details for dining, the function hall or catering, such as dates, guest numbers, menu
          choices and dietary requirements.
        </li>
      </ul>

      <h2>2. How we use your information</h2>
      <ul>
        <li>to reply to your enquiries;</li>
        <li>to arrange and confirm table, function hall and catering bookings;</li>
        <li>to prepare food that meets the dietary or allergy information you share with us;</li>
        <li>to issue bills and keep the records we are required to keep under tax and other laws.</li>
      </ul>
      <p>We do not sell or rent your personal information, and we do not send marketing messages without your consent.</p>

      <h2>3. Sharing your information</h2>
      <p>
        We share personal information only when it is needed to serve you or required by law. This includes
        the communication services you choose to reach us through (such as WhatsApp, Instagram, Facebook or
        email providers) and government or law enforcement authorities when the law requires it.
      </p>

      <h2>4. Third-party services on this website</h2>
      <p>
        Our &quot;Visit&quot; section shows an embedded Google Map, and we link to WhatsApp, Instagram and
        Facebook. When you load the map or follow these links, those companies may collect information about
        you, including through cookies, under their own privacy policies. We do not control that
        processing. Please review the privacy policies of Google and Meta for details.
      </p>

      <h2>5. How long we keep information</h2>
      <p>
        We keep personal information only for as long as we need it for the purposes above, or for as long as
        the law requires (for example, for tax and accounting records). After that, we delete it or make it
        anonymous.
      </p>

      <h2>6. Security</h2>
      <p>
        We take reasonable steps to protect the information you share with us. No method of transmission or
        storage is completely secure, so we cannot guarantee absolute security.
      </p>

      <h2>7. Your rights</h2>
      <p>Subject to applicable law, you may ask us to:</p>
      <ul>
        <li>tell you what personal information we hold about you;</li>
        <li>correct or update inaccurate information;</li>
        <li>erase information we no longer need;</li>
        <li>withdraw consent you have given us.</li>
      </ul>
      <p>
        To make a request or raise a grievance, contact us using the details below. We will respond within a
        reasonable time.
      </p>

      <h2>8. Children</h2>
      <p>
        This website is meant for a general audience. We do not knowingly collect personal information from
        children without the consent of a parent or guardian.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The latest version will always be on this page, with the
        date it was last updated.
      </p>

      <h2>10. Contact and grievances</h2>
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
