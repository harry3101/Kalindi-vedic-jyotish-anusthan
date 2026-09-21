import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer, PageHero, Breadcrumbs, PageShellStyles, Disclaimer } from "@/components/astrology/site";
import { MatchingForm } from "@/components/astrology/forms";
import { siteName } from "@/lib/content";

export const Route = createFileRoute("/kundli-matching")({
  head: () => ({
    meta: [
      { title: `Kundli Matching & Ashtakoot Guna Milan | ${siteName}` },
      { name: "description", content: "Free horoscope matching with Ashtakoot Guna Milan score, category breakdown and dosha notes for marriage compatibility." },
      { property: "og:title", content: `Kundli Milan | ${siteName}` },
      { property: "og:description", content: "Ashtakoot Guna Milan score with detailed breakdown and dosha guidance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Matching,
});

function Matching() {
  return (
    <>
      <PageShellStyles />
      <Header />
      <PageHero eyebrow="Kundli Milan" title="Horoscope Matching for Marriage">
        Ashtakoot Guna Milan with a clear breakdown. A full compatibility reading also reviews Manglik status, Dasha and both Navamsa charts.
      </PageHero>
      <Breadcrumbs items={["Kundli Matching"]} />
      <section className="section-shell pb-16"><MatchingForm /></section>
      <section className="section-shell pb-16"><Disclaimer /></section>
      <Footer />
    </>
  );
}
