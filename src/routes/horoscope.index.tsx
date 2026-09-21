import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, Footer, PageHero, Breadcrumbs, SectionHeading, PageShellStyles } from "@/components/astrology/site";
import { rashis, siteName } from "@/lib/content";

export const Route = createFileRoute("/horoscope/")({
  head: () => ({
    meta: [
      { title: `Free Daily, Weekly, Monthly & Yearly Horoscope | ${siteName}` },
      { name: "description", content: "Read free horoscopes for all 12 Rashis in English and Hindi, covering career, finance, love, health and general guidance." },
      { property: "og:title", content: `Horoscope | ${siteName}` },
      { property: "og:description", content: "Daily, weekly, monthly and yearly Rashi predictions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HoroscopeHub,
});

function HoroscopeHub() {
  return (
    <>
      <PageShellStyles />
      <Header />
      <PageHero eyebrow="Horoscope" title="Free Rashi Horoscope">
        Choose your Moon sign for daily, weekly, monthly and yearly guidance across career, finance, love and health.
      </PageHero>
      <Breadcrumbs items={["Horoscope"]} />
      <section className="section-shell pb-16">
        <SectionHeading eyebrow="Select your Rashi" title="All twelve signs" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {rashis.map(([en, hi, sym]) => (
            <Link key={en} to="/horoscope/$rashi" params={{ rashi: en.toLowerCase() }} className="rounded-md border border-border bg-card p-5 text-center transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md">
              <span className="block text-4xl text-saffron">{sym}</span>
              <strong className="mt-2 block font-display text-2xl text-maroon">{en}</strong>
              <span className="text-sm text-muted-foreground">{hi}</span>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
