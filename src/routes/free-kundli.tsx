import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer, PageHero, Breadcrumbs, PageShellStyles, Disclaimer } from "@/components/astrology/site";
import { KundliForm } from "@/components/astrology/forms";
import { siteName } from "@/lib/content";

export const Route = createFileRoute("/free-kundli")({
  head: () => ({
    meta: [
      { title: `Free Kundli & Birth Chart Generator | ${siteName}` },
      { name: "description", content: "Generate a free Vedic Kundli with Lagna chart, planetary positions, houses, dasha overview and Manglik, Kaal Sarp and Pitra dosha notes." },
      { property: "og:title", content: `Free Kundli Generator | ${siteName}` },
      { property: "og:description", content: "Free online Vedic birth chart with planets, houses, dasha and dosha analysis." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FreeKundli,
});

function FreeKundli() {
  return (
    <>
      <PageShellStyles />
      <Header />
      <PageHero eyebrow="Free Tool" title="Free Kundli & Birth Chart">
        Enter accurate birth details to generate your Vedic chart. Your request is saved so our astrologer can review it if you book a consultation.
      </PageHero>
      <Breadcrumbs items={["Free Kundli"]} />
      <section className="section-shell pb-16"><KundliForm /></section>
      <section className="section-shell pb-16"><Disclaimer /></section>
      <Footer />
    </>
  );
}
