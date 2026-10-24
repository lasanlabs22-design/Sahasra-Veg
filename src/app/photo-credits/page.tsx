import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Photo Credits",
  description: "Credits and licences for the photographs used on the Sahasra Pure Veg website.",
  alternates: { canonical: "/photo-credits" },
};

export default function PhotoCredits() {
  return (
    <LegalPage title="Photo Credits" updated="23 October 2026">
      <p>
        The photographs on this website come from Pexels and Wikimedia Commons and are used under the free
        licences listed below. They have been resized for the web. They are for representation only and do not
        show our own dishes or premises.
      </p>
      <ul>
        {Object.values(photos).map((p) => (
          <li key={p.source}>
            <strong>{p.usedFor}:</strong> &quot;<a href={p.source} target="_blank" rel="noopener noreferrer">{p.title}</a>&quot; by{" "}
            {p.author}, licensed under{" "}
            <a href={p.licenseUrl} target="_blank" rel="noopener noreferrer">
              {p.license}
            </a>
            .
          </li>
        ))}
      </ul>
    </LegalPage>
  );
}
