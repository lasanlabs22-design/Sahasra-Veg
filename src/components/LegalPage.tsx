import { Thoranam } from "@/components/art";

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
      <div className="bg-parchment pb-14 text-center">
        <Thoranam />
        <p className="font-hand text-xl text-kumkum">the fine print</p>
        <h1 className="font-display mt-2 px-4 text-4xl font-semibold tracking-tight text-teal-ink sm:text-6xl">{title}</h1>
        <p className="mt-4 text-sm text-stone">Last updated: {updated}</p>
      </div>
      <article className="legal mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">{children}</article>
    </>
  );
}
