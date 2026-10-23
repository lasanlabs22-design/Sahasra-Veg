import { Divider } from "@/components/ui";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="kolam-dark bg-ink px-4 pb-16 pt-36 text-center">
        <h1 className="font-display text-4xl font-medium text-cream sm:text-6xl">{title}</h1>
        <Divider light className="mt-6" />
        <p className="mt-6 text-sm text-cream/60">Last updated: {updated}</p>
      </div>
      <article className="legal mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">{children}</article>
    </>
  );
}
